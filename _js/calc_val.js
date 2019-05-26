function calc_validate() {
	
	var a = document.getElementById("p_f").value
	var b = document.getElementById("p_i").value
	var c = document.getElementById("t_f").value
	var d = document.getElementById("t_i").value
	var pf = document.getElementById("p_f");
	var pi = document.getElementById("p_i");
	var ts = document.getElementById("t_f");
	var ti = document.getElementById("t_i");

	if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
	
		alert("Invalid input, please insert only numbers in the fields !");
		return false;
	
	}
	
	else if (pf.value == "" || pi.value == "" || ts.value == "" || ti.value == "") {
	
		alert("Don't leave the fields in blank !");
		return false;
	
	}
	
	else {
		
		var km = ((a-b)/(c-d))
		var ms = (((a-b)/(c-d))/3.6)
		var resms = ms.toFixed(2)
		var reskm = km.toFixed(2)
	
		document.getElementById("res_km").innerHTML = reskm;
		document.getElementById("res_ms").innerHTML = resms;
		document.getElementById("result").style.display = "block";
		document.getElementById("result").style.visibility = "visible";
		document.getElementById("s1").innerHTML = a;
		document.getElementById("s2").innerHTML = b;
		document.getElementById("s1s2").innerHTML = a-b;
		document.getElementById("s3").innerHTML = c;
		document.getElementById("s4").innerHTML = d;
		document.getElementById("s3s4").innerHTML = c-d;
		document.getElementById("explic").style.display = "block";	
		document.getElementById("rs").innerHTML = a-b;
		document.getElementById("rt").innerHTML = c-d;
		document.getElementById("resultkm").innerHTML = reskm;
		document.getElementById("altkm").innerHTML = reskm;
		document.getElementById("resultms").innerHTML = resms;
	
	}
}
	
