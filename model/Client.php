    <?php
        // client Model

        namespace  model;


        class Client{

            private $_nom;
            
            private $_prenom;

            private $_adresse;

            private $_tel1;

            private $_tel2;

            private $_mail;


            public function setNom($_nom) {
                $this->_nom = $_nom;
            }
            public function setPrenom($prenom){
                $this->_prenom= $prenom;
            }
            public function setAdresse($adresse)
            {
                $this->_adresse=$adresse;
            }
            public function setTel1($_tel1){
                $this->_tel1=$_tel1;
            }
            public function setTel2($_tel2){
                $this->_tel2=$_tel2;
            }

            
            public function nom(){
                return $this->_nom;
            }
            public function prenom(){
                return $this->_prenom;
            }
            public function adresse(){
                return $this->_adresse;
            }
            public function tel1(){
                return $this->_tel1;
            }
            public function tel2(){
                return $this->_tel2;
            }
            public function mail(){
                return $this->mail;
            }

            public function setMail($_mail){
                $this->_mail=$_mail;
            }


        }