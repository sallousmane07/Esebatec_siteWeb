<?php 


class Autoloader
{
    static function register() {
        spl_autoload_register( array(__CLASS__, "autoload") );
    }


    static function autoload($class) {
        try {
        
            $file_namespace = str_replace("\\", "/", $class.".php");
            $tab=explode('/', $file_namespace);
            $tab[count($tab)-1]='';
            $file_parent=rtrim(implode('/',$tab),'/').'.php';
            echo 'oui';die();
         
            if (file_exists($file_namespace)) { 
              
                require_once $file_namespace;
            }
            else if(file_exists($file_parent)){
              
                require_once $file_parent;
            }
            else {               

                throw new \Exception ('Merci d\'utiliser le mot clé USE avant d\'instancier la classe: '.$class);
                
            }
        }
        catch (Exception $e) {
            //require_once "src/controller/ErrorHTTPController.php";
        }
    }
}


Autoloader::register(); 
?>