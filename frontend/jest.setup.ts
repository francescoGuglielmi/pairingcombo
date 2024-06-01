import { config } from '@vue/test-utils';
import { createApp } from 'vue';
import routerLinkMock from './src/__mocks__/routerLinkMock.vue';

config.global.components = {
  'router-link': routerLinkMock,
};

config.global.plugins = [createApp];
