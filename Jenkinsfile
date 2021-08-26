#!/usr/bin/env groovy

pipeline {
    agent any
    stages {
        stage('react clean build') {
            when {
                branch 'develop'
            }
            steps {
                sh "npm build"
            }
        }
        stage('dockerize') {
            steps {
                sh "docker build -t guillegregoret/front ."
                sh 'docker ps -f name=front -q | xargs --no-run-if-empty docker container stop'
                sh 'docker container ls -a -fname=front -q | xargs -r docker container rm'
                sh "docker run -d --name front -p 9095:80 guillegregoret/front"
            }
        }
        /*stage('analisis estatico') {
            steps {
                sh "./mvnw site"
                sh "./mvnw checkstyle:checkstyle pmd:pmd pmd:cpd findbugs:findbugs spotbugs:spotbugs"
            }
        }*/
    }
    options {
        buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
    }
}