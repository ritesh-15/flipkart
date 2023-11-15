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
                echo "testing github web hook"
            }
        }
        stage('Push image to docker hub') {
            steps {
                echo "pushing image..."
            }
        }
        stage('Run container') {
            steps {
                echo "running container..."
            }
        }
    }
}
