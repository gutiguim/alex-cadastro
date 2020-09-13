// // var Inputmask = require('inputmask');
// $(document).ready(function(){
//     $(":input").inputmask();
//     // Inputmask().mask(document.querySelectorAll("input"));
//     alert("hi");
// });

function checkDependente() {
    var x = document.getElementById("person_type").value;
    console.log(x)
    if(x === "2") {
        document.getElementById("dependant_div").style.display = 'flex';
        var a = document.getElementById("dependant_id");
        a.required = true;
        a.setCustomValidity('Este campo não pode ficar em branco');
        a.oninput = function(e) {
            e.target.setCustomValidity('');
        }
        // oninput="setCustomValidity('')"
        // required oninvalid="this.
    } else {
        document.getElementById("dependant_div").style.display = 'none';
        document.getElementById("dependant_id").required = false;
    }
}

function validform() {

    var email = document.forms["my-form"]["email-address"].value;
    var phone = document.forms["my-form"]["phone-number"].value;

    if ((email==null || email=="") && (phone==null || phone == "" || phone == 0))
    {
        alert("Por favor, preencha email ou telefone");
        document.getElementById("email_address").focus(); 
        return false;
    }

    alert("SUCESSO!!");

    // else if (b==null || b=="")
    // {
    //     alert("Por favor, preencha o campo CPF");
    //     return false;
    // }else if (c==null || c=="")
    // {
    //     alert("Please Enter Your Username");
    //     return false;
    // }else if (d==null || d=="")
    // {
    //     alert("Please Enter Your Permanent Address");
    //     return false;
    // }else if (e==null || e=="")
    // {
    //     alert("Please Enter Your NID Number");
    //     return false;
    // }

    // Quando tem telefone Enviar ddd +55
    // Enviar invite - Sempre 0
}