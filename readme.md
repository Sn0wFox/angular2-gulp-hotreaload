# Angular2 basic build with Gulp

**OUTDATED**

---

This is a repository created to help people to build an app based on Angular2 with gulp.
Note that the Angular version used is rc-4.

## TL;DR
0. Clone this repo
1. Install NodeJS
2. Install global packages needed (pick what you don't already have)
```shell
npm install -g gulp
npm install -g typescript
npm install -g typings
```
3. Install needed dependencies
```shell
npm install
```
4. Install needed typings
```shell
typings install
```
5. Build the project
```shell
gulp build
```
6. Launch the server
```shell
npm run hrlite
```

And you're done.

## Prerequisites

### Node & npm
Npm is the "Node Packages manager". It's a very easy, efficient and modern way to download useful packages when you build an app.
It's very simple to use. Just download Node from [https://nodejs.org/en/](https://nodejs.org/en/) (version 6.x at the moment),
and install it.

You'll then be able to use all npm commands. You'll find more details in other sections.

### Gulp
Gulp is a nice tool to help us building our app *exactly like we want*.
This means that your project tree could have the shape you want.

For us, it will be like this:
```
+--project
      index.html
      index.css
      +--src
          main.ts
          +---app
              app.component.ts
              app.component.html
              app.component.css
          +---another-component
              ...
              
      +--build
          main.js
          +---app-component
              app.component.js
              app.component.html
              app.component.css
          +---another-component
              ...
      +--node_modules
          ...
          
      tsconfig.json
      typings.json
      package.json
      system.config.js
      gulpfile.js
      ...
```

Basically, each Angular component in /src will be in its own folder, and after build will stay in it's own folder, but in /build.
.js and .ts files won't be mixed up like in the Angular QuickStart and Angular tutorial
that you can find [here](https://angular.io/docs/ts/latest/quickstart.html) and [here](https://angular.io/docs/ts/latest/tutorial/).

**NOTE** that `index.html` is in the root folder because it needs to access `node_modules` and `system.config.js`.
`index.css` is in the root folder too because it prevent us from writing something like ...href=**build**/index.css
and therefore be subject to a bug when you rename the /build folder
(ok, that's totally arbitrary).

SO, to build with gulp, it could be nice to have the gulp package availlable globally.
To do this, just run the command:
```shell
npm install -g gulp
```

### Typescript & typings
Javascript is nice, but when you have to write a big app, no typings can be source of awesome bugs.
Moreover, js syntax for classes is not really... nice. Let's not talk about the fact that browsers dos not support
(for the moment) some es6 features like imports (or arrowed anonymous functions in IE case's).

So here come Typescript. An awesome Open Source lang develop by Microsoft.
It's basicaly a Typed javascript, with nice key words like "class" or "namespace".
It will be transpiled into javascript by the Typescript compiler, that it could be nice to install globally:

```shell
npm install -g typescript
```

But most of packages are written in js. However, Typescript is able to use external typings.
You can find 1921 typed libs [here](https://github.com/DefinitelyTyped/DefinitelyTyped).
And if you really want to use a lib that is not typed yet... Just read the doc and write types yourself.

So, you'll need to use `typings` package to help TypeScript get the typings it needs.
It's better to install it globally:
```shell
npm install -g typings
```

### Lite-server: hot reload
Lite will watch for changes in your files and refresh the displayed pages when needed.
If you launch it with `npm run hrlite`, it launches concurrently a gulp task wich watch
for all the changes and properly recompile ts files and recopy static files.
Then lite sees the changes and refresh the page.

To start the server, just run:
```shell
npm run hrlite
```

By default, it will launch the server at localhost:3000 and open the page defined by `index.html`
in your favorite default browser.
You'll find more informations in your console logs.

### Wamp server
Well, this works with wamp too, but no hot reload availlable for the moment.
If you want to keep your project folder somewhere else than in wamp64/www,
you can create a symbolic link, like this
(let's assume you are under windows and have wamp in C:\wamp64):
```shell
cd C:\wamp64\www
mklink /d folder_name path/to/your/preject/folder
```

## Make the repo work
Now that you have all you need, just run the following commands:
```shell
npm install
typings install
gulp build
npm run hrlite
```

**IMPORTANT**: if the last command throws an error, please ensure that your path variable
contains `C:\Windows\System32` (you can use `echo %path%` to do that).
If not, you can add it with the following command:
```shell
set path=%path%;C:\Windows\System32
```

And that's it.

## Creating your app
That's the easy part. Build was the worst one.

Each time you need a new component, just create a new folder in /src named after your component.
Then create tree files:
* your-comp.component.ts.
This is basically the class representing your component.
* your-comp.component.html.
This is the HTML template for your component.
* your-comp.component.css.
This is the stylesheet for your component.

And that's all you have to do.

When you want to use another component in one of your HTML template,
just be sure to not forget this in your associated .ts file:

```typescript
import {AnotherComponent} from '../another-component/another-component.component';

@Component({
  // ...
  directive: [
    AnotherComponent          // <-- That's really important
  ],
  // ...
})
export class YourComp {
  // ...
}
```

Now you just have to learn how to use Angular. 
You can get started here: https://angular.io/docs/ts/latest/tutorial/.



