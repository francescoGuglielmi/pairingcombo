import { type Ref } from 'vue';

export const showText = (ref: Ref<boolean>): Promise<void> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      ref.value = true;
      resolve();
    }, 200);
  });
};