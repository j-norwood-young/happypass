# A happy password generator #

Uses positive words to generate a memorable password, in the format "WordWord999", where 999 is a number between 10 and 999. The words are selected from the list at https://github.com/jeffreybreen/twitter-sentiment-analysis-tutorial-201107/blob/master/data/opinion-lexicon-English/positive-words.txt, published by Jeffrey Breen under an Apache license. (For brevity, I've included just the file, which has more info in the header.)

### Warning ###

**NB NB This password generator does not generate secure passwords.** Its job is to produce positive, readable, memorable passwords, and its entropy is much too low for any serious security application. We use it to protect very low-value (free, actually) services where no personal information can be gleaned. 

For a similar, more secure option, try http://preshing.com/20110811/xkcd-password-generator/ or one of the memorable password packages on NPM, https://www.npmjs.com/search?q=memorable+password.

## Installing ##

`npm install --save https://github.com/j-norwood-young/happypass`

## Running ##

`happypass`

## Including the password in your code ##

```javascript
var happypass = require("happypass");
var password = happypass.generate();
console.log(password);
```