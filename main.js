const App = {
  
}

App.ui = {
  
}


const path = window.location.pathname;
// "/track/2423/A9X2"

const parts = path.split('/').filter(Boolean);
// ["track", "2423", "A9X2"]

const [, jobId, token] = parts;

console.log(jobId); // 2423
console.log(token); // A9X2

alert(jobId)
alert(token)

if (parts[0] !== 'track' || !jobId || !token) {
  document.body.innerHTML = "Invalid tracking link";
  throw new Error("Invalid route");
}