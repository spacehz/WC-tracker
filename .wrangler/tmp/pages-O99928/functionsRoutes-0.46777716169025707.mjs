import { onRequestGet as __api_matches_js_onRequestGet } from "C:\\Users\\HATEM\\Desktop\\Live-Ipv\\functions\\api\\matches.js"

export const routes = [
    {
      routePath: "/api/matches",
      mountPath: "/api",
      method: "GET",
      middlewares: [],
      modules: [__api_matches_js_onRequestGet],
    },
  ]