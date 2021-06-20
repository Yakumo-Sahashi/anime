<?php 
    session_start();

    class Conector {

        private $conexion;
        private $server = 'localhost';
        private $ussername = 'root';
        private $password = '';
        private $database = 'anime';


        public function __construct(){
            
            $this->conexion = new PDO("mysql:host=$this->server;dbname=$this->database;", $this->ussername,$this->password);

        }

        function iniciarSesion(){
            if (!empty($_POST['usuario']) && !empty($_POST['password'])) {

                $consulta = $this->conexion->prepare("SELECT id, usuario, password, email, rol, sexo, avatar FROM usuario WHERE usuario=:usuario");
                $consulta->bindParam(':usuario',$_POST['usuario']);
                $consulta->execute();
        
                $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
        
                if (count($resultado) > 0 && password_verify($_POST['password'], $resultado['password'])) {
        
                    $_SESSION['user'] = $resultado;
                    $id = $resultado['id'];
                    $sql = "UPDATE usuario SET estado='conectado' WHERE id ='$id'";
                    $stmt = $this->conexion->prepare($sql);
                    $stmt->execute();
                    echo "2";
                }else {
                    echo "1";	
                } 
                $this->conexion = null;
            }
        }

        function cerrarSesion(){
            $id=$_SESSION['user']['id'];
            $sql = "UPDATE usuario SET estado='desconectado' WHERE id ='$id'";
            $stmt = $this->conexion->prepare($sql);
            $stmt->execute();

            session_unset();

            session_destroy();
            
            echo "2";
        }
    }

    $conexi = new Conector();


    if($_POST['funcion'] == '1'){
        echo $conexi->iniciarSesion();
    }else if($_POST['funcion'] == '2'){

    }else if($_POST['funcion'] == '3'){
        echo $conexi->cerrarSesion();
    }

?>