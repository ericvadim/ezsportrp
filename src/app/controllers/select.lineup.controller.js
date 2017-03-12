(function () {
    'use strict';

    angular
        .module('app')
        .controller('SelectLineupController', SelectLineupController);

    /** @ngInject */
    function SelectLineupController($rootScope) {
        var vm = this;
        vm.fgfd = [

        ];
        $rootScope.tabVisible = true;
    }
})();
