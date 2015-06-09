(function () {
  'use strict';

  angular
    .module('common.home', ['yike.utils'])
    .controller('CommonHomeCtrl', CommonHomeCtrl);

  CommonHomeCtrl.$inject = ['$scope', '$yikeUtils', '$ionicSlideBoxDelegate'];

  /* @ngInject */
  function CommonHomeCtrl($scope, $yikeUtils, $ionicSlideBoxDelegate) {
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