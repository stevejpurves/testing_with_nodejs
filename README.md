# testing_with_nodejs
slides and code for betabeers tenerife March 2015

There are 3 examples:

 1. using mocha & chai for simple sync and async tests
 2. using karma to run moha & chai tests in real browsers
 3. backend testing of a simple MEAN stack todo app
 
 Running the examples
 --------------------
  - install node for your platform
  - install the global tools you'll need:
    - npm install mocha -g
    - npm install karma-cli -g
  - cd into each example directory and run:
    - npm install
    
  1 unit tests with mocha
  -----------------------
  Run `mocha` in the sub directory
  
  2 unit tests with karma
  -----------------------
  Run `karma start` in the sub directory
  
  3 mean backend testing
  ----------------------
  Run `mocha test/start.js` in the sub directory
  
