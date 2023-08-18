# Update the database

Put a csv in the data folder, make sure it is named with the current date (`YY-MM-DD.csv`)

run `npm run prisma:seed`, this will show a list of all the venues. Remember the last one.

`docker compose up` and test to see if the last venue added is in the database

# Steps to deploy

`npm run dcup:production` to create a production image for the docker

`docker images` to see a list of docker images

`docker tag <image ID> fatfriendlyseat/thefatfriendlyseat:<version>` to tag an image with the name we want

`docker login --username=fatfriendlyseat` Log into docker hub

`docker push fatfriendlyseat/thefatfriendlyseat:<version>` to push the image with that tag name up to docker hub

Update the docker-compose-live.yml so the iamge is on the correct version
copy over docker-compose-live.yml `scp docker-compose-live.yml root@159.65.61.22:/root`

if database has changed copy over the prisma folder into the fatfriendlyseat/prisma dir `scp -r ~/dev/fatfriendlyseat/prisma root@159.65.61.22:/root/fatfriendlyseat/prisma`

if any nginx conf as changed copy over nginx folder `scp -r nginx/ root@159.65.61.22:/root`

ssh onto the server `ssh root@159.65.61.22`

pull the docker image `docker pull fatfriendlyseat/thefatfriendlyseat:<version>`

stop the old containers

restart the docker containers `docker compose -f docker-compose-live.yml up --build -d`

remove the old image `docker image rm <docker image id>`



command to restart nginx

`docker compose -f docker-compose-live.yml exec webserver nginx -s reload` 

# Resources

Followed [this tutorial](https://mindsers.blog/post/https-using-nginx-certbot-docker/) for NGINX and Certbot setup