// Sample project configuration.
// Bundle size - 18/02/20: 314,4KB
module.exports = function (grunt) {

	var toRootDir = '..';

	grunt.initConfig({
		compass: {
			dist: {
				options: {
					sassDir: 'css/scss',
					cssDir: 'css',
					outputStyle: 'compressed'
				}
			}
		},
		watch: {
			watch_css_files: {
				files: ['css/scss/**/*.scss'],
				tasks: ['compass']
			},
		}
	});

	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Default, to be used on development environments
	grunt.registerTask('default', ['compass', 'watch']); // First we compile and concat JS and then we watch

};