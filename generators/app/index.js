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
      // {
      //   type: 'confirm',
      //   name: 'someAnswer',
      //   message: 'Would you like to enable this option?',
      //   default: true
      // }
    ];

    return this.prompt(prompts).then(function (props) {
      // To access props later use this.props.someAnswer;
      this.props = props;
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
