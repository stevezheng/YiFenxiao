(function () {
  'use strict';

  function loaded($state) {
    try {
      var HomeLogo = window.localStorage.getItem('installed');
      if (HomeLogo == null) {
        $state.go('intro');
      }
    } catch (e) {
      $state.go('app.home');
    }
  }

  angular
    .module('common.home', ['yike.utils'])
    .controller('CommonHomeCtrl', CommonHomeCtrl);

  CommonHomeCtrl.$inject = ['$scope', '$yikeUtils', '$ionicSlideBoxDelegate', '$state'];

  /* @ngInject */
  function CommonHomeCtrl($scope, $yikeUtils, $ionicSlideBoxDelegate, $state) {
    $scope.data = [];
    $scope.ads = [];

    $scope.init = init;
    $scope.query = query;
    $scope.go = $yikeUtils.go;
    $scope.alert = $yikeUtils.alert;
    $scope.show = $yikeUtils.show;

    init();

    ////////////////

    function init() {
      loaded($state);
      query();
    }

    function query() {
      D('item')
        .select()
        .then(function(data) {
          $scope.data = $yikeUtils.listToRow(data, 2);
        });

      D('ad')
        .select()
        .then(function(data) {
          $scope.ads = data;
          $scope.$digest();
          $ionicSlideBoxDelegate.update();
        });
    }
  }
})();