(function () {
  'use strict';

  angular
    .module('user.level', [])
    .controller('UserLevelCtrl', UserLevelCtrl);

  UserLevelCtrl.$inject = ['$scope'];

  /* @ngInject */
  function UserLevelCtrl($scope) {
    $scope.init = init;
    $scope.cUser = AV.User.current();

    init();

    ////////////////

    function init() {
      query();
    }

    function query() {
      var _data = [];
      D('User')
        .select()
        .then(function(data) {
          for (var i = 0; i < data.length; i++) {
            var obj = data[i];
            if (obj.get('invite') !== '' && obj.get('invite') === $scope.cUser.get('username')) {
              _data.push(obj);
            }
          }

          $scope.data = _data;
        });
    }
  }
})();