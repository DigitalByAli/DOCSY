# Install and Run

In this section we will build the following application:

```
VIDEO OF APP
```

::: warning DOCKER
You need to have Docker installed on your machine. [Click here](https://docs.docker.com/get-docker/) for documentation on how to install Docker on your machine.
:::

```sh
mkdir my-cool-project
cd my-cool-project
docker run --rm -it -p 8000:8000 -v ${PWD}:"/home/project" digitalbyali/oksy:v1
```

::: details What does this command do 🤨
```sh
docker
    run                         # run container
    --rm                        # clean up the container after exit
    -it                         # terminal interactivity
    -p 8000:8000                # bind port 8000
    -v ${PWD}:"/home/project"   # bind current folder to '/home/project' in the container
    digitalbyali/oksy:v1        # name of the docker image to run
```
:::

After running the above command you should see:

![init-screen](/init-screen.png)

Press `<enter>` to install and run OKSY in `development` mode.