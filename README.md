# grunt-json5lint

> Validate JSON/JSON5 files.

## Getting Started
This plugin requires Grunt `^0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-json5lint --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-json5lint');
```

## The "json5lint" task

### Overview
In your project's Gruntfile, add a section named `json5lint` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  json5lint: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
});
```

### Options

#### options.enableJSON5
Type: `Boolean`
Default value: `false`

Enable support for JSON5 format.

### Usage Examples

#### Default Options
In this example, default options are used. If any of the validated files is not a well-formed JSON file, an error will be notified and the process will terminate.

```js
grunt.initConfig({
  json5lint: {
    options: {},
    src: [ 'src/*.json' ]
  }
});
```

#### Custom Options
In this example, custom options are used. Now it's possible to validate JSON5 files, too.

```js
grunt.initConfig({
  json5lint: {
    options: {
      enableJSON5: true
    },
    src: [ 'src/*.json', 'src/*.json5' ]
  }
});
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).
