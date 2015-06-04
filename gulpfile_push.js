var xeditor = require('gulp-xml-editor');
var replace = require('gulp-replace');
var gulp = require('gulp');
var config = require('./package.json');

gulp.task('android-manifest', function() {
  return gulp.src("platforms/android/AndroidManifest.xml")
    .pipe(xeditor([
      {
        path: '/manifest/application',
        attr: {'android:name': 'com.sum.cordova.leancloud.LeanApplication'}
      }], {'android': 'http://schemas.android.com/apk/res/android'}))
    .pipe(gulp.dest("platforms/android"));
});

gulp.task('android-application', function() {
  return gulp.src("platforms/android/src/com/sum/cordova/leancloud/LeanApplication.java")
    .pipe(replace('<%MAINACTIVITY%>', config.mainActivity))
    .pipe(replace('<%APPID%>', config.leanAppId))
    .pipe(replace('<%APPKEY%>', config.leanAppKey))
    .pipe(gulp.dest("platforms/android/src/com/sum/cordova/leancloud"));
});

gulp.task('default', ['android-manifest', 'android-application']);
