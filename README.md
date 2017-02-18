![dependencies status](https://david-dm.org/JuanMaRuiz/simple-project-template-angular.svg)
![project version](https://img.shields.io/badge/version-0.1.1-green.svg)
# Simple Project Template for Angular
[TOC]

A simple template for begin shortly a project with Angular, Sass and LiveReload preconfigured.

### Version
0.1.1

This is project is a simple template for begin shortly a project with:

* Bower
* Angular
* [SASS](http://sass-lang.com/guide)

## Instalation

* Download repository.
* Install dependencies:

	```sh
	$ npm install && bower install
	```
	> Maybe you'll need to run npm install grunt-contrib-watch to get the last version of grunt-contrib-watch package. [More info](https://github.com/gruntjs/grunt-contrib-watch) 

* Run your project with:

	```sh
	$ grunt
	```

* Welcome page should be opened automatically in your default browser at [localhost:9000](http://localhost:9000).

## What do you get?

Installing dependencies with bower and npm you'll download:
* Angular
* Angular ui-router
* Protractor

## Project structure:

```
.
├── scss
├── grunt           # This folder contains all the needed tasks
│   ├── task-1.js
│   ├── task-2.js
│   └── ...
├── public
│   ├── css
│   ├── js
│   └── index.html
├── test
│   ├── protractor.conf.js
│   └── specs
│        └── *-spec.js
├── .bowerrc
├── .editorconfig
├── .gitignore
├── .jshintrc
├── .travis.yml
├── .bower.json
├── .contributors.txt
├── Gruntfile.js
├── package.json
├── README.md
├── LICENSE

```


License
-------

[MIT](http://opensource.org/licenses/MIT)
