<?php
namespace boot;

use PDO;

class MysqlConnection{

    private static $_db=null;

    static function  getInstance(){
        
        if(self::$_db==null){

            $json = file_get_contents('config/connexionBD.json');
            $json_data = json_decode($json,true);
            $mysql=$json_data["projet_name"];
            $url=$mysql['database'].':host='.$mysql['host'].';dbname='.$mysql['name'].';port='.$mysql['port'].';charset=utf8';
            $db=new \PDO($url,$mysql['user'],$mysql['pwd']);
            self::$_db = $db;
        }

        return self::$_db;
    }
}



