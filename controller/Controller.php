<?php
    namespace controller;
    use boot\MysqlConnection;
    use boot\TwigConnection;

  


    class Controller{

        private $template;
        private $bdd;
        private $tabVar=[];       

    

        public function __construct($tabs=null){               
                $this->template = TwigConnection::getInstance("view_backgen");
                $this->bdd = MysqlConnection::getInstance();
                $this->tabVar=$tabs;
        }

        
        /**
         * Get the value of template
         */ 
        public function getTemplate()
        {
                return $this->template;
        }

        /**
         * Set the value of template
         *
         * @return  self
         */ 
        public function setTemplate($template)
        {
                $this->template = $template;

                return $this;
        }

        /**
         * Get the value of bdd
         */ 
        public function getBdd()
        {
                return $this->bdd;
        }

        /**
         * Set the value of bdd
         *
         * @return  self
         */ 
        public function setBdd($bdd)
        {
                $this->bdd = $bdd;

                return $this;
        }
    }