import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "MioPowered",
  description:
    "Find quick information about the projects that we are working on for you",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/logo.png",
    search: {
      provider: "local",
    },
    nav: [
      { text: "Home", link: "/" },
      {
        text: "Projects",
        items: [
          {
            text: "FairyChat",
            link: "/fairychat/",
          },
          {
            text: "FairyTab",
            link: "/fairytab/",
          },
          {
            text: "FairyPrivateMines",
            link: "/fairyprivatemines/",
          },
        ],
      },
    ],

    sidebar: {
      "/fairychat/": [
        {
          text: "Getting Started",
          link: "/fairychat/",
        },
        {
          text: "Frequently Asked Questions",
          link: "/fairychat/faq",
        },
        {
          text: "Usage",
          items: [
            {
              text: "Commands",
              link: "/fairychat/commands",
            },
            {
              text: "Permissions",
              link: "/fairychat/permissions",
            },
            {
              text: "Placeholders",
              link: "/fairychat/placeholders",
            },
          ],
        },
      ],
      "/fairytab/": [
        {
          text: "Getting Started",
          link: "/fairytab/",
        },
      ],
      "/fairyprivatemines/": [
        {
          text: "Getting Started",
          link: "/fairyprivatemines/",
        },
      ],
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/miopowered" },
      {
        icon: "discord",
        link: "https://discord.gg/YUEw9T8ZNY",
      },
    ],
  },
});
