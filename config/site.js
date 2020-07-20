module.exports = {
    pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
    title: 'Global Lighting Project', // Navigation and Site Title
    titleAlt: 'Global Lighting Project', // Title for JSONLD
    description: 'Non-profit organization on a mission to aid developing communities with solar-powered LED lights',
    url: 'https://globallightingproject.com', // Domain of your site. No trailing slash!
    siteUrl: 'https://globallightingproject.com/', // url + pathPrefix
    siteLanguage: 'en', // Language Tag on <html> element
    logo: 'static/logo/logo.png', // Used for SEO
    banner: 'static/logo/banner.png',
    // JSONLD / Manifest
    favicon: 'static/logo/favicon.png', // Used for manifest favicon generation
    shortName: 'GLP', // shortname for manifest. MUST be shorter than 12 characters
    author: 'Salem Aziel', // Author for schemaORGJSONLD
    themeColor: '#ffc529',
    backgroundColor: '#04210c',
    twitter: '@globallightingproject', // Twitter Username
  };