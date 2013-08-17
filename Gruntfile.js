module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
      files: ['styles/sass/*.scss', 'index.html'],
      tasks: 'sass:dev'
    },
    sass: {
      dev: {
        files: {
          'styles/css/<%= pkg.name %>.css' : 'styles/sass/<%= pkg.name %>.scss'
        }
      }
    }
  });
  grunt.registerTask('default', 'sass:dev');

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
}
