pipeline {
    agent any
    stages {
        stage('Pull code') {
            steps {
                echo "pulling code..."
                git branch: 'backend', url: 'https://github.com/ritesh-15/flipkart.git'
            }
        }
        stage('Build docker image') {
            steps {
                echo "building image..."
                sh "docker build -t riteshk15/flipkart-server ."
            }
        }
        stage('Push image to docker hub') {
            steps {
                echo "pushing image..."
                withCredentials([usernamePassword(credentialsId: 'DOCKER_SECRETS', passwordVariable: 'DOCKER_PASSWORD', usernameVariable: 'DOCKER_USERNAME')]) {
                    sh "docker login -u ${env.DOCKER_USERNAME} -p ${env.DOCKER_PASSWORD}"
                    sh "docker push riteshk15/flipkart-server:latest"
                }
            }
        }
        stage('Run container') {
            steps {
                echo "running container..."
            }
        }
    }
}
