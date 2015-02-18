/*
 * grunt-json5lint
 * https://github.com/ragnarokkr/grunt-jsonlint
 *
 * Copyright (c) 2015 Marco Trulla
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function ( grunt ) {

    // Project configuration.
    grunt.initConfig( {
        pkg: grunt.file.readJSON( 'package.json' ),

        jshint: {
            all: [
                'Gruntfile.js',
                'tasks/*.js'
            ],
            options: {
                jshintrc: '.jshintrc'
            }
        },

        jscs: {
            options: {
                config: '.jscsrc'
            },
            files: '<%= jshint.all %>'
        },

        // Configuration to be run (and then tested).
        json5lint: {
            // This test fails
            default_options: {
                options: {},
                src: 'test/fixtures/package.*'
            },
            // This test not fails
            custom_options: {
                options: {
                    enableJSON5: true
                },
                src: 'test/fixtures/package.*'
            }
        }

    } );

    // Actually load this plugin's task(s).
    grunt.loadTasks( 'tasks' );

    // These plugins provide necessary tasks.
    Object.keys( grunt.config( 'pkg.devDependencies' ) )
        .filter( function ( dep ) {
            return ( /^grunt-.+/ ).test( dep );
        } )
        .forEach( grunt.loadNpmTasks );

    // By default, lint and run all tests.
    grunt.registerTask( 'default', [ 'jshint', 'jscs', 'jsonlint' ] );

};
