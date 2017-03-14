(function () {
    'use strict';

    angular
        .module('app')
        .controller('GameController', GameController);

    /** @ngInject */
    function GameController($rootScope) {
        var vm = this;
        vm.players = [
            { title: "Player1", name: "Lionel Messi", country: "Argentina", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
            { title: "Player2", name: "Lionel Messi", country: "Argentina", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."},
            { title: "Player3", name: "Lionel Messi", country: "Argentina", comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."}
        ];
        vm.games = [
            {title: 'GAME1', score: '21'},
            {title: 'GAME2', score: '01'},
            {title: 'GAME3', score: '23'}
        ];
        $rootScope.tabVisible = true;
    }
})();
