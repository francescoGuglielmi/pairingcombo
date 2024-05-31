import FormInput from "../../../components/homepage/FormInput.vue";
import { mount } from '@vue/test-utils';

describe('FormInput', () => {
  ['email','password'].forEach((type) => {
    it(`should have a lable and an input type ${type}`, async () => {
      const wrapper = mount(FormInput, {
        props: {
          inputFunctionality: type
        }
      });

      const label = await wrapper.find('label');
      const input = await wrapper.find('input');

      expect(label).toBeDefined;
      expect(input.element.type).toBe(type);
    })
  })
})