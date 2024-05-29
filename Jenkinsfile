pipeline {
    agent any 
    stages {
        stage('Connect ssh') {
            steps {
                sh 'sshpass -p "1" ssh -o StrictHostKeyChecking=no ubu@192.168.0.11'
                sh 'ls'
            }
        }

        stage('Build front') {
            steps {
                sh "cd Documents && git clone https://github.com/CL-Nayib/DevOpsProject-front.git"
                sh "cd DevOpsProject-front"
                sh "npm i && npm run build"
            }
        }
    }
}
