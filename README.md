# Project Overview

Simple Rss feed reader, implemented using JavaScript and using [Jasmine](https://jasmine.github.io/) library.

## How to run it

Download or clone this repo and run the `index.html` file in the browser.

All tests are located under `jasmine/spec/feedreader.js` file.

##  Tests Implemented

* Test that `allfeeds` has been defined and it's not empty. 
* Test that `allFeeds` have a url and the url is not empty.
* Test that `allFeeds` have a name and the name is not empty.
* Test that the `menu` is hidden by default.
* Test that it toggle the `menu` by clicking on it.
* Test that `loadFeed` function has at least a single `entry` within the `feed container.
* Test that two entries are not equal.
