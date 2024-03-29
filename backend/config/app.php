<?php

define( 'BASE_FOLDER' , $_SERVER['DOCUMENT_ROOT']);
define( 'IMAGES_FOLDER' , $_SERVER['DOCUMENT_ROOT'] . '/img/');

use Dotenv\Dotenv;
use Model\ActiveRecord;

require __DIR__ . '/../vendor/autoload.php';

$dotenv = Dotenv::createImmutable(__DIR__);
$dotenv->safeLoad();

require 'functions.php';
require 'database.php';

// Nos conectamos a la BD
ActiveRecord::setDB($db);
?>