<?php

namespace Classes;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;
use Model\Usuario;

class Tokens
{

    public $id_user;
    public $email_user;
    public $type_user;

    public function __construct($id_user = '', $email_user = '', $type_user = '')
    {
        $this->id_user = $id_user ?? '';
        $this->email_user = $email_user ?? '';
        $this->type_user = $type_user ?? 0;
    }

    public function crearToken()
    {
        $key = $_ENV['SECRET_PASS'];
        $now = strtotime('now');

        if (!$this->id_user || !$this->email_user || !$this->type_user) {
            echo json_encode(["Error" => "Ha ocurrido un error inesperado, ponte en contacto con el soporte tecnico."]);
            return false;
        }

        $payload = [
            'iat' => $now,
            'exp' => $now + 130,
            'id_user' => $this->id_user,
            'email_user' => $this->email_user,
            'type_user' => $this->type_user
        ];

        $jwt = JWT::encode($payload, $key, 'HS256');

        return $jwt;

    }

    public function validarToken()
    {

        $jwt = self::returnJWT();
        $key = $_ENV['SECRET_PASS'];

        try {
            JWT::decode($jwt, new Key($key, 'HS256'));
            return true;
        } catch (\Throwable $th) {
            return false;
        }


    }

    public static function reValidarToken()
    {

        $jwt = self::returnJWT();
        $key = $_ENV['SECRET_PASS'];

        $id_user = $jwt['id_user'] ?? '';
        $email_user = $jwt['email_user'] ?? '';
        $type_user = $jwt['type_user'] ?? '';

        $usuario = new Usuario;

        $existeUsuario = $usuario->where('email', $email_user);


        if (!$id_user || !$email_user || !$type_user) {
            echo json_encode(["Error" => "Ha ocurrido un error en el sistema, por favor contacta con el soporte."]);
            return;
        }

        if (!$jwt) {
            echo json_encode(["Error" => "Token no Válido"], JSON_UNESCAPED_UNICODE);
            return;
        }
        ;

        if ($existeUsuario) {
            try {
                JWT::decode($jwt, new Key($key, 'HS256'));
                $newToken = new Tokens($id_user, $email_user, $type_user);
                $token = $newToken->crearToken();
                echo json_encode(["newToken" => $token]);
                return;
            } catch (\Throwable $th) {
                echo json_encode(["Error" => "El Token ha expirado"]);
                return false;
            }
        } else {
            echo json_encode(["Error" => "Ha ocurrido un error en el sistema, por favor contacta con el soporte."]);
            return;
        }

    }

    protected static function returnJWT() {

        $jwt = apache_request_headers();

        $jwt = explode(' ', $jwt['Authorization'] ?? '') ?? '';
        $jwt = $jwt[1] ?? '';

        if (!$jwt) {
            echo json_encode(["Error" => "Token no Válido"], JSON_UNESCAPED_UNICODE);
            return;
        };

        return $jwt;

    }

}

?>