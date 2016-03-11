"use strict";angular.module("esqlPluginApp",["ngAnimate","ngCookies","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).otherwise({redirectTo:"/"})}]),angular.module("esqlPluginApp").controller("MainCtrl",["$scope","Repository",function(a,b){a.latestRelease=b.getLatestRelease({owner:"exxeta",repo:"sonar-esql-plugin"}),a.repo=b.get({owner:"exxeta",repo:"sonar-esql-plugin"})}]),angular.module("esqlPluginApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("esqlPluginApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/main.html",'<div class="container"> <p class="container-title">{{repo.name}}</p> <hr class="linie"> <h3>Description:</h3> <p class="description">{{repo.description}}</p> <h3>Latest Release ({{latestRelease.name}}):</h3> <ul class="downloads"> <li><i class="octicon octicon-tag"></i>{{latestRelease.tag_name}}</li> <li ng-repeat="asset in latestRelease.assets"><i class="octicon octicon-package"></i><a ng-href="{{asset.browser_download_url}}">{{asset.name}}</a></li> <li><i class="octicon octicon-file-zip"></i><a ng-href="{{latestRelease.tarball_url}}">Sourcecode (tar.gz)</a></li> <li><i class="octicon octicon-file-zip"></i><a ng-href="{{latestRelease.zipball_url}}">Sourcecode (zip)</a></li> </ul> </div>')}]);