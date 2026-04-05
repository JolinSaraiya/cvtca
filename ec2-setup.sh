#!/bin/bash

echo "Installing Docker..."
sudo apt update && sudo apt install -y docker.io

echo "Starting and enabling Docker service..."
sudo systemctl start docker && sudo systemctl enable docker

echo "Adding ubuntu user to the docker group..."
sudo usermod -aG docker ubuntu && newgrp docker

echo "Pulling application image..."
docker pull <DOCKERHUB_USERNAME>/my-cicd-app:latest

echo "Running app container..."
docker run -d --name my-app -p 3000:3000 --restart always <DOCKERHUB_USERNAME>/my-cicd-app:latest

echo "Starting Watchtower..."
docker run -d --name watchtower --restart always \
   -v /var/run/docker.sock:/var/run/docker.sock \
   containrrr/watchtower --interval 30 my-app

echo "Checking running containers..."
docker ps
