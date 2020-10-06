

const notif_container = document.getElementById('notif-container');
 const notif =document.querySelectorAll('#notif');

window.addEventListener('load', () => {
  createNotiication();

});


function createNotiication() {

// Add Notification
     var i;

     setInterval (() => {
	  for (i = 0; i < notif.length; i++) {

	    notif[i].style.display ="block";
	    notif_container.style.display ="block";
       }

		}, 2000);

	

// Remove notification
	  var x;
	  setTimeout (() => {

		for (x = 0; x < notif.length; x++) {

		notif[x].remove();
	    notif_container.remove();
			   }
		}, 9000);
	   

   
 
	
}