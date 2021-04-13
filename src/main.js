import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { BootstrapVue } from 'bootstrap-vue';
import { extend as veeExtend, ValidationProvider } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';
import upperFirst from 'lodash/upperFirst';
import camelCase from 'lodash/camelCase';
import VueSimpleSuggest from 'vue-simple-suggest';
import 'vue-simple-suggest/dist/styles.css';

// import all known VeeValidate rules
Object.keys(rules).forEach(rule => {
  veeExtend(rule, rules[rule]);
});

Vue.component('ValidationProvider', ValidationProvider);
Vue.component('vue-simple-suggest', VueSimpleSuggest);

Vue.use(BootstrapVue);

Vue.config.productionTip = process.env.NODE_ENV === 'production';

const componentContext = require.context(
  '@/components',
  true,
  /\w\d*\.vue$/i,
  VUE_APP_LOAD_MODE
);
componentContext.keys().forEach(componentFilePath => {
  const componentName = upperFirst(
    camelCase(
      componentFilePath
        .split('/')
        .pop()
        .replace(/\.vue$/, '')
    )
  );
  if (process.env.VUE_APP_DEBUG_MODE && console)
    console.log(`Autoload ${componentName} from "${componentFilePath}"`);

  const componentContent = componentContext(componentFilePath);
  const componentConfig = componentContent.default || componentContent;
  if (componentConfig instanceof Promise) {
    Vue.component(componentName, () => componentConfig);
  } else {
    Vue.component(componentName, componentConfig);
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
