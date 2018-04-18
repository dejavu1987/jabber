# Jabber [![Build Status](https://travis-ci.org/dejavu1987/jabber.svg?branch=master)](https://travis-ci.org/dejavu1987/jabber)

Simple random word / paragraph / lorem ipsum / dummy text generator. 

## Features

* Capitalizes first letter of the sentences.
* Add theme words to make the sentences look somewhat related to a theme and not complete jabber.
* No dependencies, light weight
* Configurable density of theme words.

## Installation

``` npm
npm install jabber 
```

## Usage Example

``` JavaScript
let Jabber = require('jabber');

// Define Theme Words that will appear randomly in the text

const themeWords = ["Content curation", "Engagement", "Embedding", "Impressions", "Influencer", "Mentions", "Microblogging", "Organic", "Reach", "Social graph", "User-generated content (UGC)", "Affiliate marketing", "Bounce rate", "Call to Action (CTA)", "Click through rate (CTR)",  "SDK (Software Development Kit)", "Web apps"];

// Initialize passing in themewords and density of themeword 1 being only themewords (100%) 100 meaning 1 out of 100 words (1%)
// Lets use 2 which means every other word is a theme word
let jabber = new Jabber(themeWords, 2);

// Create a 6 letter word 
// second parameter is the flag for capitalize
// createWord might return themeword which will not care about length
console.log(jabber.createWord(6, true));

// create a paragraph of 50 words
console.log(jabber.createParagraph(50));

```
## Result
```
Limebojetu Pixels per Inch (PPI) cico Selector. Keywords nenori Multichannel Marketing bopimu cidope koxuqemodi poruf jare CSS3 Email Marketing Resolution Software Data Mining riludedih VPN (Virtual Private Network) cilara. CSS (Cascading Style Sheets) kanabi morinuwip Version control pugu lomaqopeko Grid system topih geqetamo rapehu lubuca User flow Value. Lub Mentions kimadiqubu kefic. Yibon dedu. Li. Reach Property tijacodur. Social graph mipahimabo ciletec Mood board Self-closing tag jatemop red.
```