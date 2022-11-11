# Install and Run

```sh
mkdir oksy-app-1
cd oksy-app-1
```

```sh
docker run --rm -it -p 8000:8000 -v ${PWD}:"/home/project" digitalbyali/oksy:v1
```

::: details What does this command do 🤨
```sh
docker
    run                         # run container
    --rm                        # clean up the container after exit
    -it                         # interactive terminal
    -p 8000:8000                # bind port 8000
    -v ${PWD}:"/home/project"   # bind current folder to '/home/project' in the container
    digitalbyali/oksy:v1        # name of the docker image to run
```
:::

## Demo App

In this section we will build the following application:

`TODO: VIDEO OF APP`