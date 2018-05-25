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

 document.getElementById("send_button").onclick = submit;



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

        // localStorage.setItem('sname', document.getElementById("name").value);
        // console.log(sname);

        console.log(document.getElementById("address").value);
        console.log(document.getElementById("name").value);

        var name= document.getElementById("name").value;

        if (name == "") {
            document.getElementById('namevalidation').innerHTML ="Please enter the name";
        }else{
            document.getElementById("officename").value = name;
        }

        document.getElementById("officeaddress").value = document.getElementById("address").value;
        

        var zip = document.getElementById("zipcode").value;
        console.log(zip);

        var zipregx = "^[1-9][0-9]{5}$";  

        if(zip.match(zipregx))  {
            document.getElementById("officezip").value = zip
        }else{
            document.getElementById('zipvalidation').innerHTML ="Zip code should be a number";
        }

        var phone = document.getElementById("phone").value;
        var phonenoregx = /^\d{10}$/;

        if(phone.match(phonenoregx))  {
            document.getElementById("officephone").value = phone;
        }else{
            document.getElementById('phonevalidation').innerHTML ="Invalid phone number.";
        }

        var email = document.getElementById("email").value;

        if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))  {
            document.getElementById("officeemail").value = email;
        }else{
            document.getElementById('emailvalidation').innerHTML ="Invalid email id";
        }
        
        document.getElementById("officepassword").value = document.getElementById("password").value;
        document.getElementById("officevpassword").value = document.getElementById("confirmPassword").value;
        document.getElementById("officered").checked = document.getElementById("red").checked;
        document.getElementById("officegreen").checked = document.getElementById("green").checked;
        document.getElementById("officeblue").checked = document.getElementById("blue").checked;
        document.getElementById("officemale").checked = document.getElementById("male").checked;
        document.getElementById("officefemale").checked = document.getElementById("female").checked;

        var country= document.getElementById("country").value;

        if (country == "") {
            document.getElementById('countryvalidation').innerHTML ="Please enter the country";
        }else{
            document.getElementById("officecountry").value = country;
        }
    }
