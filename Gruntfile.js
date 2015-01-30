module.exports = function(grunt) {

  var connect = require('connect');
  grunt.initConfig({
    jshint: {
      files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
      options: {
        globals: {
          jQuery: true
        }
      }
    },
    watch: {
      index:'index.html',
      css: {
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
    },
    serve:
    {
      options:
      {
        port: 9000
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-serve');

  grunt.registerTask('default', ['watch','serve']);

};
