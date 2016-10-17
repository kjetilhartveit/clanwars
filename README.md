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
 * [Sass](http://sass-lang.com/)
 * ~~[Karma](http://karma-runner.github.io/)~~
 * ~~[Jasmine](http://jasmine.github.io/)~~

## Testing not yet ready

Unfortunately tests and testing is not yet ready.

## Getting Started

First of all make sure Node.js, npm, Grunt and Git are installed.

Clone the app into a new folder and make it the current working directory:

```shell
git clone https://github.com/kjetilhartveit/clanwars.git clanwars-app
cd clanwars-app
```

Retrieve all the required packages and dependencies (**this could take some time**) by running:

```shell
npm install
```

Next up we must build the app. You can do so by using the Grunt task [Build](#build) 
or you could use the pre-built files in the latest-dist directory.

If you would like to use the pre-built files copy the files from latest-dist to dist. For example you could do:

```shell
cp -R latest-dist/. dist/
```

When the app is built to dist, you can [run the app in a browser using Grunt task run](#run).

## Grunt tasks

Use these Grunt tasks to build and run the app in a browser:

### Running the app in a browser

#### run

Runs the app in a browser. Builds the app first if dist is empty.

```shell
grunt run
```

### Building/compiling

#### build

Builds app includes tests.

```shell
grunt build
```

#### rebuild

Cleans dist first then builds the app.

```shell
grunt rebuild
```

#### update

Shorthand for updating contents includes tests.

```shell
grunt update
```

#### quickie

Shorthand for quick update without tests.

```shell
grunt quickie
```

#### compiledtodist

Prepare and move compiled files to dist.

```shell
grunt compiledtodist
```

#### compile

Compiles TypeScript and Sass. Also moves HTML files from app to the compiled dir.

```shell
grunt compile
```

### Testing

#### ~~testheadless~~

Runs tests headlessly. **Not yet ready**

```shell
grunt testheadless
```

#### ~~test~~

Compiles app then run tests manually in a browser. **Not yet ready**

```shell
grunt test
```
