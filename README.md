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
  `cd 1_unit_tests_with_mocha`
  `mocha`
  
  2 unit tests with karma
  -----------------------
  `cd 2_unit_tests_with_karma`
  `karma start`
  
  3 mean backend testing
  ----------------------
  `cd 3_mean_backend_testing`
  `mocha test/start.js`
  
