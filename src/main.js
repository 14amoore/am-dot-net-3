import { createApp, h } from 'vue';
import '@/assets/scss/theme.scss';
import App from './App.vue';

const baseApp = createApp({
  render: () => h(App),
});

baseApp.mount('#app');
