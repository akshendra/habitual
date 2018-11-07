<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        <span class="left">
          <font-awesome-icon class='icon-link' icon="home" />
        </span>
      </router-link>
      <span class="center"> {{ date }} </span>
      <router-link class="right" to="/perf">
        <span class="right">
          <font-awesome-icon class='icon-link' icon="calendar" />
        </span>
      </router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

import datetime from '@/helpers/datetime';

export default {
  name: 'App',
  data() {
    return {
      date: datetime.displayDate(),
    };
  },
}
</script>


<style>

@import url('https://fonts.googleapis.com/css?family=Raleway|Roboto+Mono:100,400,500,700');

body {
  font-family: 'Roboto Mono', cursive;
  padding: 1em 2em;
}

#nav {
  width: 100%;
  font-size: 1.5em;
  padding-bottom: 0.5em;
  border-bottom: 1px dashed #EEE;
}

.left {
  float: left;
}

.right {
  float: right;
}

.center {
  width: 95%;
  font-size: 1.5em;
  color: #111;
  display: inline-block;
  text-align: center;
  font-weight: 100;
}

.icon-link {
  color: #111;
}

</style>
