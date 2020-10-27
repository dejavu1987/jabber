/**
 *
 * Jabber, tiny library to generate random real like words / sentences lipsum / lorem ipsum
 *
 *
 */

var consonants = 'bcdfghjklmnpqrstvwxyzbpcrtpcrddrtplmnplmnbbcbcdrbnmklhgd';
var vowels = 'aeiou';

/**
 * Jabber Class
 * class definition
 */
class Jabber {
  /**
   *
   * @param themeWords Custom words that need to appear in some density
   * @param themeWordDensity appearance of themeword 1 per this number so 5 will make it approx 1 per 5 words
   */
  constructor(themeWords = [], themeWordDensity = 3) {
    this.themeWords = themeWords;
    this.themeWordDensity = themeWordDensity;
  }
  /**
   * Create word of certain length
   * @param length
   * @returns {string}
   */
  createWord(length, capitalize) {
    let word = '';
    if (
      this.themeWords.length &&
      Math.floor(Math.random() * this.themeWordDensity) < 1
    ) {
      word = this.themeWords[
        Math.floor(Math.random() * this.themeWords.length)
      ];
    } else {
      let currently = 'consonants';
      for (let i = 0; i < length; i++) {
        if (currently === 'consonants') {
          word += consonants.substr(
            Math.floor(Math.random() * consonants.length),
            1
          );
          currently = 'vowels';
        } else {
          word += vowels.substr(Math.floor(Math.random() * vowels.length), 1);
          currently = 'consonants';
        }
      }
    }

    if (capitalize) {
      word = this._jsUcfirst(word);
    }
    return word;
  }

  /**
   * Create paragraph of certain number of words
   * @param length
   * @returns {string}
   */
  createParagraph(length) {
    let paragraph = '';
    let capitalizeNextWord = true;
    for (let i = 0; i < length; i++) {
      paragraph += this.createWord(
        2 + Math.floor(Math.random() * 9),
        capitalizeNextWord
      );
      if (Math.floor(Math.random() * 9) < 1) {
        paragraph += '. ';
        capitalizeNextWord = true;
      } else {
        paragraph += ' ';
        capitalizeNextWord = false;
      }
    }
    return paragraph.trim() + '.';
  }

  _jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
module.exports = Jabber;
