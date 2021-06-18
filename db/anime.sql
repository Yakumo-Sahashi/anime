-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 20-05-2021 a las 21:44:43
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `anime`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `anime_db`
--
CREATE DATABASE anime;
use anime;

CREATE TABLE `anime_db` (
  `id_anime` int(11) NOT NULL,
  `tipo` varchar(30) NOT NULL,
  `titulo` varchar(250) NOT NULL,
  `genero` varchar(300) NOT NULL,
  `descripcion` text NOT NULL,
  `fecha_estreno` date NOT NULL,
  `estado` varchar(30) NOT NULL,
  `capitulos` int(4) NOT NULL,
  `calificacion` int(1) NOT NULL,
  `fecha_registro` datetime NOT NULL,
  `img` varchar(30) NOT NULL DEFAULT 'no asignado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `anime_db`
--

INSERT INTO `anime_db` (`id_anime`, `tipo`, `titulo`, `genero`, `descripcion`, `fecha_estreno`, `estado`, `capitulos`, `calificacion`, `fecha_registro`, `img`) VALUES
(1, 'Anime', 'Shinrei Tantei Yakumo', 'Misterio,Shoujo,Sobrenatural,Terror', 'La historia se centra en un chico de secundaria , Yakumo Saitou que nació con ojos de distintos colores. Su ojo izquierdo rojo tiene la habilidad de ver espíritus y fantasmas. así con la ayuda de Haruka Ozawa empiezan la investigación de las distintas causas de los espíritus todavía vinculados con la tierra.', '2010-10-03', 'Finalizado', 13, 5, '2021-05-20 13:34:57', 'asignado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `id` int(11) NOT NULL,
  `usuario` varchar(45) COLLATE utf8_spanish_ci NOT NULL,
  `password` varchar(300) COLLATE utf8_spanish_ci NOT NULL,
  `email` varchar(200) COLLATE utf8_spanish_ci NOT NULL,
  `sexo` varchar(20) COLLATE utf8_spanish_ci NOT NULL,
  `rol` int(3) NOT NULL DEFAULT 3,
  `estado` varchar(30) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'desconectado',
  `avatar` varchar(15) COLLATE utf8_spanish_ci NOT NULL DEFAULT 'no asignado'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`id`, `usuario`, `password`, `email`, `sexo`, `rol`, `estado`, `avatar`) VALUES
(1, 'yakumo', '$2y$10$2jSIP147OFMmsZn2XOZJgOT6LfCqHWWPBpr8GsYLGFJ/xCPDobS/O', 'yakumo-sahashi@hotmail.com', 'Masculino', 1, 'conectado', 'asignado'),
(2, 'haruka', '$2y$10$OhY5lvMtJNeEo5eXSflBFuYWcGrAh/PoG85w8uQ1oI7DwZSF.qzre', 'haruka-saito@hotmail.com', 'Femenino', 3, 'desconectado', 'asignado'),
(3, 'sasuke', '$2y$10$30QPY6VxZEL38495Kp3HseWMqrZwKxjjWtFSaL2J8BElbp04hvwXm', 'sasuke-ono@hotmail.com', 'Masculino', 3, 'desconectado', 'asignado'),
(4, 'prueba', '$2y$10$DwgfO2N0VrZK3/mZULnEIOkuA.ZKqrZWWqbl9CXvVVR9555ESECuy', 'prueba@hotmail.com', 'Masculino', 2, 'desconectado', 'no asignado');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `anime_db`
--
ALTER TABLE `anime_db`
  ADD PRIMARY KEY (`id_anime`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `anime_db`
--
ALTER TABLE `anime_db`
  MODIFY `id_anime` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
