# How to install the Proactive Technology Online with Docker

You can install the Proactive Technology Online very easily using docker. 

Follow these steps:

1.  Update `/etc/hosts` to add the current machine as a hostname.

2.	Install docker. 
3.	Start the docker daeomon - either during the docker installationve, or with the command

        sudo docker daemon & # THIS NEEDS TO BE RUN ONLY ONCE, IN THE BACKGROUND
    
    Or you can use the "Docker Quickstart Terminal" application.

4.	Navigate to a folder where you’d like the docker files to be placed.

5.	Download the docker files to this new folder from the [GitHub Proton repository](https://github.com/ishkin/Proton/tree/master/docker). You can do that with the SVN command

        svn checkout https://github.com/ishkin/Proton.git/trunk/docker

6.	Build the Docker Image from the Dockerfile:

        sudo docker build –t proton .

7.	Run the docker image

    This can be done in the following way:
        
        sudo docker run --privileged=true --cap-add SYS_PTRACE -p 8080:8080 -it -d proton tail -f /dev/null
    
    The `tail –f /dev/null` is the command to execute inside the container, and it is used to force the container to continue running and not shut down immediately after starting.
    
To access the container and run commands from within it:

        sudo docker ps # That will provide <container_id> for the proton image.
        sudo docker exec -it <container_id> bash

It is important to note that Tomcat is not started automatically inside the container, and thus needs to be started manually. In order to do that, first access the container using the above command and then do:

        service tomcat7 start
        
        service tomcat7 status # THIS SHOULD RETURN: Starting Tomcat servlet engine tomcat7
