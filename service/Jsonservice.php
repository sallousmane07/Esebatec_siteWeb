<?php
namespace service;
            //echo "<pre>";var_dump($tabObject);echo "</pre>";die();


use Exception;

abstract class Jsonservice{

    protected $file;
    protected $class;
    protected $key;

    public function saveObjJson($o){
       
        
        if($this->isSameClass($o)){      
            $tabObject=$this->getAllObject();                    
            if(!($this->exist($tabObject,$o))){
                $attr= $this->getKey();
                $pr_key = $o->$attr();
                $tabObject[$pr_key]=(array)$o;                                   
                return $this->putContents($tabObject);
            }
            else{ 
               //throw new Exception("L'objet existe déja") ;         
                return ("error (L'objet existe déjaaaa)") ;      
            }
        }
        else{
            return 'error(pas mm classe)';
        }
          
        return false;
    }


    public function updateObjJson(object $o){  
        $contents=$this->getAllObject();   
    }

    public function deleteObjJson(object $o){
    }

    public function getObject(object $o){
        
    }

    public function getAllObject(){

        $filename= $this->getFile();
        if(!(file_exists($filename))) return new Exception('le fichier n existe pas');
        
        $myfile=file_get_contents($filename); 
       return json_decode($myfile,true);  
    }

    public function exist($objects, $o){

        if(is_null($objects))
            return false;
        else{
            $attr= $this->getKey(); 
            $pr_key = $o->$attr();        
           
            if(array_key_exists($pr_key,$objects))
             return true;
       }
        
       
    }

    public function putContents($contents){
        $c= json_encode($contents);   
        return file_put_contents($this->getFile(), $c); 
    }


    
	public function __construct($file,$class,$key)
  	{
        $this->setFile($file);
        $class="model\\".$class;
       	$this->setClass($class);
       	$this->setKey($key);
    }
      





    public function getFile(){
        return "BaseFile/".$this->file.".json";
  
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

    public function isSameClass($object){
        return get_class($object)===$this->getClass();
    }
}