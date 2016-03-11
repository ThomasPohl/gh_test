'use strict';

/**
 * @ngdoc function
 * @name ghTestJoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ghTestJoApp
 */
angular.module('esqlPluginApp')
  .controller('MainCtrl', function ($scope,Repository) {
    $scope.latestRelease = Repository.getLatestRelease({owner:'exxeta', repo:'sonar-esql-plugin'});
    $scope.repo = Repository.get({owner:'exxeta', repo:'sonar-esql-plugin'});
  });
