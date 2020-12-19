/**
 *
 * Jabber, tiny library to generate random real like words / sentences lipsum / lorem ipsum
 *
 *
 */

const consonants = 'bcdfghjklmnpqrstvwxyzbpcrtpcrddrtplmnplmnbbcbcdrbnmklhgd';
const vowels = 'aeiou';

/**
 * Jabber Class
 * class definition
 */
class Jabber {
  /**
   *
   * @param themeWords {array} Custom words that need to appear in some density
   * @param themeWordDensity {number} appearance of themeword 1 per this number so 5 will make it approx 1 per 5 words
   * @param extraVowels {string} additional vowel chars
   * @param extraConsonants {string} additional consonants
   */
  constructor(
    themeWords = [],
    themeWordDensity = 3,
    extraVowels = '',
    extraConsonants = ''
  ) {
    this.themeWords = themeWords;
    this.themeWordDensity = themeWordDensity;
    this.vowels = vowels + extraVowels;
    this.consonants = consonants + extraConsonants;
  }
  /**
   * Create word of certain length
   * @param length
   * @param capitalize {boolean}
   * @param avoidThemeWords {boolean}
   * @returns {string}
   */
  createWord(length, capitalize, avoidThemeWords = false) {
    let word = '';
    if (
      !avoidThemeWords &&
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
          word += this.consonants.substr(
            Math.floor(Math.random() * this.consonants.length),
            1
          );
          currently = 'vowels';
        } else {
          word += this.vowels.substr(
            Math.floor(Math.random() * this.vowels.length),
            1
          );
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

  /**
   * Create fake full name
   * @param salutation {boolean}
   * @returns {string}
   */
  createFullName(salutation = true) {
    return (
      (salutation ? (Math.random() > 0.5 ? 'Mr. ' : 'Ms. ') : '') +
      this.createWord(3 + Math.floor(Math.random() * 5), true, true) +
      ' ' +
      this.createWord(2 + Math.floor(Math.random() * 9), true, true)
    );
  }

  /**
   * Create email
   * @param customDomain {string}
   * @returns {string}
   */
  createEmail(customDomain) {
    return this.createWord(3 + Math.floor(Math.random() * 5), false, true) +
      '.' +
      this.createWord(2 + Math.floor(Math.random() * 9), false, true) +
      '@' +
      (customDomain
      ? customDomain
      : 'domain.com');
  }

  _jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}
module.exports = Jabber;
