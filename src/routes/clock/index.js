import { h, Component } from 'preact';
import ShowImage from '../../components/showImage';

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
        <br />
        <ShowImage
          imageUrl="https://pbs.twimg.com/profile_images/941288498602049536/DeDdMSEx_400x400.jpg"
        />
      </div>
    );
  }
}
