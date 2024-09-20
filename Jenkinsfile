pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm config get registry' 
                sh 'npm config set registry="https://registry.npmmirror.com/"' 
                sh 'npm config get registry' 
                sh 'npm install' 
            }
        }
        stage('Test') {
            steps {
                sh './jenkins/scripts/test.sh'
            }
        }
    }
}