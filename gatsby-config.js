// gatsby.config.js
const config = require('./src/config');

module.exports = {
  siteMetadata: {
    title: 'Meron Shibiru',
    description:
      'Meron Shibiru is a software engineer with a strong technical background, focused on building reliable, maintainable software.',
    siteUrl: 'https://meronshibiru.vercel.app', // No trailing slash allowed!
    image: '/favicon-32x32.png',
    linkedinUsername: 'https://et.linkedin.com/in/meron-shibru-589b82224',
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
        name: 'Meron Shibiru',
        short_name: 'Mera',
        start_url: '/',
        background_color: config.colors.brown,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo1.png',
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
        host: 'https://meronshibiru.vercel.app',
        sitemap: 'https://meronshibiru.vercel.app/sitemap.xml',
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
