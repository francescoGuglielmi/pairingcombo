import { mount } from '@vue/test-utils';
import AboutText from '../../../components/homepage/AboutText.vue';

describe('AboutText', () => {

  it('should render a headline card and 3 reason divs', async () => {
    const wrapper = mount(AboutText);

    // HEADLINE
    const headline = await wrapper.find('div[class="headline"]');

    expect(headline).toBeDefined;
    expect(headline.element.children[0].textContent).toEqual('Pairing Made Easy');
    expect(headline.element.children[1].textContent).toEqual('Manage pair rotations like a pro! Pairing Combo is the open source project that aims to help those developers that work using pair programming organise their rotation like no other tool.');
    
    // REASONS
    const reasons = await wrapper.findAll('div[class="reason"]');
    
    expect(reasons).toHaveLength(3);
    for (let i = 0; i < reasons.length; i++) {
      expect(reasons[i].element.children[0].className).toEqual('box');
      expect(reasons[i].element.children[1].className).toEqual('card');
    }
  })

})