/*
 * grunt-json5lint
 * https://github.com/ragnarokkr/grunt-json5lint
 *
 * Copyright (c) 2015 Marco Trulla
 * Licensed under the MIT license.
 */

'use strict';

var sprintf = require( 'sprintf-js' ).sprintf,
    JSON5 = require( 'json5' ),

    msg_fileNotFound = 'Source file "%s" not found.',
    msg_notValidJSON = 'Source file "%s" does not seems to be a valid JSON',
    msg_notValidJSON5 = 'Source file "%s" does not seems to be a valid JSON5',
    msg_lintValid = '%d file%s valid.',
    msg_lintNotValid = '%d file%s not valid.';

module.exports = function ( grunt ) {

    grunt.registerMultiTask( 'json5lint', 'Validate JSON/JSON5 files.', function () {
        // Merge task-specific and/or target-specific options with these defaults.
        var options = this.options( {
                enableJSON5: false
            } ),
            valid = 0,
            notValid = 0;

        // Iterate over all files.
        this.filesSrc.filter( function ( filepath ) {
            if ( !grunt.file.exists( filepath ) ) {
                grunt.fail.warn( sprintf ( msg_fileNotFound, filepath ) );
                return false;
            } else {
                return true;
            }
        } ).forEach( function ( filepath ) {
            var f = grunt.file.read( filepath );
            try {
                // Validate for JSON
                JSON.parse( f );
                valid++;
            } catch ( error ) {
                try {
                    // Validate for JSON5 (if enabled)
                    if ( options.enableJSON5 ) {
                        JSON5.parse( f );
                        valid++;
                    } else {
                        notValid++;
                        grunt.log.error( sprintf( msg_notValidJSON, filepath ) );
                        grunt.log.error( error );
                    }
                } catch ( error ) {
                    notValid++;
                    grunt.log.error( sprintf( msg_notValidJSON5, filepath ) );
                    grunt.log.error( error );
                }
            }
        } );

        grunt.log.ok( sprintf( msg_lintValid, valid, valid > 1 ? 's' : '' ) );
        if ( notValid ) {
            grunt.log.error( sprintf( msg_lintNotValid, notValid, notValid > 1 ? 's' : '' ) );
        }

        if ( this.errorCount ) {
            return false;
        }
    } );
};
