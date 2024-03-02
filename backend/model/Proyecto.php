<?php

namespace Model;

class Proyecto extends ActiveRecord {

    protected static $tabla = 'projects';
    protected static $columnasDB = [ 'id', 'nombre', 'descripcion', 'imagen', 'repositorio', 'web' ];

    public function __construct($args = []) {
        
        $this->id = $args['id'] ?? null;
        $this->nombre = $args['nombre'] ?? "";
        $this->descripcion = $args['descripcion'] ?? "";
        $this->imagen = $args['imagen'] ?? "";
        $this->repositorio = $args['repositorio'] ?? "";
        $this->web = $args['web'] ?? "";
        $this->id_tecnologia = $args['id_tecnologia'] ?? "";
        $this->nombre_tecnologia = $args['nombre_tecnologia'] ?? "";
        $this->imagen_tecnologia = $args['imagen_tecnologia'] ?? "";
    }

    // Si el campo esta vacio, devuelte true haciendo referencia a que el campo esta vacio, osea que no pasa la validacion
    public function validarCampos() {

        if( empty($this->nombre) ) {
            return true;
        }

        if( empty($this->descripcion) ) {
            return true;
        }

    }

}

?>