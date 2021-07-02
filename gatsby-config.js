module.exports = {
  siteMetadata: {
    title: `A Unix Explorer!`,
    name: `Noor`,
    siteUrl: `https://unixdude.tech`,
    description: `unixdude, tech, A unix Explorer!`,
    hero: {
      heading: `Welcome to my Website.Just landed a brand new website.`,
      maxWidth: 652,
    },
    social: [
      {
        name: `twitter`,
        url: `#`,
      },
      {
        name: `github`,
        url: `#`,
      },
      {
        name: `instagram`,
        url: `#`,
      },
      {
        name: `linkedin`,
        url: `#`,
      },
      {
        name: `dribbble`,
        url: `#`,
      },
    ],
  },
  plugins: [
    {
      resolve: "@narative/gatsby-theme-novela",
      options: {
        contentPosts: "content/posts",
        contentAuthors: "content/authors",
        basePath: "/",
        authorsPage: true,
        sources: {
          local: true,
          // contentful: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Novela by Narative`,
        short_name: `Novela`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#fff`,
        display: `standalone`,
        icon: `src/assets/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-netlify-cms`,
      options: {
      },
    },
  ],
};
