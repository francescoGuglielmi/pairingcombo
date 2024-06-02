import { mount } from '@vue/test-utils';
import AboutText from '../../../components/homepage/AboutText.vue';
import { showText } from '../../../utils/showText';
import { type Ref } from 'vue';

jest.mock('../../../utils/showText', () => ({
  showText: jest.fn().mockImplementation((ref: Ref<boolean>): Promise<void> => {
    ref.value = true;
    return Promise.resolve();
  })
}));

describe('AboutText', () => {

  it('should render a headline card and 3 reason divs', async () => {
    const wrapper = mount(AboutText);
    await wrapper.vm.$nextTick();

    expect(showText).toHaveBeenCalled();
    expect((wrapper.vm as any).isTextShowing).toBe(true);

    // HEADLINE
    const headline = await wrapper.find('div[class="headline"]');
    expect(headline.exists()).toBe(true);
    expect(headline.element.children[0].textContent).toEqual('Pairing Made Easy');
    expect(headline.element.children[1].textContent).toEqual('Manage pair rotations like a pro! Pairing Combo is the open source project that aims to help those developers that work using pair programming organise their rotation like no other tool.');
    
    // REASONS
    const reasons = await wrapper.find('div[class="reasons"]').element;
    expect(reasons).toBeDefined();
    expect(reasons.children).toHaveLength(3);

    for (let i = 0; i < reasons.children.length; i++) {
      expect(reasons.children[i].children[0].className).toEqual('box');
      expect(reasons.children[i].children[1].className).toEqual('card');
    }
  })

})