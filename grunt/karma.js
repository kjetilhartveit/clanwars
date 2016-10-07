
module.exports = {
  headless: {
    configFile: 'karma.conf.js'
  },
  browser: {
    configFile: 'karma.conf.js',
		browsers: ['Chrome'],
		singleRun: false
  }
};