let btn = document.getElementById('signup-btn');

btn.addEventListener('click', function( event ){

    console.log('clicked');

    let firstname = document.getElementById('yourfirstname');

    let lastname = document.getElementById('yourlastname');

    let email = document.getElementById('youremail');

    let username = document.getElementById('yourusername');

    let password = document.getElementById('yourpassword');

    let repeatpassword = document.getElementById('yourrepeatpassword');

    let phonenumber = document.getElementById('yourphonenumber');

    // let formData = new FormData( document.getElementById('signup-form') );

    let data = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        username: username.value,
        password: password.value,
        repeatpassword: repeatpassword.value,
        phonenumber: phonenumber.value
    }

    fetch('/auth/register', {
        method: 'POST',
        body: JSON.stringify( data ),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then( function(response){ 
        return response.json();
    } )
    .then( function(data){
        console.log(data);
        firstname.value = '';
        lastname.value= '';        
        email.value= '';
        username.value= '';
        password.value= '';
        repeatpassword.value= '';
        phonenumber.value= '';
    } )
    .catch( function( err ){
        console.error(err)
    } );

})