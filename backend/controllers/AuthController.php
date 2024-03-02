<?php

namespace Controllers;

use Model\Usuario;
use Classes\Email;
use Classes\Tokens;

class AuthController {

    

    public static function validarUsuario() {

        $usuario = new Usuario($_POST);

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $alertas = $usuario->validarLogin();

            if( empty($alertas) ) {
                $usuario = Usuario::where('email', $usuario->email);
                if( !$usuario || $usuario->banned || !$usuario->confirmado ) {
                    http_response_code(401);
                    echo json_encode([ "msg" => "El usuario no existe, no esta confirmado o esta baneado" , "type" => "error" ]);
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
                        http_response_code(401);
                        echo json_encode([ "msg" => "Email o password incorrectos" , "type" => "error" ]);
                        return;
                    }
                }
            }
        }
    }

    public static function userInfo() {

        $token = new Tokens;
        $usuario = new Usuario;

        $tokenValid = $token->validarToken();

        if( !$tokenValid ) {
            http_response_code(403);
            echo json_encode([ "msg" => "Token no valido" , "type" => "error" ]);
            return;
        }

        $resp = $token->desencriptarToken();

        if( !$resp ) {
            http_response_code(400);
            echo json_encode([ "msg" => "Estamos teniendo problemas para procesar su peticion, por favor contacte al soporte" , "type" => "error" ]);
            return;
        }

        $userFind = $usuario->find($resp->id_user);

        if( !$userFind ) {
            http_response_code(400);
            echo json_encode([ "msg" => "Usuario no encontrado" , "type" => "error" ]);
            return;
        }

        http_response_code(200);
        echo json_encode([ 
            "id" => $userFind->id,
            "nombres" => $userFind->nombres,
            "apellidos" => $userFind->apellidos,
            "email" => $userFind->email,
            "type_user" => $userFind->type_user
        ]);

    }

    public static function crearAdmin() {

        $admin = new Usuario;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $admin->sincronizar($_POST);

            $alertas = $admin->validarCreateSuperAdmin();

            if( empty($alertas) ) {
                $user_exist = Usuario::where('email', $admin->email);

                if( $user_exist ) {
                    echo json_encode(["msg" => "El usuario ya existe", "type" => "error"]);
                    return;
                } else {
                    $admin->type_user = 1;
                    $admin->hash_password();
                    $admin->crearToken();

                    $admin->guardar();

                    $email = new Email($admin->email, $admin->nombres . " " . $admin->apellidos, $admin->token);
                    $emailEnviado = $email->registrarUsuario();

                    echo json_encode(["msg" => $emailEnviado, "type" => "success"]);

                }

            } else {
                echo json_encode($alertas);
            }

        }
    }

    public static function reValidarToken() {

        $admin = new Usuario;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $admin->sincronizar($_POST);

            if (!$admin->id || !$admin->email || !$admin->type_user) {
                echo json_encode(["msg" => "Ha ocurrido un error en el sistema, por favor contacta con el soporte.", "type" => "error"]);
                return;
            }

            $token = Tokens::reValidarToken($admin->id, $admin->email, $admin->type_user);

            echo json_encode(["msg" => "Token Revalidado Correctamente", "type" => "success", "token" => $token]);


        }

    }

}

?>