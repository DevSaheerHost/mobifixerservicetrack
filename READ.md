repairs/
 └─ 2423/
    ├─ customerToken: "A9X2"
    ├─ device
    ├─ issue
    ├─ status
    ├─ amount
    ├─ advance
    ├─ note
    
    
    
{
  "rules": {
    "repairs": {
      "$repairId": {
        ".read": "query.orderByChild == 'customerToken' && query.equalTo != null",
        ".write": false
      }
    }
  }
}





const repairId = "2423";
const token = "A9X2";

firebase.database()
  .ref("repairs/" + repairId)
  .once("value", snap => {
    if (!snap.exists()) {
      document.body.innerHTML = "Invalid or expired link";
      return;
    }
    const data = snap.val();
    if (data.customerToken !== token) {
      document.body.innerHTML = "Unauthorized access";
      return;
    }
    // render UI
  });
  
  




const STATUS_TEXT = {
  pending: {
    title: "Repair Received",
    desc: "Your device has been received and is awaiting inspection."
  },
  spare: {
    title: "Waiting for Spare",
    desc: "Required spare part has been ordered."
  },
  progress: {
    title: "Repair in Progress",
    desc: "Repair work is currently in progress."
  },
  done: {
    title: "Repair Completed",
    desc: "Your device repair is complete."
  },
  collected: {
    title: "Job Closed",
    desc: "Device collected. Thank you for choosing us."
  }
};


Repair in Progress
Repair work is currently in progress.







reviews/
 └─ 2423/
    ├─ rating: 4
    ├─ comment: "Quick service"
    ├─ createdAt
    
    
    
    
    

if (status !== "collected") return;

if (localStorage.getItem("reviewed_2423")) return;

submitBtn.onclick = () => {
  firebase.database().ref("reviews/2423").set({
    rating,
    comment,
    createdAt: Date.now()
  });

  localStorage.setItem("reviewed_2423", "yes");
};







Hello Arun,

Your mobile repair has been registered at Mobifixer.

Device: Motorola Edge 50 Neo  
Job ID: #2423  

Track repair status here:
https://mobifixer.app/track/2423/A9X2

– Mobifixer
