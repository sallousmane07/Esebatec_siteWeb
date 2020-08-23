<?php

namespace config;


class Noppal{




   //recuperation des routes dans le fichier json routes.json
   private static function getRoutes(){
      $json=file_get_contents("config/routes.json");
     return json_decode($json);
     
   }



   
   
   //point d'entrée de notre application 
   public function main(){     

      $ControlMethod = self::getControllerMethod(self::findUrl("$_SERVER[REQUEST_URI]"));

      $method = $ControlMethod[1];
      $controller= $ControlMethod[0];

      $maClasse="controller\\".$controller;
      $control = new $maClasse();
               
     $control->$method();

      
   }  




 



   /** getControllerMethod recupere le controller et la methode à exécuter de la chaine */
   public static function getControllerMethod($chaine){
     
      
      /*
      $trouve=true;
      

      for ($i=0; $i<strlen($chaine) ; $i++) { 
         
         if($chaine[$i]==='@'){
            self::$method=substr($chaine,$i+1);
            self::$controller=substr($chaine,0,$i);
            $trouve=false;  

         break;    
         }
      }
      
      if($trouve==true){         
         self::$controller=$chaine;
         self::$method="start";
      }   */



     $chaines = explode('@',$chaine);

      if(!isset($chaines[1]))
         $chaines[1]="start";

      return $chaines;
   }




   public static function findUrl($url){
   
      $routes=self::getRoutes();

      foreach ($routes as $keyRoute => $route) {
           if($keyRoute===$url)
               return $route;
            else 
               return "HomeController@home";

              //echo "La page n'existe pas dans les routes";// redirection page 404 not Found
          
      }
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