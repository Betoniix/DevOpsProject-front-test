pipeline {
    agent any

    stages {
        stage('Dependencias Node/Angular') {
            steps {
                sh 'npm install'
            }
        }

        stage('Jest Test') {
            steps {
                sh 'npm run test'
            }
            post {
                failure {
                    echo 'Error en los test, abortando'
                    script {
                        currentBuild.result = 'FAILED'
                    }
                    exit 1
                }
            }
        }
    }

    post {
        success {
            build job: 'deploy-front', wait: false
        }
    }
}