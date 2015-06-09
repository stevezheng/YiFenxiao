AV.initialize('y178toa9bim7cgoo3wtraldwfad5wpzeb0710asibpincsud', 'xciqp2z9f2uzfjb22hyqha6vox8n69za56i0wmsvqm6q9x83');
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'common', 'item', 'yike.utils'])

  .run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleLightContent();
      }
    });
  })
  .config(function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    //这里对android进行一些配置,为了保证ios和安卓平台显示效果一致
    $ionicConfigProvider.tabs.position('bottom');
    $ionicConfigProvider.tabs.style('standard');
    $ionicConfigProvider.navBar.alignTitle('center');

    $stateProvider

      .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
      })

      .state('app.home', {
        url: '/home',
        views: {
          'menuContent': {
            templateUrl: 'templates/common/home.html',
            controller: 'CommonHomeCtrl'
          }
        }
      })

      .state('app.item', {
        url: '/item',
        views: {
          'menuContent': {
            templateUrl: 'templates/item/list.html',
            controller: 'ItemListCtrl'
          }
        }
      })

      .state('app.item-detail', {
        url: '/item-detail/:id',
        views: {
          'menuContent': {
            templateUrl: 'templates/item/detail.html',
            controller: 'ItemDetailCtrl'
          }
        }
      })

      .state('app.order', {
        url: '/order',
        views: {
          'menuContent': {
            templateUrl: 'templates/order/list.html'
          }
        }
      })

      .state('app.user', {
        url: '/user',
        views: {
          'menuContent': {
            templateUrl: 'templates/user/list.html'
          }
        }
      })

      .state('app.more', {
        url: '/more',
        views: {
          'menuContent': {
            templateUrl: 'templates/more/list.html'
          }
        }
      })

      .state('app.message', {
        url: '/message',
        views: {
          'menuContent': {
            templateUrl: 'templates/message/list.html'
          }
        }
      });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/home');

  })

