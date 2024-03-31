import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "RoDNS Docs",
  description: "A Top Dev Project",
  head: [["link", { rel: "icon", href: "https://rodns.top/favicon.ico" }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Panel', link: 'https://rodns.top/' },
      { text: 'DevForum', link: 'https://devforum.roblox.com/t/rodns-free-subdomain-hosting' }
    ],

    sidebar: [
      {
        text: 'About',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'DNS Records', link: '/dns-records' }
        ]
      },
      {
        text: 'Using Web Panel',
        items: [
          { text: 'Adding Records', link: '/adding-records' },
          { text: 'Modifing Records', link: '/modifing-records' },
          { text: 'Deleting Records', link: '/deleting-records' }
        ]
      },
      {
        text: 'Contacts',
        items: [
          { text: 'Contacts', link: '/contacts'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/invite/GCM4SAzvfg' }
    ],

    footer: {
      copyright: "Copyright@ 2024 <a href=http://rodns.top>RoDNS</a>, <a href=http://docs.rodns.top>RoDNS Docs</a> | Powered by <a href=http://rodev.top>Top Dev</a>"
    },

    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "Search docs",
            buttonAriaLabel: "Search docs",
          },
          modal: {
            noResultsText: "No search results",
            resetButtonTitle: "Clear search conditions",
          footer: {
            selectText: "Select",
            navigateText: "Switch",
            },
          },
        },
      },
    },
  }
})
