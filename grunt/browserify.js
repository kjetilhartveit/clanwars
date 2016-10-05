
module.exports = {
  dist: {
		files: {
			'<%= dirnames.dist %>/bundle.js': '<%= dirnames.compiled %>/main.js'
		}
  }
};