pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm config registry set https://registry.npmmirror.com/' 
                sh 'npm install' 
            }
        }
    }
}