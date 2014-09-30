'use strict';

channelApp.controller('PageCtrl', function PageCtrl($scope, author) {
	$scope.author = author;
	$scope.date = {
		year: '2014',
		month: 9,
		day: 28
	};
});