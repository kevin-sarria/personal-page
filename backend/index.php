<?php

require_once "config/app.php";


use MVC\Router;
use Controllers\AuthController;
use Controllers\ProjectsController;
use Controllers\TechnologyController;

$router = new Router();

// Permitir solicitudes desde cualquier origen
header("Access-Control-Allow-Origin: *");

// Permitir solicitudes con los métodos GET, POST, PUT y DELETE
header("Access-Control-Allow-Methods: GET, POST");

// Permitir el envío de la cabecera "Authorization" y "Content-Type"
header("Access-Control-Allow-Headers: *");

// Establecer el tipo de contenido de la respuesta como JSON
header("Content-Type: application/json");

// Inicio de sesion y creacion de cuentas
$router->post('/login', [AuthController::class, 'validarUsuario']);
$router->get('/auth/me', [AuthController::class, 'userInfo']);
// $router->post('/crear-admin', [AuthController::class, 'crearAdmin']);

// Tokens
$router->post('/revalidar-token', [AuthController::class, 'reValidarToken']);

// Tecnologias
$router->get('/technologies', [TechnologyController::class, 'index']);
$router->post('/register-technology', [TechnologyController::class, 'register']);
$router->post('/update-technology', [TechnologyController::class, 'update']);
$router->post('/delete-technology', [TechnologyController::class, 'delete']);

// Proyectos
$router->get('/projects', [ProjectsController::class, 'index']);
$router->post('/register-project', [ProjectsController::class, 'register']);
$router->post('/update-project', [ProjectsController::class, 'update']);

$router->comprobarRutas();


?>