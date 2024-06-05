import AuthForm from "../../../components/homepage/AuthForm.vue";
import { VueWrapper, mount } from "@vue/test-utils";

let wrapper: VueWrapper;

describe('AuthForm', () => {

  describe('When the formType prop is "signup"', () => {
  
    it('unit: should render a title and a signup form', () => {
      wrapper = mount(AuthForm, {
        props: {
          formType: 'signup'
        }
      });

      const title: Element = wrapper.element.children[0];
      const form: Element = wrapper.element.children[1];
      const emailField: Element = wrapper.find('input[type="email"]').element
      const passwordField: Element = wrapper.find('input[type="password"]').element
      const submitButton: Element = wrapper.find('button').element
  
      expect(title.textContent).toBe('Sign Up');
      expect(form).toBeTruthy();
      expect(emailField).toBeTruthy();
      expect(passwordField).toBeTruthy();
      expect(submitButton).toBeTruthy();
    })
  
  })
  
  describe('When the formType prop is "login"', () => {
  
    it('unit: should render a title and a login form', () => {
      wrapper = mount(AuthForm, {
        props: {
          formType: 'login'
        }
      });
      
      const title: Element = wrapper.element.children[0];
      const form: Element = wrapper.element.children[1];
      const emailField: Element = wrapper.find('input[type="email"]').element
      const passwordField: Element = wrapper.find('input[type="password"]').element
      const submitButton: Element = wrapper.find('button').element
  
      expect(title.textContent).toBe('Log In');
      expect(form).toBeTruthy();
      expect(emailField).toBeTruthy();
      expect(passwordField).toBeTruthy();
      expect(submitButton).toBeTruthy();
    })
  
  })

})
