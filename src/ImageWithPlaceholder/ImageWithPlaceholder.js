import React, { useState } from "react";
import PropTypes from "prop-types";
import { View, Animated, ImageBackground, ViewPropTypes } from "react-native";
import styles from "./Styles/ImageWithPlaceholderStyles";

const ImageWithPlaceholder = ({
  placeholder,
  source,
  style = undefined,
  resizeMode = undefined,
  children = undefined,
  fadeDuration = 500,
  useNativeDriver = true,
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
      <ImageBackground
        style={[styles.image, style]}
        resizeMode={resizeMode}
        source={source}
        onLoadEnd={onLoadEnd}
      >
        {children}
      </ImageBackground>

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
  style: ViewPropTypes.style,
  children: PropTypes.element,
  source: PropTypes.oneOfType([
    PropTypes.shape({}),
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.shape({})),
  ]).isRequired,
  placeholder: PropTypes.number.isRequired,
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
