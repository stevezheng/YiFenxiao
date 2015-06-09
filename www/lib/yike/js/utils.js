(function () {
  'use strict';

  angular
    .module('yike.utils', ['ionic'])
    .factory('$yikeUtils', $yikeUtils);

  $yikeUtils.$inject = ['$state', '$ionicPopup'];

  /* @ngInject */
  function $yikeUtils($state, $ionicPopup) {
    return {
      go: go
      , alert: alert
      , confirm: confirm
      , show: show
      , listToRow: listToRow
    };

    ////////////////

    function go(target, params, options) {
      $state.go(target, params, options);
    }

    function alert(title, template, okType) {
      return $ionicPopup.alert({
        title: title,
        template: template,
        okType: okType || 'button-balanced'
      });
    }

    function confirm(title, template, okType) {
      return $ionicPopup.confirm({
        'title': title
        , 'template': template
        , 'okType': okType ||'button-balanced'
      });
    }

    function show(title, template, scope, buttons) {
      return $ionicPopup.show({
        title: title
        , template: template
        , scope: scope
        , buttons: buttons
      });
    }

    function listToRow(originData, row) {
      var data = []
        , _data = [];
      AV._.each(originData, function(d) {
        if (_data.length < row) {
          _data.push(d);
        } else {
          data.push(_data);
          _data = [];
          _data.push(d);
        }
      });
      data.push(_data);
      return data;
    }
  }
})();
