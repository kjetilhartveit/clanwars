
module.exports = {
	options: {
		sourceMap: true
	},
	dist: {	
		files: [{
			expand: true,
			cwd: '<%= dirnames.dist %>',
			src: ['bundle.js'],
			dest: '<%= dirnames.dist %>',
			ext: '.min.js'
		}]
	}
};
