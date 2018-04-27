/*Add functionality*/

//SUBMITTING DONATION
var originalAmount = 10;

var submitButton = document.getElementsByClassName('submitButton')

var submitDonation = function(){

var donationAmount = 	document.getElementsByClassName('donationInput')[0].value
 
var amountNeeded =   document.getElementsByClassName('amountNeeded')[0]

var progressBar = document.getElementsByClassName('progressContent')[0];
    
var newAmountNeeded = amountNeeded.textContent.slice(1, amountNeeded.textContent.length) - donationAmount;

amountNeeded.textContent = "$" + newAmountNeeded;
	debugger;
	if(donationAmount > 0){
		
		if((progressBar.style.width.split("%")[0] || 0) >= 100){
			return false;
		}
		var newProgressAmount = parseInt(progressBar.style.width.split("%")[0] || 0) + parseInt(donationAmount);
		
		if(newProgressAmount > 100) {
			progressBar.style.width = 100 + '%'
		}
		else {
			progressBar.style.width = newProgressAmount + '%';
		}
	}
	else {
		if((progressBar.style.width.split("%")[0] || 0) <= 0){
			return false;
		}
		var newProgressAmount = parseInt(progressBar.style.width.split("%")[0] || 0) + parseInt(donationAmount);
		
		if(newProgressAmount < 0) {
			progressBar.style.width = '0%'
		}
		else {
			progressBar.style.width = newProgressAmount + '%';
		}
	}
}

submitButton[0].addEventListener('click', submitDonation, false);

//OPENING MODAL

var openLink = document.getElementsByClassName('modalLink')

var openModal = function(){
	var modal = document.getElementsByClassName('fundModal')[0];
  modal.style.display = "block";
}

openLink[0].addEventListener('click', openModal, false);

//CLOSING MODAL

var closeButton = document.getElementsByClassName('closeButton')

var closeModal = function(){
	var modal = document.getElementsByClassName('fundModal')[0];
  modal.style.display = "none";
}

closeButton[0].addEventListener('click', closeModal, false);
