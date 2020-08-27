<?php

    namespace model;

    class Categorie{

        private $_id;
        private $_categorie_name;

        

        /**
         * Get the value of _categorie_name
         */ 
        public function get_categorie_name()
        {
                return $this->_categorie_name;
        }

        /**
         * Set the value of _categorie_name
         *
         * @return  self
         */ 
        public function set_categorie_name($_categorie_name)
        {
                $this->_categorie_name = $_categorie_name;

                return $this;
        }
    }