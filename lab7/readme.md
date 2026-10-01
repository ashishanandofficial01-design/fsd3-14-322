#   Frontend-Backend
1. create project folder (lab7)
2. create frontend backend folder with in project folder
3. open terminal and split it in two 
4. open frontend in to left side
5. open backend into right side terminal
6. IN backend
    a. initialize backend by `npm init -y`
    b. install nodemon by `npm i nodemon`
    c. open package.json from backend, update `type to module` and script 
    d. create app.js
7. In frontend
    a. npm create vite@latest
    b. enter . as project name
    c. select frame work as react from arrow key
    d. select variant as javascript from arrow key
    e. select esList for linting from arrow key
    f. select install and start the frontend



    # COMPONENTS

    1. simple js function return html directory
    2. it must start with capital letters
    3. it should be treated as html tag
    4. it must be closed
    
   # OBJECT DESTRUCTOR
   ```
   const{rating,bname,price,quantity,picUrl}=props.book;
   ```

   DOES not depend on order,if property is not available then it initialized with null
   any components include style 
   1. external css = create class in index.css and use in component 
   2. internal css = create property as object like
   const qtyStyle = {
    fontsize: "1rem",
    color: "blue",
    textAlign: "center",
    backgroundColor: "yellow",
    padding: "10px",
  }; 
   then apply with style attribute and pass the object
   3. INLINE CSS in this method we use two curly brackets with style attribute all the css property must be single word for example text-align becomestextAlign becomes camel text


rafce-arrowsunction
rfce-simple function