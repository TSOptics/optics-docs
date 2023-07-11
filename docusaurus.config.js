const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Optics",
  tagline: "Composable state management for TypeScript applications",
  url: "https://optics.page",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.svg",
  organizationName: "TSOptics", // Usually your GitHub org/user name.
  projectName: "optics-docs", // Usually your repo name.
  trailingSlash: false,
  themeConfig: {
    algolia: {
      appId: "WPKS0ARPZ0",
      apiKey: "75cd44ec8228bd29f7dba141dfa13fb1",
      indexName: "optics",
    },
    navbar: {
      title: "Optics",
      logo: {
        src: "img/optics-light.svg",
        srcDark: "img/optics-dark.svg",
      },
      items: [
        {
          type: "doc",
          docId: "Introduction/getting-started",
          position: "left",
          label: "Docs",
        },
        { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/TSOptics/optics",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "light",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/Introduction/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/optics",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/TSOptics/optics",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Vincent Quillien, Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/TSOptics/optics-docs/edit/master",
          remarkPlugins: [
            [require("@docusaurus/remark-plugin-npm2yarn"), { sync: true }],
          ],
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/TSOptics/optics-docs/edit/master/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        pages: {},
      },
    ],
    [
      "docusaurus-preset-shiki-twoslash",
      {
        themes: ["github-dark", "github-light"],
      },
    ],
  ],
};
