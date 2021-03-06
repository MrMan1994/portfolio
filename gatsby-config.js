module.exports = {
   siteMetadata: {
      title: "Portfolio",
      author: "Ruben Mosblech",
      description: "Portfolio Website"
   },
   plugins: [
      'gatsby-plugin-react-helmet',
      {
         resolve: `gatsby-plugin-manifest`,
         options: {
            name: 'gatsby-starter-default',
            short_name: 'starter',
            start_url: '/',
            background_color: '#663399',
            theme_color: '#663399',
            display: 'minimal-ui',
            icon: 'src/images/logo.png',
         },
      },
      'gatsby-plugin-sass',
      'gatsby-plugin-offline'
   ],
}
