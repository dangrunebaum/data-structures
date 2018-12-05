module.exports = {
  apps : [{
    name: 'API',
    script: 'sensor.js',

    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    args: 'one two',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'development',
      AWSRDS_EP: 'dangrunebauminstance.cx049ocb21qa.us-east-2.rds.amazonaws.com',
      AWSRDS_PW: '37Graygar',
      PHOTON_ID: '4e005e001151373331333230',
      PHOTON_TOKEN: 'afe4fb1d42fde75174b3199c96fb8af69e3eafb2'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }],

  deploy : {
    production : {
      user : 'node',
      host : '212.83.163.1',
      ref  : 'origin/master',
      repo : 'git@github.com:repo.git',
      path : '/var/www/production',
      'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
    }
  }
};
