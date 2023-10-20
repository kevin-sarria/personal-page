<?php

namespace Model;

class Proyecto extends ActiveRecord {

    protected static $tabla = 'projects';
    protected static $columnasDB = [ 'id', 'nombre', 'descripcion', 'imagen', 'repositorio', 'web', 'tecnologias' ];

    public function __construct($args = []) {
        
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? "";
        $this->descripcion = $args['descripcion'] ?? "";
        $this->imagen = $args['imagen'] ?? "";
        $this->repositorio = $args['repositorio'] ?? "";
        $this->web = $args['web'] ?? "";
        $this->tecnologias = $args['tecnologias'] ?? "";
    }

    public function validarCampos() {

        if( !$this->nombre ) {
            return false;
        }

        if( !$this->descripcion ) {
            return false;
        }

        if( !$this->tecnologias ) {
            return false;
        }

        return true;

    }

}

?>