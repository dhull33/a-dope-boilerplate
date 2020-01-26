/* ======================================
 * So PM2 will work with Heroku
 * ==================================
 */
module.exports = {
  apps: [
    {
      name: 'a-really-cool-name',
      script: './bin/www',
      env: {
        NODE_ENV: 'development'
      },
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
