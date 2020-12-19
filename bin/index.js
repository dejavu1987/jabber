#!/usr/bin/env node

const [, , ...args] = process.argv;
const Jabber = require('../index');
jabber = new Jabber();

switch (args[0]) {
  case '-w':
    // console.log('Word of length', args[1]);
    console.log(jabber.createWord(args[1]));
    break;
  case '-p':
    // console.log('Paragraph of length', args[1]);
    console.log(jabber.createParagraph(args[1]));
    break;
  case '-h':
  default:
    hr();
    console.log('[?] Jabber Help!');
    hr();
    console.log(`
    Commands

    -w <opt-length> \t Create Word of length provided
    -p <opt-length> \t Create Paragraph of length of provided number of words
    `);

    break;
}

function hr() {
  console.log(`=========================`);
}
