<template>
  <div>
    <div class="columns p-4 mt-3">
      <div class="column has-text-centered">
        <div class="field">
          <label class="label">
            <span class="t-gurmukhi">AMg</span>
            <span class="mx-3">|</span>
            <span>Page</span>
          </label>
          <div class="field-body is-justify-content-center">
            <span class="t-gurmukhi"> {{source_page}} </span>
            <span class="mx-3">|</span>
            <span> {{ source_page }} </span>
          </div>
        </div>
      </div>
    </div>
    <div class="p-4">
      <h1 class="title is-2 has-text-centered t-gurmukhi">{{title}}</h1>
      <div v-for="v in verses" v-bind:key="v.id"  class="mt-4 has-text-centered">
          <div class="t-gurmukhi t-gurmukhi-verses">{{v.verse.gurmukhi}}</div>
          <div v-if="translations.english.is_showing">{{v.translation.en.bdb}}</div>
          <div class="t-gurmukhi"
            v-if="translations.punjabi.is_showing">{{v.translation.pu.bdb.gurmukhi}}</div>
          <div v-if="translations.spanish.is_showing">{{v.translation.es.sn}}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Hukam',
  data() {
    return {
      current_date: new Date(),
      title: '',
      source: '',
      source_page: '',
      verses: [],
      translations: {
        english: { is_showing: (this.$route.params.lang=='english')?true:false, text: 'English' },
        punjabi: { is_showing: (this.$route.params.lang=='punjabi')?true:false, text: 'Punjabi' },
        spanish: { is_showing: (this.$route.params.lang=='spanish')?true:false, text: 'Spanish' },
      },
    };
  },
  beforeMount() {
    this.getHukam(this.getDate());
  },
  watch: {
    current_date() {
      this.getHukam(this.getDate());
    },
    $route(to, from) {
      // react to route changes...
      console.log(this.translations);
      this.translations = {
        english: { is_showing: (this.$route.params.lang=='english')?true:false, text: 'English' },
        punjabi: { is_showing: (this.$route.params.lang=='punjabi')?true:false, text: 'Punjabi' },
        spanish: { is_showing: (this.$route.params.lang=='spanish')?true:false, text: 'Spanish' },
      };
    }
  },
  computed: {
    selectedDate() {
      return this.current_date ? this.current_date.toLocaleDateString() : '';
    },
  },
  methods: {
    getDate() {
      const myDate = this.current_date;
      return `${myDate.getFullYear()}/${
        (myDate.getMonth() + 1).toString().padStart(2, '0')
      }/${myDate.getDate().toString().padStart(2, '0')}`;
    },
    setHukamData(data) {
      this.title = data.shabads[0].shabadInfo.raag.gurmukhi;
      this.source = data.shabads[0].shabadInfo.source.gurmukhi;
      this.source_page = data.shabads[0].shabadInfo.source.pageNo;
      this.verses = data.shabads[0].verses;
    },
    async getHukam(date) {
      const url = `https://api.banidb.com/v2/hukamnamas/${date}`;
      const res = await fetch(url);
      const data = await res.json();
      this.setHukamData(data);
    },
  },
};
</script>

<style lang="css">

@font-face {
  font-family: anmol_lipi;
  src: url(/assets/fonts/AnmolLipiSG.ttf);
}

@font-face {
    font-family: gurmukhi_heavy;
    src: url(~@/assets/fonts/GurbaniAkharHeavyTrue.ttf) format('truetype');
}

@font-face {
    font-family: GurbaniAkharRegular;
    src: url(/assets/fonts/GurbaniAkharRegular.ttf);
}

.t-gurmukhi { font-family: gurmukhi_heavy; }
.t-gurmukhi-verses { font-size: 25px;}
.u-gurmukhi { font-size: 16px; }

</style>
