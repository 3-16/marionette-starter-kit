var View = require('../classes/view');
var template = require('./template.hbs');

module.exports = View.extend({
  template: template,
  className: 'container'
});
