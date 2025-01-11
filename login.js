

$(window).on('beforeunload', function() {
    console.log("reloaded");
});

const togglePasswordVisibility = () => {
    const type = $('#i2').prop('type');
    const newType = type === 'password' ? 'text' : 'password';
    const imgSrc = newType  == 'password' ? '<i id="img" class="fa-solid fa-eye" onclick="togglePasswordVisibility()"></i>' : '<i class="fa-regular fa-eye"></i>';
    $('#i2').prop('type', newType);
    $('.pass img').prop('src',imgSrc);
};




function submitForm() {
    const name = btoa($('#i1').val());
    const pass = btoa($('#i2').val());
    if(name == ""){
        $('#t2').html("Empty Username");
        return 0;
    }else if(pass == ""){
        $('#t2').html("Empty Password");
        return 0;
    }


    let formData = new FormData();
    formData.append('name',name);
    formData.append('pass',pass);
    localStorage.setItem('key',name+pass);

<<<<<<< Updated upstream
    fetch("./../login.php", {
=======
    fetch("./login.php", {
>>>>>>> Stashed changes
        method: 'POST',
        body: formData
    })
    .then(res => res.text())
    // .then(res=> console.log(res))
    .then(res =>{
        if(name == ""){
        $('#t2').html("Empty Username");
    }else if(pass == ""){
        $('#t2').html("Empty Password");
    }
        if(res == "success"){
<<<<<<< Updated upstream
            window.location.href = "index.html";
=======
            window.location.href = "electro.html";
>>>>>>> Stashed changes
        }else{
            $('#t2').html("Incorrect Credentials");
        }
    });
    // xml.send(formData);

}

    // localStorage.setItem('key', name+pass);
    // // localStorage.setItem('pass', pass);
     
    //     if(name === "QW1pYW5z"){
    //         if(pass === "Nzg2Nzg2"){
    //             window.location.href = "index.html";
    //         }else{
    //             $('#t2').html("Invalid Password");
    //         }
    //     }else if(pass === "Nzg2Nzg2"){
    //             $('#t2').html("Invalid Username");
    //     }else{
    //         $('#t2').html("Incorrect Credentials");
            
    //     }

    //     }
    // }
        // if (name === "QW1pYW5z" && pass === "Nzg2Nzg2") {
    //     window.location.href = "index.html";
    // } else {
    //     $('#t2').html("Invalid Credentials");
    // }


$(this).on('keydown', (e) => {
    if (e.which === 13) {
        submitForm();
    }
});


function forget(){
    alert("please contact Thadomal Shahani Engineering College or your respective batch faculty ")
};