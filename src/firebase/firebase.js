import * as firebase from 'firebase';
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRqw2cnKhbPX9Ty__Wbyf8McI8kMVu034",
    authDomain: "react-expencify-app.firebaseapp.com",
    databaseURL: "https://react-expencify-app.firebaseio.com",
    projectId: "react-expencify-app",
    storageBucket: "react-expencify-app.appspot.com",
    messagingSenderId: "178322250340",
    appId: "1:178322250340:web:70b3965b537978d751dd71",
    measurementId: "G-QHFNVE8HKR"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };
  

//   database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//     const val = snapshot.val();
//     // console.log("expenses", val)

//     const expenses = [];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log('expenses from firebase', expenses);
//   })
//   .catch((e)=>{
//       console.log("error in fetching data: "+e)
//   });

//   database.ref('expenses').on('value',(snapshot)=>{
//     // console.log(snapshot.val());
//      const expenses = []
//      snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })

//     console.log('Updated expense', expenses);
//   })

// child remove subscription
// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })



