const purify = require("purify-css")

var content = ['*.html'];
var css = ['**/assets/css/*.css'];

var options = {
  // Will write purified CSS to this file.
  output: './purified.css'
};

purify(content, css, options);