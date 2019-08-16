# ajs-app-test
AngularJS test app with node and mysql

* clone this repo and execute `npm install`

* To run the App execute in your console `npm run dev`

### Using Db migrate

* `node node_modules/db-migrate/bin/db-migrate` this is the command to run migrations

### Migrations used [db-migrate](https://www.npmjs.com/package/db-migrate),  [documentation](https://db-migrate.readthedocs.io/en/latest/)
To work with migrations stay in config folder 
* Run migration `db-migrate up all`
* Rollback database `db-migrate reset:all or db-migrate reset:my-migration-name`
