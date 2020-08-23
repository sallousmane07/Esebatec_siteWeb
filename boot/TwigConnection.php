<?php
namespace boot;

use Twig\Environment as Environment;
use Twig\Loader\FilesystemLoader as FilesystemLoader;

class TwigConnection{

    private static $_twig= null;

    public static function getInstance($name_view){
        if(self::$_twig==null){
            $loader = new FilesystemLoader($name_view);
            self::$_twig= new Environment($loader);	
        }
             

        return self::$_twig;
    }



}