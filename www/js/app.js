// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.telaCriarConteudo', {
    url: '/telaCriarConteudo',
    views: {
      'menuContent': {
        templateUrl: 'templates/telaCriarConteudo.html',
        controller: 'AppController'
      }
    }
  })

  .state('app.telaEntrar', {
    url: '/telaEntrar',
    views: {
      'menuContent': {
        templateUrl: 'templates/telaEntrar.html',
        controller: 'AppController'
      }
    }
  })

  .state('app.telaVouncher', {
    url: '/telaVouncher',
    views: {
      'menuContent': {
        templateUrl: 'templates/telaVouncher.html',
        controller: 'AppController'
      }
    }
  })

    .state('app.telaCadastro', {
      url: '/telaCadastro',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaCadastro.html'
        }
      }
    })

    .state('app.telaPerfil', {
      url: '/telaPerfil',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaPerfil.html',
          controller: 'AppController'
        }
      }
    })

    .state('app.telaMapa', {
      url: '/telaMapa',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaMapa.html',
          controller: 'AppController'
        }
      }
    })
    .state('app.telaRestaurante', {
      url: '/telaRestaurante',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaRestaurante.html',
        }
      }
    })

    .state('app.telaVouncherError', {
      url: '/telaVouncherError',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaVouncherError.html'
        }
      }
    })

    .state('app.telaRestaurantes', {
      url: '/telaRestaurantes',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaRestaurantes.html'
        }
      }
    })

    .state('app.telaLocal', {
      url: '/telaLocal',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaLocal.html'
        }
      }
    })

    .state('app.telaCidade', {
      url: '/telaCidade',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaCidade.html',
          controller: 'AppController'
        }
      }
    })

    .state('app.telaPT', {
      url: '/telaPT',
      views: {
        'menuContent': {
          templateUrl: 'templates/telaPT.html',
          controller: 'AppController'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/telaEntrar');
});
