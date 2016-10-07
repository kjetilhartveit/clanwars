
module.exports = {
  default: {
		files: {
			'<%= dirnames.dist %>/bundle.js': '<%= dirnames.compiled %>/app/main.js'
		},
//		exclude: '**/*.spec.js'
  }
};