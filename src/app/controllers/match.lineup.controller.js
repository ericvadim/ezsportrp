(function () {
    'use strict';

    angular
        .module('app')
        .controller('MatchLineupController', MatchLineupController);

    /** @ngInject */
    function MatchLineupController($rootScope) {
        var vm = this;
        vm.players = [
            {role: 'GOL', team1: 'M.Santiago', team2: 'J.Santiago'},
            {role: 'DEF', team1: 'L.Lameira', team2: 'M.Andres'},
            {role: 'DEF', team1: 'P.Silva', team2: 'T.Benito'},
            {role: 'DEF', team1: 'R.Falcao', team2: 'F.Cuevas'},
            {role: 'DEF', team1: 'R.Da Silva', team2: 'R.morend'},
            {role: 'MID', team1: 'M.Santiago', team2: 'J.Santiago'},
            {role: 'MID', team1: 'L.Lameira', team2: 'M.Andres'},
            {role: 'MID', team1: 'P.Silva', team2: 'T.Benito'},
            {role: 'OFF', team1: 'R.Falcao', team2: 'F.Cuevas'},
            {role: 'OFF', team1: 'R.Da Silva', team2: 'R.Moreno'},
            {role: 'OFF', team1: 'R.Arastes', team2: 'J.Santiago'}
        ];
        $rootScope.tabVisible = true;
    }
})();
