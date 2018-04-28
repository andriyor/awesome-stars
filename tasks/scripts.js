import gulp from 'gulp'
import gulpif from 'gulp-if'
import { log, colors } from 'gulp-util'
import named from 'vinyl-named'
import webpack from 'webpack'
import gulpWebpack from 'webpack-stream'
import BabiliPlugin from 'babili-webpack-plugin'
import plumber from 'gulp-plumber'
import livereload from 'gulp-livereload'
import args from './lib/args'
import * as webpackBundleAnalyzer from 'webpack-bundle-analyzer'

const ENV = args.production ? 'production' : 'development'

gulp.task('scripts', (cb) => {
  return gulp.src('app/scripts/*.js')
    .pipe(plumber({
      // Webpack will log the errors
      errorHandler () {}
    }))
    .pipe(named())
    .pipe(gulpWebpack({
        devtool: args.sourcemaps ? 'inline-source-map' : false,
        watch: args.watch,
        plugins: [
          new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(ENV),
            'process.env.VENDOR': JSON.stringify(args.vendor)
          })
        ].concat(args.production ? [
          new BabiliPlugin()
        ] : [
          new webpackBundleAnalyzer.BundleAnalyzerPlugin()
        ]),
        module: {
          rules: [{
            test: /\.js$/,
            loader: 'eslint-loader',
            exclude: /node_modules/,
            enforce: 'pre'
          }, {
            test: /\.js$/,
            loader: 'babel-loader'
          }, {
            test: /\.svg$/,
            loader: 'file-loader'
          }]
        }
      },
      webpack,
      (err, stats) => {
        if (err) return
        log(`Finished '${colors.cyan('scripts')}'`, stats.toString({
          chunks: false,
          colors: true,
          cached: false,
          children: false
        }))
      }))
    .pipe(gulp.dest(`dist/${args.vendor}/scripts`))
    .pipe(gulpif(args.watch, livereload()))
})