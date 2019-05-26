function conv_temp() {

  //Get values of entries from the form
  var n = parseFloat(document.getElementById("temp").value); // Text field
  var u1 = document.getElementById("t1").value; // First temperature unit choice
  var u2 = document.getElementById("t2").value; // Second temperature unit choice

  //Make the calculation based on unit choices
  var ftc = ((n - 32) / 1.8); // Fahrenheit to Celsius
  var ftk = ((n + 459.67) * (5 / 9)); // Fahrenheit to Kelvin
  var ctf = ((n * 1.8) + 32); // Celsius to Fahrenheit
  var ctk = (n + 273.15); // Celsius to Kelvin
  var ktc = (n - 273.15); // Kelvin to Celsius
  var ktf = ((n * 1.8) - 459.67); // Kelvin to Fahrenheit

  //Move decimals accordingly to temperature unit
  var resftc = ftc.toFixed(1);
  var resftk = ftk.toFixed(2);
  var resctf = ctf.toFixed(1);
  var resctk = ctk.toFixed(2);
  var resktc = ktc.toFixed(1);
  var resktf = ktf.toFixed(1);

  //If input isn't numeric
  if (isNaN(n)) {
    alert("Invalid input, please insert only numbers in the fields !");
    document.getElementById("result").style.display = "block";
    return false;

  }

  //If units are not set
  else if (u1 === "0" || u2 === "0") {

    alert("Select a temperature to convert from and a a temperature to convert to !");
    document.getElementById("result").style.display = "block";
    return false;

  }

  //If units are the same
  else if ((u1 === "1" && u2 === "1") || (u1 === "2" && u2 === "2") || (u1 === "3" && u2 === "3")) {

    alert("Am I a joke to you ?");
    document.getElementById("result").style.display = "block";
    return false;

  } else if (u1 === "1" && u2 === "2") { // ºF to ºC

    var form_ftc = 'T<sub>c</sub> &equals; (T<sub>f</sub> &minus; 32) &div; 1.8'; //C = (F - 32) / 1.8
    var calc1 = 'T<sub>c</sub> &equals; (' + n + ' &minus; 32) &div; 1.8 <br><br>';
    var calc2 = 'T<sub>c</sub> &equals; ' + (n - 32) + ' &div; 1.8 <br><br>';
    var calc3 = 'T<sub>c</sub> &equals; ' + resftc + '';

    document.getElementById("res_temp").innerHTML = resftc;
    document.getElementById("unit").innerHTML = " ºC";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "block";
    document.getElementById("calc2").innerHTML = calc2;
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else if (u1 === "1" && u2 === "3") { //ºF to K

    var form_ftc = 'T<sub>k</sub> &equals; (T<sub>f</sub> + 459.67) &times; (5 &div; 9)'; //K = (F + 459.67) * (5 / 9)
    var calc1 = 'T<sub>k</sub> &equals; (' + n + ' &plus; 459.67) &times; (5 &div; 9) <br><br>';
    var calc2 = 'T<sub>k</sub> &equals; ' + (n + 459.67) + ' &times; ' + (5 / 9) + '<br><br>';
    var calc3 = 'T<sub>k</sub> &equals; ' + resftk + '';

    document.getElementById("res_temp").innerHTML = resftk;
    document.getElementById("unit").innerHTML = " K";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "block";
    document.getElementById("calc2").innerHTML = calc2;
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else if (u1 === "2" && u2 === "1") { // ºC to ºF

    var form_ftc = 'T<sub>f</sub> &equals; (T<sub>c</sub> &times; 1.8) &plus; 32'; //F = (C * 1.8) + 32
    var calc1 = 'T<sub>f</sub> &equals; (' + n + ' &times; 1.8) &plus; 32 <br><br>';
    var calc2 = 'T<sub>f</sub> &equals; ' + (n * 1.8) + ' &plus; 32 <br><br>';
    var calc3 = 'T<sub>f</sub> &equals; ' + resctf + '';

    document.getElementById("res_temp").innerHTML = resctf;
    document.getElementById("unit").innerHTML = " ºF";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "block";
    document.getElementById("calc2").innerHTML = calc2;
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else if (u1 === "2" && u2 === "3") { // ºC to K

    var form_ftc = 'T<sub>k</sub> &equals; T<sub>c</sub> &plus; 273.15'; //K = C + 273.15
    var calc1 = 'T<sub>k</sub> &equals; ' + n + ' &plus; 273.15 <br><br>';
    var calc3 = 'T<sub>k</sub> &equals; ' + resctk + '';

    document.getElementById("res_temp").innerHTML = resctk;
    document.getElementById("unit").innerHTML = " K";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "none";
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else if (u1 === "3" && u2 === "1") { // K to ºF

    var form_ftc = 'T<sub>f</sub> &equals; (T<sub>k</sub> &times; (9 &div; 5)) &minus; 459.67'; //F = (K * (9 / 5)) - 459.67
    var calc1 = 'T<sub>f</sub> &equals; (' + n + ' &times; 1.8) &minus; 459.67 <br><br>';
    var calc2 = 'T<sub>f</sub> &equals; ' + (n * 1.8) + ' &minus; 459.67 <br><br>';
    var calc3 = 'T<sub>f</sub> &equals; ' + resktf + '';

    document.getElementById("res_temp").innerHTML = resktf;
    document.getElementById("unit").innerHTML = " ºF";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "block";
    document.getElementById("calc2").innerHTML = calc2;
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else if (u1 === "3" && u2 === "2") { // K to ºC

    var form_ftc = 'T<sub>c</sub> &equals; T<sub>k</sub> &minus; 273.15'; //C = K - 273.15
    var calc1 = 'T<sub>c</sub> &equals; ' + n + ' &minus; 273.15 <br><br>';
    var calc3 = 'T<sub>c</sub> &equals; ' + resktc + '';

    document.getElementById("res_temp").innerHTML = resktc;
    document.getElementById("unit").innerHTML = " ºC";
    document.getElementById("explic").style.display = "block";
    document.getElementById("formula").innerHTML = form_ftc;
    document.getElementById("calc1").innerHTML = calc1;
    document.getElementById("calc2").style.display = "none";
    document.getElementById("calc3").innerHTML = calc3;
    document.getElementById("result").style.display = "block";
    document.getElementById("result").style.visibility = "visible";
    document.getElementById("bottomnote").innerHTML = "Enjoy your results but don't forget to study !";
    return true;

  } else {
    return true;
  }
}
