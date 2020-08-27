<?php
namespace model;
class Service
{
	private $_id,
			$_libelle,
            $_description;
		


	public function id()
    {
        return $this->_id;
    }
    public function libelle(){
    	return $this->_libelle;
    }
    public function description(){
    	return $this->_description;
    }
   
    public function setLibelle($libelle){
        $this->_libelle=$libelle;
    }
    public function setId($id)
    {
        $id_= (int) $id;
        if (is_int($id)) {
            $this->_id=$id;
        }
    	
    }
    public function setDescription($description){
    	$this->_description=$description;
    }
    public function hydrate(array $donnees)
	{
		foreach ($donnees as $key => $value) {
		$methode='set'.ucfirst($key);
			if(method_exists($this, $methode))
			{
				$this->$methode($value);
	       	}
		}
	}
	public function __construct(array $donnees)
  	{
       	$this->hydrate($donnees);
  	}
}	

?>