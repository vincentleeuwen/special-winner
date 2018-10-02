import ShowImage from './index';
import { shallow } from 'preact-render-spy';

describe('Show image test', () => {
  it('Has a show image button', () => {
    const context = shallow(<ShowImage url="https://pbs.twimg.com/profile_images/941288498602049536/DeDdMSEx_400x400.jpg" />);
    expect(context.find('button').length).toBe(1);
  });
});