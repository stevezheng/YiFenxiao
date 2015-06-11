(function () {
  'use strict';

  angular
    .module('more.list', [])
    .controller('MoreListCtrl', MoreListCtrl);

  MoreListCtrl.$inject = ['$scope', '$yikeUtils'];

  /* @ngInject */
  function MoreListCtrl($scope, $yikeUtils) {
    $scope.init = init;
    $scope.alert = $yikeUtils.alert;

    init();

    ////////////////

    function init() {
    }
  }
})();