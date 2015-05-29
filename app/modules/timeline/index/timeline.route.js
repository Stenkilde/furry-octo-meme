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
        templateUrl: 'modules/timeline/index/timeline.template.html',
        controller: 'Timeline',
        controllerAs: 'timeline'
      };
      $stateProvider.state(Timeline);
    });
})();
