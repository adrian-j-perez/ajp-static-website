
# Run Website Locally
**First off let me say you do not really need to follow this guide right away**. You can just open the index.html (by copying the file path) and start seeing some output in the browser, but not everything will load like the markdown text and images/icons.

# TD;LR
Run this command in the project dir `python -m http.server` then go to `http://localhost:8000/index.html` 

# Steps: 

## One

Make sure you have python installed (python 3 is recommend), you can find it here
[python.org/downloads](https://www.python.org/downloads/) 

## Two 

With python installed is should come with a module call `http.server`, we run this directly by call it with python.

open a terminal and enter `python -m http.server` 
this will start a local server at localhost on port 8000 by default and will serve anything in the current directory.

## Three

By running this command in the main directory of the project (location where you see the index.html) the module will run and serve the contents in the directory. 

by default it will make a url http://localhost:8000/

# Optional Config Option 

by using `http.server` you can change the port and the directory location that it will serve up
can be useful if you current environment is already using the default port of 8000

## Port

`python -m http.server <port-number>`
example:
`python -m http.server 8080`


## Directory 

`python -m http.server --directory ./assets/`


## More Information 
[python.org - http.server options](https://docs.python.org/3/library/http.server.html#command-line-interface)
