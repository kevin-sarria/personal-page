-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 02-03-2024 a las 04:44:13
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para personal_page
CREATE DATABASE IF NOT EXISTS `personal_page` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `personal_page`;

-- Volcando estructura para tabla personal_page.projects
CREATE TABLE IF NOT EXISTS `projects` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(60) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` text DEFAULT NULL,
  `repositorio` text DEFAULT NULL,
  `web` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `projects`
--

INSERT INTO `projects` (`id`, `nombre`, `descripcion`, `imagen`, `repositorio`, `web`) VALUES
(42, 'Personal Page', 'Portafolio de proyectos personales, lo hice principalmente para afianzar conocimientos y mejorar como dev, basándome en los aprendizajes del instructor Juan pablo de la Torre Valdez para el Backend con PHP y el instructor Fernando Herrera para el tema del Frontend con React, cabe aclarar que he aprendido bastante tanto de la creación de un API con php con el patrón MVC y Active Record, también cabe resaltar que, por parte de React, he aprendido a usar de mejor manera gestores de estado como Redux y el propio Context de React, aplicando un poco de arquitectura limpia e integrando tambien Tailwind CSS al proyecto', '/img/project/2ba0019051b2eb802748431f3d9727d5.png', 'https://github.com/kevin-sarria/personal-page', 'https://portafolio-kevin-sarria.netlify.app/'),
(45, 'Maps App', 'Aplicación que integra una API de Mapas, hecha con React + TypeScript y algo de CSS básico', '/img/project/77b812e55b619d658117826892bb2336.png', 'https://github.com/kevin-sarria/curso_react_avanzado/tree/app-mapbox', 'https://map-app-kevin-sarria.netlify.app/'),
(46, 'Giff App', 'Gif App es una pagina para buscar gifs mediante una caja de texto, la  cual al dar en la tecla \"Enter\", según la palabra que hayas puesto, intentara encontrar algún gif que tenga que ver con esa palabra, este proyecto fue sacado del curso de React de Fernando Herrera', '/img/project/5f737e49c6a2354e73721368af5a1adc.png', 'https://github.com/kevin-sarria/curso_react/tree/main/04-gif-expert-app', 'https://gif-expert-kevin-sarria.netlify.app/'),
(47, 'Ambulancias App', 'Ambulancias app es un proyecto hecho para el Hospital E.S.E San Jose del Guaviare, principalmente usado en el área de ambulancias, el cual permite llevar un registro de suministros gastados, cambiados, pacientes a los cuales fueron suministrados y un historial en el cual se pueden ver los usuarios que gastaron o cambiaron el medicamento o dispositivo medico, además cuenta con un sistema tipo carpetas, el cual permite organizar, subir y eliminar archivos pdf que puede llevar cada ambulancia, lo cual les permite mas fácil acceso a la información de la ambulancia en caso de tener que necesitar un documento de esos urgentemente y no tenerlo en físico, además el sistema cuenta con registro de usuarios mediante el usuario administrador y por ultimo, también puede registrar y modificar nuevos o antiguos medicamentos o dispositivos médicos, también sigue el lineamiento de la semaforización que pidió Invima para el sistema, es un sistema que hice hace mucho cuando recién empezaba en el mundo de la programación pero es uno de mis proyectos mas satisfactorios de haber realizado', '/img/project/731ebd8892f63fb4fe10f2f56b5db129.png', 'https://github.com/kevin-sarria/ambulancias-app', 'https://ambulancias-app.000webhostapp.com/'),
(48, 'AppSalon', 'App Salón es un proyecto hecho principalmente en PHP con SASS, es un proyecto del curso de Desarrollo Web Completo del instructor Juan Pablo de la Torre Valdez, es un proyecto que su objetivo principal es el apartado de citas para salones de belleza o barberías, bastante bueno para aprender y aplicar conceptos.', '/img/project/e0fb12d898a68c6b2d8a8e7a95c0e442.png', 'https://github.com/kevin-sarria/appsalon', '/'),
(49, 'UpTask', 'Uptask es un proyecto del curso de Desarrollo Web Completo del instructor Juan Pablo de la Torre Valdez, es un proyecto para la administración de tareas mediante unos marcadores donde nos deja saber si la tarea esta pendiente, en proceso o ya esta terminada.', '/img/project/e23c5b8d7807d120c2b3e24ec6669a8d.png', 'https://github.com/kevin-sarria/uptask', '/'),
(50, 'DevWebCamp', 'DevWebCamp es un proyecto del curso de Desarrollo Web Completo del instructor Juan Pablo de la Torre Valdez, es el Proyecto mas completo de este curso, donde incluye, desde algo sencillo como lo es la maquetación y los estilos CSS hasta el procesamiento de pagos online mediante la API de PayPal, un Proyecto bastante completo y complejo, una gran experiencia de desarrollo.', '/img/project/210873dd2b0d917ecb044bbe2737e8f4.png', 'https://github.com/kevin-sarria/devwebcamp', '/');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `technologies`
--

CREATE TABLE `technologies` (
  `id` int(3) NOT NULL,
  `nombre` varchar(30) NOT NULL,
  `imagen` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- La exportación de datos fue deseleccionada.

-- Volcando estructura para tabla personal_page.technologies_projects
CREATE TABLE IF NOT EXISTS `technologies_projects` (
  `id` int(3) NOT NULL AUTO_INCREMENT,
  `id_project` int(3) NOT NULL,
  `id_technology` int(3) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_project` (`id_project`),
  KEY `id_technology` (`id_technology`),
  CONSTRAINT `technologies_projects_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`),
  CONSTRAINT `technologies_projects_ibfk_2` FOREIGN KEY (`id_technology`) REFERENCES `technologies` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `technologies`
--

INSERT INTO `technologies` (`id`, `nombre`, `imagen`) VALUES
(9, 'PHP', '/img/technology/79a30a06d60788ef23172f3aef60745d.png'),
(13, 'HTML', '/img/technology/d5894007438d26971ea4fa4a38fc7bbf.png'),
(14, 'CSS', '/img/technology/c8c6f94d57e86d9e2a45b9e1b0e5a29a.png'),
(15, 'JavaScript', '/img/technology/413fa57167e59266ab897bad353738ee.png'),
(16, 'TypeScript', '/img/technology/19dccfbd8d09b4fd9742f1d2e231b65c.png'),
(17, 'React', '/img/technology/9bd1fe8ba5c7c988a963175f8968f474.png'),
(18, 'Git', '/img/technology/474d5444ce053087d7dc6a9ee0736597.png'),
(19, 'Tailwind', '/img/technology/6383f3f33610f31701a22713c1cff761.png'),
(20, 'Material UI', '/img/technology/e7124f413bb0b29315979263e43dd792.png'),
(21, 'MySQL', '/img/technology/9785f53d3b48cdbd2ca60e425ed0ebb3.png'),
(23, 'Moment JS', '/img/technology/42eb3884c30227450a1cc4c084a8e718.png'),
(24, 'SASS', '/img/technology/d2e9122e62f31ff10cd90c58e25d6f34.png');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `technologies_projects`
--

CREATE TABLE `technologies_projects` (
  `id` int(3) NOT NULL,
  `id_project` int(3) DEFAULT NULL,
  `id_technology` int(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `technologies_projects`
--

INSERT INTO `technologies_projects` (`id`, `id_project`, `id_technology`) VALUES
(52, 42, 17),
(53, 42, 21),
(62, 42, 19),
(64, 42, 9),
(66, 42, 18),
(68, 45, 17),
(69, 45, 16),
(70, 45, 14),
(71, 45, 18),
(72, 46, 17),
(73, 46, 14),
(74, 46, 13),
(75, 46, 18),
(76, 47, 13),
(77, 47, 14),
(78, 47, 15),
(79, 47, 9),
(80, 47, 21),
(81, 47, 18),
(82, 47, 23),
(83, 48, 13),
(84, 48, 14),
(85, 48, 24),
(86, 48, 15),
(87, 48, 9),
(88, 48, 21),
(89, 49, 13),
(90, 49, 14),
(91, 49, 24),
(92, 49, 15),
(93, 49, 9),
(94, 49, 21),
(95, 50, 13),
(96, 50, 14),
(97, 50, 24),
(98, 50, 15),
(99, 50, 9),
(100, 50, 21);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(3) NOT NULL,
  `nombres` varchar(30) NOT NULL,
  `apellidos` varchar(30) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(60) NOT NULL,
  `type_user` int(1) NOT NULL,
  `banned` int(1) NOT NULL,
  `token` varchar(60) DEFAULT NULL,
  `confirmado` int(1) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `nombres`, `apellidos`, `email`, `password`, `type_user`, `banned`, `token`, `confirmado`) VALUES
(2, ' Camilo', 'Bravo', 'camilo.bravo.2050@gmail.com', '$2y$10$510laAvdk76OWxmnNpxdZOG64n5FqK0utTHbHCy0fr/sjZcnqRJK2', 1, 0, NULL, 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `projects`
--
ALTER TABLE `projects`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `technologies`
--
ALTER TABLE `technologies`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `technologies_projects`
--
ALTER TABLE `technologies_projects`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_project` (`id_project`),
  ADD KEY `id_technology` (`id_technology`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `projects`
--
ALTER TABLE `projects`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT de la tabla `technologies`
--
ALTER TABLE `technologies`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `technologies_projects`
--
ALTER TABLE `technologies_projects`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=101;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `technologies_projects`
--
ALTER TABLE `technologies_projects`
  ADD CONSTRAINT `technologies_projects_ibfk_1` FOREIGN KEY (`id_project`) REFERENCES `projects` (`id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `technologies_projects_ibfk_2` FOREIGN KEY (`id_technology`) REFERENCES `technologies` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
