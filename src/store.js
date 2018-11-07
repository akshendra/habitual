/* eslint-disable no-param-reassign */

import _ from 'lodash';
import Vue from 'vue';
import Vuex from 'vuex';
import moment from 'moment';
import createPersistedState from 'vuex-persistedstate';
import datetime from './helpers/datetime';

Vue.use(Vuex);


export default new Vuex.Store({
  plugins: [createPersistedState({
    key: 'habituals',
  })],
  state: {
    _id: 0,
    habbits: [],
  },
  mutations: {
    add(state, name) {
      const today = datetime.getTodaysDate();
      state.habbits.push({
        id: state._id,
        name,
        startedOn: today,
        lastDone: '1970-01-01',
        done: 0,
        dones: {},
      });
      state._id += 1;
    },
    tick(state, id) {
      const index = _.findIndex(state.habbits, val => val.id === id);
      const today = datetime.getTodaysDate();
      const found = state.habbits[index];
      Vue.set(state.habbits, index, Object.assign(found, {
        lastDone: today,
        lastDoneTS: Date.now(),
        dones: Object.assign({
        }, found.dones, {
          [today]: true,
        }),
        done: found.done + 1,
      }));
    },

    untick(state, id) {
      const index = _.findIndex(state.habbits, val => val.id === id);
      const today = datetime.getTodaysDate();
      const found = state.habbits[index];
      const newDones = Object.assign({}, found.dones, {
        [today]: false,
      });
      const allDays = Object.keys(newDones).filter(k => newDones[k]);
      const lastDone = allDays.sort().reverse()[0] || '1970-01-01';
      Vue.set(state.habbits, index, Object.assign(found, {
        lastDone,
        lastDoneTS: moment(lastDone).valueOf(),
        dones: newDones,
        done: found.done - 1,
      }));
    },

    remove(state, id) {
      console.log('Deleting', id);
      state.habbits = state.habbits.filter(val => val.id !== id);
    },
  },
});
