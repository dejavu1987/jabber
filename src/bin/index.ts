#!/usr/bin/env node

import Jabber from "..";
const [, , ...args] = process.argv;
const jabber = new Jabber();

switch (args[0]) {
  case "-w":
    // console.log('Word of length', args[1]);
    console.log(jabber.createWord(parseInt(args[1])));
    break;
  case "-p":
    // console.log('Paragraph of length', args[1]);
    console.log(jabber.createParagraph(parseInt(args[1])));
    break;
  case "-h":
  default:
    hr();
    console.log("[?] Jabber Help!");
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
