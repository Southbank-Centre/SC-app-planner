/* jshint ignore:start */
// 'use strict'; -- Sched embed doesn't support strict mode so we can't use it in this app

/**
 * @ngdoc controller
 * @name SC-app-planner.controller:PlannerCtrl
 * @controller
 *
 * @description
 * Loads the Sched js file for embedding the planner
 */

angular.module('SC-app-planner')
  .controller('PlannerCtrl', function ($rootScope, $scope, $http, appConfig) {

    $scope.appConfig = appConfig;

    $scope.$on('$stateChangeSuccess', function() {
      
      $http.get('bower_components/SC-app-planner/release/assets/sched/sched-embed.js')
        .then(function(response) {

          eval(response.data);

        });

    });

  });
/* jshint ignore:end */