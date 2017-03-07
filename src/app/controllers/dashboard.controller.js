(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController() {
        var vm = this;
        vm.aa = 3;
    }
})();
