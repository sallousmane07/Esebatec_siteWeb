<?php
    namespace model;

    class Realisation{

        private $_id, 
                $_libelle,
                $_dateDebut,
                $_dateFin,
                $_adresse,
                $_description,
                $_categorie_id,
                $_client_id,
                $_temoignage_id;
        
       

        /**
         * Get the value of id
         */ 
        public function id()
        {
                return $this->_id;
        }

        /**
         * Set the value of id
         *
         * @return  self
         */ 
        public function setId($id)
        {
                $this->_id = $id;

                return $this;
        }

        /**
         * Get the value of libelle
         */ 
        public function libelle()
        {
                return $this->_libelle;
        }

        /**
         * Set the value of libelle
         *
         * @return  self
         */ 
        public function setLibelle($libelle)
        {
                $this->_libelle = $libelle;

                return $this;
        }

        /**
         * Get the value of temoignage_id
         */ 
        public function temoignage_id()
        {
                return $this->_temoignage_id;
        }

        /**
         * Set the value of temoignage_id
         *
         * @return  self
         */ 
        public function setTemoignage_id($temoignage_id)
        {
                $this->_temoignage_id = $temoignage_id;

                return $this;
        }

        /**
         * Get the value of _dateFin
         */ 
        public function dateFin()
        {
                return $this->_dateFin;
        }

        /**
         * Set the value of _dateFin
         *
         * @return  self
         */ 
        public function setDateFin($_dateFin)
        {
                        $this->_dateFin = $_dateFin;

                        return $this;
        }
        public function dateDebut()
        {
                return $this->_dateDebut;
        }

        /**
         * Set the value of _dateFin
         *
         * @return  self
         */ 
        public function setDateDebut($_dateFin)
        {
                        $this->_dateDebut = $_dateFin;

                        return $this;
        }



        /**
         * Get the value of _description
         */ 
        public function description()
        {
                        return $this->_description;
        }

        /**
         * Set the value of _description
         *
         * @return  self
         */ 
        public function setDescription($_description)
        {
           $this->_description = $_description;

                    return $this;
        }
          /**
                 * Get the value of _categorie_id
            */ 
        public function categorie_id()
        {
            return $this->_categorie_id;
        }

        /**
         * Set the value of _categorie_id
         *
         * @return  self
         */ 
        public function setCategorie_id($_categorie_id)
        {
            $this->_categorie_id = $_categorie_id;
            return $this;
        }

                /**
                 * Get the value of _adresse
                 */ 
                public function adresse()
                {
                                return $this->_adresse;
                }

                /**
                 * Set the value of _adresse
                 *
                 * @return  self
                 */ 
        public function setAdresse($_adresse)
        {
            $this->_adresse = $_adresse;
            return $this;
        }

        public function client_id()
        {
                return $this->_client_id;
        }

        /**
         * Set the value of _dateFin
         *
         * @return  self
         */ 
        public function setClient_id($_client_id)
        {
                        $this->_client_id = $_client_id; 
                        return $this;
        }




    }





?>