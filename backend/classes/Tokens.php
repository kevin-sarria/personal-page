<?php

namespace Classes;

use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class Tokens
{

    public function __construct(  $id_user, $email_user, $type_user )
    {
        $this->id_user = $id_user ?? '';
        $this->email_user = $email_user ?? '';
        $this->type_user = $type_user ?? 0;
    }

    public function crearToken()
    {
        $key = $_ENV['SECRET_PASS'];
        $now = strtotime('now');

        $payload = [
            'exp' => $now - 3600,
            'id_user' => $this->id_user,
            'email_user' => $this->email_user,
            'type_user' => $this->type_user
        ];

        $jwt = JWT::encode($payload, $key, 'HS256');
        
        return $jwt;

    }

    public function validarToken() {

        $jwt = apache_request_headers();
        $jwt = explode( ' ', $jwt['Authorization'] ?? '') ?? '';
        $jwt = $jwt[1] ?? '';

        $key = $_ENV['SECRET_PASS'];

        if( !$jwt ) {
            echo json_encode(["Error" => "Token no Válido"], JSON_UNESCAPED_UNICODE);
            return;
        };

        try {
            $decoded = JWT::decode($jwt, new Key($key, 'HS256'));
            debbuguear($decoded);
        } catch (\Throwable $th) {
            debbuguear($_SERVER);
            echo json_encode(["Error" => "El Token ha expirado"]);
        }

    }

}

?>