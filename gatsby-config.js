module.exports = {
  plugins: [
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-less`,
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'settings',
        path: `${__dirname}/content/settings/`
      }
    },
  ],
};
