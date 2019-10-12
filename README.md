# landing-page-express-node
This is a lading page build with express framwork 
 Express is a Node.js module that gives us a full framework, 
 it gives us a routing system and an HTTP server.
to install it you just need to type on our terminal 
`npm install express` you may choose to install it global by ading `-g` on the previous command
``npm install -g express` you can also use yarn `yarn add express`
Once that's done we'll create a new text file and call it`app.js`
We'll also need our package.json file, we can do that with `npm init`
We'll need body-parser that will help us parse different types of data
including form data. to do it use `yarn add body-parser `or `npm install body-parser`
we ll also need Pug which is a HTML templating engine, which means you can write
much simpler Pug code, which Pug compiler will compile into HTML code, 
that browser can understand, and nodemon to auto reload the server .
our package.json will look like this 
```javascript
{
  "name": "company_website",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "express": "^4.17.1",
    "nodemon": "^1.19.3",
    "pug": "^2.0.4"
  }
}
´´´

inside app.js
let's define the variables
//initialize the app
//setting up View
//Setting view 
//setting view engine
//create route
happy hacking
