function Login(username,email,password){
    this.username=username;
    this.email=email;
    this.password=password;
}

var users=[];
var userIndex = "";


$(document).ready(function(){
    
    //EXERCICI 1
    
    $('#login').css('display', 'none');
    $('#main').css('display', 'none');
    $('#link_logoff').css('display', 'none');

    $("#link_register").click(function(event){
        $('#login').fadeOut();
        $('#register').fadeIn();
    });

    $("#link_login").click(function(event){
        $('#register').fadeOut();
        $('#login').fadeIn();
    });
    
    //*-----------------------------------------*\\
    
    $("#submit_register").click(function(event){
                
        var username=$("#username").val();
        var email=$("#email").val();
        var password=$("#password").val();
        var password2=$("#password2").val();
        
       
        //EXERCICI 2
    
    
    
    
    
    
    
    
    
        //*-----------------------------------------*\\   
             
        var validacio = document.register.checkValidity();
        
        if(validacio){ 
            
            event.preventDefault();
            
            var newUser = new Login(username,email,password);
            
            users.push(newUser);
            
            alert("successful register");

            //EXERCICI 3A






            //*-----------------------------------------*\\   

        }
        
    });

    $("#submit_login").click(function(event){
        
        $("#username_login")[0].setCustomValidity("");
        $("#password_login")[0].setCustomValidity("");
        
        var username=$("#username_login").val();
        var password=$("#password_login").val();
        
        var registeredUser = false;
        
        if(username!=="" && password!==""){
            for(var i=0;i<users.length;i++){
                if(username===users[i].username){
                    registeredUser = true;  
                    userIndex = i;
                }
            }
            
            if(registeredUser){
                if(users[userIndex].password !== password){
                    $("#password_login")[0].setCustomValidity("incorrect password");
                }
            }else{
                $("#username_login")[0].setCustomValidity("unregistered user");
            }
        }   
        
        var validacio = document.login.checkValidity();
        
        if(validacio){ 
            event.preventDefault();
            $("#username_main").html(users[userIndex].username);
            alert("successful login");
            
            //EXERCICI 3B






            //*-----------------------------------------*\\   
        }
        
    });


    $("#link_logoff").click(function(){
        alert("goodbye !!!");
 
        //EXERCICI 3C






        //*-----------------------------------------*\\   
    
    });

});