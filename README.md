# Spectacle Slide Templates

This repo shows you how you can make your own slide templates for [Spectacle](https://github.com/FormidableLabs/spectacle). Take a look at the source files for an in-depth guide, but the gist is this:

- You can define your theme in a JS object or function. Import it for your deck, and if your slide relies on it in some way, import them there too. Most importantly, `themeConfig` and `fontConfig` in `theme.js` can be used to create a deck theme: `createTheme(themeConfig, fontConfig)`.
- Bear in mind the `JS object expansion syntax` – {...theme.slideDefaults}, for example. This can be used to turn a JS object into props, and it's very useful when creating slide templates and loading config from themes.
- Here's an extract from something I'm using at work – after you've imported React and all your Spectacle Core goodies, drop in your theme configs and slide templates like so:

```js
...
import createTheme from "spectacle/lib/themes/default";
import getTheme from "./theme";
import titleSlide from "./TitleSlide";
import secondaryTitleSlide from "./SecondaryTitleSlide";
import standardSlide from "./StandardSlide";

const theme = getTheme();
const TitleSlideTemplate = titleSlide();
const SecondaryTitleSlideTemplate = secondaryTitleSlide();
const StandardSlideTemplate = standardSlide();

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={createTheme(theme.themeConfig, theme.fontConfig)}
        progress="number"
        showFullscreenControl={false}
        controls={false}
      >
        <TitleSlideTemplate>
          <Heading {...theme.headingDefaults}>Title Slide</Heading>
        </TitleSlideTemplate>
...
```

## Contributing

I'm just getting started with React, so any newcomer-friendly optimizations to this whole thing would be greatly appreciated! Just open an issue or pull request.