
module.exports = {
	options: {
		
	},
	default: {
		files: [{
			expand: true,
			cwd: 'app',
			src: ['**/*.scss'],
			dest: '<%= dirnames.compiled %>/app',
			ext: '.css',
			extDot: 'last'
		}]
	},
//	default: {
//		files: [{
//			expand: true,
//			cwd: '<%= dirnames.scss %>',
//			src: ['**/*.scss'],
//			dest: '<%= dirnames.scss %>/_rawcss',
//			ext: '.css'
//		}]
//	}
};