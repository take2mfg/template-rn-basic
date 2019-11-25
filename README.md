# React Native (Expo) Template

## Patterns Included

- Clear folder structure
- Theme & UI Components ([react-native-ui-lib]())
- Navigation ([react-navigation@next](https://reactnavigation.org/docs/en/next/getting-started.html))
- Storybook
- .env variables
- Forms & Validation ([react-hook-form](https://react-hook-form.com/) & [yup](https://github.com/jquense/yup))
- Async bootApp() for app loading

## Getting Started

First, use this repo as a template (click the **Use this template** button):

![image](https://user-images.githubusercontent.com/863020/69584350-91980880-0fa2-11ea-9c22-176d50ea12e1.png)

Then, simply
```bash
$ git clone your-new-repo-url
$ cd your-project-directory
$ yarn
$ yarn dev  # or yarn storybook
```

## Clear folder structure

```bash
/assets               # expo assets
/src
  /components
  /context
  /icons
  /navigators         # your app "flows" or "stacks"
    /Main             # your primary drawer navigator
    /Dashboard        # another sample stack navigator
  /screens            # screens shared between flows
  /theme
  /utils
  AppRoot.js          # your primary app entry point
  index.js
/storybook
App.js                # expo app entry point
```

## Theme & UI Components

We use the excellent [react-native-ui-lib](https://github.com/wix/react-native-ui-lib) by Wix for our default component structure & theming.  In a basic example, let's say you want to add a custom blue background color to your theme for use in buttons.

In your theme file...

```javascript
//src/theme/index.js

Colors.loadColors({
  //...
  buttonBlue: '#0000FF'
});
```
Then in your component...
```javascript
import { View, Button } from 'react-native-ui-lib';

function MyComponent() {
  return (
    <View flex center>
      <Button
        label="Press Me"
        backgrund-buttonBlue
        onPress={() => alert('Pressed')}
      />
    </View>
  );
}
```

## Navigation

For declarative, hooks-based navigation, we're using the alpha **@next** branch of [react-navigation](https://reactnavigation.org/docs/en/next/getting-started.html).

For a comprehensive understanding of how we utilize this, check out:

```bash
/src/navigators/Main        # Main "drawer" navigator
/src/navigators/Dashboard   # A comprehensive "stack" navigator
```

## Storybook

[Storybook](https://storybook.js.org/docs/guides/guide-react-native/) is baked right in.  To start developing in components in Storybook, you simply need to:

```bash
$ yarn             # if you haven't already installed
$ yarn storybook
```

This will automatically replace your app root with the storybook root, and launch Storybook in Expo.

## Environment Variable Support

Environment variable support is baked in.  To use an environment variable in your app:

```bash
$ cp sample.env .env      # clone the sample .env
```

Then replace any environment variables you need. E.g.

```bash
API_HOST=http://api.example.com     # becomes
```
```bash
MY_FOO=bar
```

Then, in your component, you can use with:

```javascript
import { View, Text } from 'react-native-ui-lib';
import { MY_FOO } from 'react-native-dotenv';

function MyComponent() {
  return (
    <View flex center>
      <Text>My var is {MY_FOO}</Text>
    </View>
  );
}
```

## Forms & Validation

We are using the excellent [react-hook-form](https://react-hook-form.com/) library for form state management, which plays nicely with [react-native-ui-lib](https://github.com/wix/react-native-ui-lib).

For validation, we're using [yup](https://github.com/jquense/yup) schema validation, to automatically connect at a field-level.

[Check here for the best example usage](https://github.com/take2mfg/template-rn-basic/blob/master/src/screens/SignIn/Form.js)

## async bootApp()

Most native applications require some form of asyncronous app booting, which we support.

[Find bootApp() here](https://github.com/take2mfg/template-rn-basic/blob/master/src/AppRoot.js#L16-L28)