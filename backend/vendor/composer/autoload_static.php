<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit8758ce06223ec5244a1367df0d460aa1
{
    public static $prefixLengthsPsr4 = array (
        'S' => 
        array (
            'Sarria\\Backend\\' => 15,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Sarria\\Backend\\' => 
        array (
            0 => __DIR__ . '/../..' . '/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit8758ce06223ec5244a1367df0d460aa1::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit8758ce06223ec5244a1367df0d460aa1::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit8758ce06223ec5244a1367df0d460aa1::$classMap;

        }, null, ClassLoader::class);
    }
}