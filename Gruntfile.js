
// TODO Add CSS Lint
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

//	var pkg = grunt.file.readJSON('package.json'),
//			goalsOpts = pkg.goals_options,
//			goalsDirnames = goalsOpts.dirnames;
//
//  // Project configuration
//	
//	var projectCfg = {
//		pkg: pkg
//	};
//	
//	// Config tasks
//	
//	projectCfg.sass = {
//		options: {
//			cacheLocation: goalsDirnames.scss + '/_cache'
//		},
//		default: {
//			files: [{
//				expand: true,
//				cwd: goalsDirnames.scss,
//				src: ['*.scss'],
//				dest: goalsDirnames.scss + '/_rawcss',
//				ext: '.css'
//			}]
//		}
//	};
//	
//	function getCssminFilesLiteral(destDir) {
//		return {
//			expand: true,
//			cwd: goalsDirnames.scss + '/_rawcss',
//			src: ['*.css'],
//			dest: destDir,
//			ext: '.min.css'
//		};
//	};
//
//	projectCfg.cssmin = {
//		options: {
//			sourceMap: true
//		},
//		default: {
//			files: [getCssminFilesLiteral(goalsDirnames.web + "/css/app")]
//		},	
//		build: {
//			files: [getCssminFilesLiteral(goalsDirnames.latest_build + "/" + goalsDirnames.web + "/css/app")]
//		}
//	};
//	
//	projectCfg.jshint = {
//		options: {
//			"-W014": true,
//			"-W032": true,
//			"-W033": true
//		},
//		gruntfile: {
//			options: {
//				esversion: 6
//			},
//			src: 'Gruntfile.js'
//		},
//		js: {
//			options: {
//				esversion: 5
//			},
//			src: goalsDirnames.js + '/*.js'
//		}
//	};
//	
//	function getUglifyFilesLiteral(destDir) {
//		return {
//			expand: true,
//			cwd: goalsDirnames.js,
//			src: ['*.js'],
//			dest: destDir,
//			ext: '.min.js'
//		};
//	};
//	
//	projectCfg.uglify = {
//		options: {
//			sourceMap: true
//		},
//		default: {	
//			files: [getUglifyFilesLiteral(goalsDirnames.web + '/js/app')]
//		},
//		build: {
//			files: [getUglifyFilesLiteral(goalsDirnames.latest_build + "/" + goalsDirnames.web + "/js/app")]
//		}
//	};
//	
//	var cssDevTasks = ['sass', 'cssmin:default'],
//			jsDevTasks = ['jshint', 'uglify:default'];
//	
//	projectCfg.watch = {
//		options: {
//			livereload: true,
//			atBegin: true
//		},
//		css: {
//			files: [goalsDirnames.scss + '/**/*.scss'],
//			tasks: cssDevTasks
//		},
//		js: {
//			files: ["Gruntfile.js", goalsDirnames.js + '/**/*.js'],
//			tasks: jsDevTasks
//		}
//	};
//	
//	projectCfg.mkdir = {
//    tmp: {
//			options: {
//				create: [goalsDirnames.tmp]
//			}
//    }
//  };
//	
//	projectCfg.copy = {
//		tmpconfigstobuild: {
//      files: [{
//				expand: true, 
//				flatten: true,
//				cwd: goalsDirnames.tmp + "/" + goalsDirnames.configs,
//				src: "config.*",
//				dest: goalsDirnames.build + "/" + goalsDirnames.web + "/",
//				rename: function(dest, src) {
//					return dest + "config.php";
//				}
//			}, 
//			{
//				expand: true, 
//				flatten: true,
//				cwd: goalsDirnames.tmp + "/" + goalsDirnames.configs,
//				src: "dbcon.*",
//				dest: goalsDirnames.build + "/" + goalsDirnames.web + "/",
//				rename: function(dest, src) {
//					return dest + "dbcon.php";
//				}
//			}]
//		}
//	};
//	
//	projectCfg.shell = {
//		gitcheckout: {
//			command: (filesToCheckout, destDir) => 'git --work-tree=' + destDir + ' --git-dir=.git checkout master -f -- ' + filesToCheckout
//		}
//	};
//	
//	projectCfg.clean = {
//		build: [ goalsDirnames.build + '/*'],
//		buildconfigs: [ goalsDirnames.build + '/' + goalsDirnames.configs ],
//		tmp: [ goalsDirnames.tmp ]
//	};
//	
//  grunt.initConfig(projectCfg);

  // Load plugins
//  grunt.loadNpmTasks('grunt-contrib-watch');
//  grunt.loadNpmTasks('grunt-contrib-copy');
//  grunt.loadNpmTasks('grunt-contrib-sass');
//  grunt.loadNpmTasks('grunt-contrib-cssmin');
//	grunt.loadNpmTasks('grunt-contrib-jshint');
//  grunt.loadNpmTasks('grunt-contrib-uglify');
//	grunt.loadNpmTasks('grunt-contrib-clean');
//	//grunt.loadNpmTasks('grunt-contrib-rename');
//  grunt.loadNpmTasks('grunt-shell');
//	grunt.loadNpmTasks('grunt-mkdir');
//  //grunt.loadNpmTasks('load-grunt-tasks');

  // Tasks
	
//  grunt.registerTask('default', function() {
//		grunt.task.run(jsDevTasks);
//		grunt.task.run(cssDevTasks);
//	});
	
//  grunt.registerTask('gitcheckoutwww', function(destDir) {
//		grunt.task.run("shell:gitcheckout:" + goalsDirnames.web + ":" + destDir);
//	});
//	
//  grunt.registerTask('gitcheckoutconfig', function(type, destDir) {
//		// TODO check that config file exists first?
//		var configName = goalsConfigNames[type];
//		
//		grunt.task.run("mkdir:tmp");
//		
//		grunt.task.run("shell:gitcheckout:" + goalsDirnames.configs + "/" + configName + " "
//																				+	goalsDirnames.configs + "/" + goalsConfigNames.dbcon + ":" 
//																				+ goalsDirnames.tmp);
//		
//		grunt.task.run(["copy:tmpconfigstobuild", "clean:tmp"]);
//	});

  grunt.registerTask('compilets', function() {		
		grunt.task.run('clean:compiled');
		
		// Compile TypeScript
//		grunt.task.run(['force:on', 'ts', 'force:reset']);
		grunt.task.run(['ts', 'browserify:dist', 'uglify:dist']);
		
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
//		grunt.task.run(["jshint", "sass"]);
		
//		grunt.task.run(['build']);

//		grunt.task.run('gitcheckoutwww:<%= dirnames.latest_build %>');
//		grunt.task.run("gitcheckoutconfig:" + type + ":" + goalsDirnames.build + "/" + goalsDirnames.web);
//		
//		grunt.task.run(["cssmin:build"]);
//		grunt.task.run(["uglify:build"]);
	});
	
  grunt.registerTask('deploy', function(type) {
		grunt.fatal('Incomplete');
	});
};