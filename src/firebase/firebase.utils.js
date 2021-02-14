import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCG1LPsxZD8R8MuFC8Ub4V50fPKc9IE6NI",
    authDomain: "crowndb-3163c.firebaseapp.com",
    projectId: "crowndb-3163c",
    storageBucket: "crowndb-3163c.appspot.com",
    messagingSenderId: "218960615973",
    appId: "1:218960615973:web:87a0c8dbf7dba3111f7dcc",
    measurementId: "G-N50DSP2L6V"
};

firebase.initializeApp(config);
export const auth =firebase.auth();
export const firestore= firebase.firestore();

export const creatUserProfile = async (user,otherData) => {
    if(!user) return;
    const userRef = firestore.doc(`users/${user.uid}`);
    const snapShot = await userRef.get();
    // console.log(snapShot);
    if(!snapShot.exists){
        const {displayName, email} = user;
        const createdAt =new Date();
        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...otherData
            })
        }
        catch (err){
            console.log(err);
        }
    }
    return userRef;

};
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:"select_account"});
export const signInWithGoogle = ()=> auth.signInWithPopup(provider);
export default firebase;