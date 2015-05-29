(function () {
  'use strict';

  angular
    .module('common.home', [])
    .controller('CommonHomeCtrl', CommonHomeCtrl);

  CommonHomeCtrl.$inject = ['$scope'];

  /* @ngInject */
  function CommonHomeCtrl($scope) {
    $scope.init = init;

    init();

    ////////////////

    function init() {
    }
  }
})();