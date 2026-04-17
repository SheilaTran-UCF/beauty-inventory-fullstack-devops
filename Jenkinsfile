pipeline {
    agent any

    stages {
        stage('Build Backend') {
            steps {
                dir('backend') {
                    sh 'chmod +x mvnw'
                    sh './mvnw clean package -Dmaven.test.skip=true'
                }
            }
        }

        stage('Build Docker') {
            steps {
                sh 'docker compose build'
            }
        }

        stage('Run App') {
            steps {
                sh 'docker compose up -d'
            }
        }
    }
}