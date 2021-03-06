$(function() {
    operationsListenersReg();
});

function addUser(info) {
    $.ajax({
        url: `https://city-route.herokuapp.com/api/users`,
        type: 'POST',
        data: info,
        success: function(user) {
            localStorage.setItem("user_id", user.id);
            localStorage.setItem("user_type", info.type_of_user);
            $(location).attr('href',"./trips.html");
        }
    });
}


function operationsListenersReg(){
    var val = [];
    $("#submitRegister").click(function(event){
        event.preventDefault();
        $(':checkbox:checked').each(function(i){
            val[i] = $(this).val();
        });
        
        const info = {
            full_name: $("#examplefullName").val(),
            type_of_user: $("#exampleFormControlSelect1").val(),
            about_me: $("#exampleFormControlTextarea1").val(),
            languages: val,
            email: $("#exampleInputEmail1").val(),
            phone: $("#examplePhone").val(),
        }
        addUser(info);
    });
};

       

