(function () {
    'use strict';

    angular
        .module('app')
        .controller('PlayerController', PlayerController);

    /** @ngInject */
    function PlayerController($rootScope) {
        var vm = this;
        vm.player = {
            name: "Andres iniesta",
            club: "Club",
            city: "City name, CA",
            age: "26(11 may 1984)",
            height: "170cm",
            weight: "65kg",
            comment: "Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in.Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in.Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in.Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in.Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in.Lorem ipsum dolor sit amet, has mandamus sapientem an. Dicam accumsan definitionem nam ut, ius oblique salutandi reformidans in."
        };
        $rootScope.tabVisible = true;
    }
})();
