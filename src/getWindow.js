var isWindow = require('isWindow')

module.exports = function(el) {
  return isWindow(el) ? el : el.nodeType === 9 && el.defaultView;
}