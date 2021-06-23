module.exports = {
  apps: [{
    name: 'Sypool',
    exec_mode: 'cluster',
    instances: 'max',
    script: './node_modules/nuxt/bin/nuxt.js',
    args: 'start'
  }],

  deploy: {
    production: {
      user: 'node',
      host: '127.0.0.1',
      ref: 'origin/master',
      repo: 'GIT_REPOSITORY',
      path: 'DESTINATION_PATH',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
}
