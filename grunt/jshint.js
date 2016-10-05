
module.exports = {
	options: {
		"-W014": true,
		"-W032": true,
		"-W033": true
	},
	gruntfile: {
		options: {
			esversion: 6
		},
		src: 'Gruntfile.js'
	},
	js: {
		options: {
			esversion: 5
		},
		src: '<%= dirnames.js %>/**/*.js'
	}
};
