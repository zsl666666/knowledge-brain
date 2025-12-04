import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";

const ENTRY_CONTAINER = document.getElementById("root");

function entry(App, opts) {
  createRoot(ENTRY_CONTAINER).render(
    <Provider store={{ name: "codeZhou" }}>
      <ConfigProvider>
        <App />
      </ConfigProvider>
    </Provider>
  );
}

export default entry;
