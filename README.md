# paradigm

Tilt/Shift UI library. Web and Native.

Make sure to install `react-native-reanimated` in the host app. More at: https://tamagui.dev/docs/guides/expo

```
npx expo install react-native-reanimated
```

# load fonts

be sure to use `useAppLoading` from tools to load paradigm assets via `loadResources`:

```
import { loadResources } from '@tiltshift/paradigm/assets/loadResources'


const appLoaded = useAppLoading(loadResources)
```