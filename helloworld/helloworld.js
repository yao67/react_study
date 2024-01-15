'use strict';

const e = React.createElement;

class HelloButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }

  render() {
    if (this.state.clicked) {
      return 'Hello World!';
    }

    return e(
      'button',
      { onClick: () => this.setState({ clicked: true }) },
      'Hello'
    );
  }
}

const domContainer = document.querySelector('#container');
const root = ReactDOM.createRoot(domContainer);
root.render(e(HelloButton))
