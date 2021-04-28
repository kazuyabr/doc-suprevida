/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "Suprevida",
  tagline: "Documentação dos componentes",
  url: "https://documentation-xi.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "https://static.suprevida.com.br/images/favicon.ico",
  organizationName: "suprevida", // Usually your GitHub org/user name.
  projectName: "documentation", // Usually your repo name.
  customFields: {
    defaultDocsLandingPage: "docs",
  },
  themeConfig: {
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    navbar: {
      hideOnScroll: true,
      title: "",
      logo: {
        alt: "Suprevida Logo",
        src: "./img/logo-suprevida.png",
      },
      // items: [
      //   { to: "/docs", label: "Docs", position: "right" },
      //   {
      //     href: "https://github.com/suprevida/documentation",
      //     label: "GitHub",
      //     position: "right",
      //   },
      // ],
    },
    // footer: {
    //   style: "dark",
    //   copyright: `© ${new Date().getFullYear()} Suprevida.`,
    // },
  },
  plugins: ["docusaurus-plugin-sass"],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/facebook/docusaurus/edit/master/website/",
        },
        theme: {
          customCss: require.resolve("./src/styles/global.scss"),
        },
      },
    ],
  ],
};
