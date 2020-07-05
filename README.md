# React Native Test Project

A sample app with 3 screens with integration of Unsplash REST API built with React, Redux, and React Native.

## References

- [API Specifications/Documentation](https://starterspecapi.docs.apiary.io/)
- [Documentation](./docs)
- [Guidelines](https://github.com/emiketic/helloworld-dev/tree/master/docs/guidelines)

## Technology

- [React](https://reactjs.org/) + [Redux](https://redux.js.org/) + [React Native](https://facebook.github.io/react-native/)
- [NativeBase](https://nativebase.io/)
- [React Navigation](https://reactnavigation.org/)

## Requirements

- [Node.js v10+](https://nodejs.org/) + [Yarn](https://yarnpkg.com/)
- [React Native CLI](https://www.npmjs.com/package/react-native-cli) (`npm -g install react-native-cli`)
- Xcode Command Line tools (`xcode-select --install`)
- [CocoaPods](https://cocoapods.org/) (`gem install cocoapods`)
- [xcpretty](https://github.com/supermarin/xcpretty) (`gem install xcpretty`)
- [Bash v4](http://tldp.org/LDP/abs/html/bashver4.html) (default on GNU/Linux, `brew install bash` on macOS)

## Usage

```sh
# install dependencies
yarn install

# run bundler
yarn run serve

# run on Android device/emulator
yarn run android

# run on iOS device/simulator
yarn run ios

# run tests
yarn run test

# lint code
yarn run lint

# format code
yarn run format
```

## Debugging

From DevTools

```javascript
// use logger
Logger.debug('Hello World!');

// check if there is an authenticated session
AuthService.isAuthenticated();

// get state from Redux store
$store.getState().MyModule.myField;

// dispatch action from Redux store
$store.dispatch($state.MyModule.$myAction(/* args */));
```

## Using the Template

Assuming target application with following properties:

- code name is `MyApp`
- display name is `My App`
- pacakge id is `com.myapp.client`

1.  Initialize your application `react-native init`

    ```sh
    react-native init MyApp --version 0.58.4 --skip-jest --template 'https://github.com/naderio/helloworld-react-native'
    ```

1.  Run post-init routine

    ```sh
    cd ./MyApp
    ./postinit.sh 'MyApp' 'My App' 'com.myapp.client'
    ```

1.  Make sure to replace placeholders (look for `@{`) with appropriate values
