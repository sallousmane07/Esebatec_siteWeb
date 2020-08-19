
<?php


abstract class Jsonservice{

    public $file;
    public $class;
    public $primaire;


    public function createObject(object $o){
        $file= "../model/Fichiers/".$file.".json";
        echo 'service';
        if(file_exists($file)){
            file_get_contents($file);        
            $obj= json_encode($o);
            return file_put_contents($file, $obj);           
        }    

        return false;

    }

    public function updateObject(object $o, Object $objUpdate, $file){
        


    }

    public function deleteObject(object $o, $file){


    }

    public function getObject(object $o, $file){

    }

    public function getAllObject(object $o, $file){

    }


    

}