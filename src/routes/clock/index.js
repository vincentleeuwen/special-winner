import { h, Component } from 'preact';

export default class Clock extends Component {
  constructor() {
    super();
    this.state = {
      time: Date.now()
    }
  }
  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState({
        time: Date.now()
      })
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render(props, state) {
    const time = new Date(state.time).toLocaleTimeString();
    return (
      <div style={{ padding: '150px' }}>
        <h2>Clock</h2>
        <p>Time: <strong>{ time }</strong>.</p>
      </div>
    );
  }
}
