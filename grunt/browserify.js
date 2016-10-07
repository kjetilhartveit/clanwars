
module.exports = {
  default: {
		files: {
			'<%= dirnames.dist %>/bundle.js': '<%= dirnames.compiled %>/main.js'
		},
//		exclude: '**/*.spec.js'
  }
};