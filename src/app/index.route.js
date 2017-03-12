(function () {
    'use strict';

    angular
        .module('app')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/views/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            })
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'app/views/dashboard.html',
                controller: 'DashboardController',
                controllerAs: 'vm'
            })
            .state('playActivity', {
                url: '/play_activity',
                templateUrl: 'app/views/play-activity.html',
                controller: 'PlayActivityController',
                controllerAs: 'vm'
            })
            .state('player', {
                url: '/player',
                templateUrl: 'app/views/player.html',
                controller: 'PlayerController',
                controllerAs: 'vm'
            })
            .state('stats', {
                url: '/stats',
                templateUrl: 'app/views/stats.html',
                controller: 'StatsController',
                controllerAs: 'vm'
            })
            .state('match', {
                url: '/match',
                templateUrl: 'app/views/match.html',
                controller: 'MatchController',
                controllerAs: 'vm'
            })
            .state('game', {
                url: '/game',
                templateUrl: 'app/views/game.html',
                controller: 'GameController',
                controllerAs: 'vm'
            })
            .state('matchLineup', {
                url: '/match_lineup',
                templateUrl: 'app/views/match-lineup.html',
                controller: 'MatchLineupController',
                controllerAs: 'vm'
            })
            .state('gameDetails', {
                url: '/game_details',
                templateUrl: 'app/views/game-details.html',
                controller: 'GameDetailsController',
                controllerAs: 'vm'
            })
            .state('SelectLineup', {
                url: '/select_lineup',
                templateUrl: 'app/views/select-lineup.html',
                controller: 'SelectLineupController',
                controllerAs: 'vm'
            })
            .state('scorecard', {
                url: '/scorecard',
                templateUrl: 'app/views/scorecard.html',
                controller: 'ScorecardController',
                controllerAs: 'vm'
            })
            .state('gameEvents', {
                url: '/game_events',
                templateUrl: 'app/views/game-events.html',
                controller: 'GameEventsController',
                controllerAs: 'vm'
            });

        $urlRouterProvider.otherwise('/');
    }

})();
