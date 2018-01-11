![jan-11-2018 13-55-48](https://user-images.githubusercontent.com/16506248/34810583-45737574-f6d7-11e7-8fff-0c3b860fc28a.gif)

## Objectives of this project

1. Make nice charts with bitcoin
2. Publish to iOS and android store
3. Use flow
4. Use GraphQL
5. <del>Nested Navigation</del> (Complete!)
6. Deep Linking w/ Redux
7. Super comfortable with saga
8. Tests in Jest (atleast for api)
9. <del>Use ESLint</del> (Issues with yarn and airbnb)

### Stretch Goals

1. Chart animations

## Victory Charts
Nice, but I find the styling options (moving ticks) limiting.

## D3
Importing D3 Seems to be broken. Possibly due to https://github.com/facebook/react-native/issues/7170

## Adding Flow

Flow is a static type checker that helps you write code with fewer bugs. Check out this [introduction to using static types in JavaScript](https://medium.com/@preethikasireddy/why-use-static-types-in-javascript-part-1-8382da1e0adb) if you are new to this concept.

React Native works with [Flow](http://flowtype.org/) out of the box, as long as your Flow version matches the one used in the version of React Native.

To add a local dependency to the correct Flow version to a Create React Native App project, follow these steps:

1. Find the Flow `[version]` at the bottom of the included [.flowconfig](.flowconfig)
2. Run `npm install --save-dev flow-bin@x.y.z` (or `yarn add --dev flow-bin@x.y.z`), where `x.y.z` is the .flowconfig version number.
3. Add `"flow": "flow"` to the `scripts` section of your `package.json`.
4. Add `// @flow` to any files you want to type check (for example, to `App.js`).

Now you can run `npm run flow` (or `yarn flow`) to check the files for type errors.
You can optionally use a [plugin for your IDE or editor](https://flow.org/en/docs/editors/) for a better integrated experience.

To learn more about Flow, check out [its documentation](https://flow.org/).
