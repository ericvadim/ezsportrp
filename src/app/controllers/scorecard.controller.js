(function () {
    'use strict';

    angular
        .module('app')
        .controller('ScorecardController', ScorecardController);

    /** @ngInject */
    function ScorecardController($rootScope) {
        var vm = this;
        vm.dfghd = [

        ];
        $rootScope.tabVisible = true;
    }
})();
