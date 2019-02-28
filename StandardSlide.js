// Slide templates can be defined as higher-order components. If you're just learning React, don't sweat it too much and have a play with this template.
// You've got the power to put anything you like before or after the content of the slide (this.props.children). In this template, we're actually modifying some children as they come in and forcing them to use certain colors using a mapping function.
import React, { Component } from "react";
import { Slide } from "spectacle";
import getTheme from "./theme";

const theme = getTheme();

export default () => {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <Slide
          {...theme.slideDefaults}
          // Import the default logo settings...
          {...theme.logoSettings}
          // ...but change the image we're using, as the background is white!
          bgImage={theme.images.logoSecondaryColor}
          {...this.props}
          textColor="quaternary"
        >
          {/* There's a lot you can do here. Throw something in before or after {this.props.children}, or even just limit what's shown by scrapping the concept of children entirely! */}
          {React.Children.map(this.props.children, child => {
            switch (child.type.displayName) {
              case "Heading":
                // Force headings to use the secondary text color
                return React.cloneElement(child, {
                  textColor: "secondary"
                });
              case "Text":
                // Force text to be in the quaternary color
                return React.cloneElement(child, {
                  textColor: "quaternary"
                });
              default:
                // Render unchanged, otherwise
                return child;
            }
          })}
        </Slide>
      );
    }
  };
};
