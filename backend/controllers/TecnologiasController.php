<?php

namespace Controllers;

use Classes\Images;
use Classes\Tokens;
use Model\Tecnologia;

class TecnologiasController {

    public static function index() {
        
        $alertas = [];
        $token = new Tokens;
        $tecnologias = new Tecnologia;

        if( $token->validarToken() ) {
            
            $tecnologias = $tecnologias->all();
            http_response_code(200);
            echo json_encode($tecnologias);

        } else {
            $tecnologias->setAlerta('error', 'Token Expirado o no Valido');
            $alertas = $tecnologias::getAlertas();
            http_response_code(403);
            echo json_encode($alertas);
        }
        

    }

    public static function register() {

        $alertas = [];
        $token = new Tokens;
        $tecnologias = new Tecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                $tecnologias->setAlerta('error', 'Token Expirado o no Valido');
                $alertas = $tecnologias::getAlertas();
                http_response_code(403);
                echo json_encode($alertas);
                return;
            }

            $tecnologias->sincronizar($_POST);
            $imagen = new Images($_FILES['imagen']);

            $isValidImage = $imagen->validImage();

            if( !$isValidImage ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $alertas = $tecnologias->validarCampos();

            if( !empty($alertas) ) {
                http_response_code(400);
                echo json_encode(["msg" => "Los campos no pueden ir Vacios", "type" => "error"]);
                return;
            }

            $imagen->uploadTechnologyIcon();
            $tecnologias->imagen = $imagen->path;

            $resultado = $tecnologias->guardar();

            if( $resultado ) {
                $new_technology = $tecnologias::find($resultado['id']);
                http_response_code(200);
                echo json_encode(["data" => $new_technology]);
            }

        }

    }
    
}

?>