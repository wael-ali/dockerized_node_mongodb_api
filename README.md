# Dockerized nodejs api, mongodb and mongo express

## Setup

+ make sure to have docker and docker-compose installed
+ create .env file from .env.example
    ````
    $ cp .env.example .env
    ````
+ make changes to the .env file
+ build and run the app
    ``` 
    $ docker-compose up --build
    ```

## API end points
    # all these are get end points
    localhost:$APP_PORT/api/v1/users # list users
    localhost:$APP_PORT/api/v1/auto/user # automaticaly create user
    localhost:$APP_PORT/api/v1/random/user # get random user

## TIPP
if you want to change the application database name and owner change it in .env file before the first build. in case you need to change them after the build. it is recommended to remove the volume from docker that persist database for this application to avoid access problems.

```
# volume name is found under the volumes in docker-compose.yaml

docker volume rm <volume_name_>
```

now rebuild the docker image.
