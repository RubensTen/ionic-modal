angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('adminCtrl', ['$scope', '$ionicModal', '$rootScope', '$stateParams', function($scope, $ionicModal, $rootScope, $stateParams){
   // Creacion de modal
  $ionicModal.fromTemplateUrl('templates/modals/modalChat.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalChats = modal;
  });


  $rootScope.openModal = function() {
    $scope.modalChats.show();
  };

  $scope.closeModal = function() {
    $scope.modalChats.hide();
  };


  $scope.listaChast = [
    {id : 1, titulo : 'Arturo', texto : [{visitante:true, msg : 'Hola'}, {visitante:false, msg : 'Hola en que te puedo ayudar?'}]},
    {id : 2, titulo : 'Mayra', texto : [{visitante:true, msg : 'Hola'}, {visitante:false, msg : 'Hola en que te puedo ayudar?'}]},
    {id : 3, titulo : 'Luis', texto : [{visitante:true, msg : 'Hola'}, {visitante:false, msg : 'Hola en que te puedo ayudar?'}]},
    {id : 4, titulo : 'Ali', texto : [{visitante:true, msg : 'Hola'}, {visitante:false, msg : 'Hola en que te puedo ayudar?'}]},
    {id : 5, titulo : 'Ricardo', texto : [{visitante:true, msg : 'Hola'}, {visitante:false, msg : 'Hola en que te puedo ayudar?'}]}
  ];


  if($stateParams.idChat){
    $scope.idChat = $stateParams.idChat;
    for(i in $scope.listaChast){
      if($scope.idChat == $scope.listaChast[i].id){
        $scope.conversacion = $scope.listaChast[i];
        break;
      }
    }
  }

}])