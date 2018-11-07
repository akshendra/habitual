<template>
  <div class="content">
    <div class="tools">
      <select v-model="month">
        <option :key="number" v-for="(number, name) in months" :value="number"> {{ name }} </option>
      </select>
      <select v-model="year">
          <option :key="y" :value="y" v-for="y in years.all"> {{ y}} </option>
      </select>
      <button class="button-icon delete" @click="reset">
        <font-awesome-icon icon="redo" class="icon-link refresh" />
      </button>
    </div>
    <table>
      <tr>
        <th>Habbit</th>
        <th :key="date" v-for="date in dates"> {{ date }} </th>
      </tr>
      <tr :key="habbit.id" v-for="habbit in list">
        <td class="title">
          {{ habbit.name }}
        </td>
        <td
          :class="{
            'green-box': habbit.dones[`${year}-${month}-${date}`],
            'red-box': !habbit.dones[`${year}-${month}-${date}`],
            'start-box': habbit.startedOn === `${year}-${month}-${date}`,
            'today-box': today === `${year}-${month}-${date}`,
            'no-box': habbit.startedOn > `${year}-${month}-${date}` || today < `${year}-${month}-${date}`,
          }" :key="date" v-for="date in dates">
          <span v-if="habbit.dones[`${year}-${month}-${date}`]">
            <font-awesome-icon icon="check-circle" class="icon-show done" />
          </span>
          <span v-else>
            <font-awesome-icon icon="times-circle" class="icon-show undone" />
          </span>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>

import datetime from '@/helpers/datetime';

export default {
  name: 'Performance',
  data() {
    return {
      today: datetime.getTodaysDate(),
      months: {
        January: '01',
        Febuary: '02',
        March: '03',
        April: '04',
        May: '05',
        June: '06',
        July: '07',
        August: '08',
        September: '09',
        October: '10',
        November: '11',
        December: '12',
      },
      year: datetime.getYearNumber(),
      month: datetime.getMonthNumber(),
    };
  },
  computed: {
    list() {
      return this.$store.state.habbits;
    },

    dates() {
      const days = datetime.daysInMonth(this.year, this.month);
      return new Array(days).fill(1).map((a, i) => {
        const day = i + 1;
        if (day < 10) {
          return `0${day}`;
        }
        return day;
      });
    },

    years() {
      const dt = new Date()
      const current = dt.getFullYear();
      const ys = [];
      for (let i = current - 100; i <= current + 100; i += 1) {
        ys.push(String(i));
      }
      return {
        all: ys,
        current,
      };
    },
  },

  methods: {
    reset() {
      this.year = datetime.getYearNumber();
      this.month = datetime.getMonthNumber();
    },
  },
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Roboto+Mono:400,500,700');

.content {
  overflow: auto visible;
}

table {
  margin-top: 1em;
  width: 100%;
  font-family: 'Roboto Mono', monospace;
  border-collapse: collapse;
  padding: 3em;
  box-sizing: content-box;
}

th {
  border-bottom: 1px solid #364043;
  color: #E2B842;
  font-size: 0.85em;
  font-weight: 600;
  padding: 0.5em 2px;
  text-align: left;
}
td {
  color: #333;
  font-weight: 400;
  text-align: center;
  padding: 0em 0;
}

td.title {
  padding: 0.5em;
  background: #333;
  color: white;
}
tbody tr {
  transition: background 0.25s ease;
}
tbody tr:hover {
  background: #014055;
}

.green-box {
  background: green;
}

.red-box {
  background: #F88;
}


.no-box {
  background: #DDD;
}


.icon-show {
  font-size: 0.2em;
  color: rgba(255, 255, 255, 0.4);
}

.tools {
  padding: 1em 0;
}

select {
  background: none;
  border: 0;
  border-bottom: 1px dotted #999;
  margin-right: 1em;
  font-size: 1.5em;
}

select:focus {
  box-shadow: none;
  outline: none;
}

.button-icon {
  border: 0;
  cursor: pointer;
  background: none;
  font-size: 1.2em;
  color: black;
}

.button-icon:focus {
  outline: none;
}

</style>


