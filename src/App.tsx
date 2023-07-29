import { Header } from "./components";
import { PickerContextProvider } from "./context/PickerContext";
import { PreviewView, PreviewSettings } from "./views";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Header />

      <div className="content w-full h-[calc(100dvh-3.5rem)] flex flex-col lg:flex-row">
        <PickerContextProvider>
          <PreviewSettings />
          <PreviewView />
        </PickerContextProvider>
      </div>
    </div>
  );
}

export default App;
