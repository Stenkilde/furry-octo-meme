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
		.controller('TimelineView', TimelineView);

	/* @ngInject */
	function TimelineView(TimelineService, $stateParams) {
		/*jshint validthis: true */
		var vm = this;
		vm.getData = getData;
		vm.timelines = {};

		activate();

		function activate() {
			getData();
		}

		function getData() {
			TimelineService.async().then(function(d) {
				vm.timelines = d[$stateParams.id - 1];
				console.log(vm.timelines.description);
			});
		}
	}

})();
