<?php

//j'ai enregistré dans un tableau tous les chemins que menent notre application;
//c'est comme les switch case pour les autres
$tabRs= array(
    '/Esebatec_siteWeb/'=>'accueilController.php',
    '/Esebatec_siteWeb/home'=>'accueilController.php',



    
);





$serveurRoutes= getUrlSansGet("$_SERVER[REQUEST_URI]");


    $bool=false;
    foreach ($tabRs as $key=>$value) {
        if($serveurRoutes===$key){
            $bool=true;
            require $value;
        }
    }
    if(!$bool)
        echo '404 NOT FOUND';


//s'il ne trouve aucune route; j'appel la page notFOund







//fonction qui permet de recuperer l'url que le serveur à renvoyer sans ce qu'il a passé par la methode get;
function getUrlSansGet($url){
    $i=0;
    while(substr($url,$i,1)){
        if($url[$i]=='?'){
            return substr($url ,0,$i);
        }
        $i++;
    }
    return $url;
}