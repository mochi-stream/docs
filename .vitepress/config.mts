import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Mochi",
  description:
    "Powerful anime streaming platform with a minimal interface and high-quality streaming.",
  themeConfig: {
    nav: [
      { text: "Overview", link: "/" },
      { text: "Deploy", link: "/deployment/" },
    ],
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Why Mochi?", link: "/" }],
      },
      {
        text: "Deployment",
        items: [
          { text: "Getting Started", link: "/deployment/getting-started" },
          { text: "Clerk Setup", link: "/deployment/clerk-setup" },
          { text: "Database Setup", link: "/deployment/database-setup" },
          {
            text: "APIs Setup",
            link: "/deployment/apis-setup",
          },
        ],
      },

      {
        text: "Cronjobs",
        items: [
          { text: "Scheduling Cronjobs", link: "/cronjobs/scheduling" },
          { text: "Push Notifications", link: "/cronjobs/push-notifications" },
        ],
      },

      {
        text: "Animelist Syncing",
        items: [
          {
            text: "MAL Sync",
            link: "/syncing/mal",
          },
          {
            text: "Anilist Sync",
            link: "/syncing/anilist",
          },
        ],
      },

      {
        text: "Clerk Integration",
        items: [
          { text: "Advance Setup", link: "/clerk/advance-setup" },
          { text: "Webhook Configuration", link: "/clerk/webhooks" },
        ],
      },

      {
        text: "Advanced Topics",
        items: [
          { text: "Custom Middleware", link: "/advanced/custom-middleware" },
          { text: "API Rate Limiting", link: "/advanced/api-rate-limiting" },
          { text: "Caching Strategies", link: "/advanced/caching-strategies" },
        ],
      },
    ],
    search: {
      provider: "local",
    },
    lastUpdated: true,
    editLink: {
      pattern: "https://github.com/mochi-stream/docs/edit/main/:path",
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/mochi-stream/mochi" },
    ],
  },
});
