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
            link: "/fairychat",
          },
          {
            text: "FairyTab",
            link: "/fairytab",
          },
          {
            text: "FairyPrivateMines",
            link: "/fairyprivatemines",
          },
          {
            text: "FairyVaults",
            link: "/fairyvaults",
          },
          {
            text: "FairyPrestige",
            link: "/fairyprestige",
          },
        ],
      },
    ],

    sidebar: {
      "/fairychat": [
        {
          text: "Getting Started",
          link: "/fairychat",
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
      "/fairytab": [
        {
          text: "Getting Started",
          link: "/fairytab",
        },
      ],
      "/fairyprivatemines": [
        {
          text: "Getting Started",
          link: "/fairyprivatemines",
        },
      ],
      "/fairyvaults": [
        {
          text: "Getting Started",
          link: "/fairyvaults",
        },
        {
          text: "Frequently Asked Questions",
          link: "/fairyvaults/faq",
        },
        {
          text: "Usage",
          items: [
            {
              text: "Commands & Permissions",
              link: "/fairyvaults/commands-and-permissions",
            },
          ],
        },
        {
          text: "Configuration",
          items: [
            {
              text: "General",
              link: "/fairyvaults/configuration/general",
            },
            {
              text: "Messages",
              link: "/fairyvaults/configuration/messages",
            },
            {
              text: "Minecraft Materials",
              link: "/fairyvaults/configuration/minecraft-materials",
            },
            {
              text: "Menus",
              items: [
                {
                  text: "Basics",
                  link: "/fairyvaults/configuration/menus/basics",
                },
                {
                  text: "Vault Overview",
                  link: "/fairyvaults/configuration/menus/vault-overview",
                },
                {
                  text: "Vault View",
                  link: "/fairyvaults/configuration/menus/vault-view",
                },
                {
                  text: "Vault Customize",
                  link: "/fairyvaults/configuration/menus/vault-customize",
                },
                {
                  text: "Vault Customize Name",
                  link: "/fairyvaults/configuration/menus/vault-customize-name",
                },
                {
                  text: "Vault Customize Icon",
                  link: "/fairyvaults/configuration/menus/vault-customize-icon",
                },
              ],
            },
          ],
        },
      ],
      "/fairyprestige": [
        {
          text: "Getting Started",
          link: "/fairyprestige",
        },
        {
          text: "Frequently Asked Questions",
          link: "/fairyprestige/faq",
        },
        {
          text: "Usage",
          items: [
            {
              text: "Commands & Permissions",
              link: "/fairyprestige/commands-and-permissions",
            },
          ],
        },
        {
          text: "Configuration",
          link: "/fairyprestige/configuration",
        },
      ],
      "/materials": [
        {
          text: "Versions",
          items: [
            {
              text: "1.8.8",
              link: "/materials/1.8.8",
            },
            {
              text: "1.20.6",
              link: "/materials/1.20.6",
            },
          ],
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
