module.exports = {
  plugins: [],
  env: {
    test: {
      presets: ['@babel/preset-env']
    },
    production: {
      presets: [['@babel/preset-env', { modules: false }]]
    }
  }
};
