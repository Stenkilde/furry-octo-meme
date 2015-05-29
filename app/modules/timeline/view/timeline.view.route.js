(function() {
	'use strict';

	/**
	 * @ngdoc route
	 * @name timelineApp.route:timeline
	 * @function
	 * @description
	 * # timeline
	 * Route in the timelineApp.
	 */
	angular.module('timelineApp')
		/* @ngInject */
		.config(function ($stateProvider) {

			var Description = {
				name: 'description',
				url: '/:id',
				templateUrl: 'modules/timeline/view/description.template.html',
				controller: 'TimelineView',
				controllerAs: 'timelineview'
			};
			$stateProvider.state(Description);
		});
})();
