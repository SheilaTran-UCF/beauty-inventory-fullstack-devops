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
    }
}