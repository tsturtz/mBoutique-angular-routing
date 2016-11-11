var app = angular.module('mboutiqueApp',['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/',{
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/home',{
            templateUrl: 'home.html',
            controller: 'mainController'
        })
        .when('/our_macarons',{
            templateUrl: 'our_macarons.html',
            controller: 'macaronsController'
        })
        .when('/gifts_parties',{
            templateUrl: 'gifts_parties.html',
            controller: 'giftsController'
        })
        .when('/contact',{
            templateUrl: 'contact.html',
            controller: 'contactController'
        })
        .otherwise({
            redirectTo: 'home.html'
        });
});

app.controller('mainController', function(){

}).controller('macaronsController', function(){

}).controller('giftsController', function(){

}).controller('contact', function(){

});