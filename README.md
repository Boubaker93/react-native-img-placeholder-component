# react-native-img-placeholder-component

A React native image component with placeholder

Feel free to add an issue if you have any trouble!

## Installation

using npm

```bash
npm i --save react-native-img-placeholder-component
```

using yarn

```bash
yarn add react-native-img-placeholder-component
```

## Usage

Simple example

```jsx
import ImageWithPlaceholder from 'react-native-image-with-placeholder';
....
<ImageWithPlaceholder
    useNativeDriver
    style={{ width: 100, height: 100, borderRadius: 50  }}
    placeholder={require('../images/placeholder.png')}
    source={{ uri: 'https://randomuser.me/api/portraits/men/1.jpg' }}
    fadeDuration={800}
    resizeMode='cover'
/>
```

Example with child

```jsx
import ImageWithPlaceholder from 'react-native-image-with-placeholder';
....
<ImageWithPlaceholder
    useNativeDriver
    style={{ width: 100, height: 100, borderRadius: 50  }}
    placeholder={require('../images/placeholder.png')}
    source={{ uri: 'https://randomuser.me/api/portraits/women/1.jpg' }}
    fadeDuration={800}
    resizeMode='cover'
>
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Hello world</Text>
    </View>
</ImageWithPlaceholder>
```

## Options

| Props | Default | Required? | Info |
| ---------------- |-------|----|-------------------------------------------------------------------------------------|
| source           | -     | ✓ | [Image](https://facebook.github.io/react-native/docs/images.html) `source` prop     |
| placeholder      | -     | ✓ | Shows `placeholder` if the `source` can't be loaded or error                        |
| style            | -     | ✕ | Image and placeholder styles                                                        |
| fadeDuration     |500    | ✕ | The fade duration of the placeholder once the source loads                          |
| resizeMode       | -     | ✕ | [Image](https://facebook.github.io/react-native/docs/images.html) `resizeMode` prop |
| useNativeDriver  | false | ✕ | Uses the native driver when true. Default false. |

## License

MIT
