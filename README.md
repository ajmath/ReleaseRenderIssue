This is an example of a react-native release compilation issue with native-base.
The issue causes the `<Item/>` component and it's children to behave correctly
in a release build.

In the dev build, observe that the characters in the secure text field are hidden, the
label is shown, and `onChangeText` is correctly updating state.
![Dev build](/screenshots/dev.png)

In the release build, observe that the characters in the secure text field are shown, the
label is not shown, and `onChangeText` is not updating state.
![Release build](/screenshots/rel.png)
