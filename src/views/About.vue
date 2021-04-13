<template>
  <div class="container">
    <h1>This is an about page</h1>
    <vue-simple-suggest
      ref="suggestPopulation"
      v-model.trim="currentPopulation"
      :list="pops"
      value-attribute="Population"
      display-attribute="Population"
      :filter-by-query="true"
    >
      <VeeInput
        :value="currentPopulation"
        :rules="{
          regex: /^[A-Z0-9]{8}$/,
          oneOf: Array.from(pops, l => l.Population)
        }"
        name="Population"
        wrapper-tag="div"
        wrapper-class="input-group"
        maxlength="8"
        required
        autocomplete="off"
        @focus="onFocus"
        @blur="onBlur"
      />
    </vue-simple-suggest>
  </div>
</template>

<script>
export default {
  name: 'About',
  data: () => ({
    currentPopulation: '',
    pops: [
      { Population: 'AZERTYUI' },
      { Population: 'AQSDFGHJ' },
      { Population: 'OPQSDFGH' },
      { Population: 'JKLMWXCV' },
      { Population: 'BN123456' }
    ]
  }),
  methods: {
    onFocus: function (evt) {
      // https://github.com/KazanExpress/vue-simple-suggest/issues/107#issuecomment-504605790
      this.$refs.suggestPopulation.isInFocus = true;
      this.$refs.suggestPopulation.onFocus(evt);
    },
    onBlur: function (evt) {
      this.$refs.suggestPopulation.onBlur(evt);
    }
  }
};
</script>
