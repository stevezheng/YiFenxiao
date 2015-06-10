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
    $scope.fans = fans;
    $scope.withdraw = withdraw;
    $scope.share = share;
    $scope.favourite = favourite;

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

    function fans() {
      $yikeUtils.alert('提示', '我的粉丝暂未开放，敬请期待');
    }

    function withdraw() {
      $yikeUtils.alert('提示', '提现功能暂未开发，敬请期待');
    }

    function share() {
      $yikeUtils.alert('提示', '分享功能暂未开发，敬请期待');
    }

    function favourite() {
      $yikeUtils.alert('提示', '您暂无任何收藏');
    }
  }
})();