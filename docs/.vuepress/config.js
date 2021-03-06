module.exports = {
  title: "#ベランダ de 音楽",
  description: "ーーーーーーーーーーーーー",
  locales: {
    "/": {
      lang: "ja-JP",
    },
  },
  dest: "public",
  head: [
    ['link', { rel: 'icon', href: '/sushi.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/sushi-152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/sushi-144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],

    [
      "link",
      {
        rel: "icon",
        href: "/sushi-favicon.ico"
      }
    ],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
  ],
  theme: "reco",
  themeConfig: {
    lang: "ja-JP",
    smoothScroll: "true",
    nav: [
      {
        text: "Home",
        link: "/",
        icon: "reco-home"
      },
      {
        text: "TimeLine",
        link: "/timeline/",
        icon: "reco-date"
      },
      {
        text: "Contact",
        icon: "reco-message",
        items: [
          {
            text: "GitHub",
            link: "https://github.com/ry0y4n",
            icon: "reco-github"
          },
          {
            text: "twitter",
            link: "https://mobile.twitter.com/AnoTensai",
            icon: "reco-twitter"
          }
        ]
      }
    ],
    type: "blog",
    blogConfig: {
      category: {
        location: 2,
        text: "Category"
      },
      tag: {
        location: 3,
        text: "Tag"
      }
    },
    logo: "/sushi.JPG",
    search: true,
    searchMaxSuggestions: 10,
    sidebar: "auto",
    lastUpdated: "Last Updated",
    author: "momosuke",
    authorAvatar: "/sushi.JPG",
    startYear: "2019"
  },
  markdown: {
    lineNumbers: true
  },
  plugins: {
    "@vuepress/pwa": {
        serviceWorker: true,
        updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
        }
    }
  }
}