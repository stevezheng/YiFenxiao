(function () {
  'use strict';

  angular
    .module('user.list', [])
    .controller('UserListCtrl', UserListCtrl);

  UserListCtrl.$inject = ['$scope', '$yikeUtils', '$state'];

  /* @ngInject */
  function UserListCtrl($scope, $yikeUtils, $state) {
    $scope.init = init;
    $scope.logout = logout;

    init();

    ////////////////

    function init() {
      if (!AV.User.current()) {
        $scope.login();
      } else {
        $scope.cUser = AV.User.current();
      }
    }

    function logout() {
      AV.User.logOut();
      $state.reload();
    }
  }
})();