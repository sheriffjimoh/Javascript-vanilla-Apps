
// get input 


const inputFilter = document.getElementById('inputFilter');

inputFilter.addEventListener('keyup', Filternames);


function Filternames() {
	// console.log(1);

let filtervalue = document.getElementById('inputFilter').value.toLowerCase();

// get ul

let ulname = document.getElementById('names');
// get li from the ul

let li = ulname.querySelectorAll('li.collection-item');

// loop through the li 
  
 for (let i = 0 ;  i < li.length; i++) {
 	// let user = document.getElementByT('user-name');
 	// get user name
 	let username = li[i].querySelectorAll('#user-name')[0].innerHTML;
 	let userDescrpt =li[i].querySelectorAll('#user-description')[0].innerHTML;
 	if (username.toLowerCase().indexOf(filtervalue) > -1) {

      li[i].style.display = '';
       document.getElementById('text').innerHTML='you are searching for :'+filtervalue+'...';

 	}else{

 	 if (userDescrpt.toLowerCase().indexOf(filtervalue) > -1) {

      li[i].style.display = '';
       document.getElementById('text').innerHTML='you are searching for :'+filtervalue+'...';

 	}else{

 		li[i].style.display = 'none';
 		  document.getElementById('text').innerHTML='you are searching for :'+filtervalue+'...';
       }
 	}
 }

}