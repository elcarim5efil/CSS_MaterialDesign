module.exports = function(grunt) {
	
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {    // 任务名称
			combine: {
				files: {
					'lib/mdcss3.min.css': [
						'src/grid.css',		
						'src/addbutton.css',
						'src/button.css',
						'src/collection.css',
						'src/form.css',
						'src/nav.css',
						'src/progressbar.css',
						'src/animations.css',
						'src/color_theme.css',
					]
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ['cssmin']);
};

