import { type RouteConfig, index, route } from "@react-router/dev/routes";
import contacts from "./contacts/routes";
export default [
  index("contacts/pages/home.tsx"),
  ...contacts,
] satisfies RouteConfig;
