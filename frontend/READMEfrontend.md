To run project you must have npm installed
In terminal "npm install"

Next you must install react-router-dom
In terminal "npm install react-router-dom"

Best practice to run the website locally first
In terminal "npm start"

Build the project
In terminal "npm run build"

If you wish to deploy to heroku, then you must install heroku and have an account.
In terminal
1st. "npm i -g heroku"
2nd. "heroku login"
3rd. "heroku create <projectname>"
4th. "git remote add heroku <gitremotelink>"
5th. "git remote -v" (testing to make sure remote heroku repo is visible)

This is where you actually upload code to heroku
In terminal 
1st. "git add ."
2nd. "git commit -m "your message here""
3rd. "git push heroku <yourbranchname>:main"

For seeing heroku builds
In terminal
1st. "heroku plugins:install heroku-builds"
2nd. "heroku builds"

You may need to install the Package used for the Calendar
In terminal 
1st. "npm i react-calendar"

For testing announcements, courses, instructors, etc you must run a json server.
In Terminal
npx json-server --watch DataStorage/database.json --port 8000

To have announcment/courses functionality you must install concurrently
In Terminal
"npm i concurrently"

endpoints for database
/anmts GET Fetch all Anmts
/anmts POST Add a new Anmt
/anmts/{id} Get Fetch a single Anmt
/anmts/{id} Delete an Anmt
