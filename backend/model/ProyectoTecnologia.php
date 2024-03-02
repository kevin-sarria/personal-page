<?php

namespace Model;

class ProyectoTecnologia extends ActiveRecord {
    protected static $tabla = 'technologies_projects';
    protected static $columnasDB = [ 'id', 'id_project', 'id_technology' ];

    public function __construct( $args = [] ) {
        $this->id = $args['id'] ?? null;
        $this->id_project = $args['id_project'] ?? '';
        $this->id_technology = $args['id_technology'] ?? '';
    }

    // Si el campo esta vacio, devuelte true haciendo referencia a que el campo esta vacio, osea que no pasa la validacion
    public function validarCampos() {

        if( empty($this->id_project) ) {
            return true;
        }

        if( empty($this->id_technology) ) {
            return true;
        }

    }

}

?>