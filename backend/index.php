<?php

require_once "config/app.php";


use MVC\Router;
use Controllers\AuthController;

$router = new Router();

// Inicio de sesion y creacion de cuentas
$router->post('/', [AuthController::class, 'validarUsuario']);
$router->post('/crear-admin', [AuthController::class, 'crearAdmin']);

// Pruebas
$router->post('/validar-token', [AuthController::class, 'validarToken']);

$router->comprobarRutas();


?>