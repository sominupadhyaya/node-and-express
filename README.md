# node-and-express
Made a express and node file that fetches some data
with nodemon. 


# things learnt 
1) I used express to build the server side part. I installed node from github using nvm
2) Then used npm to install express. This code was used : https://www.npmjs.com/package/express
3) Ran the server by using node index.js and then went to localhost:8000 to see the code that i ran from browser.
4) Used res.json() and the browser automatically printed hello world.
5) Then we made a client to fetch the data from the api we created.
6) There was  a problem related to CORS. Then i googled the error messsage in the console. We found the answer here:
https://stackoverflow.com/questions/36878255/allow-access-control-allow-origin-header-using-html5-fetch-api by the author 
David Scales
7) The mode must be set to CORS and should be provided as a second argument in the fetch() function
8) I thought the issue was fixed but , the issue wasn't fixed. We needed to enable CORS in the server side too and we had to install the CORS package using npm install cors. 
```
const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
```
9) fetch api finally worked and then we used some basic js to display the output from the server in the browser as HTML we  made the output to a json too.
10) Then we made an object in the server side and then we returned the object in the form of response for the client side.
11) Then we saw the structure of the returned object from server in the client side. We analysed it and displayed it dynamically using the DOM api.
