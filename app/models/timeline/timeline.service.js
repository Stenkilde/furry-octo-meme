(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name timelineApp.service:Timeline
	 * @description
	 * # Timeline
	 * Service of the timelineApp
	 */
	angular
		.module('timelineApp')
		.service('TimelineService', TimelineService);

	/* @ngInject */
	function TimelineService($http) {
		var promise;

		var service = {
			async: function() {
				if ( !promise ) {
					promise = $http.get('timeline.json').then(function (response) {
						return response.data;
					});
				}
				return promise;
			}

		};

		return service;

		//function method() { };
	};

})();
