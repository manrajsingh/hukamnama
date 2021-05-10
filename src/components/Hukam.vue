<template>
  <div>
    <div class="columns">
      <div class="column is-half has-text-left" style="border-right:1px solid #cecece">
        <div class="columns">
          <div class="column has-text-left t-gurmukhi">
            <button class="button is-small" v-on:click="decrementDate()">&lt;</button>
            {{hukam_date}}
            <button class="button is-small" v-on:click="incrementDate()">&gt;</button>
          </div>
          <div class="column has-text-centered"><h1 class="title is-2 has-text-centered t-gurmukhi">{{title.gurmukhi}}</h1></div>
          <div class="column has-text-right"><span class="t-gurmukhi">AMg {{source_page}}</span></div>
        </div>
        <div class="verses">
          <span v-for="v in verses" v-bind:key="v.id"  class="mt-4"> 
              <span class="t-gurmukhi t-gurmukhi-verses">{{v.verse.gurmukhi}}</span>
          </span>
        </div>
      </div>
      <div class="column is-half has-text-left">
        <div class="columns">
          <div class="column has-text-left">{{hukam_date}}</div>
          <div class="column has-text-centered"><h1 class="title is-2 has-text-centered">{{title.english}}</h1></div>
          <div class="column has-text-right"><span>Page {{source_page}}</span></div>
        </div>
        <div class="verses">
          <span v-for="v in verses" v-bind:key="v.id"  class="mt-4">
              <span>{{v.translation.en.bdb}}</span>
          </span>
        </div>
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
      title: [],
      hukam_date:'',
      source: [],
      source_page: [],
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
    incrementDate(){
      this.current_date.setDate(this.current_date.getDate()+1);
      this.getHukam(this.getDate());
    },
    decrementDate(){
      this.current_date.setDate(this.current_date.getDate()-1);
      this.getHukam(this.getDate());
    },
    getDate() {
      const myDate = this.current_date;
      return `${myDate.getFullYear()}/${
        (myDate.getMonth() + 1).toString().padStart(2, '0')
      }/${myDate.getDate().toString().padStart(2, '0')}`;
    },
    setHukamData(data) {
      this.hukam_date = data.date.gregorian.month + '/' + data.date.gregorian.date + '/' + data.date.gregorian.year;
      this.title = data.shabads[0].shabadInfo.raag;
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
