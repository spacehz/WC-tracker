var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// .wrangler/tmp/pages-ZdFUUO/functionsWorker-0.7080800530311059.mjs
var __defProp2 = Object.defineProperty;
var __name2 = /* @__PURE__ */ __name((target, value) => __defProp2(target, "name", { value, configurable: true }), "__name");
var broadcasters_default = {
  _README: "THIS FILE IS YOURS TO EDIT. Add/remove countries and broadcasters. 'name' = English name, 'nameAr' = Arabic name (shown when site is in Arabic). 'flag' = emoji, 'type' = 'tv' or 'stream', 'free' true = free-to-air / free streaming. After editing, redeploy (git push). Verify rights for your audience \u2014 these are seeded defaults for the 2026 World Cup.",
  defaultCountry: "TN",
  countries: {
    TN: {
      name: "Tunisia",
      nameAr: "\u062A\u0648\u0646\u0633",
      flag: "\u{1F1F9}\u{1F1F3}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    SA: {
      name: "Saudi Arabia",
      nameAr: "\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629",
      flag: "\u{1F1F8}\u{1F1E6}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    EG: {
      name: "Egypt",
      nameAr: "\u0645\u0635\u0631",
      flag: "\u{1F1EA}\u{1F1EC}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    DZ: {
      name: "Algeria",
      nameAr: "\u0627\u0644\u062C\u0632\u0627\u0626\u0631",
      flag: "\u{1F1E9}\u{1F1FF}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    MA: {
      name: "Morocco",
      nameAr: "\u0627\u0644\u0645\u063A\u0631\u0628",
      flag: "\u{1F1F2}\u{1F1E6}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    AE: {
      name: "United Arab Emirates",
      nameAr: "\u0627\u0644\u0625\u0645\u0627\u0631\u0627\u062A",
      flag: "\u{1F1E6}\u{1F1EA}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    QA: {
      name: "Qatar",
      nameAr: "\u0642\u0637\u0631",
      flag: "\u{1F1F6}\u{1F1E6}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    IQ: {
      name: "Iraq",
      nameAr: "\u0627\u0644\u0639\u0631\u0627\u0642",
      flag: "\u{1F1EE}\u{1F1F6}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    JO: {
      name: "Jordan",
      nameAr: "\u0627\u0644\u0623\u0631\u062F\u0646",
      flag: "\u{1F1EF}\u{1F1F4}",
      broadcasters: [
        { name: "beIN Sports MENA", type: "tv", language: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629", free: false, url: "https://www.beinsports.com/" }
      ]
    },
    US: {
      name: "United States",
      nameAr: "\u0627\u0644\u0648\u0644\u0627\u064A\u0627\u062A \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
      flag: "\u{1F1FA}\u{1F1F8}",
      broadcasters: [
        { name: "FOX / FS1", type: "tv", language: "English", free: false, url: "https://www.foxsports.com/soccer/fifa-world-cup" },
        { name: "Telemundo / Universo", type: "tv", language: "Espa\xF1ol", free: false, url: "https://www.telemundodeportes.com/" },
        { name: "Tubi", type: "stream", language: "English", free: true, url: "https://tubitv.com/" }
      ]
    },
    GB: {
      name: "United Kingdom",
      nameAr: "\u0627\u0644\u0645\u0645\u0644\u0643\u0629 \u0627\u0644\u0645\u062A\u062D\u062F\u0629",
      flag: "\u{1F1EC}\u{1F1E7}",
      broadcasters: [
        { name: "BBC iPlayer", type: "stream", language: "English", free: true, url: "https://www.bbc.co.uk/iplayer" },
        { name: "ITVX", type: "stream", language: "English", free: true, url: "https://www.itv.com/watch" }
      ]
    },
    CA: {
      name: "Canada",
      nameAr: "\u0643\u0646\u062F\u0627",
      flag: "\u{1F1E8}\u{1F1E6}",
      broadcasters: [
        { name: "TSN", type: "tv", language: "English", free: false, url: "https://www.tsn.ca/" },
        { name: "CTV", type: "tv", language: "English", free: true, url: "https://www.ctv.ca/" }
      ]
    },
    MX: {
      name: "Mexico",
      nameAr: "\u0627\u0644\u0645\u0643\u0633\u064A\u0643",
      flag: "\u{1F1F2}\u{1F1FD}",
      broadcasters: [
        { name: "Canal 5 / TUDN", type: "tv", language: "Espa\xF1ol", free: true, url: "https://www.tudn.com/" },
        { name: "TV Azteca", type: "tv", language: "Espa\xF1ol", free: true, url: "https://www.tvazteca.com/" }
      ]
    },
    FR: {
      name: "France",
      nameAr: "\u0641\u0631\u0646\u0633\u0627",
      flag: "\u{1F1EB}\u{1F1F7}",
      broadcasters: [
        { name: "TF1", type: "tv", language: "Fran\xE7ais", free: true, url: "https://www.tf1.fr/" },
        { name: "beIN Sports", type: "tv", language: "Fran\xE7ais", free: false, url: "https://www.beinsports.com/fr/" }
      ]
    },
    DE: {
      name: "Germany",
      nameAr: "\u0623\u0644\u0645\u0627\u0646\u064A\u0627",
      flag: "\u{1F1E9}\u{1F1EA}",
      broadcasters: [
        { name: "ARD", type: "tv", language: "Deutsch", free: true, url: "https://www.sportschau.de/" },
        { name: "ZDF", type: "tv", language: "Deutsch", free: true, url: "https://www.zdf.de/" }
      ]
    },
    ES: {
      name: "Spain",
      nameAr: "\u0625\u0633\u0628\u0627\u0646\u064A\u0627",
      flag: "\u{1F1EA}\u{1F1F8}",
      broadcasters: [
        { name: "RTVE (La 1)", type: "tv", language: "Espa\xF1ol", free: true, url: "https://www.rtve.es/" }
      ]
    },
    IT: {
      name: "Italy",
      nameAr: "\u0625\u064A\u0637\u0627\u0644\u064A\u0627",
      flag: "\u{1F1EE}\u{1F1F9}",
      broadcasters: [
        { name: "RAI", type: "tv", language: "Italiano", free: true, url: "https://www.rai.it/" }
      ]
    },
    BR: {
      name: "Brazil",
      nameAr: "\u0627\u0644\u0628\u0631\u0627\u0632\u064A\u0644",
      flag: "\u{1F1E7}\u{1F1F7}",
      broadcasters: [
        { name: "Globo / SporTV", type: "tv", language: "Portugu\xEAs", free: true, url: "https://globoplay.globo.com/" }
      ]
    },
    AR: {
      name: "Argentina",
      nameAr: "\u0627\u0644\u0623\u0631\u062C\u0646\u062A\u064A\u0646",
      flag: "\u{1F1E6}\u{1F1F7}",
      broadcasters: [
        { name: "TV P\xFAblica", type: "tv", language: "Espa\xF1ol", free: true, url: "https://www.tvpublica.com.ar/" },
        { name: "TyC Sports", type: "tv", language: "Espa\xF1ol", free: false, url: "https://www.tycsports.com/" }
      ]
    },
    AU: {
      name: "Australia",
      nameAr: "\u0623\u0633\u062A\u0631\u0627\u0644\u064A\u0627",
      flag: "\u{1F1E6}\u{1F1FA}",
      broadcasters: [
        { name: "Optus Sport", type: "stream", language: "English", free: false, url: "https://sport.optus.com.au/" },
        { name: "SBS", type: "tv", language: "English", free: true, url: "https://www.sbs.com.au/sport/" }
      ]
    }
  }
};
var sample_matches_default = [
  {
    id: 9001,
    utcDate: "2026-06-12T16:00:00Z",
    status: "finished",
    stage: "GROUP_STAGE",
    group: "Group A",
    venue: "Estadio Azteca, Mexico City",
    home: { name: "Mexico", code: "MEX", crest: null },
    away: { name: "Croatia", code: "CRO", crest: null },
    score: { home: 2, away: 1 }
  },
  {
    id: 9002,
    utcDate: "2026-06-12T20:00:00Z",
    status: "live",
    stage: "GROUP_STAGE",
    group: "Group B",
    venue: "MetLife Stadium, New York",
    home: { name: "United States", code: "USA", crest: null },
    away: { name: "Wales", code: "WAL", crest: null },
    score: { home: 1, away: 0 }
  },
  {
    id: 9003,
    utcDate: "2026-06-13T19:00:00Z",
    status: "scheduled",
    stage: "GROUP_STAGE",
    group: "Group C",
    venue: "SoFi Stadium, Los Angeles",
    home: { name: "Argentina", code: "ARG", crest: null },
    away: { name: "Nigeria", code: "NGA", crest: null },
    score: { home: null, away: null }
  },
  {
    id: 9004,
    utcDate: "2026-06-13T22:00:00Z",
    status: "scheduled",
    stage: "GROUP_STAGE",
    group: "Group D",
    venue: "BMO Field, Toronto",
    home: { name: "France", code: "FRA", crest: null },
    away: { name: "Australia", code: "AUS", crest: null },
    score: { home: null, away: null }
  },
  {
    id: 9005,
    utcDate: "2026-06-14T18:00:00Z",
    status: "scheduled",
    stage: "GROUP_STAGE",
    group: "Group E",
    venue: "Lumen Field, Seattle",
    home: { name: "Brazil", code: "BRA", crest: null },
    away: { name: "Japan", code: "JPN", crest: null },
    score: { home: null, away: null }
  },
  {
    id: 9006,
    utcDate: "2026-06-14T21:00:00Z",
    status: "scheduled",
    stage: "GROUP_STAGE",
    group: "Group F",
    venue: "AT&T Stadium, Dallas",
    home: { name: "England", code: "ENG", crest: null },
    away: { name: "Tunisia", code: "TUN", crest: null },
    score: { home: null, away: null }
  }
];
function mapStatus(s) {
  switch (s) {
    case "IN_PLAY":
    case "PAUSED":
      return "live";
    case "FINISHED":
    case "AWARDED":
      return "finished";
    case "POSTPONED":
    case "SUSPENDED":
    case "CANCELLED":
      return "off";
    default:
      return "scheduled";
  }
}
__name(mapStatus, "mapStatus");
__name2(mapStatus, "mapStatus");
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
      name: m.homeTeam?.name || "TBD",
      code: m.homeTeam?.tla || null,
      crest: m.homeTeam?.crest || null
    },
    away: {
      name: m.awayTeam?.name || "TBD",
      code: m.awayTeam?.tla || null,
      crest: m.awayTeam?.crest || null
    },
    score: {
      home: m.score?.fullTime?.home ?? null,
      away: m.score?.fullTime?.away ?? null
    }
  };
}
__name(normalize, "normalize");
__name2(normalize, "normalize");
async function fetchFixtures(env) {
  const API_KEY = env.FOOTBALL_DATA_API_KEY;
  const COMPETITION = env.COMPETITION_CODE || "WC";
  const API_URL = `https://api.football-data.org/v4/competitions/${COMPETITION}/matches`;
  if (!API_KEY) {
    return { matches: sample_matches_default, source: "sample-no-key" };
  }
  try {
    const res = await fetch(API_URL, { headers: { "X-Auth-Token": API_KEY } });
    if (!res.ok) {
      return { matches: sample_matches_default, source: `sample-api-${res.status}` };
    }
    const data = await res.json();
    const matches = (data.matches || []).map(normalize);
    if (matches.length === 0) {
      return { matches: sample_matches_default, source: "sample-empty" };
    }
    return { matches, source: "live" };
  } catch (err) {
    return { matches: sample_matches_default, source: "sample-error" };
  }
}
__name(fetchFixtures, "fetchFixtures");
__name2(fetchFixtures, "fetchFixtures");
async function onRequestGet(context) {
  const { env } = context;
  const { matches, source } = await fetchFixtures(env);
  const body = JSON.stringify({
    updatedAt: (/* @__PURE__ */ new Date()).toISOString(),
    source,
    // "live" or a "sample-*" reason — useful for debugging
    competition: env.COMPETITION_CODE || "WC",
    countries: broadcasters_default.countries,
    defaultCountry: broadcasters_default.defaultCountry || "US",
    matches
  });
  return new Response(body, {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600"
    }
  });
}
__name(onRequestGet, "onRequestGet");
__name2(onRequestGet, "onRequestGet");
var routes = [
  {
    routePath: "/api/matches",
    mountPath: "/api",
    method: "GET",
    middlewares: [],
    modules: [onRequestGet]
  }
];
function lexer(str) {
  var tokens = [];
  var i = 0;
  while (i < str.length) {
    var char = str[i];
    if (char === "*" || char === "+" || char === "?") {
      tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
      continue;
    }
    if (char === "\\") {
      tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
      continue;
    }
    if (char === "{") {
      tokens.push({ type: "OPEN", index: i, value: str[i++] });
      continue;
    }
    if (char === "}") {
      tokens.push({ type: "CLOSE", index: i, value: str[i++] });
      continue;
    }
    if (char === ":") {
      var name = "";
      var j = i + 1;
      while (j < str.length) {
        var code = str.charCodeAt(j);
        if (
          // `0-9`
          code >= 48 && code <= 57 || // `A-Z`
          code >= 65 && code <= 90 || // `a-z`
          code >= 97 && code <= 122 || // `_`
          code === 95
        ) {
          name += str[j++];
          continue;
        }
        break;
      }
      if (!name)
        throw new TypeError("Missing parameter name at ".concat(i));
      tokens.push({ type: "NAME", index: i, value: name });
      i = j;
      continue;
    }
    if (char === "(") {
      var count = 1;
      var pattern = "";
      var j = i + 1;
      if (str[j] === "?") {
        throw new TypeError('Pattern cannot start with "?" at '.concat(j));
      }
      while (j < str.length) {
        if (str[j] === "\\") {
          pattern += str[j++] + str[j++];
          continue;
        }
        if (str[j] === ")") {
          count--;
          if (count === 0) {
            j++;
            break;
          }
        } else if (str[j] === "(") {
          count++;
          if (str[j + 1] !== "?") {
            throw new TypeError("Capturing groups are not allowed at ".concat(j));
          }
        }
        pattern += str[j++];
      }
      if (count)
        throw new TypeError("Unbalanced pattern at ".concat(i));
      if (!pattern)
        throw new TypeError("Missing pattern at ".concat(i));
      tokens.push({ type: "PATTERN", index: i, value: pattern });
      i = j;
      continue;
    }
    tokens.push({ type: "CHAR", index: i, value: str[i++] });
  }
  tokens.push({ type: "END", index: i, value: "" });
  return tokens;
}
__name(lexer, "lexer");
__name2(lexer, "lexer");
function parse(str, options) {
  if (options === void 0) {
    options = {};
  }
  var tokens = lexer(str);
  var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a, _b = options.delimiter, delimiter = _b === void 0 ? "/#?" : _b;
  var result = [];
  var key = 0;
  var i = 0;
  var path = "";
  var tryConsume = /* @__PURE__ */ __name2(function(type) {
    if (i < tokens.length && tokens[i].type === type)
      return tokens[i++].value;
  }, "tryConsume");
  var mustConsume = /* @__PURE__ */ __name2(function(type) {
    var value2 = tryConsume(type);
    if (value2 !== void 0)
      return value2;
    var _a2 = tokens[i], nextType = _a2.type, index = _a2.index;
    throw new TypeError("Unexpected ".concat(nextType, " at ").concat(index, ", expected ").concat(type));
  }, "mustConsume");
  var consumeText = /* @__PURE__ */ __name2(function() {
    var result2 = "";
    var value2;
    while (value2 = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR")) {
      result2 += value2;
    }
    return result2;
  }, "consumeText");
  var isSafe = /* @__PURE__ */ __name2(function(value2) {
    for (var _i = 0, delimiter_1 = delimiter; _i < delimiter_1.length; _i++) {
      var char2 = delimiter_1[_i];
      if (value2.indexOf(char2) > -1)
        return true;
    }
    return false;
  }, "isSafe");
  var safePattern = /* @__PURE__ */ __name2(function(prefix2) {
    var prev = result[result.length - 1];
    var prevText = prefix2 || (prev && typeof prev === "string" ? prev : "");
    if (prev && !prevText) {
      throw new TypeError('Must have text between two parameters, missing text after "'.concat(prev.name, '"'));
    }
    if (!prevText || isSafe(prevText))
      return "[^".concat(escapeString(delimiter), "]+?");
    return "(?:(?!".concat(escapeString(prevText), ")[^").concat(escapeString(delimiter), "])+?");
  }, "safePattern");
  while (i < tokens.length) {
    var char = tryConsume("CHAR");
    var name = tryConsume("NAME");
    var pattern = tryConsume("PATTERN");
    if (name || pattern) {
      var prefix = char || "";
      if (prefixes.indexOf(prefix) === -1) {
        path += prefix;
        prefix = "";
      }
      if (path) {
        result.push(path);
        path = "";
      }
      result.push({
        name: name || key++,
        prefix,
        suffix: "",
        pattern: pattern || safePattern(prefix),
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    var value = char || tryConsume("ESCAPED_CHAR");
    if (value) {
      path += value;
      continue;
    }
    if (path) {
      result.push(path);
      path = "";
    }
    var open = tryConsume("OPEN");
    if (open) {
      var prefix = consumeText();
      var name_1 = tryConsume("NAME") || "";
      var pattern_1 = tryConsume("PATTERN") || "";
      var suffix = consumeText();
      mustConsume("CLOSE");
      result.push({
        name: name_1 || (pattern_1 ? key++ : ""),
        pattern: name_1 && !pattern_1 ? safePattern(prefix) : pattern_1,
        prefix,
        suffix,
        modifier: tryConsume("MODIFIER") || ""
      });
      continue;
    }
    mustConsume("END");
  }
  return result;
}
__name(parse, "parse");
__name2(parse, "parse");
function match(str, options) {
  var keys = [];
  var re = pathToRegexp(str, keys, options);
  return regexpToFunction(re, keys, options);
}
__name(match, "match");
__name2(match, "match");
function regexpToFunction(re, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.decode, decode = _a === void 0 ? function(x) {
    return x;
  } : _a;
  return function(pathname) {
    var m = re.exec(pathname);
    if (!m)
      return false;
    var path = m[0], index = m.index;
    var params = /* @__PURE__ */ Object.create(null);
    var _loop_1 = /* @__PURE__ */ __name2(function(i2) {
      if (m[i2] === void 0)
        return "continue";
      var key = keys[i2 - 1];
      if (key.modifier === "*" || key.modifier === "+") {
        params[key.name] = m[i2].split(key.prefix + key.suffix).map(function(value) {
          return decode(value, key);
        });
      } else {
        params[key.name] = decode(m[i2], key);
      }
    }, "_loop_1");
    for (var i = 1; i < m.length; i++) {
      _loop_1(i);
    }
    return { path, index, params };
  };
}
__name(regexpToFunction, "regexpToFunction");
__name2(regexpToFunction, "regexpToFunction");
function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
__name(escapeString, "escapeString");
__name2(escapeString, "escapeString");
function flags(options) {
  return options && options.sensitive ? "" : "i";
}
__name(flags, "flags");
__name2(flags, "flags");
function regexpToRegexp(path, keys) {
  if (!keys)
    return path;
  var groupsRegex = /\((?:\?<(.*?)>)?(?!\?)/g;
  var index = 0;
  var execResult = groupsRegex.exec(path.source);
  while (execResult) {
    keys.push({
      // Use parenthesized substring match if available, index otherwise
      name: execResult[1] || index++,
      prefix: "",
      suffix: "",
      modifier: "",
      pattern: ""
    });
    execResult = groupsRegex.exec(path.source);
  }
  return path;
}
__name(regexpToRegexp, "regexpToRegexp");
__name2(regexpToRegexp, "regexpToRegexp");
function arrayToRegexp(paths, keys, options) {
  var parts = paths.map(function(path) {
    return pathToRegexp(path, keys, options).source;
  });
  return new RegExp("(?:".concat(parts.join("|"), ")"), flags(options));
}
__name(arrayToRegexp, "arrayToRegexp");
__name2(arrayToRegexp, "arrayToRegexp");
function stringToRegexp(path, keys, options) {
  return tokensToRegexp(parse(path, options), keys, options);
}
__name(stringToRegexp, "stringToRegexp");
__name2(stringToRegexp, "stringToRegexp");
function tokensToRegexp(tokens, keys, options) {
  if (options === void 0) {
    options = {};
  }
  var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function(x) {
    return x;
  } : _d, _e = options.delimiter, delimiter = _e === void 0 ? "/#?" : _e, _f = options.endsWith, endsWith = _f === void 0 ? "" : _f;
  var endsWithRe = "[".concat(escapeString(endsWith), "]|$");
  var delimiterRe = "[".concat(escapeString(delimiter), "]");
  var route = start ? "^" : "";
  for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
    var token = tokens_1[_i];
    if (typeof token === "string") {
      route += escapeString(encode(token));
    } else {
      var prefix = escapeString(encode(token.prefix));
      var suffix = escapeString(encode(token.suffix));
      if (token.pattern) {
        if (keys)
          keys.push(token);
        if (prefix || suffix) {
          if (token.modifier === "+" || token.modifier === "*") {
            var mod = token.modifier === "*" ? "?" : "";
            route += "(?:".concat(prefix, "((?:").concat(token.pattern, ")(?:").concat(suffix).concat(prefix, "(?:").concat(token.pattern, "))*)").concat(suffix, ")").concat(mod);
          } else {
            route += "(?:".concat(prefix, "(").concat(token.pattern, ")").concat(suffix, ")").concat(token.modifier);
          }
        } else {
          if (token.modifier === "+" || token.modifier === "*") {
            throw new TypeError('Can not repeat "'.concat(token.name, '" without a prefix and suffix'));
          }
          route += "(".concat(token.pattern, ")").concat(token.modifier);
        }
      } else {
        route += "(?:".concat(prefix).concat(suffix, ")").concat(token.modifier);
      }
    }
  }
  if (end) {
    if (!strict)
      route += "".concat(delimiterRe, "?");
    route += !options.endsWith ? "$" : "(?=".concat(endsWithRe, ")");
  } else {
    var endToken = tokens[tokens.length - 1];
    var isEndDelimited = typeof endToken === "string" ? delimiterRe.indexOf(endToken[endToken.length - 1]) > -1 : endToken === void 0;
    if (!strict) {
      route += "(?:".concat(delimiterRe, "(?=").concat(endsWithRe, "))?");
    }
    if (!isEndDelimited) {
      route += "(?=".concat(delimiterRe, "|").concat(endsWithRe, ")");
    }
  }
  return new RegExp(route, flags(options));
}
__name(tokensToRegexp, "tokensToRegexp");
__name2(tokensToRegexp, "tokensToRegexp");
function pathToRegexp(path, keys, options) {
  if (path instanceof RegExp)
    return regexpToRegexp(path, keys);
  if (Array.isArray(path))
    return arrayToRegexp(path, keys, options);
  return stringToRegexp(path, keys, options);
}
__name(pathToRegexp, "pathToRegexp");
__name2(pathToRegexp, "pathToRegexp");
var escapeRegex = /[.+?^${}()|[\]\\]/g;
function* executeRequest(request) {
  const requestPath = new URL(request.url).pathname;
  for (const route of [...routes].reverse()) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult) {
      for (const handler of route.middlewares.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: mountMatchResult.path
        };
      }
    }
  }
  for (const route of routes) {
    if (route.method && route.method !== request.method) {
      continue;
    }
    const routeMatcher = match(route.routePath.replace(escapeRegex, "\\$&"), {
      end: true
    });
    const mountMatcher = match(route.mountPath.replace(escapeRegex, "\\$&"), {
      end: false
    });
    const matchResult = routeMatcher(requestPath);
    const mountMatchResult = mountMatcher(requestPath);
    if (matchResult && mountMatchResult && route.modules.length) {
      for (const handler of route.modules.flat()) {
        yield {
          handler,
          params: matchResult.params,
          path: matchResult.path
        };
      }
      break;
    }
  }
}
__name(executeRequest, "executeRequest");
__name2(executeRequest, "executeRequest");
var pages_template_worker_default = {
  async fetch(originalRequest, env, workerContext) {
    let request = originalRequest;
    const handlerIterator = executeRequest(request);
    let data = {};
    let isFailOpen = false;
    const next = /* @__PURE__ */ __name2(async (input, init) => {
      if (input !== void 0) {
        let url = input;
        if (typeof input === "string") {
          url = new URL(input, request.url).toString();
        }
        request = new Request(url, init);
      }
      const result = handlerIterator.next();
      if (result.done === false) {
        const { handler, params, path } = result.value;
        const context = {
          request: new Request(request.clone()),
          functionPath: path,
          next,
          params,
          get data() {
            return data;
          },
          set data(value) {
            if (typeof value !== "object" || value === null) {
              throw new Error("context.data must be an object");
            }
            data = value;
          },
          env,
          waitUntil: workerContext.waitUntil.bind(workerContext),
          passThroughOnException: /* @__PURE__ */ __name2(() => {
            isFailOpen = true;
          }, "passThroughOnException")
        };
        const response = await handler(context);
        if (!(response instanceof Response)) {
          throw new Error("Your Pages function should return a Response");
        }
        return cloneResponse(response);
      } else if ("ASSETS") {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      } else {
        const response = await fetch(request);
        return cloneResponse(response);
      }
    }, "next");
    try {
      return await next();
    } catch (error) {
      if (isFailOpen) {
        const response = await env["ASSETS"].fetch(request);
        return cloneResponse(response);
      }
      throw error;
    }
  }
};
var cloneResponse = /* @__PURE__ */ __name2((response) => (
  // https://fetch.spec.whatwg.org/#null-body-status
  new Response(
    [101, 204, 205, 304].includes(response.status) ? null : response.body,
    response
  )
), "cloneResponse");
var drainBody = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default = drainBody;
function reduceError(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError(e.cause)
  };
}
__name(reduceError, "reduceError");
__name2(reduceError, "reduceError");
var jsonError = /* @__PURE__ */ __name2(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default = jsonError;
var __INTERNAL_WRANGLER_MIDDLEWARE__ = [
  middleware_ensure_req_body_drained_default,
  middleware_miniflare3_json_error_default
];
var middleware_insertion_facade_default = pages_template_worker_default;
var __facade_middleware__ = [];
function __facade_register__(...args) {
  __facade_middleware__.push(...args.flat());
}
__name(__facade_register__, "__facade_register__");
__name2(__facade_register__, "__facade_register__");
function __facade_invokeChain__(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__, "__facade_invokeChain__");
__name2(__facade_invokeChain__, "__facade_invokeChain__");
function __facade_invoke__(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__(request, env, ctx, dispatch, [
    ...__facade_middleware__,
    finalMiddleware
  ]);
}
__name(__facade_invoke__, "__facade_invoke__");
__name2(__facade_invoke__, "__facade_invoke__");
var __Facade_ScheduledController__ = class ___Facade_ScheduledController__ {
  static {
    __name(this, "___Facade_ScheduledController__");
  }
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name2(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name2(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name2(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler, "wrapExportedHandler");
__name2(wrapExportedHandler, "wrapExportedHandler");
function wrapWorkerEntrypoint(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__ === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__) {
    __facade_register__(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name2((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name2((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
__name2(wrapWorkerEntrypoint, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY;
if (typeof middleware_insertion_facade_default === "object") {
  WRAPPED_ENTRY = wrapExportedHandler(middleware_insertion_facade_default);
} else if (typeof middleware_insertion_facade_default === "function") {
  WRAPPED_ENTRY = wrapWorkerEntrypoint(middleware_insertion_facade_default);
}
var middleware_loader_entry_default = WRAPPED_ENTRY;

// ../../AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/middleware-ensure-req-body-drained.ts
var drainBody2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } finally {
    try {
      if (request.body !== null && !request.bodyUsed) {
        const reader = request.body.getReader();
        while (!(await reader.read()).done) {
        }
      }
    } catch (e) {
      console.error("Failed to drain the unused request body.", e);
    }
  }
}, "drainBody");
var middleware_ensure_req_body_drained_default2 = drainBody2;

// ../../AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts
function reduceError2(e) {
  return {
    name: e?.name,
    message: e?.message ?? String(e),
    stack: e?.stack,
    cause: e?.cause === void 0 ? void 0 : reduceError2(e.cause)
  };
}
__name(reduceError2, "reduceError");
var jsonError2 = /* @__PURE__ */ __name(async (request, env, _ctx, middlewareCtx) => {
  try {
    return await middlewareCtx.next(request, env);
  } catch (e) {
    const error = reduceError2(e);
    return Response.json(error, {
      status: 500,
      headers: { "MF-Experimental-Error-Stack": "true" }
    });
  }
}, "jsonError");
var middleware_miniflare3_json_error_default2 = jsonError2;

// .wrangler/tmp/bundle-ERgC7r/middleware-insertion-facade.js
var __INTERNAL_WRANGLER_MIDDLEWARE__2 = [
  middleware_ensure_req_body_drained_default2,
  middleware_miniflare3_json_error_default2
];
var middleware_insertion_facade_default2 = middleware_loader_entry_default;

// ../../AppData/Local/npm-cache/_npx/d77349f55c2be1c0/node_modules/wrangler/templates/middleware/common.ts
var __facade_middleware__2 = [];
function __facade_register__2(...args) {
  __facade_middleware__2.push(...args.flat());
}
__name(__facade_register__2, "__facade_register__");
function __facade_invokeChain__2(request, env, ctx, dispatch, middlewareChain) {
  const [head, ...tail] = middlewareChain;
  const middlewareCtx = {
    dispatch,
    next(newRequest, newEnv) {
      return __facade_invokeChain__2(newRequest, newEnv, ctx, dispatch, tail);
    }
  };
  return head(request, env, ctx, middlewareCtx);
}
__name(__facade_invokeChain__2, "__facade_invokeChain__");
function __facade_invoke__2(request, env, ctx, dispatch, finalMiddleware) {
  return __facade_invokeChain__2(request, env, ctx, dispatch, [
    ...__facade_middleware__2,
    finalMiddleware
  ]);
}
__name(__facade_invoke__2, "__facade_invoke__");

// .wrangler/tmp/bundle-ERgC7r/middleware-loader.entry.ts
var __Facade_ScheduledController__2 = class ___Facade_ScheduledController__2 {
  constructor(scheduledTime, cron, noRetry) {
    this.scheduledTime = scheduledTime;
    this.cron = cron;
    this.#noRetry = noRetry;
  }
  static {
    __name(this, "__Facade_ScheduledController__");
  }
  #noRetry;
  noRetry() {
    if (!(this instanceof ___Facade_ScheduledController__2)) {
      throw new TypeError("Illegal invocation");
    }
    this.#noRetry();
  }
};
function wrapExportedHandler2(worker) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return worker;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  const fetchDispatcher = /* @__PURE__ */ __name(function(request, env, ctx) {
    if (worker.fetch === void 0) {
      throw new Error("Handler does not export a fetch() function.");
    }
    return worker.fetch(request, env, ctx);
  }, "fetchDispatcher");
  return {
    ...worker,
    fetch(request, env, ctx) {
      const dispatcher = /* @__PURE__ */ __name(function(type, init) {
        if (type === "scheduled" && worker.scheduled !== void 0) {
          const controller = new __Facade_ScheduledController__2(
            Date.now(),
            init.cron ?? "",
            () => {
            }
          );
          return worker.scheduled(controller, env, ctx);
        }
      }, "dispatcher");
      return __facade_invoke__2(request, env, ctx, dispatcher, fetchDispatcher);
    }
  };
}
__name(wrapExportedHandler2, "wrapExportedHandler");
function wrapWorkerEntrypoint2(klass) {
  if (__INTERNAL_WRANGLER_MIDDLEWARE__2 === void 0 || __INTERNAL_WRANGLER_MIDDLEWARE__2.length === 0) {
    return klass;
  }
  for (const middleware of __INTERNAL_WRANGLER_MIDDLEWARE__2) {
    __facade_register__2(middleware);
  }
  return class extends klass {
    #fetchDispatcher = /* @__PURE__ */ __name((request, env, ctx) => {
      this.env = env;
      this.ctx = ctx;
      if (super.fetch === void 0) {
        throw new Error("Entrypoint class does not define a fetch() function.");
      }
      return super.fetch(request);
    }, "#fetchDispatcher");
    #dispatcher = /* @__PURE__ */ __name((type, init) => {
      if (type === "scheduled" && super.scheduled !== void 0) {
        const controller = new __Facade_ScheduledController__2(
          Date.now(),
          init.cron ?? "",
          () => {
          }
        );
        return super.scheduled(controller);
      }
    }, "#dispatcher");
    fetch(request) {
      return __facade_invoke__2(
        request,
        this.env,
        this.ctx,
        this.#dispatcher,
        this.#fetchDispatcher
      );
    }
  };
}
__name(wrapWorkerEntrypoint2, "wrapWorkerEntrypoint");
var WRAPPED_ENTRY2;
if (typeof middleware_insertion_facade_default2 === "object") {
  WRAPPED_ENTRY2 = wrapExportedHandler2(middleware_insertion_facade_default2);
} else if (typeof middleware_insertion_facade_default2 === "function") {
  WRAPPED_ENTRY2 = wrapWorkerEntrypoint2(middleware_insertion_facade_default2);
}
var middleware_loader_entry_default2 = WRAPPED_ENTRY2;
export {
  __INTERNAL_WRANGLER_MIDDLEWARE__2 as __INTERNAL_WRANGLER_MIDDLEWARE__,
  middleware_loader_entry_default2 as default
};
//# sourceMappingURL=functionsWorker-0.7080800530311059.js.map
