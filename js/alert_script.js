function submitForm(){

//$.ajaxSubmit({
//    type: "post",
//    url: "https://ey2cfmkmak.execute-api.eu-central-1.amazonaws.com/sendEmail",
//    data: "name=" + 'Sasha' + "&email=" + 'example@ry.er' + "&message=" + 'message',
//    success : function(text){
//        if (text == "success"){
//            formSuccess();
//        }
//    }
//});
    formSuccess();
}

function formSuccess(){
    $('#successAlert').toggleClass('hidden');
}

$("#contactForm").submit(function(event){
    event.preventDefault();
    submitForm();
});
