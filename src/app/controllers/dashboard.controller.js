(function () {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController($state, $rootScope) {
        var vm = this;
        vm.submenus = [
            {title: 'Schedule', icon: 'calendar', url: 'playActivity'},
            {title: 'Training', icon: 'road', url: 'player'},
            {title: 'Scrimmage', icon: 'list-alt', url: 'stats'},
            {title: 'Matches', icon: 'random', url: 'match'},
            {title: 'Announcements', icon: 'bullhorn', url: 'game'},
            {title: 'Leaderboard', icon: 'th-list', url: ''}
        ];

        vm.selectSubMenu = function (url) {
            if (url != '') {
                $state.go(url);
            } else {
                $state.go('dashboard');
            }
            vm.navbarVisible = false;
        };

        $rootScope.tabVisible = true;
    }
})();
