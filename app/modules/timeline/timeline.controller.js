(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name timelineApp.controller:TimelineCtrl
	 * @description
	 * # TimelineCtrl
	 * Controller of the timelineApp
	 */
	angular
		.module('timelineApp')
		.controller('Timeline', Timeline);

	/* @ngInject */
	function Timeline($http, $scope) {
		/*jshint validthis: true */
		var vm = this;

		activate();

		function activate() {
			$http.get('timeline.json')
			.success(function(response) {
				$scope.timelines = response;
			});
		}
	};

})();
