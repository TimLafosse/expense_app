import * as firebase from 'firebase';
// import { ContextExclusionPlugin } from 'webpack';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
  };

  firebase.initializeApp(firebaseConfig);

  const database = firebase.database();
  // const {database} = firebase

  export { firebase, database as default };

// // child_removed 
// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // child_changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })
// // child_added - gets called for all exisint children plus any new ones
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })



  // database.ref('expenses/-MWsJOKz0Ywgseff234wges').update({
  //   note: 'helloc',
  //   amount: 3900,
  //   description: 'Debit Bard'
  // })


  // database.ref('expenses')
  //   .once('value')
  //   .then((snapshot) => {
  //     const expenses = [];

  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     })
      
  //     console.log(expenses)
  //   });

  // database.ref('expenses')
  //   .on('value', (snapshot) => {
  //     const expenses = [];


  //     snapshot.forEach((childSnapshot) => {
  //       expenses.push({
  //         id: childSnapshot.key,
  //         ...childSnapshot.val()
  //       });
  //     })
      
  //     console.log(expenses)
  //   });



// const firebaseNotes = {
//   12: {
//     title: 'First Note',
//     body: 'This is my note'
//   },
//   a761ase: {
//     title: 'Second Note',
//     body: 'This is my note'
//   } 
// }

// const notes = [{
//   id: '12',
//   title: 'First Note',
//   body: 'This is my note'
// }, {
//   id: 'a761ase',
//   title: 'Second Note',
//   body: 'This is my note'
// }];

// database.ref('notes').set(firebaseNotes);

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const data = snapshot.val();
//   console.log(`${data.name} is a ${data.job.title}`)
// }, (e) => {
//   console.log('Error with data fetching', e)
// })

// treating above as a promise and using .then syntax would not work as can only be called once

// setTimeout(() => {
//   database.ref('name').set('Emma');
// }, 3500)

// // setTimeout(() => {
// //   database.ref().off('value', onValueChange);
// // }, 7000)

// setTimeout(() => {
//   database.ref('age').set(20);
// }, 10500)

  // database.ref()
  // .once('value')
  // .then((snapshot) => {
  //   const val = snapshot.val()
  //   console.log(val);
  // })
  // .catch(() => {
  //   console.log('Error fetching data', e);
  // })

  // database.ref().set({
  //     name: 'Tim Lafosse',
  //     age: 24,
  //     job: {
  //       title: 'Software Developer',
  //       company: 'Kraken Technologies'
  //     },
  //     stressLevel: 6,
  //     isSingle: false,
  //     location: {
  //         city: 'London',
  //         country: 'United Kingdom'
  //     }
  // }).then(() => {
  //   console.log('Data is saved');
  // }).catch((error) => {
  //   console.log('error: ', error)
  // }); 
  // error contents will be passed in by firebase 

  // database.ref().update({
  //   stressLevel: 9,
  //   'job/company': 'Amazon',
  //   'location/city': 'Brighton'
  // })

  
  // database.ref('attributes').set({
  //   height: 171,
  //   weight: 70
  // }).then(() => {
  //   console.log('Data is updated');
  // }).catch((error) => {
  //   console.log('error: ', error)
  // }); 


  // database.ref('attributes')
  // .remove()
  // .then(function() {
  //   console.log("Remove succeeded.")
  // })
  // .catch(function(error) {
  //   console.log("Remove failed: " + error.message)
  // });

  // database.ref('isSingle').set(null); // alterantive to remove method, albeit less explicit

  // database.ref().update({

  // })
