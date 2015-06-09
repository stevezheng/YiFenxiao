(function () {
  'use strict';

  angular
    .module('common.home', ['yike.utils'])
    .controller('CommonHomeCtrl', CommonHomeCtrl);

  CommonHomeCtrl.$inject = ['$scope', '$yikeUtils'];

  /* @ngInject */
  function CommonHomeCtrl($scope, $yikeUtils) {
    $scope.data = [];

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
    }
  }
})();