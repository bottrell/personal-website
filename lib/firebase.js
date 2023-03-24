import admin from 'firebase-admin';
import { getFirestore } from "firebase/firestore"

const serviceAccount = require('../accountkey.json');

if (admin.apps.length == 0) {
    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount)
    })
}

// get a firestore instance
const db = getFirestore(admin);

export default db;

// // Query a collection
// const querySnapshot = await firestore.collection('main').get();

// // process the query results
// const users = querySnapshot.docs.map((doc) => {
//     return {
//         id: doc.id,
//         ...doc.data()
//     };
// });

// console.log(users)