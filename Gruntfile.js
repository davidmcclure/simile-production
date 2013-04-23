
/* vim: set expandtab tabstop=2 shiftwidth=2 softtabstop=2 cc=76; */

/**
 * @package     simile-production
 * @copyright   2012 Rector and Board of Visitors, University of Virginia
 * @license     http://www.apache.org/licenses/LICENSE-2.0.html
 */

module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.initConfig({

    concat: {
      dist: {
        src: [
          'dist/timeline_ajax/simile-ajax-api.js',
          'dist/timeline_ajax/simile-ajax-bundle.js',
          'dist/timeline_js/timeline-api.js',
          'dist/timeline_js/timeline-bundle.js'
        ],
        dest: 'dist/production/simile.js'
      }
    },

    cssmin: {
      compress: {
        files: {
          'dist/production/simile.css': [
            'dist/styles/*.css'
          ]
        }
      }
    }

  });

  grunt.registerTask('default', ['concat', 'cssmin']);

};
