// When the user clicks anywhere outside of the modal, close it	
	window.addEventListener('click', function(event) {
		if (event.target == document.getElementById('modal')) {
			document.getElementById('modal').style.display = "none";
		}
	});
