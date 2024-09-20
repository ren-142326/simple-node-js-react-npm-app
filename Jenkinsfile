pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'npm install -g nrm' 
                sh 'nrm use taobao' 
                sh 'npm install' 
            }
        }
    }
}