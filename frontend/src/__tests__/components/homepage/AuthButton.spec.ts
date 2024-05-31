import AuthButton from '../../../components/homepage/AuthButton.vue';
import { VueWrapper, mount } from '@vue/test-utils';
import { createRouter, createMemoryHistory } from 'vue-router';

const SignupComponent = { template: '<div>Signup Page</div>' };
const LoginComponent = { template: '<div>Login Page</div>' };

const routes = [
  { path: '/signup', component: SignupComponent },
  { path: '/login', component: LoginComponent }
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

let wrapper: VueWrapper;

describe('AuthButton', () => {

  ['signup', 'login'].forEach(functionality => {
    
    describe(`when "${functionality}" is passed as a prop`, () => {

      beforeEach(() => {
        wrapper = mount(AuthButton, {
          props: { authButtonFunctionality: functionality },
          global: { plugins: [router] },
        });
      })
      
      it(`should render a ${functionality} button`, async () => {
        const button = await wrapper.find('button');
        
        expect(button.classes(functionality)).toBe(true);
      })
      
      it(`should render a button that navigates to the ${functionality} form when "${functionality}" is passed as a prop`, async () => {
        await router.push('/');
        
        await wrapper.find('button').trigger('click');
        await wrapper.vm.$nextTick(); 
        
        expect(wrapper.text()).toBe(functionality);
      });

    });

  });

});