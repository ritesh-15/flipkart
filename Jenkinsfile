pipeline {
    agent any
    stages {
        stage('Pull code') {
            steps {
                echo "pulling code..."
            }
        }
        stage('Build docker image') {
            steps {
                echo "building image..."
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