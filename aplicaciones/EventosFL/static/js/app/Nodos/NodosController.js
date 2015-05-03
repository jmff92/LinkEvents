EventosModule.config(function ($routeProvider) {
    $routeProvider.when('/VEventos', {
                controller: 'VEventosController',
                templateUrl: 'app/Nodos/VEventos.html'
            }).when('/VActEvento', {
                controller: 'VActEventoController',
                templateUrl: 'app/Nodos/VActEvento.html'
            }).when('/VCrearEvento', {
                controller: 'VCrearEventoController',
                templateUrl: 'app/Nodos/VCrearEvento.html'
            }).when('/VParticipante', {
                controller: 'VParticipanteController',
                templateUrl: 'app/Nodos/VParticipante.html'
            }).when('/VParticipantes', {
                controller: 'VParticipantesController',
                templateUrl: 'app/Nodos/VParticipantes.html'
            }).when('/VActUsuario', {
                controller: 'VActUsuarioController',
                templateUrl: 'app/Nodos/VActUsuario.html'
            }).when('/VRegistroUsuario', {
                controller: 'VRegistroUsuarioController',
                templateUrl: 'app/Nodos/VRegistroUsuario.html'
            }).when('/VInicioSesion', {
                controller: 'VInicioSesionController',
                templateUrl: 'app/Nodos/VInicioSesion.html'
            }).when('/VEvento', {
                controller: 'VEventoController',
                templateUrl: 'app/Nodos/VEvento.html'
            }).when('/VCertificado', {
                controller: 'VCertificadoController',
                templateUrl: 'app/Nodos/VCertificado.html'
            }).when('/VCredenciales', {
                controller: 'VCredencialesController',
                templateUrl: 'app/Nodos/VCredenciales.html'
            });
});

EventosModule.controller('VEventosController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VEventos().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEvento0 = function() {
        $location.path('/VEvento');
      };
      $scope.VCrearEvento1 = function() {
        $location.path('/VCrearEvento');
      };
      $scope.ACerrarSesion2 = function() {
          
        NodosService.ACerrarSesion().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEventos') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VEventos.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VActEventoController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      $scope.fEvento = {};

      NodosService.VActEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEvento1 = function() {
        $location.path('/VEvento');
      };

      $scope.fEventoSubmitted = false;
      $scope.ACrearEvento0 = function(isValid) {
        $scope.fEventoSubmitted = true;
        if (isValid) {
          
          NodosService.ACrearEvento($scope.fEvento).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VActEvento') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VActEvento.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VCrearEventoController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      $scope.fEvento = {};

      NodosService.VCrearEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEventos1 = function() {
        $location.path('/VEventos');
      };

      $scope.fEventoSubmitted = false;
      $scope.ACrearEvento0 = function(isValid) {
        $scope.fEventoSubmitted = true;
        if (isValid) {
          
          NodosService.ACrearEvento($scope.fEvento).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VCrearEvento') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VCrearEvento.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VParticipanteController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VParticipante().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VActUsuario0 = function() {
        $location.path('/VActUsuario');
      };
      $scope.ACerrarSesion1 = function() {
          
        NodosService.ACerrarSesion().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VParticipante') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VParticipante.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VParticipantesController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VParticipantes().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VParticipante0 = function() {
        $location.path('/VParticipante');
      };
      $scope.ACerrarSesion1 = function() {
          
        NodosService.ACerrarSesion().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VParticipantes') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.AVerificarAsistencia2 = function() {
          
        NodosService.AVerificarAsistencia().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VParticipantes') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VParticipantes.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VActUsuarioController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      $scope.fUsuario = {};

      NodosService.VActUsuario().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VParticipante1 = function() {
        $location.path('/VParticipante');
      };

      $scope.fUsuarioSubmitted = false;
      $scope.ARegistrarUsuario0 = function(isValid) {
        $scope.fUsuarioSubmitted = true;
        if (isValid) {
          
          NodosService.ARegistrarUsuario($scope.fUsuario).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VActUsuario') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VActUsuario.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VRegistroUsuarioController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      $scope.fUsuario = {};

      NodosService.VRegistroUsuario().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VInicioSesion1 = function() {
        $location.path('/VInicioSesion');
      };

      $scope.fUsuarioSubmitted = false;
      $scope.ARegistrarUsuario0 = function(isValid) {
        $scope.fUsuarioSubmitted = true;
        if (isValid) {
          
          NodosService.ARegistrarUsuario($scope.fUsuario).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VRegistroUsuario') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VRegistroUsuario.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VInicioSesionController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      $scope.fLogin = {};

      NodosService.VInicioSesion().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VRegistroUsuario1 = function() {
        $location.path('/VRegistroUsuario');
      };

      $scope.fLoginSubmitted = false;
      $scope.AIniciarSesion0 = function(isValid) {
        $scope.fLoginSubmitted = true;
        if (isValid) {
          
          NodosService.AIniciarSesion($scope.fLogin).then(function (object) {
              var msg = object.data["msg"];
              if (msg) flash(msg);
              var label = object.data["label"];
              if (label == '/VInicioSesion') {
                  $route.reload();
              } else {
                  $location.path(label);
              }
          });
        }
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VInicioSesion.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VEventoController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VEvento().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VActEvento0 = function() {
        $location.path('/VActEvento');
      };
      $scope.ABorrarEvento1 = function() {
          
        NodosService.ABorrarEvento().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.VParticipantes2 = function() {
        $location.path('/VParticipantes');
      };
      $scope.AReservarEvento3 = function() {
          
        NodosService.AReservarEvento().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.ACancelarReserva4 = function() {
          
        NodosService.ACancelarReserva().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.AGenerarCertificado5 = function() {
          
        NodosService.AGenerarCertificado().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};
      $scope.AGenerarCredenciales6 = function() {
          
        NodosService.AGenerarCredenciales().then(function (object) {
          var msg = object.data["msg"];
          if (msg) flash(msg);
          var label = object.data["label"];
          if (label == '/VEvento') {
              $route.reload();
          } else {
              $location.path(label);
          }
        });};

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VEvento.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VCertificadoController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VCertificado().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEvento0 = function() {
        $location.path('/VEvento');
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VCertificado.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
EventosModule.controller('VCredencialesController', 
   ['$scope', '$location', '$route', 'flash', 'ngDialog', 'NodosService',
    function ($scope, $location, $route, flash, ngDialog, NodosService) {
      $scope.msg = '';
      NodosService.VCredenciales().then(function (object) {
        $scope.res = object.data;
        for (var key in object.data) {
            $scope[key] = object.data[key];
        }
        if ($scope.logout) {
            $location.path('/');
        }
      });
      $scope.VEvento0 = function() {
        $location.path('/VEvento');
      };

$scope.__ayuda = function() {
ngDialog.open({ template: 'ayuda_VCredenciales.html',
        showClose: true, closeByDocument: true, closeByEscape: true});
}    }]);
