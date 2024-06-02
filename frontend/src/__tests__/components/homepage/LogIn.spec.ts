import LogIn from "../../../components/homepage/LogIn.vue";
import { VueWrapper, mount } from "@vue/test-utils";

let wrapperLogin: VueWrapper;

describe('LogIn', () => {

  beforeEach(() => {
    wrapperLogin = mount(LogIn);
  })

  it('unit: should render a title and a form', () => {
    const title: Element = wrapperLogin.element.children[0];
    const form: Element = wrapperLogin.element.children[1];
    const emailField: Element = wrapperLogin.find('input[type="email"]').element
    const passwordField: Element = wrapperLogin.find('input[type="password"]').element
    const submitButton: Element = wrapperLogin.find('button').element

    expect(title.textContent).toBe('Log In');
    expect(form).toBeTruthy();
    expect(emailField).toBeTruthy();
    expect(passwordField).toBeTruthy();
    expect(submitButton).toBeTruthy();
  })

})