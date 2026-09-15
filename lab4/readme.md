#NPM PROJECT

1.create project folder
2.right click on project folder and select reveal in terminal

3. type in terminal `npm init -y` press enter
4. open folder.json file from project folder
5. update type as `type:module`in package.json

6. type in terminal `npm i nodemon -D` to install nodemon,which restarts server while file changes _D flag indicate install in dependency
7. it creates node_modules folder and package - lock.json
8. update .gitignore file and write project folder/node_modules
9. update package .json to run the projeact,update script as below

"scripts":{
    "start":"node app.js",
    "dev":"nodemon app.js"
},
```

10. now you can start the server by typing 'npm run dev' in the terminal of your project folder