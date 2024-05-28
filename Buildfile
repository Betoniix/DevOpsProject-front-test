pipeline {
    agent any
    tools { nodejs "NodeJS_14" }  // Asegúrate de tener configurado NodeJS en Jenkins
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install @angular/cli --save-dev'
                sh 'npm install'
            }
        }
        stage('Build') {
            steps {
                sh 'ng serve'
            }
        }
    }
    post {
        always {
            archiveArtifacts artifacts: 'dist/**', allowEmptyArchive: true
        }
    }
}
