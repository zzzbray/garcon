# garçon
MERN stack application - final project for The Jetlags.

# How to Run this version of Garçon locally from `develop` branch

So you build a slick AF app and you want to use it? There's only one step left. BLAST OFF!

![BLAST OFF](https://cms.qz.com/wp-content/uploads/2018/01/blue-origin-new-shepard-experiment-research-jeff-bezos-texas-launch-reusable.jpg?quality=75&strip=all&w=2200&h=1238)

## Install all the Necessary Packages locally
1. In your terminal, navigate to the root directory of the Garçon app (for me, that's `/Desktop/garcon`) and run `npm i` to install all the necessary packages.
2. Navigate to `/client` and run `npm i` again.

## Database Setup
Our database isn't deployed yet, so you need to have the DB set up on your workbench.

#### Database Settings
* The Express server is configured to run with my workbench settings, which basically means your password to connect to Workbench is "password".
  * I can't quite remember how complicated it is to change your workbench password, so if it's easier, you can navigate to the `server.js` file in the root directory and edit the password value on line 21.
* To initialize the database, we need to do the following:
  1. Navigate to `/client/src/data` and you'll find a `schema.sql` file. Run the schema in Workbench (i.e. copy what's in the `schema.sql` file into a blank query page in Workbench and run the code) to set up the database.
  2. In your terminal, navigate to the root directory of the Garçon app (for me that's `/Desktop/garcon/`). From here, run: `nodemon server.js`. This will start the Express server. When that happens, Sequelize will build the tables we need for our database.
  3. If you refresh the window in Workbench, you should see a `garcon_sequelize_db` which contains the following tables:
    * customers
    * inventory
    * orders
    * reservations
  4. Navigate to `/client/src/data` and you'll find a `seeds.sql` file. Sow the seeds in Workbench (i.e. copy what's in the `seeds.sql` file into a blank query page in Workbench and run the code) to populate the tables with our dummy data for testing purposes.

## How to Start the App
1. Navigate to the client directory in your terminal (for me that's `/Desktop/garcon/client`)
2. Run `npm start` (this starts the React portion of the app. It might take a while to set up but then it should automatically open the app in your browser).


