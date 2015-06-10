(function () {
  'use strict';

  angular
    .module('cart.factory', [])
    .factory('Cart', Cart);

  Cart.$inject = [];

  /* @ngInject */
  function Cart() {
    var list = [];
    return {
      add: add
      , all: all
      , sort: sort
      , clear: clear
    };

    ////////////////

    function add(item) {
      list.push(item);
      return list;
    }

    function all() {
      return list;
    }

    function clear() {
      list = [];
      return list;
    }

    function sort() {
      var result = [];
      var _result = AV._.groupBy(list, function(item) {
        return item.id;
      });

      var _keys = AV._.keys(_result);

      for (var i = 0; i < _keys.length; i++) {
        var obj = _keys[i];
        var count = _result[obj].length;
        var content = _result[obj][0];
        content.count = count;
        result.push(content);
      }

      return result;
    }
  }
})();
