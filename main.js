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



