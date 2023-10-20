<?php

namespace Controllers;

use Classes\Images;
use Classes\Tokens;
use Model\Proyecto;

class ProjectsController {

    public static function index() {
        
        $token = new Tokens;
        $proyecto = new Proyecto;

        $validarToken = $token->validarToken();

        if( !$validarToken ) {
            http_response_code(401);
            echo json_encode([ "msg" => "Token no valido", "type" => "error" ]);
            return;
        }

        http_response_code(200);
        $proyecto = $proyecto->all('ASC');
        echo json_encode($proyecto);

    }

    public static function register() {

        $token = new Tokens;
        $proyecto = new Proyecto;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(401);
                echo json_encode([ "msg" => "Token no valido", "type" => "error" ]);
                return;
            }

            $proyecto->sincronizar($_POST);

            if( !$_FILES ) {

                $validarProyecto = $proyecto->validarCampos();

                if( !$validarProyecto ) {
                    http_response_code(400);
                    echo json_encode([ "msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error" ]);
                    return;
                }

                $respuesta = $proyecto->guardar();

                if( $respuesta ) {
                    $new_project = $proyecto::find($respuesta['id']);
                    http_response_code(200);
                    echo json_encode($new_project);
                    return;
                }
            }

            $imagen = new Images($_FILES['imagen']);

            $isValidImagen = $imagen->validImage();

            if( !$isValidImagen ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $validarProyecto = $proyecto->validarCampos();

            if( !$validarProyecto ) {
                http_response_code(400);
                echo json_encode(["msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error"]);
                return;
            }

            $imagen->uploadProject();
            $proyecto->imagen = $imagen->path;

            $resultado = $proyecto->guardar();

            if( $resultado ) {
                $new_project = $proyecto::find($resultado['id']);
                http_response_code(200);
                echo json_encode($new_project);
                return;
            }


        }

    }

}

?>