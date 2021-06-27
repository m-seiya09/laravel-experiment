const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

 mix.webpackConfig({
    target: ['web', 'es5'],
   //  resolve: {
   //    extensions: ["*", ".js", ".jsx", ".vue", ".ts", ".tsx"],
   //  },
   //  entry: {
   //    entry: 'resources/js/app.ts',
   //    index: 'resources/js/admin/app.ts'
   //  },
 })
 .sass('resources/sass/app.scss', 'public/css')
 .ts('resources/js/app.ts', 'public/js/app.js')
 .ts('resources/js/admin/sample.ts', 'public/js/admin/sample.js')
 .extract();