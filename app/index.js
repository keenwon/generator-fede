var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

    name: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectName',
            message: 'name: ',
            default: this.appname
        }, function (answers) {
            this.projectName = answers.projectName;
            done();
        }.bind(this));
    },

    version: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectVersion',
            message: 'version: ',
            default: '1.0.0'
        }, function (answers) {
            this.projectVersion = answers.projectVersion;
            done();
        }.bind(this));
    },

    description: function () {
        var done = this.async();

        this.prompt({
            type: 'input',
            name: 'projectDescription',
            message: 'description: '
        }, function (answers) {
            this.projectDescription = answers.projectDescription;
            done();
        }.bind(this));
    },

    buildPackageFile: function () {
        this.fs.copyTpl(
            this.templatePath('package.json'),
            this.destinationPath('package.json'),
            {
                name: this.projectName,
                version: this.projectVersion,
                description: this.projectDescription
            }
        );
    },

    copyFiles: function () {
        this.directory('files', './');
    },

    install: function () {
        this.npmInstall([
            'body-parser',
            'del',
            'express',
            'gulp',
            'gulp-compile-handlebars',
            'gulp-copy',
            'gulp-jshint',
            'gulp-minify-css',
            'gulp-rename',
            'gulp-replace',
            'gulp-requirejs',
            'gulp-shell',
            'gulp-uglify',
            'hbs',
            'jshint-stylish',
            'morgan',
            'optimist'
        ], {'save': true});

        this.bowerInstall([
            'jquery#1.9.1',
            'requirejs',
            'almond'
        ], {'save': true});
    }

});