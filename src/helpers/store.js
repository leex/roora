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

function getUserDetails(set, userId) {
  var Auth = new AuthHelperMethods();
  let token = Auth.getToken();

  // let userId = useStore('id');

  if (userId !== null) {
    return;
  }

  console.log(token);

  axios.get('/appdata', { headers: { "Authorization" : `Bearer ${token}` } })
  .then(function (response) {
    // handle success
    console.log(response);
    let userData = response.data.user;

    // set(state => ({ region: userData.region, name: 'JNDS' }));
    set(state => ({
      name: userData.name,
      region: userData.region,
      id: userData.id,
      voter: false
      // voter: userData.voter
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
  id: null,
  name: 'Unknown',
  actions: {
    getDetails: () => getUserDetails(set, get().id),
    confirmRegistration: () => confirmRegistration(set),
    confirmRegion: (event) => confirmRegion(set, event)
  },
  region: null,
  voter: false
}))

export default useStore;
