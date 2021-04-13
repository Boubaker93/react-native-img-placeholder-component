import React, { useState } from "react";
import PropTypes from "prop-types";
import {
  View,
  Animated,
  ImageBackground,
  Image,
  ViewPropTypes,
} from "react-native";
import styles from "./Styles/ImageWithPlaceholderStyles";

const ImageWithPlaceholder = ({
  placeholder,
  source,
  style = undefined,
  resizeMode = undefined,
  children = undefined,
  fadeDuration = 500,
  useNativeDriver = false,
}) => {
  const [thumbnailOpacity] = useState(new Animated.Value(1));

  const onLoadEnd = () => {
    if (source) {
      Animated.timing(thumbnailOpacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver,
      }).start();
    }
  };

  return (
    <View>
      {children ? (
        <ImageBackground
          imageStyle={style}
          style={[styles.image, style]}
          resizeMode={resizeMode}
          source={source}
          onLoadEnd={onLoadEnd}
        >
          {children}
        </ImageBackground>
      ) : (
        <Image
          style={[styles.image, style]}
          resizeMode={resizeMode}
          source={source}
          onLoadEnd={onLoadEnd}
        />
      )}

      <Animated.Image
        resizeMode={resizeMode}
        style={[
          {
            opacity: thumbnailOpacity,
          },
          style,
        ]}
        source={placeholder}
      />
    </View>
  );
};

ImageWithPlaceholder.propTypes = {
  source: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  placeholder: PropTypes.number.isRequired,
  style: ViewPropTypes.style,
  children: PropTypes.element,
  fadeDuration: PropTypes.number,
  useNativeDriver: PropTypes.bool,
  resizeMode: PropTypes.oneOf([
    "contain",
    "cover",
    "stretch",
    "center",
    "repeat",
  ]),
};

export default ImageWithPlaceholder;
