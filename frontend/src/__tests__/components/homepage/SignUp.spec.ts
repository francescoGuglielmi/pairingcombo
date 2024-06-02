import SignUp from "../../../components/homepage/SignUp.vue";
import { VueWrapper, mount } from "@vue/test-utils";

let wrapperLogin: VueWrapper;

describe('SignUp', () => {

  beforeEach(() => {
    wrapperLogin = mount(SignUp);
  })

  it('unit: should render a title and a form', () => {
    const title: Element = wrapperLogin.element.children[0];
    const form: Element = wrapperLogin.element.children[1];
    const emailField: Element = wrapperLogin.find('input[type="email"]').element
    const passwordField: Element = wrapperLogin.find('input[type="password"]').element
    const submitButton: Element = wrapperLogin.find('button').element

    expect(title.textContent).toBe('Sign Up');
    expect(form).toBeTruthy();
    expect(emailField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
  })

})