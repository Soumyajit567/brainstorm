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