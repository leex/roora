import create from 'zustand';

import AuthHelperMethods from './auth/AuthHelperMethods';

import axios from "axios";

function confirmRegistration(set) {
  set(state => ({
    voter: true
  }));
}

function confirmRegion(set, region) {
  set(state => ({
    region: region
  }));
}

function getUserDetails(set, loaded) {
  var Auth = new AuthHelperMethods();
  let token = Auth.getToken();

  // let loaded = useStore('id');

  if (loaded) {
    return;
  }

  console.log(token);

  axios.get(process.env.REACT_APP_ASYNC_PATH + '/appdata', { headers: { "Authorization" : `Bearer ${token}` } })
  .then(function (response) {
    // handle success
    let userData = response.data.user;

    set(state => ({
      name: userData.name,
      region: userData.region,
      loaded: true,
      voter: userData.vote,
      invited: userData.invited,
      agent: userData.agent,
      admin: userData.admin
    }));
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed
  });
}

const [useStore] = create((set, get) => ({
  loaded: false,
  name: '',
  actions: {
    getDetails: () => getUserDetails(set, get().loaded),
    confirmRegistration: () => confirmRegistration(set),
    confirmRegion: (event) => confirmRegion(set, event)
  },
  region: '',
  voter: false,
  invited: '',
  agent: false,
  admin: false
}))

export default useStore;
