<?php

namespace Controllers;

use Model\Usuario;
use Classes\Email;
use Classes\Tokens;

class AuthController {

    

    public static function validarUsuario() {

        $alertas = [];

        $usuario = new Usuario($_POST);

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $alertas = $usuario->validarLogin();

            if( empty($alertas) ) {
                $usuario = Usuario::where('email', $usuario->email);
                if( !$usuario || $usuario->banned || !$usuario->confirmado ) {
                    Usuario::setAlerta('error', 'El usuario no existe, no esta confirmado o esta baneado');
                    $alertas = Usuario::getAlertas();
                    echo json_encode($alertas);
                    return;
                } else {
                    // Verificar que la contraseña sea correcta
                    if( $usuario->comprobar_password($_POST['password']) ) {

                        $jwt = new Tokens( $usuario->id, $usuario->email, $usuario->type_user );
                        $new_token = $jwt->crearToken();

                        if( $new_token ) {
                            echo json_encode([ 
                                "id" => $usuario->id,
                                "nombres" => $usuario->nombres,
                                "apellidos" => $usuario->apellidos,
                                "email" => $usuario->email,
                                "type_user" => $usuario->type_user,
                                "Token" => $new_token
                            ]);
                            return;
                        }
                    } else {
                        Usuario::setAlerta('error', 'Correo o contraseña incorrectos.');
                        $alertas = Usuario::getAlertas();
                        echo json_encode($alertas, JSON_UNESCAPED_UNICODE);
                    }
                }
            }
        }
    }

    public static function crearAdmin() {

        $admin = new Usuario;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $admin->sincronizar($_POST);

            $alertas = $admin->validarCreateSuperAdmin();

            if( empty($alertas) ) {
                $user_exist = Usuario::where('email', $admin->email);

                if( $user_exist ) {
                    Usuario::setAlerta("error", "El usuario ya existe");
                    $alertas = Usuario::getAlertas();
                    echo json_encode($alertas);
                    return;
                } else {
                    $admin->type_user = 1;
                    $admin->hash_password();
                    $admin->crearToken();

                    $admin->guardar();

                    $email = new Email($admin->email, $admin->nombres . " " . $admin->apellidos, $admin->token);
                    $emailEnviado = $email->registrarUsuario();

                    echo json_encode(["msg" => $emailEnviado, "success" => "true"]);

                }

            } else {
                echo json_encode($alertas);
            }

        }
    }


}

?>