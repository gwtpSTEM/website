require("dotenv").config()

module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-source-airtable",
      options: {
        apiKey: process.env.AIRTABLE_API_KEY,
        tables: [
          {
            baseId: "appygUSjvvZHynobq",
            tableName: "Media Coverage",
          },
          {
            baseId: "appygUSjvvZHynobq",
            tableName: "History",
          },
          {
            baseId: "appygUSjvvZHynobq",
            tableName: "Other",
            mapping: { 'Text': 'text/markdown' },
          },
          {
            baseId: "appev7hO7lu4gI2vW",
            tableName: "Programs",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Quicksand\:400,700`,
          `M PLUS Rounded 1c\:400,700`
        ],
        display: 'swap'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Get with the Program`,
        short_name: `Get with the Program`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#37A7DF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
