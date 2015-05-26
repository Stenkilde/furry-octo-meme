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

      var Timeline = {
        name: 'timeline',
        url: '/',
        templateUrl: 'modules/timeline/timeline.template.html',
        controller: 'Timeline',
        controllerAs: 'timeline'
      };

	  var Description = {
		  name: 'description',
		  url: '/view/:id',
		  templateUrl: 'modules/timeline/description.template.html',
		  controller: 'Timeline',
		  controllerAs: 'timeline'
	  };

      $stateProvider.state(Timeline);
	  $stateProvider.state(Description);
    });
})();
