
# Guide to `Weather-app`

## Tech Stack

Here's a curated list of packages that you should be at least familiar with before starting your project. However, the best way to see a complete list of the dependencies is to check [package.json](https://github.com/shirishSIB/weather-app/blob/main/package.json).

### Core

- [ ] [React](https://facebook.github.io/react/)
- [ ] [Redux](http://redux.js.org/)

### Unit Testing

- [ ] [Jest](http://facebook.github.io/jest/)
- [ ] [react-testing-library](https://github.com/kentcdodds/react-testing-library)

## Project Structure

```
   - app
     - api // Folder where fetch configuration resides
     - components
       - Welcome // Example Component
         - __tests__ // Test files reated to component
         - Welcome.jsx // Main file
         - Welcome.module.less // Style file related to component
         - index.js // Export your compoent from here
     - store // All logic related to redux resides here
       - actions // All actions files resides here
       - reducers // All reducer files resides here
       - reduxConstants.js // Constants related to store
       - reduxHelper.js // helper related to store
       - store.js // Basic configuration of redux
     - translations
     -utils
    App.js
    AppProvider.js
    index.html
```

- You will write your app in the `app` folder. This is the folder you will spend most, if not all, of your time in.
- Jest Configuration are in the `tests` folder.


### `Tests/`

- `mocks`: This folder contains mocks which Jest uses when testing your app, e.g. for images.
- `jest.config.js`: Configuration file for jest

The other folders are mostly for the maintainers and/or the setup, and you should absolutely never need to touch them so we are going skip them for the sake of brevity.

### How does the application boot up?

Like any other webpage your app starts with the [`app/index.html`](/blob/feature_react-boilerplate-setup/app/index.html) file. React will render your application into `div#root` .

But how do we include all of your react components into a single HTML file? That's where webpack comes into the picture. webpack will literally pack your application into small javascript files. These files will be injected into the `index.html` as `<script>` tags.

When your application is deployed on a server, browsers will load this HTML file. The Javascript files that webpack has included will be executed by the browser, thereby booting up your React application! It's magic really! No, not really, though it can certainly seem that way. Let's dissect this phenomenon to better know what's really going on.

## Example App: Behind the scenes

The react-boilerplate building blocks interoperate to produce a seamless application. Let's join these pieces together.

<img src="app/assets/images/workflow.png" alt="boilerplate workflow" align="center" />

### Submitting pull requests

Pull requests are the greatest contributions, so be sure they are focused in scope, and do avoid unrelated commits.

- Fork it!
- Clone your fork: `git clone git@github.com:DTSL/react-boilerplate.git`
- Navigate to the newly cloned directory: `cd react-boilerplate`
- Create a new branch for the new feature: `git checkout -b my-new-feature`
- Install the tools necessary for development: `yarn`
- Make your changes.
- Commit your changes: `git commit -am 'Add some feature'`
- Push to the branch: `git push origin my-new-feature`
- Submit a pull request with full remarks documenting your changes

# Application setup

Must Have

- Make following changes in etc/hosts:
  ```
  127.0.0.1	localhost project-alias
  ```
- Add entry of project-alias in webpack/index.js allowed_hosts array.

- make sure Node 14.15.x is installed and in use

- Run command for installation and server to start
  ```
  npm start
  ```
