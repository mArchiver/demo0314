module.exports = function (grunt) {

    grunt.initConfig({
        'express': {
            options: {
                // Override defaults here
                debug: true
            },
            web: {
                options: {
                    script: 'app.js',
                }
              },
        },
        'watch': {
            options: {

            },
            backendjs:{
                files: ['**/*.js', '!public/**/*.js'],
                tasks: ['express:web'],
                options: {
                    nospawn: true,
                    atBegin: true,
                    livereload: true,
                    debounceDelay: 500,
                }
            },
            less: {
                files: ['public/**/*.less'],
                tasks: [],
                options: {
                    livereload: true,
                }
            },
            f2ejs: {
                files: ['public/**/*.js'],
                tasks: [],
                options: {
                    livereload: true,
                }
            },
            jade: {
                files: ['src/views/**/*.jade'],
                tasks: [],
                options: {
                    livereload: true,
                }
            }

        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express-server');

    grunt.registerTask('default', [ 'watch']);

};
