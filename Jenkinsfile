pipeline {
    agent any
    
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