
module.exports = {
	csstodist: {
		files: [
			{
				expand: true, 
				cwd: '<%= dirnames.compiled %>/app',
				src: ['**/*.min.css'],
				dest: '<%= dirnames.dist %>/app'
			}
		]
	},
	htmltocompiled: {
		files: [
			{
				expand: true, 
				cwd: 'app',
				src: ['**/*.html'], 
				dest: '<%= dirnames.compiled %>/app'
			}, 
			{ 
				src: ['index.html'], 
				dest: '<%= dirnames.compiled %>/' 
			}
		]
	},
	htmltodist: {
		files: [
			{
				expand: true, 
				cwd: '<%= dirnames.compiled %>/app',
				src: ['**/*.html'], 
				dest: '<%= dirnames.dist %>/app'
			}, 
			{ 
				src: ['<%= dirnames.compiled %>/index.html'], 
				dest: '<%= dirnames.dist %>/index.html' 
			}
		]
	},
	images: {
		files: [
			{
				expand: true, 
				cwd: 'app',
				src: ['**/*.jpg', '**/*.gif', '**/*.png'], 
				dest: '<%= dirnames.dist %>/app'
			}
		]
	},
	lib: {
		files: [{ 
			src: [
				'node_modules/@angular/core/bundles/core.umd.js',
				'node_modules/@angular/common/bundles/common.umd.js',
				'node_modules/@angular/compiler/bundles/compiler.umd.js',
				'node_modules/@angular/platform-browser/bundles/platform-browser.umd.js',
				'node_modules/@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
				'node_modules/@angular/http/bundles/http.umd.js',
				'node_modules/@angular/router/bundles/router.umd.js',
				'node_modules/@angular/forms/bundles/forms.umd.js',

				'node_modules/rxjs/**/*.js',
				'node_modules/angular2-in-memory-web-api/**/*.js',

				'node_modules/core-js/client/shim.min.js',
				'node_modules/zone.js/dist/zone.js',
				'node_modules/reflect-metadata/Reflect.js',
				'node_modules/systemjs/dist/system.src.js',
			], 
			dest: '<%= dirnames.dist %>/'
		}]
	},
	config: {
		files: [
			{ 
				src: ['systemjs.config.js'], 
				dest: '<%= dirnames.dist %>/' 
			}
		]
	}
};