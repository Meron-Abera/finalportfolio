// gatsby.config.js
const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Nathnael Mekonnen',
    description:
      'Nathnael Mekonnen is a software engineer who builds software to change ideas to reality with exceptional digital experiences.',
    siteUrl: 'https://www.nathnael.net', // No trailing slash allowed!
    image: '/og.png',
    linkedinUsername: 'https://www.linkedin.com/in/nathanseasn/',
  },
  plugins: [
    // Images
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    // Metadata
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Nathnael Mekonnen',
        short_name: 'Nathe',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'inimal-ui',
        icon: 'rc/images/logo.png',
      },
    },

    // SEO
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: 'https://www.nathnael.net',
        sitemap: 'https://www.nathnael.net/sitemap.xml',
        policy: [{ userAgent: '*', disallow: [] }],
      },
    },

    // Content
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },

    // Markdown
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'nofollow noopener noreferrer',
            },
          },
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 700,
              linkImagesToOriginal: true,
              quality: 90,
              withWebp: true,
            },
          },
          {
            resolve: 'gatsby-remark-code-titles',
          },
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
              languageExtensions: [
                {
                  language: 'uperscript',
                  extend: 'javascript',
                  definition: {
                    superscript_types: /(SuperType)/,
                  },
                  insertBefore: {
                    function: {
                      superscript_keywords: /(superif|superelse)/,
                    },
                  },
                },
              ],
              prompt: {
                user: 'root',
                host: 'localhost',
                global: false,
              },
            },
          },
        ],
      },
    },

    // Analytics
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'G-E3HGJCS90Y',
      },
    },

    // Offline
    `gatsby-plugin-offline`,
  ],
};
