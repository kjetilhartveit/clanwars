
module.exports = {
	options: {
		sourceMap: true
	},
	default: {	
		files: [{
			expand: true,
			cwd: '<%= dirnames.dist %>',
			src: ['bundle.js'],
			dest: '<%= dirnames.dist %>',
			ext: '.min.js'
		}]
	}
};
