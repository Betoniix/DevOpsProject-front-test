pipeline {
    agent any 
    stages {
        stage('Connect ssh') {
            steps {
                script {
                    sh 'sshpass -p "tu_contraseña" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11'
                }
            }
        }

        stage('Build front') {
            steps {
                    // Clonar el repositorio en la carpeta Documents
                    sh 'sshpass -p "tu_contraseña" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11 "cd Documents && git clone https://github.com/CL-Nayib/DevOpsProject-front.git"'
                    // Ingresar al directorio clonado
                    sh 'sshpass -p "tu_contraseña" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11 "cd Documents/DevOpsProject-front"'
                    // Instalar dependencias y construir
                    sh 'sshpass -p "tu_contraseña" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11 "npm i && npm run build"'
            }
        }
    }
}