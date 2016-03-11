'use strict';

angular.module('esqlPluginApp')
  .factory('Repository', ['$resource', function ($resource) {

   return $resource('/repos', {}, {
      getLatestRelease: {
        method:'GET',
        url: 'https://api.github.com/repos/:owner/:repo/releases/latest',
        params : {owner: '@owner', repo: '@repo'}
      },
      get: {
          method:'GET',
          url: 'https://api.github.com/repos/exxeta/sonar-esql-plugin',
          params : {owner: '@owner', repo: '@repo'}
      }
   });
  }]);
