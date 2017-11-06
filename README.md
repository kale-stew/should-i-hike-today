# Should I hike today?

## What does this app do?
- renders a new hero image based on `res.data` received from an axios call to the Wundergroud API
- hero image for 'yes' and 'no'
- multiple National Park options for each state's view

## Current Features:
- now displays data from over 15 National Parks in 4 different states! 
- navigate National Parks in Utah, Arizona, Colorado, and California
- a new image displays based on the current weather conditions of that National Park

## Upcoming Features:
- more specific location data, down to the GPS coordinates of popular trailheads

## Tech Stack:
- `axios` to fetch Wunderground's public weather data
- `react.js` framework
- `react-router-dom` for navigation 
- `body-parser` to parse the API response

## final product:
1. Navigation between states
![navigation]()

2. 'Yes!' Change
![go-for-it]()

3. 'No, sorry' Change
![sorry-no]()