export default class mainFunctions {
  constructor(cssVariables, linkMainTitle, selectThemes) {
    this.cssVariables = cssVariables;
    this.linkMainTitle = linkMainTitle;
    this.selectThemes = selectThemes;
  }

  /* The order of the colors tones in cssColorVariables
  and themesColors must be the same as the css styles file;
  the order of the colors in cssColorVariables must be crescent,
  making the changeTheme method work correctly; */
  cssColorVariables = [
    "--main-color-light",
    "--main-color-medium",
    "--main-color-dark",
  ];
  themesColors = {
    green: ["#ccffcc", "#00cc00", "#006600"],
    blue: ["#ccccff", "#0000cc", "#000066"],
    red: ["#ffcccc", "#cc0000", "#660000"],
    purple: ["#ffccf2", "#cc0099", "#66004d"],
    gray: ["#e6e6e6", "#666666", "#333333"],
  };

  exec() {
    this.eventsListener(this.linkMainTitle, "click", this.reloadPage);
    this.eventsListener(
      this.selectThemes,
      "change",
      this.chooseTheme.bind(this)
    );
  }

  eventsListener(element, eventType, callback) {
    element.addEventListener(eventType, callback);
  }

  reloadPage() {
    location.reload();
  }

  chooseTheme() {
    switch (this.selectThemes.value) {
      case "green":
        this.changeTheme(this.themesColors.green);
        break;
      case "blue":
        this.changeTheme(this.themesColors.blue);
        break;
      case "red":
        this.changeTheme(this.themesColors.red);
        break;
      case "purple":
        this.changeTheme(this.themesColors.purple);
        break;
      case "gray":
        this.changeTheme(this.themesColors.gray);
        break;
    }
  }

  changeTheme(theme) {
    for (let i = 0; i < this.cssColorVariables.length; i++) {
      this.cssVariables.style.setProperty(this.cssColorVariables[i], theme[i]);
    }
  }
}
