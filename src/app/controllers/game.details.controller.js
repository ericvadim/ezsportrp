(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameDetailsController', GameDetailsController);

    /** @ngInject */
    function GameDetailsController($rootScope) {
        var vm = this;
        vm.aabc = '';

        $rootScope.tabVisible = true;
    }
})();
