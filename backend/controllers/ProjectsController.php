<?php

namespace Controllers;

use Classes\Images;
use Classes\Tokens;
use Model\Proyecto;
use Model\ProyectoTecnologia;

class ProjectsController {

    public static function index() {
        $proyecto = new Proyecto;

        http_response_code(200);
        $resultados = $proyecto->listarProyectos();

        // Formateamos el array para que nos devuelva la informacion como la necesitamos
        $data_formatted = format_projects_data($resultados);

        // Devolver los resultados agrupados
        echo json_encode($data_formatted);

    }

    public static function register() {

        $token = new Tokens;
        $proyecto = new Proyecto;
        $proyectoTecnologia = new ProyectoTecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(401);
                echo json_encode([ "msg" => "Token no valido", "type" => "error" ]);
                return;
            }

            $proyecto->sincronizar($_POST);

            if( !$_FILES ) {

                $isEmpty = $proyecto->validarCampos();

                if( $isEmpty || empty($_POST['tecnologias']) ) {
                    http_response_code(400);
                    echo json_encode([ "msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error" ]);
                    return;
                }

                $respuesta = $proyecto->guardar();

                if( $respuesta ) {
                    foreach( explode(",", $_POST['tecnologias']) as $tecnology ) {
                        $proyectoTecnologia->sincronizar([ "id_project" => $respuesta['id'], "id_technology" => $tecnology ]);
                        $proyectoTecnologia->guardar();
                    }
                    $new_project = $proyecto->buscarProyecto($respuesta['id']);

                    $data_formatted = format_projects_data($new_project);

                    http_response_code(200);
                    echo json_encode($data_formatted[0]);
                    return;
                }
            }

            $imagen = new Images($_FILES['imagen']);

            $isValidImagen = $imagen->validImage();

            if( !$isValidImagen ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $isEmpty = $proyecto->validarCampos();

            if( $isEmpty || empty($_POST['tecnologias']) ) {
                http_response_code(400);
                echo json_encode(["msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error"]);
                return;
            }

            $imagen->uploadProject();
            $proyecto->imagen = $imagen->path;

            $resultado = $proyecto->guardar();

            if( $resultado ) {
                foreach( explode(",", $_POST['tecnologias']) as $tecnology ) {
                    $proyectoTecnologia->sincronizar([ "id_project" => $resultado['id'], "id_technology" => $tecnology ]);
                    $proyectoTecnologia->guardar();
                }
                $new_project = $proyecto->buscarProyecto($resultado['id']);

                $data_formatted = format_projects_data($new_project);

                http_response_code(200);
                echo json_encode($data_formatted[0]);
                return;
            }


        }

    }

    public static function update() {

        $token = new Tokens;
        $proyecto = new Proyecto;
        $proyectoTecnologia = new ProyectoTecnologia;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(401);
                echo json_encode([ "msg" => "Token no valido", "type" => "error" ]);
                return;
            }

            $proyecto->sincronizar($_POST);
            $proyecto_actual = format_projects_data($proyecto->buscarProyecto($proyecto->id))[0];
            $tecnologias_anteriores = [];

            if( !isset($_POST['tecnologias']) ) {
                http_response_code(400);
                echo json_encode([ "msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error" ]);
                return;
            }
            
            foreach( $proyecto_actual["tecnologias"] as $tecnologias ) {
                array_push($tecnologias_anteriores, $tecnologias["id_tecnologia"]);
            }

            $tecnologias_nuevas = explode(",", $_POST['tecnologias']);
            
            $tecnologias_borradas = array_diff($tecnologias_anteriores, $tecnologias_nuevas);
            $tecnologias_agregadas = array_diff($tecnologias_nuevas, $tecnologias_anteriores);

            if( !$_FILES ) {

                $find_project = $proyecto->find($proyecto->id);

                if( !$find_project ) {
                    http_response_code(400);
                    echo json_encode([ "msg" => "Proyecto no encontrado", "type" => "error" ]);
                    return;
                }

                $isEmpty = $proyecto->validarCampos();

                if( $isEmpty ) {
                    http_response_code(400);
                    echo json_encode([ "msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error" ]);
                    return;
                }

                $proyecto->imagen = $find_project->imagen;
                $respuesta = $proyecto->guardar();

                if( $tecnologias_borradas ) {
                    // Borrar las tecnologias del proyecto en especifico en la base de datos
                    foreach( $tecnologias_borradas as $technology ) {
                        $proyectoTecnologia->sincronizar([ "id_project" => $proyecto->id, "id_technology" => $technology ]);
                        $proyectoTecnologia->eliminarProyectoTecnologia( $proyecto->id, $technology );
                    }
                }
    
                if( $tecnologias_agregadas ) {
                    // Agregar las nuevas tecnologias al proyecto en especifico en la base de datos
                    foreach( $tecnologias_agregadas as $technology ) {
                        $proyectoTecnologia->sincronizar([ "id_project" => $proyecto->id, "id_technology" => $technology ]);
                        $proyectoTecnologia->guardar();
                    }
                }

                if( $respuesta ) {
                    $this_project = $proyecto->buscarProyecto($proyecto->id);
                    $this_project = format_projects_data($this_project);
                    http_response_code(200);
                    echo json_encode($this_project[0]);
                    return;
                }
            }

            if( !key_exists('imagen', $_FILES) ) {
                http_response_code(400);
                echo json_encode(["msg" => "Estamos teniendo problemas para procesar su peticion, por favor contacte al soporte.", "type" => "error"]);
                return;
            }

            $imagen = new Images($_FILES['imagen']);

            if( $imagen->isEmptyImage() ) {

                http_response_code(400);
                echo json_encode(["msg" => "Formato no valido", "type" => "error"]);
                return;

            }

            $isValidImagen = $imagen->validImage();

            if( !$isValidImagen ) {
                http_response_code(415);
                echo json_encode(["msg" => "Imagen no valida", "type" => "error"]);
                return;
            }

            $isEmpty = $proyecto->validarCampos();

            if( $isEmpty ) {
                http_response_code(400);
                echo json_encode(["msg" => "Debes rellenar todos los campos Obligatorios", "type" => "error"]);
                return;
            }

            $find_project = $proyecto->find($proyecto->id);

            $imagen->deleteImageInServer($find_project->imagen);

            $imagen->uploadProject();
            $proyecto->imagen = $imagen->path;
            $resultado = $proyecto->guardar();

            if( $tecnologias_borradas ) {
                // Borrar las tecnologias del proyecto en especifico en la base de datos
                foreach( $tecnologias_borradas as $technology ) {
                    $proyectoTecnologia->sincronizar([ "id_project" => $proyecto->id, "id_technology" => $technology ]);
                    $proyectoTecnologia->eliminarProyectoTecnologia( $proyecto->id, $technology );
                }
            }

            if( $tecnologias_agregadas ) {
                // Agregar las nuevas tecnologias al proyecto en especifico en la base de datos
                foreach( $tecnologias_agregadas as $technology ) {
                    $proyectoTecnologia->sincronizar([ "id_project" => $proyecto->id, "id_technology" => $technology ]);
                    $proyectoTecnologia->guardar();
                }
            }

            if( $resultado ) {
                $this_project = $proyecto->buscarProyecto($proyecto->id);
                $this_project = format_projects_data($this_project);
                http_response_code(200);
                echo json_encode($this_project[0]);
                return;
            }


        }

    }

    public static function delete() {

        $token = new Tokens;
        $proyecto = new Proyecto;
        $imagen = new Images;

        if( $_SERVER['REQUEST_METHOD'] === 'POST' ) {

            if( !$token->validarToken() ) {
                http_response_code(403);
                echo json_encode(["msg" => "Token Expirado o no Valido", "type" => "error"]);
                return;
            }

            $proyecto->sincronizar($_POST);

            if( !$proyecto->id ) {
                http_response_code(400);
                echo json_encode(["msg" => "Error en la Consulta, por favor vuelva a intentarlo", "type" => "error"]);
                return;
            }

            $find_project = $proyecto->find($proyecto->id);

            if(!$find_project || !$proyecto->id) {
                http_response_code(400);
                echo json_encode(["msg" => "Proyecto no encontrado", "type" => "error"]);
                return;
            }

            $imagen->deleteImageInServer($find_project->imagen);
            $result = $proyecto->eliminar();

            if( $result ) {
                http_response_code(200);
                echo json_encode(["msg" => "Eliminado Correctamente", "type" => "success"]);
            }


        }
    }

}

?>