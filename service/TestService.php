<?php

//echo ("$_SERVER[REQUEST_URI]");


//require 'public/index.php';


use service\ArticleService;
use model\Article;

    
    $article = new ArticleService();
     
    $tab['id']=2;
    $tab['titre']="dk Deux";
    $tab['sousTitre']="le sous titre je ne sais pas";
    
    
    $art = new Article($tab);
    
    $article->saveObjJson($art);







