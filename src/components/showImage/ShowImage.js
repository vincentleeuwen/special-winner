import { h, Component } from 'preact';
import PropTypes from 'prop-types';

class ShowImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showImage: false
    }
  }

  render(props, state) {
    const { showImage } = state;
    const { imageUrl } = props;
    return (
      <div>
        <h2>Show image</h2>
        {
          showImage &&
            <div>
              <img 
                src={imageUrl}
                alt="test image" 
                style={{ with: '100px', height: '100px', display: 'block', marginBottom: '10px' }} 
              />
              <button onClick={() => this.setState({ showImage: false })} >Hide image</button>
            </div>
            
        }
        {
          !showImage &&
            <button onClick={() => this.setState({ showImage: true })} >Show image</button>
        }
      </div>
    )
  }
}

ShowImage.propTypes = {
  imageUrl: PropTypes.string.isRequired
};

export default ShowImage;
