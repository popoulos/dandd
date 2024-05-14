import React, { createContext } from "react";
import "./App.css";
import { Setup } from "./components/features/setup/setup";
import { Answers } from "./components/features/answers/answers";
import { Story } from "./components/features/story/story";

const defaultSetup = {
  apiKey: "",
  pseudo: "",
  theme: "fantasy",
};

const SetupContext = createContext(defaultSetup);

function App() {
  const [setup, setSetup] = React.useState(defaultSetup);
  const [userPrompt, setUserPrompt] = React.useState("");
  const [answers, setAnswers] = React.useState([]);
  return (
    <SetupContext.Provider value={setup}>
      <div className="container">
        <div className="fixed top-0 left-0 right-0 bottom-12 flex justify-center">
          <div className="max-w-[600px] grow px-2 ">
            {setup.apiKey && setup.pseudo && (
              <Story setup={setup} userPrompt={userPrompt} />
            )}
          </div>
        </div>
        <div className="fixed bottom-0 left-0 right-0 h-12 flex items-center justify-center space-x-2border-t">
          <div className="max-w-[600px] grow px-2 ">
            <div className="flex items-center justify-between">
              <div className="flex grow">
                <Answers answers={answers} setUserPrompt={setUserPrompt} />
              </div>
              <Setup setup={setup} setSetup={setSetup} />
            </div>
          </div>
        </div>
      </div>
    </SetupContext.Provider>
  );
}

export default App;
