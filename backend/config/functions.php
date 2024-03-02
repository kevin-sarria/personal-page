<?php

function pagina_actual( $path ): bool {
    return str_contains( $_SERVER['PATH_INFO'] ?? '/', $path ) ? true : false;
}

function debbuguear( $variable ): void {
    echo "<pre>";
    var_dump($variable);
    echo "</pre>";
}

function is_auth(): bool {
    if(!isset($_SESSION)) session_start();
    return isset($_SESSION['nombre']) && !empty($_SESSION);
}

function format_projects_data( $data ) {
    $proyectosAgrupados = [];

    // Convertir el objeto a un array asociativo
    $proyectosOriginalesArray = array_values(json_decode(json_encode($data), true));

    // Inicializar un array para almacenar los resultados agrupados
    $proyectosAgrupados = array();

    // Recorrer los resultados originales
    foreach ($proyectosOriginalesArray as $project) {
        // Verificar si ya existe un proyecto con el mismo ID en el array $proyectosAgrupados
        $proyectoExistente = null;
        $indiceProyectoExistente = null;

        foreach ($proyectosAgrupados as $indice => $proyecto) {
            if ($proyecto['id'] == $project['id']) {
                $proyectoExistente = $proyecto;
                $indiceProyectoExistente = $indice;
                break;
            }
        }

        // Si no existe, agregar un nuevo proyecto con las tecnologías
        if ($proyectoExistente === null) {
            $proyectoNuevo = array(
                'id' => $project['id'],
                'nombre' => $project['nombre'],
                'descripcion' => $project['descripcion'],
                'imagen' => $project['imagen'],
                'repositorio' => $project['repositorio'],
                'web' => $project['web'],
                'tecnologias' => array()
            );

            $tecnologia = array(
                'id_tecnologia' => $project['id_tecnologia'],
                'nombre_tecnologia' => $project['nombre_tecnologia'],
                'imagen_tecnologia' => $project['imagen_tecnologia']
            );

            $proyectoNuevo['tecnologias'][] = $tecnologia;
            $proyectosAgrupados[] = $proyectoNuevo;
        } else {
            // Si ya existe, agregar todas las tecnologías al proyecto existente
            $tecnologia = array(
                'id_tecnologia' => $project['id_tecnologia'],
                'nombre_tecnologia' => $project['nombre_tecnologia'],
                'imagen_tecnologia' => $project['imagen_tecnologia']
            );

            $proyectosAgrupados[$indiceProyectoExistente]['tecnologias'][] = $tecnologia;
        }
    }

    return $proyectosAgrupados;
}

?>