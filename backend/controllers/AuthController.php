<?php

namespace Controllers;

class AuthController {

    

    public function validarUsuario() {

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            $email = $_POST['email'];
            $password = $_POST['password'];

            echo $email . " " . $password;
            
        }

        echo json_encode([]);

    }

}

?>