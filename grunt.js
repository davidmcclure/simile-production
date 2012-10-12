module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', 'timeline_js/**/*.js, timeline_ajax/**/*.js'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    mincss: {
      compress: {
        files: {
          "dist/timeline.css": [
            "timeline_js/timeline-bundle.css",
            "timeline_ajax/styles/graphics.css",
            "timeline_ajax/styles/graphics-ie6.css"
          ]
        }
      }
    },
    smushit: {
      tl_ajax: {
        src: 'timeline_ajax/images/',
        dest: 'dist/timeline_ajax/images'
      },
      tl_js: {
        src: 'timeline_js/images/',
        dest: 'dist/timeline_ajax/images'
      }
    },
    //test: {
    //files: ['test/**/*.js']
    //},
    lint: {
      files: ['grunt.js', 'lib/**/*.js']
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint test'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true
      },
      globals: {
        exports: true,
        module: false
      }
    },
    uglify: {}
  });

  grunt.loadNpmTasks('grunt-contrib-mincss');
  grunt.loadNpmTasks('grunt-smushit');

  // Default task.
  grunt.registerTask('default', 'lint concat min mincss smushit');

};
