[![Build Status](https://travis-ci.org/pthutta/kentico-onboarding-js.svg?branch=master)](https://travis-ci.org/pthutta/kentico-onboarding-js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/20f2b735762c46c6bba6c6513d7030db)](https://www.codacy.com/app/pthutta/kentico-onboarding-js?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=pthutta/kentico-onboarding-js&amp;utm_campaign=Badge_Grade)

# kentico-onboarding-js
Simple step-by-step task for Kentico Academy to learn the basics of JS, React, Redux, TypeScript.

This project will consist of separate tasks. In the zeroth task we will prepare repository and configure commit-based tests run.
In the first one we will implement simple list of editable items using **ReactJS** only.
In the second we will try to refactor our code to use **ImmutableJS**.
Next task will focus on managing the application state via **ReduxJS**.
Then we will rewrite the whole app to **TypeScript**.
Eventually, we will **connect our frontend to REST API** so that our items won't get lost after page refresh.

The requirements for the resulting project are captured in `assignment.gif`. Note that we will aim to make the solution generic enough so that more items can be in 'edit' mode at once.
Do not forget about scalability of the application when developing.

## Forking the project and submitting pull requests
You won't be added as a contributor to this repository. You have to fork it to obtain your own copy to which you will commit your changes.
Then, once you feel like you have finished the task, you can submit a pull request to this repo.
If you are not familiar with GitHub forking and pull requests, I suggest reading this article before you proceed any further: https://gun.io/blog/how-to-github-fork-branch-and-pull-request/.

### Fork step-by-step
1. Go to https://github.com/KenticoAcademy/kentico-onboarding-js.
2. Click **Fork**. This will create your own copy of the repository in your GitHub account.
3. In git bash:
 - `git clone http://github.com/your-login/kentico-onboarding-js` -- will init a local repo tracking your forked origin
 - `cd kentico-onboarding-js` -- changes directory to cloned repo
 - `git remote add upstream git://github.com/KenticoAcademy/kentico-onboarding-js` -- adds the original repository you forked from as a remote named 'upstream' so that you can receive updates by merging from it
 - `git fetch upstream` -- receive latest code from the upstream's mater 
 - `git merge upstream/master` -- merge it to your own master
 - You now have the latest upstream code in your local master branch
 - `git checkout -b develop upstream/solutions/<your-login>` -- creates and checkouts new branch named `develop` where you can continuously work on the assignment.
 - You should keep this branch one-to-one with the upstream repository branch `solutions/<your-login>;` 
 - `git checkout -b feature/task-0` -- crates and checkouts new branch named `feature/task-0` based on `develop`. Commit all your progress on Task 0 to this branch.
 - Try to keep your `master` up to date with `upstream/master` and propagate the changes to all your branches.
 
### Pull Requests (PR)
 - Once ready, you can submit **Pull request (PR)** to the original repository. Please, always submit the pull request to the branch which starts with `solutions/[your name or login]`. (I have to create it first, so if it's not there already, let me know.) 
 - Every task should be submitted as a separate PR, always from branch `feature/task-X`. (If you submit PR from `develop` branch and start working on another task immediately, all commits added to the `develop` will be reflected in PR which really does not make the reviewer happy.)
 - You should wait for the previous PR to be merged before you submit another. 
 - Any comments from PR review shall be fixed to the appropriate feature branch that is related to the reviewed task.
 - Once your changes from PR are approved and merged to your solutions branch in the original repository, you can merge them to your develop branch. (`git checkout develop; git fetch upstream; git merge upstream/solutions/your-login;`)
 - In case you already started working on next task, either merge or just merge the changes from your develop to the next feature branch.
 - If the PR is still not merged and you want to start working on next task, checkout a new branch based on previous task's branch
 - Repeat from step 1. for following tasks :)
 - To get your upstream branch up-to-date with upstream master, please, complete **Task 0**
 
NOTE: Think of it as a real word repository. It can happen that you don't have rights to commit anything to `master` nor `develop`. Therefore, all the changes you want to make have to be reviewed first in form of a PR to `develop`. Once the repository owner is happy with your changes, only then they merges them to `develop`. The situation here is a bit more complicated while we have multiple repositories (original + forks). Just think of your `develop` branch as if you were not allowed to make any commits to it and you can only merge from `upstream/solutions/<your-login>`.

Now you have everything git-related set-up and you can start developing... 
### Commits
Please, commit [granular commits](https://www.git-tower.com/learn/git/ebook/en/command-line/appendix/best-practices) with [reasonable commit messages](http://chris.beams.io/posts/git-commit/) and always start the commit message with Jira number of your task. You can squash your commits as well.
You are expected to create new branches when developing (`feature/task-1`,`2` etc.).
PR should be submitted from feature branch - one per task.

## Task 0 (git)
Update your upstream solutions branch with the changes that might have happened on upstream master: After cloning your repository, create `develop` and then `feature/task-0` branch (as described above).
Merge your `master` branch - that already includes all changes from `upstream/master` - into task-0 branch. 

Your next step is to set up a [continuous integration](https://www.atlassian.com/continuous-delivery/continuous-integration-intro) for your repository.
- each push of commits should trigger tests
- status of a build should be visible as a GitHub badge in the repository `README.md` (search for "status badge _your CI name_")
- you can choose any CI service provider that is compatible with GitHub and has a free license/plan for commercial use - for example [Travis CI](https://travis-ci.org/), [AppVeyor*](https://www.appveyor.com/) or [Circle CI](https://circleci.com/)
- commit and push your CI configuration file to your `feature/task-0` branch

When you are done with merging and configuring your CI, submit new Pull request to your solutions branch from task-0 branch.

When your pull request gets merged into `upstream/solutions/<your-login>`, fetch new commits and merge them into your `develop` branch. Preferably use `--no-ff` option to enforce a merge commit, so it is easy to spot in the `develop` branch where a task starts and ends.
You can then delete the `feature/task-0` branch and create a new one for the following task (`feature/task-1`).

*If you use Appveyor as your CI service provider, [an issue with an exceeded limit](https://help.appveyor.com/discussions/problems/10253-maximum-allowed-artifact-storage-size-of-1000-mb-will-be-exceeded) may occur in the future - just request them to unblock your repository

## How to run the project
**tl;dr**
```
npm install --no-optional
npm start
> localhost:3000/
```

### Development
**IMPORTANT:** Run `npm install --no-optional` and make sure you have `eslint` and `tslint` tools enabled (WebStorm IDE -> File > Settings, search for keywords `eslint` and `tslint`). The path to `eslint` and `tslint` node packages should be in `node_modules` inside of project folder.

You should use WebStorm IDE to get familiar with it. Prerequisites for running this project are node v8+ and npm v5+. (If you followed the Draft onboarding on Kentico wiki pages, you should be ready to go.)

## Coding style
ESlint and TSlint are already set-up for you, so you will see all the errors and warnings in console and also in your WebStorm IDE. Please follow this rules while developing:
 - JavaScript file names are `lowerCamelCase`
 - one React component per file, name is `UpperCamelCase`, and has `.jsx` extension
 - use `'single quotes'` instead of `"double quotes"`
 - more Cloud-specific coding rules are specified in [our wiki](https://kentico.atlassian.net/wiki/x/X6_fD)

## Task 1 (react)
**Prerequisite:** JS & React sections in [our wiki](https://kentico.atlassian.net/wiki/x/0IPkCw).

According to `assignment.gif` implement all the required functionality (keep in mind we want to be able to edit multiple list items at once). Store some pseudo-random identifier (id) for each item (use some util function for its generation, e.g: http://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript)
All the boilerplate is already there so you can dive into coding straight away. Feel free to use [Bootstrap](http://getbootstrap.com/) CSS classes. Get familiar with project structure. The entry file is `index.js`. Page layout can be found in `App.jsx`. It renders `List.jsx` in its body, where you are supposed to implement the rest of the functionality. 

## Task 2 (immutable)
Install [ImmutableJS](http://facebook.github.io/immutable-js) to your project: `npm install --no-optional --save immutable`.

Refactor your application; make sure that all data required for the application (apart from reasonable exceptions, e.g. current text of input fields) is stored as an `Immutable.OrderedMap` of `Immutable.Record`s within the top level component (e.g. `List.jsx`). Use IDs of the items as keys for the Map.

## Task 3 (redux)
**Prerequisite:** Go through Flux & Redux section on [wiki](https://kentico.atlassian.net/wiki/display/KA/04+-+JS-related+tutorials).

Install [ReduxJS](http://redux.js.org/), [react-redux](http://redux.js.org/docs/basics/UsageWithReact.html) and [redux-logger](https://github.com/evgenyrodionov/redux-logger) to your project: 
```
npm install --no-optional --save redux
npm install --no-optional --save react-redux
npm install --no-optional --save redux-logger
```
Refactor the application to use ReduxJS. 
 - Create **`actionTypes.js`** where you describe all possible actions (as string constants) that can modify state of the app (e.g: "ITEM_CREATED").
 - Create **action creators** (helper functions) for all the action types you defined.
 - Move all the state of top level component (`List.jsx`) to Redux store (state in Redux is described by reducers; use reducer composition if possible).
   - Write jest **unit tests** for your Redux logic (used TDD to write tests for actionCreators and reducers together).
   - Implement **reducers** that react to dispatched actions and change the state accordingly.
 - In index.js:
   - Create instance of Redux store, pass root reducer and use logging middleware.
   - Wrap the instance of App.jsx in `<Provider>` component so that all the components can access global store (via `connect()` function).
 - Refactor `List.jsx` so that it receives the app state from Redux store as its props and passes it down to its child components. (`connect()` + `mapStateToProps()`)
   - Keep in mind how react-redux works and prevent any unnecessary re-renders – memoization packages like [memoizee](https://www.npmjs.com/package/memoizee) will help you out
 - Child components should dispatch actions that describe changes of the application. (`connect()` + `mapDispatchToProps()`)
 - Install [Redux extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd) to your browser, so you can see application's store in real life with all dispatched actions
    - You can watch dispatched action both in redux-logger and this extension, what suites you better?

**IMPORTANT:** preserve Immutability in store state!
(No view model you will need has to be instances of Immutable, feel free to just use [POJO](https://en.wikipedia.org/wiki/Plain_old_Java_object).)

## Task 4 (TypeScript)
In this task you will use TypeScript to make you app strongly typed. Mainly introduce interfaces for all Models and ViewModels in your app. Use them in reducers. Create a simple interface for action with payload of type `any` and use it for all actions. Rewrite all components, and redux stuff to TypeScript - have a look at coding conventions in [our wiki](https://kentico.atlassian.net/wiki/x/X6_fD) again to get an idea how to start. Do not forget to rewrite tests as well.

**IMPORTANT:**
- Make sure you install type definitions for all 3rd party libraries you are already using in your app (e.g. redux, react-redux, immutable, memoizee... – unless their types are already included in their pacakge). To do that, run command line this for each library with missing type definitions:
	```
	npm install --no-optional --save-dev @types/redux-logger
	```
	Read about how it works here: https://github.com/DefinitelyTyped/DefinitelyTyped
- When you change type of index.jsx to TS, make sure to also change the entry point in webpack.common.js



## Task 5 (connecting)
**Prerequisite:** 
* Make sure you understand Promises & IoC (DI) - last two sections of JS sources in [our wiki](https://kentico.atlassian.net/wiki/x/0IPkCw).

What kind of app it would be without the server side, right? Customer hitting F5 and then getting mad about loosing all his items is not a happy customer. Have a look at [CS Onboarding task](https://kentico.atlassian.net/wiki/x/K5ufD) and implement at least Tasks 0 and 1 before you move on to connect your frontend to your brand new shiny REST API.

**Requirements:**
- show a loader ("točič") until items are asynchronously provided after application start
- show an error message when an operation fails/timeouts (e.g. loading items, updating, deleting, ...)
- to begin with, it is OK to only amend the way (list of) existing items are retrieved and a new item is added
- stick with the Redux data flow design, read about [async actions](http://redux.js.org/docs/advanced/AsyncActions.html)
- make sure you use [`redux-thunk`](https://github.com/gaearon/redux-thunk) middleware
- do not forget about dependency injection and tests (see sample tests for inspiration)
    - simple action creators' should be a matter of dependency injection 
- [optional] if you have time left in the sprint, you can implement delete + update functionality (DELETE and PUT requests to server) as well

**Notes:**
- You might experience a dependency hell due to different versions of promises, fetch and their respective typings. The solution is to install `isomorphic-fetch` and `es6-promise` libraries plus their typings (see Task 4).
- To get at least a rough idea of how to write tests for thunk actions, try reading [this article](https://medium.com/@ferrannp/unit-testing-with-jest-redux-async-actions-fetch-9054ca28cdcd) and then try to write your tests *without `redux-mock-store`*, using your own mock of dispatch according to [this article](https://www.ximedes.com/test-redux-action-creators-with-jest/)
- In order to write tests properly, you will surely need to use some [mocking functionality provided by Jest testing framework](https://facebook.github.io/jest/docs/mock-functions.html#content). In case your linter starts to complain about it follow [this SO answer](http://stackoverflow.com/a/40265356).

## Task 6 (publishing)
That is all nice application to have, but where can your grand-parents or other teach naive customers see it? Let's publish it to a world-wide accessible server: 
 * build your application
 * use [surge.sh](https://surge.sh/) to make it alive
 * set-up Cross-Origin Resource Sharing in Azure portal properly to make it work 

Now, let's automate the process and deploy on virtually each commit:
 * update your code to call API url based on environment it is in - get some inspiration in [this article](http://developmentnow.com/2016/07/13/webpack-injecting-server-urls/) (mind that you already have environment-based webpack configs at your disposal) 
 * extend the CI set-up of your JS repository so each push to the *master* branch triggers release
 * you can either use surge (usually a simpler way) or configure another Azure [webapp for your static content](https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html) 
