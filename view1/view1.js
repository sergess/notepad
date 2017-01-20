'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope) {
  $scope.currentPersonId = -1;
  $scope.phonebook = [
    {
      name: 'Чапаев Василий Иванович',
      phone: '+123-052-5555-234',
      email: 'vasiliy@chapaes.ru'
    },
    {
      name: 'Иванов Василий Иванович',
      phone: '+123-111-5555-444',
      email: 'vasiliy@ivanov.ru'
    },
    {
      name: 'Иванов Иван Иванович',
      phone: '+555-555-5555-234',
      email: 'ivan@ivanov.ru'
    }
  ];
  $scope.deletePerson = function( id ) {
    $scope.phonebook.splice( id, 1 );
  };
  $scope.editPerson = function ( id ) {
    $scope.currentPersonId = id;
    $scope.name = $scope.phonebook[id].name;
    $scope.phone = $scope.phonebook[id].phone;
    $scope.email = $scope.phonebook[id].email;
  };
  $scope.addNewPerson = function() {
    if ( $scope.name != '' ) {
      $scope.phonebook.push({
        name: $scope.name,
        phone: $scope.phone,
        email: $scope.email
      });
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
    }
  };
  $scope.savePerson = function() {
    if( $scope.currentPersonId > -1 ){
      var id = $scope.currentPersonId;
      $scope.phonebook[id].name = $scope.name;
      $scope.phonebook[id].phone = $scope.phone;
      $scope.phonebook[id].email = $scope.email;
      $scope.name = '';
      $scope.phone = '';
      $scope.email = '';
      $scope.currentPersonId = -1;
    }
  }
}]);