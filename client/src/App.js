import { useState } from "react";
import { GptCaller } from "./sdk/gptCaller.sdk.js";
import "./App.css";

function App() {
  // each mesage format: {text: "message", isUser: true/false}
  const [messages, setMessages] = useState([]);
  const [requestText, setRequestText] = useState("");
  const [isRequesting, setIsRequesting] = useState(false);

  function sendRequest(e) {
    e.preventDefault();
    setIsRequesting(true);
    GptCaller.askChatGPT(requestText)
      .then(response => {
        setMessages([
          {
            text: requestText,
            isUser: true
          },
          {
            text: response,
            isUser: false
          }
        ]);
        setRequestText("");
        setIsRequesting(false);
      })
      .catch(err => {
        console.log(err);
        setIsRequesting(false);
      });
  }

  return (
    <div className="App">
      <section className="msger">
        <header className="msger-header">
          <h4>Monthly report builder app using ChatGPT, Genezio and React</h4>
        </header>

        <main className="msger-chat">
          {messages.map((message, index) => {
            if (message.isUser) {
              return (
                <div className="msg right-msg" key={index}>
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">You</div>
                    </div>

                    <div className="msg-text">
                      {message.text}
                    </div>
                  </div>
                </div>
              );
            } else {
              return (
                <div className="msg left-msg" key={index}>
                  <div className="msg-bubble">
                    <div className="msg-info">
                      <div className="msg-info-name">ChatGPT</div>
                    </div>

                    <div className="msg-text">
                      {message.text}
                    </div>
                  </div>
                </div>
              );
            }
          })}
        </main>

        <form className="msger-inputarea" onSubmit={e => sendRequest(e)}>
          <textarea
            rows="10"
            className="msger-input"
            placeholder="Enter your minified JSON here..."
            value={requestText}
            onChange={e => setRequestText(e.target.value)}
          ></textarea>
          <button
            type="submit"
            className="msger-send-btn"
            onClick={e => sendRequest(e)}
          >
            {isRequesting ? "Generating..." : "Generate report"}
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
