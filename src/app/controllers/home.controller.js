(function () {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    /** @ngInject */
    function HomeController() {
        var vm = this;
        vm.games = [
            {title: 'GAME1', score: '21'},
            {title: 'GAME2', score: '01'},
            {title: 'GAME3', score: '23'}
        ];

    }
})();
