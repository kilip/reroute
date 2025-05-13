import { route, type RouteConfig } from "@react-router/dev/routes";

export default [
  route("contacts/:slug", "contacts/pages/home.tsx"),
] satisfies RouteConfig;
