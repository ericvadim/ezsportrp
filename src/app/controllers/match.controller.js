(function () {
    'use strict';

    angular
        .module('app')
        .controller('MatchController', MatchController);

    /** @ngInject */
    function MatchController($rootScope) {
        var vm = this;
        vm.matches = [
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            },
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            },
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            },
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            },
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            },
            {
                team1: { name: "Team1", image: "./assets/images/temp/team1.png"},
                team2: { name: "Team2", image: "./assets/images/temp/team2.png"},
                ymd: "12/06",
                city: "City Here"
            }
        ];
        $rootScope.tabVisible = true;
    }
})();
