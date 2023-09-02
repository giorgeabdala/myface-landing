#!/bin/bash

git pull
docker build -t myface-landing .
docker stop myface-landing
docker rm myface-landing
docker run -d -p 3005:3000 --name myface-landing --network nginx-proxy-manager_nginx-proxy myface-landing