'use strict';
channelApp.controller('ListChannelsCtrl', function ListChannelsCtrl($scope, channelData) {
    
    $scope.search = 'search channel...';
    $scope.channels = channelData.getAllChannels();
});