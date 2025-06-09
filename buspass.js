const seatAvailable = document.getElementById("seatAvailable");
const ageAbove50 = document.getElementById("ageAbove50");
const hasAadhar = document.getElementById("hasAadhar");
const checkButton = document.getElementById("checkStatus");
const passengerStatus = document.getElementById("status");

checkButton.addEventListener("click", function () {
  let isSeatAvailable = seatAvailable.checked;
  let isAgeAbove50 = ageAbove50.checked;
  let hasAadharCard = hasAadhar.checked;
  console.log(isSeatAvailable, isAgeAbove50, hasAadharCard);
  let feedback;
  if (isSeatAvailable) {
    console.log("Seat is availabele");
    feedback = "Seat is available";
    if (isAgeAbove50) {
      feedback = feedback + ", Aged above 50";
      if (hasAadharCard) {
        feedback = feedback + ", Has Aadhar card";
        let confirmmsg = confirm("Are you sure want to come inside the bus?");
        if (confirmmsg) {
          alert("Please open the door");
        }
      } else {
        feedback = feedback + ", but you dont have aadhar card";
      }
    } else {
      feedback = feedback + ", but your age is below 50 years";
    }
  } else {
    console.log("Seat is not available");
    feedback = "Seat is not available";
  }
  passengerStatus.textContent = feedback;
});
