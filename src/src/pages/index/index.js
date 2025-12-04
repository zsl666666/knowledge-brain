import entry from "./src/entry";
import App from "./src/App";

entry(App, {
  systemConfig: { initSystem: true },
});

if (module.hot) {
  module.hot.accept();
}
