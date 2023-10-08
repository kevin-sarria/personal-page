<?php

namespace Classes;

use Intervention\Image\ImageManagerStatic as Image;

class Images {

    public $name;
    public $path;
    public $type;
    public $size;
    public $error;
    private $tmp_name;


    public function __construct( $file = [] ) {
        $this->name = $file['name'] ?? '';
        $this->path = $file['full_path'] ?? '';
        $this->type = $file['type'] ?? '';
        $this->size = $file['size'] ?? '';
        $this->error = $file['error'] ?? '';
        $this->tmp_name = $file['tmp_name'] ?? '';
    }

    public function validImage() {

        if( $this->type !== 'image/jpg' && $this->type !== 'image/png' && $this->type !== 'image/webp' && $this->type !== 'image/avif' || !$this->type ) {
            return false;    
        }

        return true;

    }

    public function isEmptyImage() {
        return empty($this->tmp_name);
    }

    public function uploadTechnologyIcon() {

        // Instanciar el archivo y recortarlo
        $imagen = Image::make($this->tmp_name)->resize(100, 100);
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

    public function deleteImageInServer($image_path = '') {

        if( !$image_path ) {
            return false;
        }

        // Ruta completa del archivo
        $route = BASE_FOLDER . trim($image_path);

        if( !file_exists($route) ) {
            return false;
        }

        $deleted = unlink( BASE_FOLDER . $image_path );

        if( !$deleted ) {
            return false;
        }

        return true;
        
    }

}

?>