// // var Inputmask = require('inputmask');
$(document).ready(function(){
    // $(":input").inputmask();
    // Inputmask().mask(document.querySelectorAll("input"));
    // alert("hi");


});

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

    var email = document.forms["my-form"]["email"].value;
    var phone = document.forms["my-form"]["phone-number"].value;

    if ((email==null || email=="") && (phone==null || phone == "" || phone == 0))
    {
        alert("Por favor, preencha email ou telefone");
        document.getElementById("email_address").focus(); 
        return false;
    }

    var Nome = document.forms["my-form"]["nome"].value;
    var IdentificacaoBeneficiario = document.forms["my-form"]["cpfcnpj"].value;
    var IdentificacaoPessoa = document.forms["my-form"]["cpfcnpj"].value;
    var DataNascimento = document.forms["my-form"]["birthday"].value;
    var Email = document.forms["my-form"]["email"].value;
    var TelefoneCelular = document.forms["my-form"]["phone"].value;
    var CorporateId = 39;
    var CodigoContrato = document.forms["my-form"]["plan"].value;
    var TipoPessoa = document.forms["my-form"]["person_type"].value;
    var BeneficiarioTitular = document.forms["my-form"]["person_type"].value;
    var Sexo = document.forms["my-form"]["sex"].value;
    var StatusBeneficiario = 1;
    var IdentificacaoCliente = 205;
    var Produtos = 19;

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

function sendData() {
    console.log("ENTROU AQUI")

    var Nome = document.forms["my-form"]["nome"].value;
    var IdentificacaoBeneficiario = document.forms["my-form"]["cpfcnpj"].value;
    var IdentificacaoPessoa = document.forms["my-form"]["cpfcnpj"].value;
    var DataNascimento = document.forms["my-form"]["birthday"].value;
    var Email = document.forms["my-form"]["email"].value;
    var TelefoneCelular = document.forms["my-form"]["phone"].value;
    var CorporateId = 39;
    var CodigoContrato = document.forms["my-form"]["plan"].value;
    var TipoPessoa = document.forms["my-form"]["person_type"].value;
    var BeneficiarioTitular = document.forms["my-form"]["person_type"].value;
    var Sexo = document.forms["my-form"]["sex"].value;
    var StatusBeneficiario = 1;
    var IdentificacaoCliente = 205;
    var Produtos = 19;

    console.log("ENTROU AQUI 2");

    var apiObject = {
        Nome,
        IdentificacaoBeneficiario,
        IdentificacaoPessoa,
        DataNascimento,
        Email,
        TelefoneCelular,
        CorporateId,
        CodigoContrato,
        TipoPessoa,
        BeneficiarioTitular,
        Sexo,
        StatusBeneficiario,
        IdentificacaoCliente,
        Produtos,
    }

    console.log("ENTROU AQUI 3")

    var apiObject = {
        guti: 'guti',
        deu: 'sim'
    }

    var jsonString = JSON.stringify(apiObject, undefined, 2);
    var link = document.createElement('a');
    link.download = 'data.json';
    var blob = new Blob([jsonString], {type: 'text/plain'});

    console.log("ENTROU AQUI 4")

    // var file = new File([mblob], "filename")
    var file = new File([blob], Nome + "_" + Date.now(), {type: 'text/plain', lastModified: Date.now()});
   
    // Create a root reference
    var storageRef = firebase.storage().ref();
    storageRef.put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    });

    return false;
}
