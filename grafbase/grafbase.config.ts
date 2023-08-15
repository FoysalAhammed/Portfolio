import { config, g } from "@grafbase/sdk";
const User = g.model("User", {
  name: g.string().length({ min: 2, max: 20 }),
  email: g.string().unique(),
  avatarUrl: g.url(),
  description: g.string().optional(),
  githubUrl: g.url().optional(),
  linedInUrl: g.url().optional(),
  projects: g
    .relation(() => Project)
    .list()
    .optional(),
});
const Project = g.model("project", {
  title: g.string().length({ min: 3 }),
  description: g.string(),
  image: g.url(),
  liveSiteUrl: g.string(),
  category: g.string().search(),
  createdBy: g.relation(() => User),
});
export default config({
  schema: g,
});
