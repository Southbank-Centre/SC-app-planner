'use strict';

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
      
      /* jshint ignore:start */
      $http.get('bower_components/SC-app-planner/release/assets/sched/sched-embed.js')
        .then(function(response) {

          eval(response.data);

        });
      /* jshint ignore:end */

    });

  });