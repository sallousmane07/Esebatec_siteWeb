<?php
namespace service;

use Exception;

abstract class Jsonservice{

    protected $file;
    protected $class;
    protected $key;

    

    public function saveObjJson(object $o){
       // $filename= "/BaseFile/".$this->getFile().".json";
        $filename= "BaseFile/articles.json";
     
        if(file_exists($filename)){
            $myfile=file_get_contents($filename);   
            $tabObject=json_decode($myfile);

           if(!($this->exist($tabObject,$o))){
                
                $obj= json_encode($o);
                return file_put_contents($filename, $obj); 
           }
           else
            throw new Exception("L'objet existe déja dans la base de données");

        }
        else{
            throw new Exception("Le fichier n'existe pas ");
        }   

        return false;

    }

    public function updateObjJson(object $o, Object $objUpdate, $file){     


    }

    public function deleteObjJson(object $o, $file){


    }

    public function getObject(object $o, $file){

    }

    public function getAllObject(object $o, $file){

    }


    public function exist($objects, $o){
        foreach ($objects as $key => $value) {
            if($value[$this->primaire]==$o->primaire)
                return true;
        }
        return false;

    }


    
	public function __construct($file,$class,$key)
  	{
       	$this->setFile($file);
       	$this->setClass($class);
       	$this->setKey($key);
    }
      


    




    public function getFile(){
        return $this->file;
    }
    public function getClass(){
        return $this->class;
    }
    public function getKey(){
        return $this->key;
    }

    public function setFile($file){
        $this->file=$file;
    }

    /**
     * Set the value of key
     *
     * @return  self
     */ 
    public function setKey($key)
    {
        $this->key = $key;

        return $this;
    }

    /**
     * Set the value of class
     *
     * @return  self
     */ 
    public function setClass($class)
    {
        $this->class = $class;

        return $this;
    }
}