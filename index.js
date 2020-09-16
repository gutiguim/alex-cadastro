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
    // sheets - 1W18Lmkx3-wefHhSm9jzW862YqZhVcVU4zK0odYFKUaQ
    // API - AIzaSyBluE3w55phlLWICYSZNrsZDn1PJgo3_nw
    // client ID - 193022482281-pdgrl2i1ru6td457e6ii2emebtkl8jqi.apps.googleusercontent.com
    // Client secret - wS3l18qYwactgZt9CX3hzdYQ

    gapi.load('client:auth2', this.initClient);

    const params = {
        spreadsheetId: '1W18Lmkx3-wefHhSm9jzW862YqZhVcVU4zK0odYFKUaQ',
        range: 'Sheet1',
        valueInputOption: 'RAW',
        inserDataOption: 'INSERT_ROWS',
    };
    
    const valueRangeBody = {
        'majorDimension': 'ROWS',
        'values': [submissionValues]
    };

    let request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then(function (response) {

        console.log(response.result);
    }, function (reason) {
        console.error ('error : ' + reason.result.error.message);
    });
}

// function makeApiCall() {
//     var params = {
//       // The ID of the spreadsheet to update.
//       spreadsheetId: '1W18Lmkx3-wefHhSm9jzW862YqZhVcVU4zK0odYFKUaQ',  // TODO: Update placeholder value.

//       // The A1 notation of a range to search for a logical table of data.
//       // Values will be appended after the last row of the table.
//       range: 'Sheet1',  // TODO: Update placeholder value.

//       // How the input data should be interpreted.
//       valueInputOption: 'RAW',  // TODO: Update placeholder value.

//       // How the input data should be inserted.
//       insertDataOption: 'INSERT_ROWS',  // TODO: Update placeholder value.
//     };

//     var valueRangeBody = {
//         'majorDimension': 'ROWS',
//         'values': [submissionValues]
//     };

//     var request = gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
//     request.then(function(response) {
//       // TODO: Change code below to process the `response` object:
//       console.log(response.result);
//     }, function(reason) {
//       console.error('error: ' + reason.result.error.message);
//     });
// }


// function initClient() {
//     var CLIENT_ID = ' 193022482281-pdgrl2i1ru6td457e6ii2emebtkl8jqi.apps.googleusercontent.com';
//     var API_KEY = 'AIzaSyBluE3w55phlLWICYSZNrsZDn1PJgo3_nw';
//     var SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

//     gapi.client.init({
//       'apiKey': API_KEY,
//       'clientId': CLIENT_ID,
//       'scope': SCOPE,
//       'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//     }).then(function() {
//       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus);
//       updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
//     });
// }

// function handleClientLoad() {
//     gapi.load('client:auth2', initClient);
// }

// function updateSignInStatus(isSignedIn) {
//     if (isSignedIn) {
//     makeApiCall();
//     }
// }

// function handleSignInClick(event) {
//     gapi.auth2.getAuthInstance().signIn();
// }

// function handleSignOutClick(event) {
//     gapi.auth2.getAuthInstance().signOut();
// }

