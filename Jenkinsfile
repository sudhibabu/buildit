pipeline {
    agent {
        docker {
            image 'node:6-alpine'
            args '-p 3000:3000'
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') {
            steps {
                echo 'Building..'
                sh 'npm install'
            }
        }
        stage('Test') {
            steps {
                echo 'Testing..'
                sh './scripts/test.sh'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying....'
                sh './scripts/deliver.sh'
            }
        }
    }
}