require("dotenv").config()



module.exports = {
  plugins: [
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
            baseId: "appev7hO7lu4gI2vW",
            tableName: "Programs",
            tableLinks: ['Participants'],
          },
          {
            baseId: "appev7hO7lu4gI2vW",
            tableName: "Master List",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Quicksand`,
            variants: [`400`, `700`]
          },
        ],
      },
    },
  ],
}
