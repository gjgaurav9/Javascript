function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
    h + ":" + m +" "+ month+"/"+date+"/"+year;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("Name must be filled out");
        return false;
    }
}



function submit() {
   
        var name = 'John Doe';
        console.log(name);
        // document.getElementById("name_warning").innerHTML = "";
        // document.getElementById("address_warning").innerHTML = "";
        // document.getElementById("zip_warning").innerHTML = "";
        // document.getElementById("country_warning").innerHTML = "";
        // document.getElementById("gender_warning").innerHTML = "";
        // document.getElementById("preference_warning").innerHTML = "";
        // document.getElementById("phone_warning").innerHTML = "";
        // document.getElementById("email_warning").innerHTML = "";
        // document.getElementById("password_warning").innerHTML = "";
        // document.getElementById("verify_warning").innerHTML = "";

        localStorage.setItem('sname', document.getElementById("name").value);
        console.log(sname);

        document.getElementById("officename").value = document.getElementById("name").value;
        document.getElementById("officeaddress").value = document.getElementById("address").value;
        document.getElementById("officezip").value = document.getElementById("zipcode").value;
        document.getElementById("officephone").value = document.getElementById("phone").value;
        document.getElementById("officeemail").value = document.getElementById("email").value;
        document.getElementById("officepassword").value = document.getElementById("password").value;
        document.getElementById("officevpassword").value = document.getElementById("confirmPassword").value;
        document.getElementById("officered").checked = document.getElementById("red").checked;
        document.getElementById("officegreen").checked = document.getElementById("green").checked;
        document.getElementById("officeblue").checked = document.getElementById("blue").checked;
        document.getElementById("officemale").checked = document.getElementById("male").checked;
        document.getElementById("officefemale").checked = document.getElementById("female").checked;
        document.getElementById("officecountry").value = document.getElementById("country").value
    }
