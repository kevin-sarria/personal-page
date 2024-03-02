<?php

namespace Model;

class Tecnologia extends ActiveRecord {
    protected static $tabla = "technologies";
    protected static $columnasDB = [ 'id', 'nombre', 'imagen' ];

    public function __construct($args = []) {
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? "";
        $this->imagen = $args['imagen'] ?? "";
    }

    public function validarCampos() {
        return empty($this->nombre);
    }

}

?>