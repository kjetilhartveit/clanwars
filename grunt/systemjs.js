
module.exports = {
	dist: {
		files: [{
			src:  "./<%= dirnames.compiled %>/main.js",
			dest: "./<%= dirnames.dist %>/build.min.js"
		}],
		options: {
//			sfx: true,
			baseURL: "./",
			configFile: "./systemjs.config.js",
			
			minify: true,
			build: {
				mangle: false
			}
		},
	}
};