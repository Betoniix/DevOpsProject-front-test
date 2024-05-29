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
                script {
                    if (-d "DevOpsProject-front") {
                        sh 'echo existe'
                        sh 'cd DevOpsProject-front && git pull'
                    } else {
                        sh 'git clone https://github.com/CL-Nayib/DevOpsProject-front.git'
                    }
                    sh 'sshpass -p "1" scp -r ./DevOpsProject-front ubu@192.168.0.11:/home/ubu/Documents'
                }
            }
        }
    }
}
