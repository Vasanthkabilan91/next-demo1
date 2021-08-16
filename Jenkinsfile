properties([pipelineTriggers([githubPush()])])
pipeline {
	environment {
		registryCredential = 'Vaspwd'
	}
	agent any
	tools {
		maven 'Maven'
	}
	stages {
		stage('Checkout-Frontend'){
			steps {
				sh 'mkdir -p deps/backend deps/frontend'
				dir('deps/frontend') {
					git(credentialsId: 'Github',url: 'https://github.com/Vasanthkabilan91/next-demo1.git',branch: 'main')
					
				}
			}
		}
		stage('Checkout-backend'){
			steps {
				dir('deps/backend') {
					git(credentialsId: 'Github',url: 'https://github.com/Vasanthkabilan91/test-setup.git',branch: 'master')
				}
			}
		}
		stage('Maven Package') {
			steps {
				dir('deps/backend') {
					sh 'mvn clean package'
				}
			}
		}
		stage('Building Docker Image-Backend') {
			steps {
				dir('deps/backend') {
					sh "docker build -t vasanthkabilan91/backend ."
				}
			}	
		}
		stage('Building Docker Image-Frontend') {
			steps {
				dir('deps/frontend') {
					//sh "docker pull vasanthkabilan91/frontend:latest || true"
					sh "docker build -t vasanthkabilan91/frontend ."	
				}
			}
		}
		stage('Pushing docker image') {
			steps {
				script {
					docker.withRegistry( '', registryCredential ) {
						docker.image("vasanthkabilan91/backend").push()
						docker.image("vasanthkabilan91/frontend").push()
						
					}
				}
			}
		}
		stage('Removing local images') {
			steps {
				sh "docker rmi -f vasanthkabilan91/backend"
				sh "docker rmi -f vasanthkabilan91/frontend"
				sh "docker system prune -f"
				sh "docker images"
			}
		}
		stage('Deploying Appliication') {
			steps {
				dir('deps/backend') {
					sh 'scp -o StrictHostKeyChecking=no  docker-compose.yml ubuntu@172.31.15.143:/home/ubuntu/'
					sh 'ssh -o StrictHostKeyChecking=no -t ubuntu@172.31.15.143 "docker-compose up --build -d;bash --login"'
				}
			}
		}
	}
	post {
		always {
			deleteDir()
			dir("${env.WORKSPACE}@tmp") {
				deleteDir()
			}
		}
	}
}
