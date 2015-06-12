(function () {
  'use strict';

  angular
    .module('intro.list', [])
    .controller('IntroListCtrl', IntroListCtrl);

  IntroListCtrl.$inject = ['$scope'];

  /* @ngInject */
  function IntroListCtrl($scope) {
    $scope.init = init;

    init();

    ////////////////

    function init() {
      window.localStorage.setItem('installed', 'installed');
    }
  }
})();