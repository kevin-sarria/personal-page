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
            echo json_encode(["msg" => "Ha ocurrido un error inesperado, ponte en contacto con el soporte tecnico.", "type" => "error"]);
            return false;
        }

        $payload = [
            'iat' => $now,
            'exp' => $now + 7200,
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

    public static function reValidarToken( $id = '', $email = '', $type_user = '' )
    {

        $jwt = self::returnJWT();
        $key = $_ENV['SECRET_PASS'];

        if (!$id || !$email || !$type_user) {
            return false;
        }

        $usuario = new Usuario([ "id" => $id, "email" => $email, "type_user" => $type_user]);

        $existeUsuario = $usuario->where('email', $usuario->email);

        if ($existeUsuario) {
            try {
                JWT::decode($jwt, new Key($key, 'HS256'));
                $newToken = new Tokens($usuario->id, $usuario->email, $usuario->type_user);
                $token = $newToken->crearToken();
                return $token;
            } catch (\Throwable $th) {
                echo json_encode(["msg" => "El Token ha expirado", "type" => "error"]);
                exit;
            }
        } else {
            echo json_encode(["msg" => "Ha ocurrido un error en el sistema, por favor contacta con el soporte.", "type" => "error"]);
            return;
        }

    }

    protected static function returnJWT() {

        $jwt = apache_request_headers();

        $jwt = explode(' ', $jwt['Authorization'] ?? '') ?? '';
        $jwt = $jwt[1] ?? '';

        if (!$jwt) {
            echo json_encode(["msg" => "Token no Válido", "type" => "error"], JSON_UNESCAPED_UNICODE);
            exit;
        };

        return $jwt;

    }

}

?>