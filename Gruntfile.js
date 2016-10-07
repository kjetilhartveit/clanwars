
/**
 * The following bash code gets the difference from the build website and the git repos website
 * 
 * (diff <(git ls-files www | sort) <(find build/www -type f | sed 's/^build\///' | sort)) | grep -e '^>' | cut -c 2-
 */

module.exports = function(grunt) {
//	var path = require('path');
 
	require('load-grunt-config')(grunt, {
		// path to task.js files, defaults to grunt dir 
//		configPath: path.join(process.cwd(), 'grunt'),
 
		// auto grunt.initConfig 
		init: true,
 
		// data passed into config
		data: {
			dirnames: {
				compiled: 'compiled',
				dist: 'dist'
			}
		},
 
		// use different function to merge config files 
//		mergeFunction: require('recursive-merge')
 
		// can optionally pass options to load-grunt-tasks. 
		// If you set to false, it will disable auto loading tasks. 
		loadGruntTasks: {
		
//			pattern: 'grunt-*',
			config: require('./package.json')
//			scope: 'devDependencies'
		}
 
		//can post process config object before it gets passed to grunt 
//		postProcess: function(config) {},
 
		//allows to manipulate the config object before it gets merged with the data object 
//		preMerge: function(config, data) {}
	});

	/**
	 * Deploys app to staging/production.
	 */
  grunt.registerTask('deploy', function(type) {
		grunt.fatal('Incomplete');
	});

	/**
	 * Runs the app in a browser. Builds the app first if dist is empty.
	 */
  grunt.registerTask('run', function() {
		var distDir = grunt.config.data.dirnames.dist;
		
		if (!grunt.file.exists(distDir + '/index.html')) {
			grunt.task.run('build');
		}
		
		grunt.task.run('connect');
	});
		
	/**
	 * Cleans dist first then builds the app.
	 */
  grunt.registerTask('rebuild', function() {
		grunt.task.run('clean:dist');
		
		grunt.task.run('build');
		
		// Make sure files are good
//		grunt.task.run(["jshint"]);
	});
	
	/**
	 * Builds app includes tests.
	 */
  grunt.registerTask('build', function() {		
		grunt.task.run(['compile', 'testheadless', 'compiledtodist']);
		
		grunt.task.run('copy:images');
		grunt.task.run('copy:lib');
		
		// TODO Probably shouldn't copy config here?
		grunt.task.run('copy:config');
	});
	
	/**
	 * Shorthand for updating contents includes tests.
	 */
  grunt.registerTask('update', function() {
		grunt.task.run(['compile', 'testheadless', 'compiledtodist']);
	});
	
	/**
	 * Shorthand for quick update without tests.
	 */
  grunt.registerTask('quickie', function() {
		grunt.task.run(['compile', 'compiledtodist']);
	});
	
	/**
	 * Prepare and move compiled files to dist.
	 */
  grunt.registerTask('compiledtodist', function() {
		grunt.task.run(['browserify', 'uglify']);
		grunt.task.run('copy:csstodist');
		grunt.task.run('copy:htmltodist');
	});
	
	/**
	 * Runs tests headlessly
	 */
  grunt.registerTask('testheadless', function() {
		// TODO unfortunately testing is not yet fully implemented
//		grunt.task.run('karma:headless');
	});

	/**
	 * Run tests manually in a browser.
	 */
  grunt.registerTask('test', function() {
		// TODO unfortunately testing is not yet fully implemented
//		grunt.task.run(['compile', 'karma:browser']);
	});
	
	/**
	 * Compiles TypeScript and Sass. Also moves HTML files from app to the compiled dir.
	 */
  grunt.registerTask('compile', function() {		
		grunt.task.run('clean:compiled');
		
		// Compile 
		grunt.task.run(['ts', 'sass', 'cssmin']);
		grunt.task.run('copy:htmltocompiled');
	});
};