<?php

namespace Controllers;

use Classes\Images;
use Classes\Tokens;
use Model\Tecnologia;

class TecnologiasController {

    public static function index() {
        
        $alertas = [];
        $token = new Tokens;
        $tecnologia = new Tecnologia;

        if( $token->validarToken() ) {
            
            $tecnologia = $tecnologia->all('ASC');
            http_response_code(200);
            echo json_encode($tecnologia);

        } else {
            $tecnologia->setAlerta('error', 'Token Expirado o no Valido');
            $alertas = $tecnologia::getAlertas();
            http_response_code(403);
            echo json_encode($alertas);
        }
        

    }

    public static function register() {

        $alertas = [];
        $token = new Tokens;
        $tecnologia = new Tecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                $tecnologia->setAlerta('error', 'Token Expirado o no Valido');
                $alertas = $tecnologia::getAlertas();
                http_response_code(403);
                echo json_encode($alertas);
                return;
            }

            $tecnologia->sincronizar($_POST);
            $imagen = new Images($_FILES['imagen']);

            $isValidImage = $imagen->validImage();

            if( !$isValidImage ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $alertas = $tecnologia->validarCampos();

            if( !empty($alertas) ) {
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
                echo json_encode(["data" => $new_technology]);
            }

        }

    }

    public static function update() {

        $alertas = [];
        $token = new Tokens;
        $tecnologia = new Tecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                $tecnologia->setAlerta('error', 'Token Expirado o no Valido');
                $alertas = $tecnologia::getAlertas();
                http_response_code(403);
                echo json_encode($alertas);
                return;
            }

            $tecnologia->sincronizar($_POST);

            if( !$_FILES ) {

                $find_technology = $tecnologia->find($tecnologia->id);

                if(!$find_technology) {
                    $tecnologia->setAlerta('error', 'Tecnologia no encontrada');
                    $alertas = $tecnologia::getAlertas();
                    http_response_code(400);
                    echo json_encode($alertas);
                    return;
                }
    
                $alertas = $tecnologia->validarCampos();

                if( !empty($alertas) ) {
                    http_response_code(400);
                    echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                    return;
                }
    
                $tecnologia->imagen = $find_technology->imagen;
                $resultado = $tecnologia->guardar();
    
                if( $resultado ) {
                    http_response_code(200);
                    echo json_encode(["msg" => "Actualizado correctamente", "type" => "success", "data" => $tecnologia]);
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

            $alertas = $tecnologia->validarCampos();

            if( !empty($alertas) ) {
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
                echo json_encode(["msg" => "Actualizado correctamente", "type" => "success", "data" => $tecnologia]);
            }

        }

    }

    public static function delete() {

        $alertas = [];
        $token = new Tokens;
        $tecnologia = new Tecnologia;
        $imagen = new Images;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                $tecnologia->setAlerta('error', 'Token Expirado o no Valido');
                $alertas = $tecnologia::getAlertas();
                http_response_code(403);
                echo json_encode($alertas);
                return;
            }

            $tecnologia->sincronizar($_POST);

            $find_technology = $tecnologia->find($tecnologia->id);

            if(!$find_technology) {
                $tecnologia->setAlerta('error', 'Tecnologia no encontrada');
                $alertas = $tecnologia::getAlertas();
                http_response_code(400);
                echo json_encode($alertas);
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