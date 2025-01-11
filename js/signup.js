function submitForm() {
    $('#bt1').on('click', () => {
        const contact = $('#i1').val();
        var len = contact.length;
        if(contact == ""){
            $('#txt').html("Empty contact");
        console.log("nooo");            
        }else if (len < 10 || len > 11){
            $('#txt').html("Invalid Contact");
        } else {
            $('#txt').html("yess"); 
        }

        var fullname = $('#i3').val();
        var name = $('#i4').val();
        var pass = $('#i2').val();
        var pass2 = $('#i5').val();
        if(pass !== pass2){
          $('#txt').html("Passwords doesn'nt match");
        }else{
            $('#txt').html("");
        }
    });
    
}

$(document).ready(() => {
    submitForm();
});
