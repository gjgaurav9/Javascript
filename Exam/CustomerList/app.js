
//defining a facade definition
var methods = (function() {

    var prototype = {
        //function to validate the add customer form
        validateForm: function(inputs){
            if(inputs.args.name.trim().length == 0) {
                validationMsg = "Add Customer Failed. Please enter valid name";
            } else if(inputs.args.email.trim().length == 0 || !prototype.validateEmail(inputs.args.email.trim())){
                validationMsg = "Add Customer Failed. Please enter valid email";
            } else {
                validationMsg = "";
            }
            document.getElementById("custom-validation-message").innerHTML = validationMsg;
            if(validationMsg.length == 0) {
                prototype.storeData(inputs);
                document.querySelector('.close').click();
            }
            return false;
        },
        //function to store added customer data in local storage
        storeData: function(args){

            if (typeof(Storage) !== "undefined") {
                var customerArray = new Array();

                if(localStorage.getItem("customers_list") != null){
                    var list = JSON.parse(localStorage.getItem("customers_list"));
                    customerArray = list;
                }
                args.args.uniqueId = Math.floor(Math.random() * 99) + Math.floor(Math.random() * 99);
                customerArray.push(args.args);
                localStorage.setItem("customers_list", JSON.stringify(customerArray));
                prototype.renderData();
            }
        },
        //function to render the customer list in left section
        renderData: function(inputArray){

            if(typeof(inputArray) == "undefined"){
                var customerStoredArray = JSON.parse(localStorage.getItem("customers_list"));
                if(customerStoredArray !== null) {
                    var customerCount = customerStoredArray.length;
                }
            } else {
                var customerStoredArray = inputArray;
                var customerCount = inputArray.length;
            }
            var customerBlock = '';
            if(customerCount > 0) {
                for(var i = 0;i < customerCount; i++) {
                    customerBlock += '<a href="javascript:;" onclick="getCustomerDetails('+customerStoredArray[i].uniqueId+');"><div class="customer-block">'+
                        '<div class="col-md-8">'+
                        '<h4>'+customerStoredArray[i].name+'</h4>'+
                        '<span>'+customerStoredArray[i].email+'</span>'+
                        '</div>'+
                        '<div class="col-md-4">'+
                        '<div class="customer-thumbnail">'+
                        '<img class="listing-image" src="'+customerStoredArray[i].image+'">'+
                        '</div>'+
                        '</div>'+
                        '</div></a>';
                }
                document.getElementById("customerList").innerHTML = customerBlock;
            } else  {
                document.getElementById("customerList").innerHTML = "";
            }
        },

        // function to search the customer from available list
        searchData: function(args){
            var result = [];
            var arr = JSON.parse(localStorage.getItem("customers_list"));
            for (var i in arr) {
                var regexString = '/'+args.args.keyword+'/';
                var regexString = regexString.replace("\/", "");
                var regexString = regexString.replace("\/", "");
                var regex = new RegExp(regexString, 'i');
                if (arr[i].name.match(regex)) {
                    result.push(arr[i]);
                }
            }
            document.getElementById("customerDetails").innerHTML = "";
            prototype.renderData(result);
        },
        //function  to  get Detail of customer to display 
        getDetails: function(args){
            var customerArray = JSON.parse(localStorage.getItem("customers_list"));
            for( var i = 0, len = customerArray.length; i < len; i++ ) {
                if( customerArray[i].uniqueId == args.args.uniqueId ) {
                    prototype.renderDetails(customerArray[i]);
                    break;
                }
            }
        },
        //function to render the customer details in right section
        renderDetails: function(data){
            var detailBlock = '<h2 class="title"><u>'+data.name+'</u></h2>'+
                '<span><img src="../images/icon_email.gif"> E-mail :</span>'+
                '<span>'+data.email+'</span>'+
                '<div class="detail-thumbnail">'+
                '<img class="detail-image" src="'+data.image+'">'+
                '</div>';
            document.getElementById("customerDetails").innerHTML = detailBlock;
        },
        // function to validate email
        validateEmail: function(email) {
            var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filter.test(email)) {
                // if email does not matches the valid pattern
                return false;
            }
            return true;
        },
        // //function to clear all local storage data
        // clearData: function(){
        //     localStorage.clear();
        //     location.href = "";
        // },
        //  funtion to  preview image
        previewImage: function(input) {
            if (input.args.input.files && input.args.input.files[0]) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    $('#profileImage')
                        .attr('src', e.target.result)
                        .width(135)
                        .height(130);
                    document.getElementById("profileSource").value = e.target.result;
                };
                reader.readAsDataURL(input.args.input.files[0]);
            }
        }
    };
    return {
        facade : function( args ) {
            if (args.functionCall == 'validation' ) {
                prototype.validateForm(args);
            } else if (args.functionCall == 'render' ) {
                prototype.renderData();
            } else if (args.functionCall == 'search' ) {
                prototype.searchData(args);
            } else if (args.functionCall == 'details' ) {
                prototype.getDetails(args);
            } else if (args.functionCall == 'previewImg' ) {
                prototype.previewImage(args);
            }
        }
    };
}());

methods.facade({functionCall: "render", args:{input:false}});
function addNewCustomer() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var image = document.getElementById("profileSource").value;
    methods.facade({functionCall: "validation", args:{name, email, image}});
}

function addNewCustomerButton() {
    document.getElementById("addCustomerForm").reset();
    document.getElementById("profileImage").src="";
}

function getSearchText(keyword) {
    methods.facade({functionCall: "search", args:{keyword}});
}

function getCustomerDetails(uniqueId){
    methods.facade({functionCall: "details", args:{uniqueId}});
}

// function clearAllData() {
//     if(confirm('Sure to delete all data ?')) {
//         methods.facade({functionCall: "clear", args:{}});
//     }
// }

function getFileBrowse(){
    document.getElementById("my_file").click();
}

function readURL(input) {
    methods.facade({functionCall: "previewImg", args:{input}});
}
