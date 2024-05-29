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
                sh 'sh ./deploy.sh'
            }
        }
    }
}
