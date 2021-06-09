import React from "react";
import { Panel } from "./components/Panel";
import "./App.css";

const panels = [
  {
    url: "https://images.unsplash.com/photo-1621962960382-08f5a216dd3f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE0fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "flowers",
    active: false,
  },
  {
    url: "https://images.unsplash.com/photo-1619290978729-92225fd832ef?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDZ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "organica",
    active: true,
  },
  {
    url: "https://images.unsplash.com/photo-1517800497904-3253a0f38be5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDd8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "waterfall",
    active: false,
  },
  {
    url: "https://images.unsplash.com/photo-1623171959896-1c81bed7f8fb?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDF8NnNNVmpUTFNrZVF8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "a bird",
    active: false,
  },
  {
    url: "https://images.unsplash.com/photo-1605639227732-f95a6ace02ea?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    text: "just plain",
    active: false,
  },
];

const preserveThis = { test: "data" };

class App extends React.Component {
  constructor() {
    super();
    this.state = { panels, preserveThis };
  }

  makePanelActive = (idx) => {
    this.setState(
      (prevState) => {
        return {
          ...prevState,
          panels: prevState.panels.map((p, i) => {
            return { ...p, active: (p.active = i === idx) };
          }),
        };
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <div className="container">
        {this.state.panels.map((p, i) => (
          <Panel
            key={i}
            idx={i}
            url={p.url}
            text={p.text}
            active={p.active}
            makePanelActive={this.makePanelActive}
          />
        ))}
      </div>
    );
  }
}

export default App;
