const Encore = require('@symfony/webpack-encore');
// const {GenerateSW} = require('workbox-webpack-plugin');

Encore
  .setOutputPath('build/')
  .setPublicPath('/bootstrap-tricks/build')
  .addEntry('main', './assets/js/main.js')
  .enableSassLoader()
  .autoProvidejQuery()
  .enableSourceMaps(!Encore.isProduction())
  .enablePostCssLoader()
  .enableSingleRuntimeChunk()
// .addPlugin(new GenerateSW({
//   globDirectory: './_site',
//   globPatterns: ['**/*.{html,js,css,jpg,png,woff2,woff,ttf}'],
//   swDest: './../service-worker.js',
// }))
;

if (Encore.isProduction()) {
  Encore
    .cleanupOutputBeforeBuild()
  ;
}

module.exports = Encore.getWebpackConfig();
