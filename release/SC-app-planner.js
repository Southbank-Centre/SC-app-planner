'use strict';

/**
 * @ngdoc overview
 * @name SC-app-planner
 * @description
 *
 * Provides the app with the ability to display planner content and features
 */
angular
  .module('SC-app-planner', []);;'use strict';

/**
 * @ngdoc controller
 * @name SC-app-planner.controller:PlannerCtrl
 * @controller
 *
 * @description
 * Loads the Sched js file for embedding the planner
 */

angular.module('SC-app-planner')
  .controller('PlannerCtrl', ["$rootScope", "$scope", "$http", "appConfig", function ($rootScope, $scope, $http, appConfig) {

    $scope.appConfig = appConfig;

    $scope.$on('$stateChangeSuccess', function() {
      
      /* jshint ignore:start */
      $http.get('assets/sched/sched-embed.js')
        .then(function(response) {

          eval(response.data);

        });
      /* jshint ignore:end */

    });

  }]);