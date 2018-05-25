function showDate() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('date').innerHTML =
        h + ":" + m + ":" + s;
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }
     // add zero in front of numbers < 10
    return i;
}

function clear() {
    document.getElementById('name').reset();
    document.getElementById('address').innerText = "";
    document.getElementById('zip').innerText = "";
    document.getElementById('country').innerText = "";
    document.getElementById('male').innerText = "";
    document.getElementById('female').innerText = "";
    document.getElementById('red').innerText = "";
    document.getElementById('green').innerText = "";
    document.getElementById('blue').innerText = "";
    document.getElementById('phone').innerText = "";
    document.getElementById('email').innerText = "";
    document.getElementById('password').innerText = "";
    document.getElementById('vpassword').innerText = "";
}

function submit() {
    if(verify() === 0) {

        document.getElementById("name_warning").innerHTML = "";
        document.getElementById("address_warning").innerHTML = "";
        document.getElementById("zip_warning").innerHTML = "";
        document.getElementById("country_warning").innerHTML = "";
        document.getElementById("gender_warning").innerHTML = "";
        document.getElementById("preference_warning").innerHTML = "";
        document.getElementById("phone_warning").innerHTML = "";
        document.getElementById("email_warning").innerHTML = "";
        document.getElementById("password_warning").innerHTML = "";
        document.getElementById("verify_warning").innerHTML = "";

        document.getElementById("officename").value = document.getElementById("name").value;
        document.getElementById("officeaddress").value = document.getElementById("address").value;
        document.getElementById("officezip").value = document.getElementById("zip").value;
        document.getElementById("officephone").value = document.getElementById("phone").value;
        document.getElementById("officeemail").value = document.getElementById("email").value;
        document.getElementById("officepassword").value = document.getElementById("password").value;
        document.getElementById("officevpassword").value = document.getElementById("vpassword").value;
        document.getElementById("officered").checked = document.getElementById("red").checked;
        document.getElementById("officegreen").checked = document.getElementById("green").checked;
        document.getElementById("officeblue").checked = document.getElementById("blue").checked;
        document.getElementById("officemale").checked = document.getElementById("malegender").checked;
        document.getElementById("officefemale").checked = document.getElementById("femalegender").checked;
        document.getElementById("officecountry").value = document.getElementById("country").value
    }
}

function verify() {
    let count = 0;
    if (document.getElementById('name').value === "") {
        document.getElementById("name_warning").innerHTML = "Please enter your name";
        count = 1;
    }
    if (document.getElementById('address').value === "") {
        document.getElementById("address_warning").innerHTML = "Please enter your address";
        count = 1;
    }
    if (document.getElementById('zip').value === "") {
        document.getElementById("zip_warning").innerHTML = "Please enter your zip";
        count = 1;
    }
    if (document.getElementById('country').value === "select") {
        document.getElementById("country_warning").innerHTML = "Please select your country";
        count = 1;
    }
    if (!document.getElementById('male').checked && !document.getElementById('female').checked) {
        document.getElementById("gender_warning").innerHTML = "Please select your gender";
        count = 1;
    }
    if (!document.getElementById('red').checked && !document.getElementById('green').checked && !document.getElementById('blue').checked) {
        document.getElementById("preference_warning").innerHTML = "Please choose your preference";
        count = 1;
    }
    if (document.getElementById('phone').value === "") {
        document.getElementById("phone_warning").innerHTML = "Please enter your phone number";
        count = 1;
    }
    if (document.getElementById('email').value === "") {
        document.getElementById("email_warning").innerHTML = "Please enter your email";
        count = 1;
    }
    if (document.getElementById('password').value === "") {
        document.getElementById("password_warning").innerHTML = "Please enter your password";
        count = 1;
    }
    if (document.getElementById('vpassword').value === "") {
        document.getElementById("verify_warning").innerHTML = "Please enter your password again";
        count = 1;
    }
    return count;
}