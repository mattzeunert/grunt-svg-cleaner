# grunt-svg-cleaner

> Grunt task to compress SVG files, based on svg-cleaner.

This project uses [svg-cleaner](https://www.npmjs.org/package/svg-cleaner) to compress the images rather than SVGO as svgo broke the images in my case.

## Getting Started

Install the Grunt plugin with this command:

```shell
npm install grunt-svg-cleaner --save-dev
```

Once the plugin has been installed, it can be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-svg-cleaner');
```

## The "svg_cleaner" task

### Overview
In your project's Gruntfile, add a section named `svg_cleaner` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  svg_cleaner: {
    minifySvgs: {
      files: [
        'output-dir': ['img/*.svg']
      }
    }
  },
});
```

The grunt task will compress each image and save the result into 'output_dir'.
