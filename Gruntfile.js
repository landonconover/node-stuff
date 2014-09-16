/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // // Metadata.
    // pkg: grunt.file.readJSON('package.json'),
    // banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
    //   '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
    //   '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
    //   '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
    //   ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
    // Task configuration.
    concat: {
      distCss: {
        src: ['bower_components/bootstrap/dist/css/bootstrap.min.css', 'public/css/*.css'],
        dest: 'public/css/app.min.css'
      },
      distJs: {
        src: ['bower_components/angular/angular.min.js', 'bower_components/jquery/jquery.min.js', 'public/js/scripts.min.js'],
        dest: 'public/js/app.min.js'
      }
    },
    clean: {
      js: ["public/js/app.min.js"],
      scripts: ["public/js/scripts.min.js"],
      css: ["public/css/app.min.css"]
    },
    uglify: { // This specifies which plugin we're configuring
        scripts: { // This is the target. We can specify multiple targets for a single plugin
          options: { // This is the target specific options. We can also place an options hash at the plugin level to specify configuration for all targets
            sourceMap: true // This option says that we want a source map printed out
          },
          files: { // This is the configuration for the task that specifies destination and source.
            'public/js/scripts.min.js': ['public/js/**/*.js']
          }
        }
      }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Default task.
  grunt.registerTask('build', ['clean', 'uglify', 'concat']);

};
