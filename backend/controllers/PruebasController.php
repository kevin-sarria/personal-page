<?php

namespace Controllers;

Class PruebasController {

    public static function index() {
        
        $tecnologias_anteriores = ["php", "css", "react", "mysql"];
        $tecnologias_nuevas = ["php", "html", "css"];

        $delete_technologies = array_diff($tecnologias_anteriores, $tecnologias_nuevas);
        $add_technologies = array_diff($tecnologias_nuevas, $tecnologias_anteriores);


        if( $add_technologies ) {
            echo "Add Technologies";
            var_dump($add_technologies);
        }

        if( $delete_technologies ) {
            echo "Delete Technologies";
            var_dump($delete_technologies);
        }

    }

}


?>