<template>
  <ul>
    <li :key="habbit.id" v-for="habbit in all">
      <div class="content">
        <button @click="untick(habbit.id)" class="button-icon"  v-if="habbit.doneToday">
          <font-awesome-icon icon="check-circle" class="icon-link done" />
        </button>
        <button v-else @click="tick(habbit.id)" class="button-icon">
          <font-awesome-icon icon="check-circle" class="icon-link undone" />
        </button>
        <div class="title-box">
          <p class="title"> {{ habbit.name }} </p>
          <p class="under"> Last done: <strong> {{ habbit.lastDone }} </strong> </p>
        </div>

        <span class="right">
          <span class="dones"> {{ habbit.done }} / {{ habbit.totalDays }}  </span>
          <span>
            <button class="button-icon delete" @click="remove(habbit.id)">
              <font-awesome-icon icon="times-circle" class="icon-link delete" />
            </button>
          </span>
        </span>
      </div>
      <div class="shadow" :style="{width: `${Math.floor((habbit.done/habbit.totalDays) * 100)}%`}"></div>
    </li>
  </ul>
</template>

<script>
import datetime from '@/helpers/datetime';

export default {
  name: 'ListHabbits',
  computed: {
    all() {
      return this.$store.state.habbits.map((habbit) => {
        const doneToday = datetime.isToday(habbit.lastDone);
        let lastDone = doneToday ? 'Today' : datetime.format(habbit.lastDoneTS || habbit.lastDone);
        if (habbit.lastDone === '1970-01-01') {
          lastDone = 'NEVER';
        }
        return Object.assign({
          doneToday,
          totalDays: Math.floor((new Date(datetime.getTodaysDate()) - new Date(habbit.startedOn)) / (3600 * 24 * 1000) + 1),
        }, habbit, {
          lastDone,
        });
      });
    },
  },

  methods: {
    tick(id) {
      console.log('Doning', id);
      this.$store.commit('tick', id);
    },
    remove(id) {
      return this.$store.commit('remove', id);
    },
    untick(id) {
      return this.$store.commit('untick', id);
    },
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Raleway:400,500,700');

ul {
  font-family: 'Raleway', serirf;
  width: 100%;
  padding: 0;
  box-sizing: content-box;
  list-style-type: none;
}

li {
  padding: 1em 0;
  position: relative;
  padding-right: 1em;
  /* border-bottom: 1px dotted #AAA; */
}

.title-box {
  display: inline-block;
  padding-left: 0.5em;
}

.title-box p {
  margin: 0;
  padding: 0;
}

.button-icon {
  border: 0;
  cursor: pointer;
  background: none;
  font-size: 2em;
  vertical-align: top;
}

.title {
  font-size: 1.5em;
  padding: 0;
  margin: 0;
}

.under {
  font-size: 0.8em;
}

.content {
  z-index: 2;
  background: transparent;
}

.shadow {
  height: 80%;
  top: 10%;
  position: absolute;
  padding: 0.2em;
  box-sizing: content-box;
  z-index: -1;
  background: rgba(0, 255, 0, 0.1);
}


.dones {
  font-size: 1.5em;
}

.icon-link {
  color: #99A;
}

button:focus {
  outline: none;
}

.done {
  color: #118811;
}


.icon-link.delete {
  font-size: 0.5em;
  position: absolute;
  right: 0.2em;
  color: #AA8888;
}
</style>

