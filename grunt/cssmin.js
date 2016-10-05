
module.exports = {
	options: {
//		sourceMap: true
	},
	default: {
		files: [{expand: true,
			cwd: '<%= dirnames.compiled %>',
			src: ['**/*.css'],
			dest: '<%= dirnames.compiled %>',
			ext: '.min.css',
			extDot: 'last'
		}]
	}	
//	default: {
//		files: [{expand: true,
//			cwd: '<%= dirnames.scss %>/_rawcss',
//			src: ['**/*.css'],
//			dest: '<%= dirnames.web %>/css/app',
//			ext: '.min.css'
//		}]
//	},	
//	build: {
//		files: [{expand: true,
//			cwd: '<%= dirnames.scss %>/_rawcss',
//			src: ['**/*.css'],
//			dest: '<%= dirnames.latest_build %>/<%= dirnames.web %>/css/app',
//			ext: '.min.css'
//		}]
//	}
};
