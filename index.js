// // var Inputmask = require('inputmask');
$(document).ready(function(){
    // $(":input").inputmask();
    // Inputmask().mask(document.querySelectorAll("input"));
    // alert("hi");


});

function checkDependente() {
    var x = document.getElementById("person_type").value;
    if(x === "2") {
        document.getElementById("dependant_div").style.display = 'flex';
        var a = document.getElementById("cpf_dependente");
        a.required = true;
        a.setCustomValidity('Este campo não pode ficar em branco');
        a.oninput = function(e) {
            e.target.setCustomValidity('');
        }

        document.getElementById("plan_div").style.display = 'none';
        if(document.getElementById("plan")) {
            document.getElementById("plan").required = false;
        }
        // oninput="setCustomValidity('')"
        // required oninvalid="this.
    } else {
        document.getElementById("dependant_div").style.display = 'none';
        if(document.getElementById("dependant_id")) {
            document.getElementById("dependant_id").required = false;
        } 

        document.getElementById("plan_div").style.display = 'flex';
        var b = document.getElementById("plan");
        b.required = true;
        b.setCustomValidity('Este campo não pode ficar em branco');
        b.oninput = function(e) {
            e.target.setCustomValidity('');
        }
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
    var Nome = document.forms["my-form"]["nome"].value;
    var IdentificacaoBeneficiario = document.forms["my-form"]["cpfcnpj"].value;
    var IdentificacaoPessoa = document.forms["my-form"]["cpfcnpj"].value;
    var DataNascimento = document.forms["my-form"]["birthday"].value;
    var Email = document.forms["my-form"]["email"].value;
    var TelefoneCelular = document.forms["my-form"]["phone"].value;
    var CorporateId = 39;
    var CodigoContrato = document.forms["my-form"]["plan"].value;
    var TipoPessoa = document.forms["my-form"]["person_type"].value;
    var BeneficiarioTitular = document.forms["my-form"]["cpf_dependente"].value;
    var Sexo = document.forms["my-form"]["sex"].value;
    var StatusBeneficiario = 1;
    var IdentificacaoCliente = 205;
    var Produtos = 19;

    if(BeneficiarioTitular == 2) {
        CodigoContrato = 57;
    }

    var apiObject = {};

    if (Nome) apiObject["Nome"] = Nome;
    if (IdentificacaoBeneficiario) apiObject["IdentificacaoBeneficiario"] = IdentificacaoBeneficiario;
    if (IdentificacaoPessoa) apiObject["IdentificacaoPessoa"] = IdentificacaoPessoa;
    // if (DataNascimento) apiObject["DataNascimento"] = DataNascimento;
    if (DataNascimento) apiObject["DataNascimento"] = '26/05/1993';
    if (Email) apiObject["Email"] = Email;
    if (TelefoneCelular) apiObject["TelefoneCelular"] = TelefoneCelular;
    if (CorporateId) apiObject["CorporateId"] = CorporateId;
    if (CodigoContrato) apiObject["CodigoContrato"] = CodigoContrato;
    if (TipoPessoa) apiObject["TipoPessoa"] = TipoPessoa;
    if (BeneficiarioTitular) apiObject["BeneficiarioTitular"] = BeneficiarioTitular;
    if (Sexo) apiObject["Sexo"] = Sexo;
    if (StatusBeneficiario) apiObject["StatusBeneficiario"] = StatusBeneficiario;
    if (IdentificacaoCliente) apiObject["IdentificacaoCliente"] = IdentificacaoCliente;
    if (Produtos) apiObject["Produtos"] = Produtos;

    var jsonString = JSON.stringify(apiObject, undefined, 2);

    // var xhr = new XMLHttpRequest();
    // xhr.open('POST', 'http://lifemanager.nextplus.com.br:9095/lifemanagerapihomologacao/lmapi/cadastro', true);
    // xhr.setRequestHeader('Authorization', 'Bearer ' + 'kdJlLqx7AwPSrR8nOA91F_LwrhN0YUt13v_Cf5JYanjV_KBIpf7Vg5fNVUA_e2sX6GDQigORElcE4PUL3s2IR8uUchVuN6dN30Kjo6Yi-PFuC4ZTk_1HGqPqLJtJXizIVucuSMoR-i5mZkhgSn1Vei8foJgB011qdVfIJK8Nk1Qq1iUESi6w8kwoa-p75Y4kmaiCniWp1DherHPizbXDICx4fh0xdpLVeoaSNhrtWfuf9qcImbBy-8WV55D_w9Jy5-08JAaclcH0D_K5ZYnMd2pnRzbaIqKYub9-iyZshO0VMizN68-DAq2lKLGfC3rS');
    // xhr.send(JSON.stringify({
    //     apiObject
    // }));

    // $.ajaxSetup({
    //     headers: {
    //         'Content-Type': 'text/plain',
    //         'Authorization': 'Bearer kdJlLqx7AwPSrR8nOA91F_LwrhN0YUt13v_Cf5JYanjV_KBIpf7Vg5fNVUA_e2sX6GDQigORElcE4PUL3s2IR8uUchVuN6dN30Kjo6Yi-PFuC4ZTk_1HGqPqLJtJXizIVucuSMoR-i5mZkhgSn1Vei8foJgB011qdVfIJK8Nk1Qq1iUESi6w8kwoa-p75Y4kmaiCniWp1DherHPizbXDICx4fh0xdpLVeoaSNhrtWfuf9qcImbBy-8WV55D_w9Jy5-08JAaclcH0D_K5ZYnMd2pnRzbaIqKYub9-iyZshO0VMizN68-DAq2lKLGfC3rS'
    //     }
    // });

    var details = {
        'username': 'souseguros',
        'password': 'souseguros2020',
        'grant_type': 'password'
    };
    var formBody = [];
    for (var property in details) {
    var encodedKey = encodeURIComponent(property);
    var encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('http://lifemanager.nextplus.com.br:9095/lifemanagerapihomologacao/lmapi/token', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: formBody
    })

    // $.post("http://lifemanager.nextplus.com.br:9095/lifemanagerapihomologacao/lmapi/cadastro", JSON.stringify(
    //     apiObject
    // ) );

    // $.ajax({
    //     url: 'http://lifemanager.nextplus.com.br:9095/lifemanagerapihomologacao/lmapi/cadastro',
    //     headers: {
    //         'Authorization': 'Bearer kdJlLqx7AwPSrR8nOA91F_LwrhN0YUt13v_Cf5JYanjV_KBIpf7Vg5fNVUA_e2sX6GDQigORElcE4PUL3s2IR8uUchVuN6dN30Kjo6Yi-PFuC4ZTk_1HGqPqLJtJXizIVucuSMoR-i5mZkhgSn1Vei8foJgB011qdVfIJK8Nk1Qq1iUESi6w8kwoa-p75Y4kmaiCniWp1DherHPizbXDICx4fh0xdpLVeoaSNhrtWfuf9qcImbBy-8WV55D_w9Jy5-08JAaclcH0D_K5ZYnMd2pnRzbaIqKYub9-iyZshO0VMizN68-DAq2lKLGfC3rS', 
    //     },
    //     method: 'POST',
    //     data: JSON.stringify(
    //         apiObject
    //     ),
    //     success: function(data){
    //         console.log('succes: '+data);
    //     }
    // })

    // // Create a root reference
    // var ref = firebase.storage();
    // var storageRef = ref.ref();

    // storageRef.child(Nome + '').putString(jsonString, firebase.storage.StringFormat.RAW).then(function(snapshot) {
    //     console.log('Uploaded string');
    // }).catch(function(error) {
    //     console.log(error);
    // });

    return false;
}
