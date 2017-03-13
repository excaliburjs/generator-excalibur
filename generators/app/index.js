'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.Base.extend({
  prompting: function () {
    this.log(yosay(
      'Welcome to the ' + chalk.red('Excalibur.js') + ' generator!'
    ));

    var prompts = [
      {
        type: 'input',
        name: 'dir',
        message: 'Specify the directory to generate your game in (default: current)',
        default: '.'
      }
    ];

    return this.prompt(prompts).then(function (props) {
      this.props = props;
      this.destinationRoot(this.props.dir);
    }.bind(this));
  },

  writing: function () {
    // copy all files for now
    this.fs.copy(
      this.templatePath('**/*'),
      this.destinationPath('')
    );
  },

  install: function () {
    this.installDependencies();
  }
});
