'use strict';
channelApp.directive('searchChannels', function() {
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        scope: {
        	search: '='
        }, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        templateUrl: '/templates/directives/search-channel.html',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    };
});