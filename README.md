# Should I hike today?

## For the live version, click [here](https://should-i-hike.now.sh/#/)

## What does this app do?

* renders a new hero image based on `res.data` received from an `axios` call to the Wundergroud API
* hero image for 'yes' and 'no'
* multiple National Park options for each state's view

## Current Features

* now displays data from over 15 National Parks in 4 different states!
* navigate National Parks in Utah, Arizona, Colorado, and California
* a new image displays based on the current weather conditions of that National Park

## Future Features

* more specific location data, down to the GPS coordinates of popular trailheads
* **WIP**: implement `sockets.io` to render a live feed of hiking data pertinent to that state, brought to you by my hand-built `node/twit` bots

## Tech Stack

* `axios` to fetch Wunderground's public weather data
* `react.js` framework
* `react-router-dom` for navigation
* `body-parser` to parse the API response

## Final Product

* Landing Navigation
  ![functional-landing-navigation](https://github.com/kale-stew/should-i-hike-today/blob/master/README-assets/landing.gif)

* Arizona
  ![functional-arizona-logic](https://github.com/kale-stew/should-i-hike-today/blob/master/README-assets/arizona.gif)

* California
  ![functional-california-logic](https://github.com/kale-stew/should-i-hike-today/blob/master/README-assets/california.gif)

* Colorado
  ![functional-colorado-logic](https://github.com/kale-stew/should-i-hike-today/blob/master/README-assets/colorado.gif)

* Utah
  ![functional-utah-logic](https://github.com/kale-stew/should-i-hike-today/blob/master/README-assets/utah.gif)
