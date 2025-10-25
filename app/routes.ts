import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("about", "routes/about.tsx"),
  route("about/details", "routes/about.details.tsx"),
  route("services", "routes/services.tsx"),
  route("services/:serviceId", "routes/services.details.tsx"),
  route("projects", "routes/projects.tsx"),
  route("projects/:projectId", "routes/projects.details.tsx"),
  route("contact", "routes/contact.tsx"),
  route("api/contact", "routes/api.contact.tsx"),
] satisfies RouteConfig;
