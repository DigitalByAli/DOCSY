# Terminal

You may want to install dependencies or want to access the Docker container terminal.
This is possible with the following 2 commands:

```sh
docker run --rm -it -p 8000:8000 -v ${PWD}:"/home/project" digitalbyali/oksy:v1 /bin/zsh;
```

Or if you are inside an installed OKSY app you can run:

```sh
bash oksy.sh /bin/zsh;
```

You can type `npm run dev` to start the OKSY server if you are done.