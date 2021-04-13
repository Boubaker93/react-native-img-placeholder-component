import React, { Component } from "react";
import { View, Animated, ImageBackground, ViewPropTypes } from "react-native";
import PropTypes from "prop-types";
import styles from "./Styles/ImageWithPlaceholderStyles";

export default class ImageWithPlaceholder extends Component {
  constructor(props) {
    super(props);
    this.onLoadEnd = this.onLoadEnd.bind(this);

    this.state = {
      thumbnailOpacity: new Animated.Value(1),
    };
  }

  onLoadEnd() {
    const { fadeDuration, source } = this.props;
    const { thumbnailOpacity } = this.state;
    if (source) {
      Animated.timing(thumbnailOpacity, {
        toValue: 0,
        duration: fadeDuration,
        useNativeDriver: true,
      }).start();
    }
  }

  render() {
    const { style, placeholder, source, resizeMode, children } = this.props;
    const { thumbnailOpacity } = this.state;

    return (
      <View>
        <ImageBackground
          style={[styles.image, style]}
          resizeMode={resizeMode}
          source={source}
          onLoadEnd={this.onLoadEnd}
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
  }
}

ImageWithPlaceholder.defaultProps = {
  fadeDuration: 500,
  resizeMode: undefined,
  children: undefined,
  style: undefined,
};

ImageWithPlaceholder.propTypes = {
  style: ViewPropTypes.style,
  children: PropTypes.element,
  source: PropTypes.shape({}).isRequired,
  placeholder: PropTypes.number.isRequired,
  fadeDuration: PropTypes.number,
  resizeMode: PropTypes.oneOf([
    "contain",
    "cover",
    "stretch",
    "center",
    "repeat",
  ]),
};
