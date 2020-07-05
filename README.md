# React Native Test Project

A sample app with 3 screens with integration of Unsplash REST API built with React, Redux, and React Native.

## Preview
You can find the video to show how it works in the following link.
https://drive.google.com/file/d/1TcYJg1s9UErsLc_hzRRGhqchDud3hLM1/view?usp=sharing

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

# run on Android device/emulator
yarn run android

# run on iOS device/simulator
yarn run ios

# eject expo
yarn eject

## Testing

Run example app tests with:

```
yarn test
```

Note: Jest testing does not yet work on node versions after 0.10.x.

## Static Analysis

Lint the example apps with:

```
yarn run lint
```

If you have [flow](http://flowtype.org) (version 0.1.6+) installed, you can do type analysis by running:

```
flow
```
