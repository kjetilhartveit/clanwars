
module.exports = {
	options: {
		livereload: true
//		atBegin: true
	},
//	default: {
//		files: ['index.html', 'app/**/*.ts', 'app/**/*.css', 'app/**/*.html'],
////		files: ['**/*.html'],
//		tasks: ['build']
//	}
	ts: {
		files: ['<%= dirnames.app %>/**/*.ts'],
		tasks: 'compilets'
	},
	sass: {
		files: ['<%= dirnames.app %>/**/*.scss'],
		tasks: 'compilesass'
	},
	html: {
		files: ['index.html', '<%= dirnames.app %>/**/*.html'],
		tasks: 'copy:html'
	}
//	css: {
//		files: ['<%= dirnames.scss %>/**/*.scss'],
//		tasks: '<%= aliases.cssdevtasks %>'
//	},
//	js: {
//		files: ["Gruntfile.js", '<%= dirnames.js %>/**/*.js'],
//		tasks: '<%= aliases.jsdevtasks %>'
//	}
};