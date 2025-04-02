
	
	function openBase(evt) {
		openTab(evt, "base")
	}
	function openDoc(evt) {
		openTab(evt, "doc")
	}
	function openEmployee(evt) {
		openTab(evt, "employee")
	}
	function openForm(evt) {
		openTab(evt, "form")
	}
	function openTraining(evt) {
		openTab(evt, "training")
	}
	function openRevision(evt) {
		openTab(evt, "revision")
	}
	
	function openTab(evt, name) {
		var i, tabcontent, tablinks;
		tabcontent = document.getElementsByClassName("tabcontent");
		
		for (i = 0; i < tabcontent.length; i++) {
			tabcontent[i].style.display = "none";
		}
		
		tablinks = document.getElementsByClassName("tablinks");
		
		for (i = 0; i < tablinks.length; i++) {
			tablinks[i].className = tablinks[i].className.replace(" active", "");
		}
		
		document.getElementById(name).style.display = "block";
		evt.currentTarget.className += " active";
	}
	
