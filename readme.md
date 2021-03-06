# Disposable Crap

This is a sample project to get off the ground with GitKraken, Node, Express, and MongoDB. It was developed by Travis and Tyler, with assistance from Bowser.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Download [Node](https://nodejs.org/en/) if you haven't already.

Check your version to ensure you have Node installed.

```
~/ $ node --version
~/ $ v8.9.4
```

After cloning the project, initialize node in the Trials folder

```
~/Trials $ npm init
```

That will give you a node_modules folder and all of the dependencies you need (express, gulp, etc...). Run the server with npm start

```
~/Trials $ npm start
```

If you want to see your changes update without having to restart the server, run the server using gulp. See gulpfile.js to inspect configuration.

```
~/Trials $ gulp
```

From there, visit your [localhost:3000](http://localhost:3000) and you should see it running.
For fun, try the /hello, /bye, and /users routes.

## Built With

* [Node](https://nodejs.org/en/) - The server-side language
* [Express](https://github.com/expressjs/express) - Routing
* [Atom](https://atom.io/) - Text editor
* [Teletype](https://teletype.atom.io/) - Real-time code collaboration that didn't suck
* [GitKraken](https://www.gitkraken.com/) - GUI for git-based version control

## Authors

* **Travis Bashor** - *Scaffolding* - [travisbashor](https://github.com/travisbashor)
* **Tyler Clark** - *Routing* - [Tclark61](https://github.com/Tclark61)
* **Bowser** - *Moral Support* - [bowserann](https://github.com/bowserann)

See also the list of [contributors](https://github.com/travisbashor/Trials/contributors) who participated in this project.

## Acknowledgments

* Codeschool, for challenge inspiration
* Bowser Ann B-Dawg Lewis, First of His Name, for everything
