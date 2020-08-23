<?php

//echo ("$_SERVER[REQUEST_URI]");


//require 'public/index.php';


use service\ArticleService;
use model\Article;

    
    $article = new ArticleService("articles","Article","titre");
     
    $tab['id']=1;
    $tab['titre']="article test";
    $tab['sousTitre']="sous titre";
    
    $art = new Article($tab);
    
    $article->saveObjJson($art);






