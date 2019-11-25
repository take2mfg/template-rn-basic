const isStorybook = !!process.env["STORYBOOK"];

const App = isStorybook
  ? require("../storybook").default
  : require("./AppRoot").default;

export default App;
