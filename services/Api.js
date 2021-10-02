import firebase from '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import storage from '@react-native-firebase/storage';

export function login({ email, password }) {
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((value) => {
    console.log(value);
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/user-not-found') {
      console.warn('That email address is invalid!');
    }

    console.error(error);
    alert(error)
  });
}

export function signup({ email, password, displayName }) {
  auth().createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      console.log(userInfo)
      userInfo.user.updateProfile({ displayName: displayName.trim()})
      .then((value) => {
        console.log(value);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.warn('That email address is already in use!');
        }
    
        if (error.code === 'auth/user-not-found') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    })
}

export function subscribeToAuthChanges(authStateChanged) {
  firebase.auth().onAuthStateChanged((user) => {
    console.log (user);
    authStateChanged(user);
  })
}

export function signout(onSignedOut) {
  firebase.auth().signOut()
    .then(() => {
      console.log('Signed Out')
      onSignedOut();
    })
}

export async function AllProduct(productsRetrieved) {
  var productList = [];

  var snapshot = await firebase.firestore()
    .collection('Products')
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
      const productItem = doc.data();
      productItem.id = doc.id;
      productList.push(productItem);
    });

  productsRetrieved(productList);
}

export async function userProducts(productsRetrieved) {
  // const UserId = auth().currentUser.uid;
  // console.log('uid',UserId)
  var productList = [];

  var snapshot = await firebase.firestore()
    .collection('Profile')
    // .where('uid', '==' ,UserId)
    .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
      const productItem = doc.data();
      productItem.id = doc.id;
      productList.push(productItem);
    });

    productsRetrieved(productList);
}


export async function userProductsMarker(productsRetrieved) {
  const UserId = auth().currentUser.uid;
  console.log(UserId)
  var productList = [];

  var snapshot = await firebase.firestore()
    .collection('HelperProfile')
    // .orderBy('createdAt')
    .get()

    snapshot.forEach((doc) => {
      const productItem = doc.data();
      productItem.id = doc.id;
      productList.push(productItem);
    });

    productsRetrieved(productList);
}

  export function deleteProduct(product, deleteComplete) {
    console.log(product);
  
    firebase.firestore()
      .collection('Task')
      .doc(product.id).delete()
      .then(() => deleteComplete(alert('Task Cancel')))
      .catch((error) => console.log(error));
  }

  export async function userProfile(profilesRetrieved) {
    // const UserId = auth().currentUser.uid;
    // console.log(UserId)
    var profileList = [];
  
    var snapshot = await firebase.firestore()
      .collection('LenderProfile')
      // .where('uid', '==' ,UserId)
      .orderBy('createdAt')
      .get()
  
      snapshot.forEach((doc) => {
        const profileItem = doc.data();
        profileItem.id = doc.id;
        profileList.push(profileItem);
      });

      profilesRetrieved(profileList);
  }

  export async function userTask(profilesRetrieved) {
    const UserId = auth().currentUser.uid;
    console.log(UserId)
    var profileList = [];
  
    var snapshot = await firebase.firestore()
      .collection('Task').where('uid', '==' ,UserId)
      // .orderBy('createdAt')
      .get()
  
      snapshot.forEach((doc) => {
        const profileItem = doc.data();
        profileItem.id = doc.id;
        profileList.push(profileItem);
      });

      profilesRetrieved(profileList);
  }

  export async function helperProfile(profilesRetrieved) {
    const UserId = auth().currentUser.uid;
    console.log(UserId)
    var profileList = [];
  
    var snapshot = await firebase.firestore()
      .collection('HelperProfile').where('uid', '==' ,UserId)
      // .orderBy('createdAt')
      .get()
  
      snapshot.forEach((doc) => {
        const profileItem = doc.data();
        profileItem.id = doc.id;
        profileList.push(profileItem);
      });

      profilesRetrieved(profileList);
  }

  export function upload(product, onProductUploaded, { updating }) {

    if (product.imageUri) {
      const fileExtension = product.imageUri.split('.').pop();
      console.log("EXT: " + fileExtension);
  
      var uuid = uuidv4();
  
      const fileName = `${uuid}.${fileExtension}`;
      console.log(fileName);
  
      var storageRef = firebase.storage().ref(`products/images/${fileName}`);
  
      storageRef.putFile(product.imageUri)
        .on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            console.log("snapshot: " + snapshot.state);
            console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              console.log("Success");
            } 
          },
          error => {
            // unsubscribe();
            console.log("image upload error: " + error.toString());
          },
          () => {
            storageRef.getDownloadURL()
              .then((downloadUrl) => {
                console.log("File available at: " + downloadUrl);
  
                product.image = downloadUrl;
  
                delete product.imageUri;
  
                if (updating) {
                  console.log("Updating....");
                  updateProduct(product, onProductUploaded);
                } else {
                  console.log("adding...");
                  addProduct(product, onProductUploaded);
                }
              })
          }
        )
    } else {
      console.log("Skipping image upload");
  
      delete product.imageUri;
  
      if (updating) {
        console.log("Updating....");
        updateProduct(product, onProductUploaded);
      } else {
        console.log("adding...");
        addProduct(product, onProductUploaded);
      }
    }
  }

  export function updateProduct(product, updateComplete) {
    product.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log(product);
  
    firebase.firestore()
      .collection('InvesterProfile')
      .doc(product.id).set(product)
      .then(() => updateComplete(product))
      .catch((error) => console.log(error));
  }

  export function addProduct(product, addComplete) {
    product.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  
    firebase.firestore()
      .collection('Profile')
      .add(product)
      .then((snapshot) => {
        product.id = snapshot.id;
        snapshot.set(product);
      }).then(() => addComplete(product))
      .catch((error) => console.log(error));
  }

  export function uploadProfile(profile, onProfileUploaded, { updating }) {
    if (profile.imageUri1) {
      const fileExtension = profile.imageUri1.split('.').pop();
      console.log("EXT: " + fileExtension);
  
      var uuid = uuidv4();
  
      const fileName = `${uuid}.${fileExtension}`;
      console.log(fileName);
  
      var storageRef = firebase.storage().ref(`products/images/${fileName}`);
  
      storageRef.putFile(profile.imageUri1)
        .on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            console.log("snapshot: " + snapshot.state);
            console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              console.log("Success");
            } 
          },
          error => {
            // unsubscribe();
            console.log("image upload error: " + error.toString());
          },
          () => {
            storageRef.getDownloadURL()
              .then((downloadUrl) => {
                console.log("File available at: " + downloadUrl);
  
                profile.image = downloadUrl;
  
                delete profile.imageUri1;
  
                if (updating) {
                  console.log("Updating....");
                  updateProfile(profile, onProfileUploaded);
                } else {
                  console.log("adding...");
                  addProfile(profile, onProfileUploaded);
                }
              })
          }
        )
    } else {
      console.log("Skipping image upload");
  
      delete profile.imageUri1;
  
      if (updating) {
        console.log("Updating....");
        updateProfile(profile, onProfileUploaded);
      } else {
        console.log("adding...");
        addProfile(profile, onProfileUploaded);
      }
    }
  }
  
  export function updateProfile(profile, updateComplete) {
    profile.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log(profile);
  
    firebase.firestore()
      .collection('LenderProfile')
      .doc(profile.id).set(profile)
      .then(() => updateComplete(profile))
      .catch((error) => console.log(error));
  }

  export function addProfile(profile, addComplete) {
    profile.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  
    firebase.firestore()
      .collection('LenderProfile')
      .add(profile)
      .then((snapshot) => {
        profile.id = snapshot.id;
        snapshot.set(profile);
      }).then(() => addComplete(profile))
      
      .catch((error) => console.log(error));
  }

  export function uploadHelperProfile(helper, onHelperProfileUploaded, { updating }) {
    if (helper.imageUri1) {
      const fileExtension = helper.imageUri1.split('.').pop();
      console.log("EXT: " + fileExtension);
  
      var uuid = uuidv4();
  
      const fileName = `${uuid}.${fileExtension}`;
      console.log(fileName);
  
      var storageRef = firebase.storage().ref(`products/images/${fileName}`);
  
      storageRef.putFile(helper.imageUri1)
        .on(
          firebase.storage.TaskEvent.STATE_CHANGED,
          snapshot => {
            console.log("snapshot: " + snapshot.state);
            console.log("progress: " + (snapshot.bytesTransferred / snapshot.totalBytes) * 100);
  
            if (snapshot.state === firebase.storage.TaskState.SUCCESS) {
              console.log("Success");
            } 
          },
          error => {
            // unsubscribe();
            console.log("image upload error: " + error.toString());
          },
          () => {
            storageRef.getDownloadURL()
              .then((downloadUrl) => {
                console.log("File available at: " + downloadUrl);
  
                helper.image = downloadUrl;
  
                delete helper.imageUri1;
  
                if (updating) {
                  console.log("Updating....");
                  updateProfile(helper, onHelperProfileUploaded);
                } else {
                  console.log("adding...");
                  addProfile(helper, onHelperProfileUploaded);
                }
              })
          }
        )
    } else {
      console.log("Skipping image upload");
  
      delete profile.imageUri1;
  
      if (updating) {
        console.log("Updating....");
        updateHelperProfile(helper, onHelperProfileUploaded);
      } else {
        console.log("adding...");
        addHelperProfile(helper, onHelperProfileUploaded);
      }
    }
  }
  
  export function updateHelperProfile(helper, updateComplete) {
    helper.updatedAt = firebase.firestore.FieldValue.serverTimestamp();
    console.log(helper);
  
    firebase.firestore()
      .collection('LenderProfile')
      .doc(helper.id).set(helper)
      .then(() => updateComplete(helper))
      .catch((error) => console.log(error));
  }

  export function addHelperProfile(helper, addComplete) {
    helper.createdAt = firebase.firestore.FieldValue.serverTimestamp();
  
    firebase.firestore()
      .collection('LenderProfile')
      .add(helper)
      .then((snapshot) => {
        profile.id = snapshot.id;
        snapshot.set(helper);
      }).then(() => addComplete(helper))
      
      .catch((error) => console.log(error));
  }
