import { config } from '@vue/test-utils';
import { createApp } from 'vue';

config.global.plugins = [createApp];
