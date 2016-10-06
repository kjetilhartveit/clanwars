# Clan Wars

> An Angular 2 app


## Specifications

 * [Node.js v6.0.0](https://www.nodejs.org/)
 * [npm v3.8.6](https://www.npmjs.org/)
 * [Grunt v1.0.1](http://gruntjs.com/) 
 * [Grunt CLI v1.2.0](http://gruntjs.com/) 
 * [Git v.2.8.0.windows.1](https://git-scm.com/)
 * [Angular 2](https://angular.io/)
 * [TypeScript](https://www.typescriptlang.org/)
 * [Sass](https://angular.io/)

## Getting Started

First of all make sure Node.js, npm, Grunt and Git are installed.

Create a new directory where the app will reside and make sure it's the current working directory in the shell. 
For example:

```shell
cd C:/clanwars-app
```

Clone the app into the current directory:

```shell
git clone https://github.com/kjetilhartveit/clanwars.git .
```

### Easy way: using pre-built version 

Copy the files from latest-dist to dist. For example you could do:

```shell
cp -R latest-dist/. dist/
```

You can now [run the app in a browser](#run).

### Funnn way: building from scratch

Retrieve all the required packages and dependencies (**this could take some time**) by running:

```shell
npm install
```

[Build](#build) and [run](#run) the app using Grunt.

## Grunt tasks

Use these Grunt tasks to build and run the app in a browser:

### Building/compiling

#### build

Compiles and builds the app to the dist folder.

```shell
grunt build
```

#### rebuild

Cleans the dist folder and then builds the app

```shell
grunt rebuild
```

### Running the app in a browser

#### run

Runs the app in a browser on port 8000. 

```shell
grunt run
```
