'use strict';
var channelApp = angular.module('channelApp', ['ngResource', 'ngRoute', 'ui.bootstrap']).config(function($routeProvider) {
    $routeProvider.when('/edit', {
        templateUrl: '/templates/edit-channel.html'
    }).when('/channels/:channelId', {
        templateUrl: '/templates/channel-details.html'
    }).when('/', {
        templateUrl: '/templates/list-channels.html'
    }).otherwise({
        redirectTo: '/'
    });
}).constant('author', 'Marin Stoyanov');