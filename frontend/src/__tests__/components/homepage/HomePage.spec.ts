import { type DOMWrapper, mount, VueWrapper } from "@vue/test-utils";
import HomePage from "../../../components/homepage/HomePage.vue";
import AuthButton from "../../../components/homepage/AuthButton.vue";
import routerLinkMock from "../../../__mocks__/routerLinkMock.vue";
let homePageWrapper: VueWrapper;
let authButtons: DOMWrapper<Element>;

describe('HomePage', () => {

  beforeEach(() => {
    homePageWrapper = mount(HomePage, {
      global: {
        components: {
          'router-link': routerLinkMock
        }
      }
    });
    authButtons = homePageWrapper.find('div[class="buttons-container"');
  })

  it('unit: should render the homepage component', () => {
    const background: DOMWrapper<Element> = homePageWrapper.find('div[class="background"');
    const sidebar: DOMWrapper<Element> = homePageWrapper.find('div[class="sidebar"');
    const title: DOMWrapper<Element> = homePageWrapper.find('h1');

    expect(background).toBeDefined();
    expect(sidebar).toBeDefined();
    expect(title.element.textContent).toBe('Pairing Combo');
    expect(authButtons).toBeDefined();
  })
  
  it('integration: should also render 2 AuthButtons in it' , () => {
    let authButtonFunctionality: string = 'login';
    let authButton: Element = mount(AuthButton, { 
      props: { 
        authButtonFunctionality 
      } 
    }).element;
    
    expect(authButtons.element.children[0]).toEqual(authButton);

    authButtonFunctionality = 'signup';
    authButton = mount(AuthButton, {
      props: {
        authButtonFunctionality
      }
    }).element;

    expect(authButtons.element.children[1]).toEqual(authButton);
  })

})