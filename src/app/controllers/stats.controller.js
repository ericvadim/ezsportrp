(function () {
    'use strict';

    angular
        .module('app')
        .controller('StatsController', StatsController);

    /** @ngInject */
    function StatsController($rootScope) {
        var vm = this;
        vm.fghfhh = [

        ];
        $rootScope.tabVisible = true;
    }
})();
