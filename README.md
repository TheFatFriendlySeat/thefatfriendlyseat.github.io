# how to push an image
Get the image ID to push:

`docker images`


Tag an image

`docker tag <image ID> fatfriendlyseat/thefatfriendlyseat:<version>`


Push the image

`docker login --username=fatfriendlyseat`
`docker push fatfriendlyseat/thefatfriendlyseat:<version>`


how to pull an image
`docker pull fatfriendlyseat/thefatfriendlyseat:<version>`


how to run an image on
`docker run -v fatfriendlyseat/prisma:/usr/src/app/prisma --publish 80:3000 fatfriendlyseat/thefatfriendlyseat:<version>`




# Steps to deploy

`npm run dcup:production` to create a production image for the docker

`docker images` to see a list of docker images

`docker tag <image ID> fatfriendlyseat/thefatfriendlyseat:<version>` to tag an image with the name we want

`docker login --username=fatfriendlyseat` Log into docker hub

`docker push fatfriendlyseat/thefatfriendlyseat:<version>` to push the image with that tag name up to docker hub


ssh onto the server ???

pull the docker image

copy over the prisma folder into the fatfriendlyseat/prisma dir

copy over nginx folder

stop the docker container running nextjs

`docker run -v fatfriendlyseat/prisma:/usr/src/app/prisma --publish 80:3000 fatfriendlyseat/thefatfriendlyseat:<version>`



# Resources

Followed [this tutorial](https://mindsers.blog/post/https-using-nginx-certbot-docker/) for NGINX and Certbot setup