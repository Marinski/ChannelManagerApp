'use strict';
channelApp.controller('EditChannelCtrl', function EditChannelCtrl($scope, channelData) {
    $scope.saveChannel = function(channel, newChannelForm) {
        if (newChannelForm.$valid) {
        	channelData.saveChannel(channel);
            alert('Channel Saved: ' + channel.name + ' ' + channel.joined);
        } // TO DO save channel
        else {
        	alert('invalid data');
        }
    };
    $scope.cancel = function() {
        alert('cancel'); // TO DO cancel redirrect
    };
});