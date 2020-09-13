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

    // souseguros
    // souseguros2020

    // 9YfaeWDR83kZ4woTLWZILpB2McPwv0tj6K5gtYmygGW9sEcTfm8cERqDN7MjX2RLZWedII7W7tOa92kfsuQd3goqq0la8gUrTQ3cvziABbieBLK6CvxtoP6laTSUx4W0AB7jpZq6jVLzDt2762IYTZ4ybz54CMAtguPyRWcGmqzzjwaFHPFdLEkYjnf2pxsK-OOhTa20fDgST6tpzes9MykEDEJqkeEQjM5vBJrW4BBuHQ0tHDw1bfEomlZjBE7-XhPTLh4tH7RHjKP6IFySWbKtEmwy-ShFEts9E12z0iU86Aw_DI7-KR1MxzkOXB4V
    // const userAction = async () => {
    //     const response = await fetch('http://lifemanager.nextplus.com.br:9095/lifemanagerapihomologacao/lmapi/token', {
    //         method: 'POST',
    //         body: {
    //             username: 'souseguros',
    //             password: 'souseguros2020',
    //             grant_type: 'password'
    //         }, // string or object
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     });
    //     const myJson = await response.json(); //extract JSON from the http response
    //     // do something with myJson
    // }

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