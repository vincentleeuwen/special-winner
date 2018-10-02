import ShowImage from '.';
import { shallow } from 'preact-render-spy';

describe('Show image test', () => {
  it('Has a show image button', () => {
    const context = shallow(<ShowImage url="https://pbs.twimg.com/profile_images/941288498602049536/DeDdMSEx_400x400.jpg" />);
    expect(context.find('button').length).toBe(1);
  });

  it('Doesnt show an image by default', () => {
    const context = shallow(<ShowImage url="https://pbs.twimg.com/profile_images/941288498602049536/DeDdMSEx_400x400.jpg" />);
    expect(context.find('img').length).toBe(0);
  });

  it('Hides and shows the image', () => {
    const context = shallow(<ShowImage url="https://pbs.twimg.com/profile_images/941288498602049536/DeDdMSEx_400x400.jpg" />);
    expect(context.find('img').length).toBe(0);
    context.find('button').simulate('click');
    expect(context.find('img').length).toBe(1);
    context.find('button').simulate('click');
    expect(context.find('img').length).toBe(0);
  });
});