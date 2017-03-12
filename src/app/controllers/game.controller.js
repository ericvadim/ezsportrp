(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameController', GameController);

    /** @ngInject */
    function GameController($rootScope) {
        var vm = this;
        vm.sss = [

        ];
        $rootScope.tabVisible = true;
    }
})();
