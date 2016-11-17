module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jasmine: {
            test: {
                src: [
                    'bower_components/jasmine/lib/jasmine-core/jasmine.js',
                    'bower_components/jasmine/lib/jasmine-core/jasmine-html.js',
                    'bower_components/jasmine/lib/jasmine-core/boot.js',
                    'src/roverTest.js'
                ],
                options: {
                    specs: 'spec/rover.spec.js',
                    display: 'short',
                    summary: true
                }
            }
        },
        watch: {
            files: ['src/roverTest.js', 'spec/rover.spec.js'],
            tasks: ['jasmine']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['jasmine']);

};
