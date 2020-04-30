import React from "react";
import "./App.css";

class ImageGallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      links: this.props.links,
    };
  }

  removeImage(i) {
    const newState = this.state;
    newState.links.splice(i, 1);
    this.setState(newState);
  }

  render() {
    return (
      <div>
        {this.state.links.map((link, i) => (
          <div className="image" key={link}>
            <img alt={link} src={link} />
            <br />
            <button onClick={() => this.removeImage(i)}>
              Remove image
            </button>
            <br />
            <br />
          </div>
        ))}
      </div>
    );
  }
}

function App() {
  const links = ["https://goo.gl/kjzfbE", "https://goo.gl/d2JncW"];
  return <ImageGallery links={links} />;
}

export default App;
