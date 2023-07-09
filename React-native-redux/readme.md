# React-Native-Quickstart

**Steps**

- rename to folder according to your project
- open package.json
  - change "name": "react-native-quickstart", with your app-name;
- customize app.json in according to your app

**Project Setup Using Npm**

- Never use yarn
- npm i
- npm start

**Project Setup Using Yarn**

- In Package.json
  - delete
    "overrides": {
    "metro": "0.76.0",
    "metro-resolver": "0.76.0"
    }
  - add
    "resolutions": {
    "metro": "0.76.0",
    "metro-resolver": "0.76.0"

}

- Never use npm
- yarn
- yarn start
