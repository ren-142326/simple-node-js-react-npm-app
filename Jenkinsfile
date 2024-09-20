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
        stage('Deliver') {
            steps {
                sh './jenkins/scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }
    }
}
