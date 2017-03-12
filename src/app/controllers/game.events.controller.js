(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameEventsController', GameEventsController);

    /** @ngInject */
    function GameEventsController($rootScope) {
        var vm = this;
        vm.wefwefwe = [

        ];
        $rootScope.tabVisible = true;
    }
})();
