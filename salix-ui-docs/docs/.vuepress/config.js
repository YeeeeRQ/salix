const { defaultTheme } = require("vuepress");
const nav = require("./nav");
const sidebar = require("./sidebar");

module.exports = {
  title: "Salix",
  description: "简洁 轻量  快速引用无负担",

  head: [["link", { rel: "icon", href: "/assets/imgs/SalixUI.png" }]],

  markdown: {
    lineNumbers: true,
  },

  theme: defaultTheme({
    navbar: [...nav],
    sidebar,
    lastUpdated: false,
    contributors: false,
  }),
};
