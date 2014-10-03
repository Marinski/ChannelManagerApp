'use strict';

channelApp.controller('EditChannelCtrl', function EditChannelCtrl($scope) {
	$scope.saveChannel = function(channel) {
		alert(channel.name + " " + channel.joined); // TO DO save channel
	}

	$scope.cancel = function(channel) {
		alert('cancel'); // TO DO cancel redirrect
	}
});