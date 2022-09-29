function toggleModule(id) {
	var el = document.getElementById('unitViewer')
	el.innerHTML = document.getElementById(id).innerHTML;
	el.classList.remove('slide-up-fade-in');
    el.offsetHeight; /* trigger reflow */
    el.classList.add('slide-up-fade-in'); 
}