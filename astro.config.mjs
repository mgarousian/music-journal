import { defineConfig } from "astro/config";

// On GitHub Actions, GITHUB_REPOSITORY is "owner/repo".
// The site is served at https://owner.github.io/repo/ so every link needs "/repo" in front.
// Locally (npm run dev) it's just "/".
const [owner, repo] = (process.env.GITHUB_REPOSITORY || "").split("/");
const isUserSite = repo && repo === `${owner}.github.io`;

export default defineConfig({
  site: owner ? `https://${owner}.github.io` : undefined,
  base: repo && !isUserSite ? `/${repo}` : "/",
});
