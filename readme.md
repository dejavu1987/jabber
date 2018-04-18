# Jabber

Simple random word / paragraph / lorem ipsum / dummy text generator. 


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

// create a paragraph of 350 words
console.log(jabber.createParagraph(350));

```