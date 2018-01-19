# Malachi

Malachi can best be utilized via various gulp tasks that perform different actions. 

<h2>Getting Started</h2>

In development, getting an app up and running is simple. 
Open up two terminal windows.

Bundle all front end code in the project's directory:

`$ gulp build:dev --project <projectabbreviation>`

Start express server that uses built assets

`$ gulp start:dev --project <projectabbr>`

Adding new admin users:

`$ gulp createUser:dev --project <projectabbr> --username <username> --password <password>`

<h2>Production Deployment</h2>

Some Useful commands for deployment:

Start nginx:

`$ sudo systemctl start nginx`

Show process logs:

`$ pm2 logs --lines 100`

Stop all processes:

`$ pm2 stop all`

Start app:

`$ gulp start:prod --project wwf`
