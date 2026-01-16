const App = {
  
}

App.ui = {
  
}


const path = window.location.pathname;
// "/track/2423/A9X2"

const parts = location.pathname.split('/').filter(Boolean);
// ["s", "mobifixer-areekode", "track", "1000", "ab12"]

if (parts[0] !== 's' || parts[2] !== 'track') {
  alert('invalid')
  throw new Error("Invalid route");
}

const shopSlug = parts[1];
const jobId = parts[3];
const token = parts[4];

alert(shopSlug)
alert(jobId); // 2423
alert(token); // A9X2



const firebaseConfig = {
  apiKey: "AIzaSyAWQP1HENutTN4cPyMM86norOGMSXDnc2g",
  authDomain: "c24o-c038b.firebaseapp.com",
  databaseURL: "https://c24o-c038b-default-rtdb.firebaseio.com",
  projectId: "c24o-c038b",
  storageBucket: "c24o-c038b.firebasestorage.app",
  messagingSenderId: "418015450687",
  appId: "1:418015450687:web:3d0a9632558f242aad4a8a",
  measurementId: "G-X98S86SEV2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const auth = getAuth(app);




firebase.database()
  .ref(`shops/${shopSlug}/services/${serviceId}`)
  .once('value')
  .then(snapshot => {

    if (!snapshot.exists()) {
      alert("Service not found");
      return;
    }
    alert(`data available, ${typeof snapshot.val}`)

    const service = snapshot.val();

    // 🔐 SECURITY CHECK (NON-NEGOTIABLE)
    if (service.customerToken !== token) {
      showError("Unauthorized access");
      return;
    }

    // ✅ Fetch shop info separately
    loadShopInfo(shopSlug, service);
  })
  .catch(err => {
    console.error(err);
    showError("Something went wrong");
  });