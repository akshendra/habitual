<template>
  <div class="add-habbit">
    <input type="text" placeholder="My new habbit" v-model="name" @keypress.enter="add" />
  </div>
</template>

<script>
export default {
  name: 'AddHabbit',
  data() {
    return {
      name: '',
    };
  },

  methods: {
    add() {
      if (this.name !== '' && this.name) {
        this.$store.commit('add', this.name);
        this.name = ''
      }
    },
  }
};
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:100,400,500,700|Raleway|Fira+Sans');

.add-habbit {
  margin: 1em 0;
}

.add-habbit > input {
  display: inline-block;
  width: 100%;
  font-family: Roboto Mono;
  padding: 0.5em;
  font-size: 26px;
  font-weight: 400;
  box-sizing: border-box;
  border-bottom: 2px dotted #DDD;
}

input::placeholder {
  color: #AAA;
  font-weight: 100;
}


textarea:focus,
input:focus {
  outline: 0;
}
/* Question */

input,
textarea {
  font-size: 48px;
  font-weight: 300;
  border-radius: 2px;
  margin: 0;
  border: none;
  width: 80%;
  background: rgba(0, 0, 0, 0);
  transition: padding-top 0.2s ease, margin-top 0.2s ease;
  overflow-x: hidden; /* Hack to make "rows" attribute apply in Firefox. */
}
/* Underline and Placeholder */


input:focus + label,
textarea:focus + label {
  width: 100%;
}

input:focus,
input:valid {
  padding-top: 35px;
}

textarea:valid,
textarea:focus {
  margin-top: 35px;
}

input:focus + label > span,
input:valid + label > span {
  top: -100px;
  font-size: 22px;
  color: #333;
}

textarea:focus + label > span,
textarea:valid + label > span {
  top: -150px;
  font-size: 22px;
  color: #333;
}

input:valid + label,
textarea:valid + label {
  border-color: green;
}

input:invalid,
textarea:invalid {
  box-shadow: none;
}

input + label > span,
textarea + label > span {
  font-weight: 300;
  margin: 0;
  position: absolute;
  color: #8F8F8F;
  font-size: 48px;
  top: -66px;
  left: 0px;
  z-index: -1;
  -webkit-transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
  transition: top 0.2s ease, font-size 0.2s ease, color 0.2s ease;
}

input[type="submit"] {
  -webkit-transition: opacity 0.2s ease, background 0.2s ease;
  transition: opacity 0.2s ease, background 0.2s ease;
  display: block;
  opacity: 0;
  margin: 10px 0 0 0;
  padding: 10px;
  cursor: pointer;
}

input[type="submit"]:hover {
  background: #EEE;
}

input[type="submit"]:active {
  background: #999;
}

input:valid ~ input[type="submit"], textarea:valid ~ input[type="submit"] {
  -webkit-animation: appear 1s forwards;
  animation: appear 1s forwards;
}

input:invalid ~ input[type="submit"], textarea:invalid ~ input[type="submit"] {
  display: none;
}

@-webkit-keyframes appear {
  100% {
    opacity: 1;
  }
}

@keyframes appear {
  100% {
    opacity: 1;
  }
}

</style>
