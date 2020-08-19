
<?php

     
    $article = new ArticleService();
     
    

    $tab['id']=1;
    $tab['titre']="article test";
    $tab['sousTitre']="sous titre";
    echo 'j y suis2';
    $art = new model\Article($tab);
    echo 'j y suis';
    $article->createObject($art,"articles");






