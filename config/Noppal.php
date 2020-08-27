<?php

namespace config;


class Noppal{

   private static $tabVars=[];
   
   //recuperation des routes dans le fichier json routes.json
   private static function getRoutes(){
   $json=file_get_contents("config/routes.json");
     return json_decode($json);
     
   }



   
   
   //point d'entrée de notre application 
   public function main(){     

      $ControlMethod = self::getControllerMethod(self::findRoute("$_SERVER[REQUEST_URI]"));

      $method = $ControlMethod[1];
      $controller= $ControlMethod[0];
      
      $maClasse="controller\\".$controller;
      $control = new $maClasse();
               
     $control->$method();

      
   }  




 



   /** getControllerMethod recupere le controller et la methode à exécuter de la chaine */
   public static function getControllerMethod($chaine){
     

     $chaines = explode('@',$chaine);

      if(!isset($chaines[1]))
         $chaines[1]="start";

      return $chaines;
   }




   public static function findRoute($url){
   
      $routes=self::getRoutes();

      foreach ($routes as $keyRoute => $route) {
           if(self::findUrl($keyRoute,$url))
               return $route;          
          
      }
     echo "La page n'existe pas dans les routes";// redirection page 404 not Found
   }


   public static function findUrl($urlJson, $urlServeur){

      // a revoir si le fichier .htaccess marche
      $urlJson=explode('/',$urlJson);
      $urlServeur=explode('/',$urlServeur);
      
     // echo count($urlJson); die();  
      
      if(count($urlServeur)!=count($urlJson))
         return false;
      else{
         for($i=0;$i<count($urlJson);$i++){
            if($urlJson[$i]!=""){//pas si claire que ça (tu dois supprimer les 1ers et la derniere si l'url termine pas /)
               if($urlJson[$i][0]==='&'){
                  $nameVar=substr($urlJson[$i],1);
                  self::$tabVars[$nameVar]=$urlServeur[$i];
                  
               }
               elseif(strcmp($urlJson[$i],$urlServeur[$i])!=0){               
                  return false;            
               }
            }
         }
      }

      return true;



   }








    // recupération des variables d'Url dans tabVarUrl
   public static function getVarsUrl($chaine){
      $tabVars=[];
      
      for ($i=0; $i <strlen($chaine) ; $i++) { 
         if($chaine[$i]==='?'){
            
         }
      }
         
   }
      
   
   

 }