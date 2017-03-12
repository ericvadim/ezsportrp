(function () {
    'use strict';

    angular
        .module('app')
        .controller('MatchLineupController', MatchLineupController);

    /** @ngInject */
    function MatchLineupController($rootScope) {
        var vm = this;
        vm.submenus = [

        ];
        $rootScope.tabVisible = true;
    }
})();
