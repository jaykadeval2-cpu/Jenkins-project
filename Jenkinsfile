pipeline {
    agent any
    environment {
        IMAGE = 'jenkins-demo-app'
    }
    triggers { pollSCM('H/2 * * * *') }

    stages {
        stage('Checkout') {
            steps { checkout scm }
        }
        stage('Build') {
            steps { sh 'docker build -t $IMAGE:$BUILD_NUMBER -t $IMAGE:latest .' }
        }
        stage('Test') {
            steps { sh 'docker run --rm $IMAGE:latest npm test' }
        }
        stage('Deploy') {
            steps {
                sh '''
                  docker rm -f $IMAGE || true
                  docker run -d --name $IMAGE -p 3000:3000 $IMAGE:latest
                '''
            }
        }
    }
    post {
        success { echo 'Pipeline succeeded' }
        failure { echo 'Pipeline failed' }
    }
}