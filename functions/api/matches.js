// Cloudflare Pages Function: GET /api/matches
// Fetches World Cup fixtures from football-data.org (key stays server-side),
// normalizes them, and merges in YOUR broadcaster data from data/broadcasters.json.
//
// Falls back to bundled sample fixtures when no API key is set or the API fails,
// so the site always renders something.

import broadcasters from '../../data/broadcasters.json';
import sampleMatches from '../../data/sample-matches.json';

// Map football-data.org status -> simple status used by the frontend.
function mapStatus(s) {
  switch (s) {
    case 'IN_PLAY':
    case 'PAUSED':
      return 'live';
    case 'FINISHED':
    case 'AWARDED':
      return 'finished';
    case 'POSTPONED':
    case 'SUSPENDED':
    case 'CANCELLED':
      return 'off';
    default:
      return 'scheduled'; // SCHEDULED, TIMED
  }
}

// Convert a raw football-data.org match into our clean shape.
function normalize(m) {
  return {
    id: m.id,
    utcDate: m.utcDate,
    status: mapStatus(m.status),
    stage: m.stage || null,
    group: m.group || null,
    matchday: m.matchday || null,
    venue: m.venue || null,
    home: {
      name: m.homeTeam?.name || 'TBD',
      code: m.homeTeam?.tla || null,
      crest: m.homeTeam?.crest || null,
    },
    away: {
      name: m.awayTeam?.name || 'TBD',
      code: m.awayTeam?.tla || null,
      crest: m.awayTeam?.crest || null,
    },
    score: {
      home: m.score?.fullTime?.home ?? null,
      away: m.score?.fullTime?.away ?? null,
    },
  };
}

async function fetchFixtures(env) {
  const API_KEY = env.FOOTBALL_DATA_API_KEY;
  const COMPETITION = env.COMPETITION_CODE || 'WC';
  const API_URL = `https://api.football-data.org/v4/competitions/${COMPETITION}/matches`;

  if (!API_KEY) {
    return { matches: sampleMatches, source: 'sample-no-key' };
  }
  try {
    const res = await fetch(API_URL, { headers: { 'X-Auth-Token': API_KEY } });
    if (!res.ok) {
      return { matches: sampleMatches, source: `sample-api-${res.status}` };
    }
    const data = await res.json();
    const matches = (data.matches || []).map(normalize);
    if (matches.length === 0) {
      return { matches: sampleMatches, source: 'sample-empty' };
    }
    return { matches, source: 'live' };
  } catch (err) {
    return { matches: sampleMatches, source: 'sample-error' };
  }
}

export async function onRequestGet(context) {
  const { env } = context;
  const { matches, source } = await fetchFixtures(env);

  const body = JSON.stringify({
    updatedAt: new Date().toISOString(),
    source, // "live" or a "sample-*" reason — useful for debugging
    competition: env.COMPETITION_CODE || 'WC',
    countries: broadcasters.countries,
    defaultCountry: broadcasters.defaultCountry || 'US',
    matches,
  });

  return new Response(body, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
    },
  });
}
