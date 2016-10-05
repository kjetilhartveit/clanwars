
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
 
		// data passed into config.  Can use with <%= test %> 
		data: {
			dirnames: {
				app: 'app',
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

  grunt.registerTask('compilets', function() {		
		grunt.task.run('clean:compiled');
		
		// Compile TypeScript
//		grunt.task.run(['force:on', 'ts', 'force:reset']);
		grunt.task.run(['ts', 'browserify', 'uglify']);
		
//		grunt.task.run(['browserify:dist', 'uglify:dist']);
	});

  grunt.registerTask('compilesass', function() {	
		grunt.task.run('clean:compiled');
			
		// Compile Sass
		grunt.task.run(['sass', 'cssmin', 'copy:csstodist']);
	});
	
  grunt.registerTask('build', function() {
		grunt.task.run('compilets');
		grunt.task.run('compilesass');

		grunt.task.run('copy:html');
		grunt.task.run('copy:config');
	});
	
  grunt.registerTask('rebuild', function() {
		grunt.task.run('clean:dist');
		
		grunt.task.run('build');

		grunt.task.run('copy:images');
		grunt.task.run('copy:lib');
		
		// Make sure files are good
//		grunt.task.run(["jshint"]);
	});
	
  grunt.registerTask('deploy', function(type) {
		grunt.fatal('Incomplete');
	});
};