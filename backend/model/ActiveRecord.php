<?php

namespace Model;

class ActiveRecord {

    protected static $db;
    protected static $tabla = '';
    protected static $columnasDB = [];

    // Alertas y Mensajes
    protected static $alertas = [];

    public static function setDB( $database ) {
        self::$db = $database;
    }

    // Setear un tipo de Alertas
    public static function setAlerta( $tipo, $mensaje ) {
        static::$alertas[$tipo][] = $mensaje;
    }

    // Obtener alertas
    public static function getAlertas() {
        return static::$alertas;
    }

    public function validar() {
        static::$alertas = [];
        return static::$alertas;
    }

    public static function consultarSQL($query) {

        // Consultar la base de datos
        $resultado = self::$db->query($query);

        // Iterar los resultados
        $array = [];
        while( $registro = $resultado->fetch_assoc() ) {
            $array[] = static::crearObjeto($registro);
        }

        // liberar la memoria
        $resultado->free();

        // Retornar los resultados
        return $array;

    }

    protected static function crearObjeto($registro) {

        $objeto = new static;

        foreach( $registro as $key => $value ) {
            if( property_exists( $objeto, $key ) ) {
                $objeto->$key = $value;
            }
        }

        return $objeto;

    }

    public function atributos() {
        $atributos = [];
        foreach( static::$columnasDB as $columna ) {
            if( $columna === 'id' ) continue;
            $atributos[$columna] = $this->$columna;
        }
        return $atributos;
    }

    public function sanitizarAtributos() {
        $atributos = $this->atributos();
        $sanitizado = [];
        foreach( $atributos as $key => $value ) {
            $sanitizado[$key] = self::$db->escape_string($value);
        }
        return $sanitizado;
    }

}

?>