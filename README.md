# Module1NodejsCsvToJsonConverter
This is my first Node.js project in Edx.

Answers about your project:
------------------------------------------------------------------------------
Question #1:
Walk us through the design of your project. Why did you design your project the way you did? What difficulties did you overcome?

Answer to the question #1:

My project consists of several files (modules).
Starting point is 'index.js' file.
You can run my project using this command:
node index

Also I have included possibility to change csv file name.
In order to convert csv with a file name different from 'customer-data' you can run my project as follows:
node index filename

e.g.: 
The command below will convert a file names customer-data2.csv into customer-data2.json.
File my be located in the project folder named 'RawCsvData'.

node index customer-data2

As I already has mentioned my project has a staring point index.js and
additional .js modules: utils.js and csvprocessor.js.

- utils.js has some helper functions (something like dll);
- csvprocessor.js uses csvtojson module in order convert csv to json;

I used event emitter in my csvprocessor in order to give an opportunity to a client implement
writing procedure independently from csvprocessor class hence making it more flexible.

------------------------------------------------------------------------------
Question #2:
How did you test your project to verify that it works? 

Answer to the question #2:
Commands like: 
node index
node index.js
node index filename
------------------------------------------------------------------------------
Question #3:
Let us know if anything doesn't work as intended so your reviewer will know ahead of time

Answer to the question #3:
Nope everything seems to work just fine! :)