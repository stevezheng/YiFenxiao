(function () {
  'use strict';

  angular
    .module('user.detail', [])
    .controller('UserDetailCtrl', UserDetailCtrl);

  UserDetailCtrl.$inject = ['$scope'];

  /* @ngInject */
  function UserDetailCtrl($scope) {
    $scope.init = init;
    $scope.cUser = AV.User.current();

    init();

    ////////////////

    function init() {
    }
  }
})();