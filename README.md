# WebDriverIO and Cucumber

This is a test project which is developed using webdriverio and cucumber

## Features
- Selenium Grid
- Allure Reporting
- WDIO Expect Library
- Cross Browser Support
- Page Object Model Pattern
- Cucumber Framework

## Requirements
- Node Version > 12
- NPM Version > 6

## How to run tests
- To run on chrome: ```npm run chrome```
- To run on firefox: ```npm run firefox```
- To run on ie: ```npm run ie```
- Cross browser test: ```npm run cross-browser``` which triggers `chrome`, `firefox` and `ie`

    You can also add different browsers like MS Edge, Edge Chromium, etc. in the capabilities array

## How to generate and open report
- First generate the reprot by ```npm run report:generate```
- To open the report: ```npm run report:open```