'use strict';

channelApp.controller('ChannelDetailsCtrl', function ChannelDetailsCtrl($scope){

	var channel = {
		id: 1,
		name: 'Lapni.bg',
		image: '/img/channel/lapni-logo.png',
		joined: '03/11/2013',
		additionalInfo: {
			location: 'Bulgaria',
			targetAudience: ['Female 25-30', 'Male 31-35', 'Male 41-50'],
			audience: 5,
			male: 3,
			female: 2,
			offers: 5,
			sales: 2
		},
		offers: [{
			id: 1,
			name: 'Half Board',
			image: '/img/offer/offer-1.jpg',
			views: 4320,
			sales: 25,
			rating: 0,
			price: 42,
			status: 1
		}, {
			id: 2,
			name: 'Full Board',
			image: '/img/offer/offer-2.jpg',
			views: 1342,
			sales: 0,
			rating: 0,
			price: 55,
			status: 2
		}, {
			id: 3,
			name: 'Weekend Half Board',
			image: '/img/offer/offer-3.jpg',
			views: 3320,
			sales: 17,
			rating: 0,
			price: 45,
			status: 3
		}, {
			id: 2,
			name: 'Weekend Half',
			image: '/img/offer/offer-4.jpg',
			views: 2120,
			sales: 11,
			rating: 30,
			price: 425,
			status: 4
		}]
	};

	$scope.blueTextClass = 'blue-clr';
	$scope.greyBgClass = 'grey-bg';

	$scope.channel = channel;

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

	// $scope.boldFontCss = {
	// 	fontWeight: 'bold'
	// };

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