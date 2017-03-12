(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($state, $rootScope) {
        var vm = this;
        vm.navbarVisible = false;


        vm.menus = [
            {label: 'Home', icon: 'home', url: 'dashboard'},
            {label: 'Club / League Information', icon: 'th-large', url: ''},
            {label: 'Team(s)', icon: 'th', url: ''},
            {label: 'Players', icon: 'list', url: ''},
            {label: 'Fields', icon: 'headphones', url: ''},
            {label: 'matches', icon: 'tasks', url: ''},
            {label: 'Statistics', icon: 'stats', url: ''}
        ];
        vm.tabs = [
            {label: 'TEAM', icon: 'th', active: true},
            {label: 'CALENDAR', icon: 'calendar', active: false},
            {label: 'TOP', icon: 'star', active: false},
            {label: 'OPTIONS', icon: 'time', active: false}
        ];

        vm.selectMenu = function (url) {
            if (url != '') {
                $state.go(url);
            } else {
                $state.go('home');
            }
            vm.navbarVisible = false;
        };

        vm.selectTab = function (ind) {
            for (var t in vm.tabs) {
                vm.tabs[t].active = (t == ind);
            }
        };

        $rootScope.tabVisible = false;
    }
})();
