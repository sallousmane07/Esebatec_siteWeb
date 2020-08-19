<?php
namespace model;
class Article
{
	private $_id,
			$_titre,
            $_sousTitre,
            $_datePublie,
            $_dateModif,
            $_categorieArticle,
            $_signetUser;


	public function id()
    {
        return $this->_id;
    }
    public function titre(){
    	return $this->_titre;
    }
    public function sousTitre(){
    	return $this->_sousTitre;
    }
    public function datePublie(){
        return $this->_datePublie;
    }
    public function dateModif(){
        return $this->_dateModif;
    }
    public function categorieArticle(){
        return $this->_categorieArticle;
    }
    public function signetUser(){
        return $this->_signetUser;
    }
    
    public function setDatePublie($datePublie){
        $this->_datePublie=$datePublie;
    }
    public function setId($id)
    {
        $id=(int)$id;
        if (is_int($id)) {
            $this->_id=$id;
        }
    	
    }
    public function setTitre($titre){
    	$this->_titre=$titre;
    }
    public function setSousTitre($titre){
    	$this->_sousTitre=$titre;
    }

    public function setDateModif($dateModif){
    	$this->_datePublie=$dateModif;
    }

    public function setCategorieArticle($_categorieArticle){
        $this->_categorieArticle=$_categorieArticle;
    }

    public function setSignetUser($_signetUser){
        $this->_signetUser=$_signetUser;
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