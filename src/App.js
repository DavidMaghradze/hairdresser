import { Component } from "react";
import Header from "./components/header";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const user = localStorage.getItem("user");
    this.setState({ user });
  }

  render() {
    return (
      <div className="App">
        <Header />
        <h1>Hairdresser</h1>
      </div>
    );
  }
}

export default App;
