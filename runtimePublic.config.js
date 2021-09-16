const configs = {
    development: {
      baseURL: 'https://localhost:44370/api/'
    },
    production: {
      baseURL: 'https://bsite.net/kevinmonestel/api/'
    }
}

const nodeEnv = process.env.NODE_ENV;

module.exports = configs[nodeEnv];