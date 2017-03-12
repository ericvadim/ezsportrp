(function () {
    'use strict';

    angular
        .module('app')
        .controller('PlayActivityController', PlayActivityController);

    /** @ngInject */
    function PlayActivityController($rootScope) {
        var vm = this;
        vm.legends = [
            {title1: "Score", title2: "0 - 0"},
            {title1: "Period", title2: "1st"},
            {title1: "Start", title2: "00:00"},
            {title1: "Finish", title2: "Game"}
        ];
        $rootScope.tabVisible = false;
    }
})();
