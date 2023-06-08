# create an image to install dependencies on
# this will result in smaller images when we build
FROM --platform=linux/x86_64 node:16-alpine as DEPS

WORKDIR /usr/src/app

COPY package.json ./
COPY ./prisma /usr/src/app/prisma

RUN npm run install

# migrate the database
RUN npm run prisma:migrate:production
# generate the types for prisma
RUN npm run prisma:generate
# seed the database
# RUN npm run prisma:seed



# now we make a container to build our app - copying over the node_modules from 
# the deps container we made above
FROM --platform=linux/x86_64 node:16-alpine as BUILDER

WORKDIR /usr/src/app

COPY . /usr/src/app
COPY --from=DEPS /usr/src/app/node_modules ./node_modules

RUN npm run build

# Remove all the development dependencies since we don't
# need them to run the actual server.
RUN rm -rf node_modules
ENV NODE_ENV=production
RUN npm install





# This starts our application's run image - the final output of build.
FROM --platform=linux/x86_64 node:16-alpine

# Pull the built files out of the BUILDER image - we need:
WORKDIR /usr/src/app

ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV=production

COPY --from=BUILDER /usr/src/app/package.json ./
COPY --from=BUILDER /usr/src/app/node_modules ./node_modules
COPY --from=DEPS /usr/src/app/node_modules/.prisma ./node_modules/.prisma
COPY --from=BUILDER /usr/src/app/public ./public
COPY --from=BUILDER /usr/src/app/.next ./.next
COPY --from=BUILDER /usr/src/app/next.config.js  ./
COPY --from=BUILDER /usr/src/app/lib ./lib
COPY --from=BUILDER /usr/src/app/prisma ./prisma
COPY --from=BUILDER /usr/src/app/.env ./

EXPOSE 3001

CMD [ "npm", "run", "start" ]
