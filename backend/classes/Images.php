<?php

namespace Classes;

use Intervention\Image\ImageManagerStatic as Image;

class Images {

    public $name;
    public $path;
    public $type;
    public $size;
    private $tmp_name;


    public function __construct( $file = [] ) {
        $this->name = $file['name'] ?? '';
        $this->path = $file['full_path'] ?? '';
        $this->type = $file['type'] ?? '';
        $this->size = $file['size'] ?? '';
        $this->tmp_name = $file['tmp_name'] ?? '';
    }

    public function validImage() {

        if( !$this->name ) {
            return false;    
        }

        if( !$this->path ) {
            return false;    
        }

        if( $this->type !== 'image/jpg' && $this->type !== 'image/png' && $this->type !== 'image/webp' && $this->type !== 'image/avif' ) {
            return false;    
        }

        if( !$this->size ) {
            return false;    
        }

        if( !$this->tmp_name ) {
            return false;    
        }

        return true;

    }

    public function uploadTechnologyIcon() {

        // Instanciar el archivo y recortarlo
        $imagen = Image::make($this->tmp_name)->fit(100, 100);
        // Generar un nombre para la imagen
        $name_image = md5(uniqid(rand())) . '.png';
        $upload_path = IMAGES_FOLDER . 'technology/' . $name_image;

        // verificar si hay una carpeta para subir las imagenes, si no hay, crearla
        if( !is_dir(IMAGES_FOLDER . 'technology') ) {
            mkdir( IMAGES_FOLDER . 'technology');
        }

        $imagen->save($upload_path, 90, 'png');

        $this->path = '/img/technology/' . $name_image;

    }

}

?>