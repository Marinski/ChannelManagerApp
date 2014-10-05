'use strict';

channelApp.controller('ChannelDetailsCtrl', function ChannelDetailsCtrl($scope, $routeParams, channelData){

	// channelData.getChannel(2).then(function(data){
	// 	$scope.channel = data;	
	// });

	$scope.channel = channelData.getChannel($routeParams.channelId);

	$scope.blueTextClass = 'blue-clr';
	$scope.greyBgClass = 'grey-bg';

	$scope.hideInfo = true;
	$scope.showInfoText = 'View';
	$scope.showMoreInfo = showMoreInfo;

	$scope.hideTargetAudience = true;
	$scope.showTargetAudienceText = 'View';
	$scope.showTargetAudience = showTargetAudience;

	$scope.hideOfferRecords = true;
	$scope.showOfferRecordsText = 'View';
	$scope.showAndHideRecords = showAndHideRecords;

	$scope.upVoteRating = upVoteRating;
	$scope.downVoteRating = downVoteRating;

	$scope.sort = 'id';

	function showMoreInfo() {
		if ($scope.hideInfo == true) {
			$scope.showInfoText = 'Hide';
			$scope.hideInfo = false;
		}
		else {
			$scope.showInfoText = 'View';
			$scope.hideInfo = true;
		}
	}

	function showTargetAudience() {
		if ($scope.hideTargetAudience == true) {
			$scope.showTargetAudienceText = 'Hide';
			$scope.hideTargetAudience = false;
		}
		else {
			$scope.showTargetAudienceText = 'View';
			$scope.hideTargetAudience = true;
		}
	}

	function showAndHideRecords() {
		if ($scope.hideOfferRecords == true) {
			$scope.showOfferRecordsText = 'Hide';
			$scope.hideOfferRecords = false;
		}
		else {
			$scope.showOfferRecordsText = 'View';
			$scope.hideOfferRecords = true;
		}
	}

	function upVoteRating(offer) {
		offer.rating++;
	}

	function downVoteRating(offer) {
		if (offer.rating > 0) {
			offer.rating--;
		}
	}

});