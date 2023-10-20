<?php

namespace Model;

class Tecnologia extends ActiveRecord {
    protected static $tabla = "tecnologias";
    protected static $columnasDB = [ 'id', 'nombre', 'imagen' ];

    public function __construct($args = []) {
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? "";
        $this->imagen = $args['imagen'] ?? "";
    }

    public function validarCampos() {
        if( !$this->nombre ) {
            return false;   
        }

    }

}

?>