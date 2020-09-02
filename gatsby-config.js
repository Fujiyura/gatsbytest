module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-blog`,
      options: {
        contentPath: `content/posts`,
        basePath: `/`,
        assetPath: `content/assets`,
        mdx: true
      },
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `テストタイトル`,
    author: `Fujiyura`,
    description: `My site description...`,
    social: [
      {
        name: `twitter`,
        url: `https://twitter.com/fujiyura14`,
      },
      {
        name: `github`,
        url: `https://github.com/Fujiyura`,
      },
    ],
  },
}
