(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        var vm = this;
        vm.navbarCollapsed = false;
        vm.menus = [
            {label: 'Home', icon: 'home'},
            {label: 'Club / League Information', icon: 'th-large'},
            {label: 'Team(s)', icon: 'th'},
            {label: 'Players', icon: 'list'},
            {label: 'Fields', icon: 'headphones'},
            {label: 'matches', icon: 'tasks'},
            {label: 'Statistics', icon: 'stats'}
        ];
        vm.tabs = [
            {label: 'TEAM', icon: 'aaa', active: true},
            {label: 'CALENDAR', icon: 'aaa', active: false},
            {label: 'TOP', icon: 'aaa', active: false},
            {label: 'OPTIONS', icon: 'aaa', active: false}
        ];
    }
})();
