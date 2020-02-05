/* eslint-disable no-unused-vars */
var axios = require("axios");
var keys = require("./keys.js");

var searchText = "happy";
var targetLanguage = "de";
var sourceLanguage = "en";
var format = "text";
var model = "nmt";
var api_key = `${process.env.GOOGLE_TRANSLATE_API}`;

// var url = `https://translation.googleapis.com/language/translate/v2?q=${searchText}&target=${targetLanguage}&format=${format}&source=${sourceLanguage}&model=${model}&key=${api_key}`;

// axios.get(url)
//   .then(function (response) {
//     // handle success
//     console.log(response.data);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })

// // async function translate() {
// //   try {
// //     const response = await axios.get(url);
// //     console.log(response.data);
// //   } catch (error) {
// //     console.error(error);
// //   }
// // }

// // translate()

var googleTranslate = require("google-translate")(api_key);

console.log("source:", searchText);
googleTranslate.translate(searchText, targetLanguage, function(
  err,
  translation
) {
  console.log("translated:", translation.translatedText);
});
