<?php

require_once "config/app.php";


use Classes\Tokens;
use MVC\Router;
use Controllers\AuthController;

$router = new Router();

// Inicio de sesion y creacion de cuentas
$router->post('/', [AuthController::class, 'validarUsuario']);
$router->post('/crear-admin', [AuthController::class, 'crearAdmin']);

// Tokens
$router->get('/revalidar-token', [Tokens::class, 'reValidarToken']);

$router->comprobarRutas();


?>