import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyClxsV_CpRGhLZf8wxmhAR4U4x8JAbuP70',
	authDomain: 'madkour-egyplan.firebaseapp.com',
	databaseURL: 'https://madkour-egyplan.firebaseio.com',
	projectId: 'madkour-egyplan',
	storageBucket: 'madkour-egyplan.appspot.com',
	messagingSenderId: '1031315064495',
	appId: '1:1031315064495:web:b514d65afa96e79c6d365a',
	measurementId: 'G-DYMTLGSQ66',
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;