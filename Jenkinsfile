pipeline {
    agent any 
    stages {
        stage('Connect ssh') {
            steps {
                script {
                    sh 'sshpass -p "1" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11'
                }
            }
        }

        stage('Build front') {
            steps {
                    // Clonar el repositorio en la carpeta Documents
                    sh 'sshpass -p "1" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11 "cd Documents && git clone https://github.com/CL-Nayib/DevOpsProject-front.git && cd Documents/DevOpsProject-front && npm i && npm run build"'
            }
        }
    }
}