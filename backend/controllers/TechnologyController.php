<?php

namespace Controllers;

use Classes\Images;
use Classes\Tokens;
use Model\Tecnologia;

class TechnologyController {

    public static function index() {

        $tecnologia = new Tecnologia;

        $tecnologia = $tecnologia->all('ASC');
        http_response_code(200);
        echo json_encode($tecnologia);
        return;
        

    }

    public static function register() {

        $token = new Tokens;
        $tecnologia = new Tecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(403);
                echo json_encode(["msg" => "Token Expirado o no Valido", "type" => "error"]);
                return;
            }

            $tecnologia->sincronizar($_POST);

            if( !$_FILES ) {

                $validaciones = $tecnologia->validarCampos();

                if( $validaciones ) {
                    http_response_code(400);
                    echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                    return;
                }

                $resultado = $tecnologia->guardar();

                if( $resultado ) {
                    $new_technology = $tecnologia::find($resultado['id']);
                    http_response_code(200);
                    echo json_encode($new_technology);
                    return;
                }
            }

            $imagen = new Images($_FILES['imagen']);

            $isValidImage = $imagen->validImage();

            if( !$isValidImage ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $validaciones = $tecnologia->validarCampos();

            if( $validaciones ) {
                http_response_code(400);
                echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                return;
            }

            $imagen->uploadTechnologyIcon();
            $tecnologia->imagen = $imagen->path;

            $resultado = $tecnologia->guardar();

            if( $resultado ) {
                $new_technology = $tecnologia::find($resultado['id']);
                http_response_code(200);
                echo json_encode($new_technology);
                return;
            }

        }

    }

    public static function update() {

        $token = new Tokens;
        $tecnologia = new Tecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(403);
                echo json_encode(["msg" => "Token expirado o no valido", "type" => "error"]);
                return;
            }

            $tecnologia->sincronizar($_POST);

            if( !$_FILES ) {

                $find_technology = $tecnologia->find($tecnologia->id);

                if(!$find_technology) {
                    http_response_code(400);
                    echo json_encode(["msg" => "Tecnologia no encontrada", "type" => "error"]);
                    return;
                }
    
                $validaciones = $tecnologia->validarCampos();

                if( $validaciones ) {
                    http_response_code(400);
                    echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                    return;
                }
    
                $tecnologia->imagen = $find_technology->imagen;
                $resultado = $tecnologia->guardar();
    
                if( $resultado ) {
                    http_response_code(200);
                    echo json_encode($tecnologia);
                }
    

                exit;

            }


            if( !key_exists('imagen', $_FILES) ) {
                http_response_code(400);
                echo json_encode(["msg" => "Estamos teniendo problemas para procesar su peticion, por favor contacte al soporte.", "type" => "error"]);
                return;
            }

            $imagen = new Images($_FILES['imagen']); 

            if( $imagen->isEmptyImage() ) {

                http_response_code(400);
                echo json_encode(["msg" => "Formato no valido", "type" => "error"]);
                return;

            }

            $isValidImage = $imagen->validImage();

            if( !$isValidImage ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $validaciones = $tecnologia->validarCampos();

            if( $validaciones ) {
                http_response_code(400);
                echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                return;
            }

            $find_technology = $tecnologia->find($tecnologia->id);

            $imagen->deleteImageInServer($find_technology->imagen);

            $imagen->uploadTechnologyIcon();
            $tecnologia->imagen = $imagen->path;
            $resultado = $tecnologia->guardar();

            if( $resultado ) {
                http_response_code(200);
                echo json_encode($tecnologia);
            }

        }

    }

    public static function delete() {

        $token = new Tokens;
        $tecnologia = new Tecnologia;
        $imagen = new Images;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(403);
                echo json_encode(["msg" => "Token Expirado o no Valido", "type" => "error"]);
                return;
            }

            $tecnologia->sincronizar($_POST);

            $find_technology = $tecnologia->find($tecnologia->id);

            if(!$find_technology) {
                http_response_code(400);
                echo json_encode(["msg" => "Tecnologia no encontrada", "type" => "error"]);
                return;
            }

            $imagen->deleteImageInServer($find_technology->imagen);
            $result = $tecnologia->eliminar();

            if( $result ) {
                http_response_code(200);
                echo json_encode(["msg" => "Eliminado Correctamente", "type" => "success"]);
            }


        }
    }

}



?>