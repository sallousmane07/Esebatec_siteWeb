<?php
    namespace controller;

    

    

    class TestController extends Controller{

        
        public function __construct()
        {
            parent::__construct();
        }
        public function test(){
           echo "Bravo Test ROutes Terminé";
        }

        public function start(){
            echo 'Il n y a pas de méthode appelé '; 
        }

    }