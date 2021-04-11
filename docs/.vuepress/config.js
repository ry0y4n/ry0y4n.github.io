module.exports = {
  "title": "Momo Blog",
  "description": "日々考えていることを落としておくためのサイト",
  "dest": "public",
  "head": [
    [
      "link",
      {
        "rel": "icon",
        "href": "/favicon.ico"
      }
    ],
    [
      "meta",
      {
        "name": "viewport",
        "content": "width=device-width,initial-scale=1,user-scalable=no"
      }
    ],
    // ["script", { src: "temp.js" }]
  ],
  "theme": "reco",
  "themeConfig": {
    "smoothScroll": "true",
    "nav": [
      {
        "text": "Home",
        "link": "/",
        "icon": "reco-home"
      },
      {
        "text": "TimeLine",
        "link": "/timeline/",
        "icon": "reco-date"
      },
      {
        "text": "Contact",
        "icon": "reco-message",
        "items": [
          {
            "text": "GitHub",
            "link": "https://github.com/ry0y4n",
            "icon": "reco-github"
          },
          {
            "text": "twitter",
            "link": "https://mobile.twitter.com/AnoTensai",
            "icon": "reco-twitter"
          }
        ]
      }
    ],
    "type": "blog",
    "blogConfig": {
      "category": {
        "location": 2,
        "text": "Category"
      },
      "tag": {
        "location": 3,
        "text": "Tag"
      }
    },
    "logo": "/logo.png",
    "search": true,
    "searchMaxSuggestions": 10,
    "sidebar": "auto",
    "lastUpdated": "Last Updated",
    "author": "momosuke",
    "authorAvatar": "/sushi.JPG",
    "startYear": "2019"
  },
  "markdown": {
    "lineNumbers": true
  }
}