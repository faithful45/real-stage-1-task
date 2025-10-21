const First_name = document.getElementById("first_name");
const last_name = document.getElementById("last_name");
const email_address = document.getElementById("email_address");
const contact_form = document.getElementById("contact_form");
const Subject = document.getElementById("Subject");
const message = document.getElementById("message");

contact_form.addEventListener("submit", function(e){
      e.preventDefault();
      
})
function Sumbitform(){
      let allvalid = true;
      
      const pattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
    First_name.value.trim() ==''? (document.getElementById("first_name_alert_message").style.display = 'block',
      allvalid = false,First_name.classList.add('border')):
      (document.getElementById("first_name_alert_message").style.display = 'none',First_name.classList.remove('border'));
       
      
      
      last_name.value.trim() ==''? (document.getElementById("last_name_alert_message").style.display = 'block',
      allvalid = false,last_name.classList.add('border')):
      (document.getElementById("last_name_alert_message").style.display = 'none',last_name.classList.remove('border'));
      
      if(email_address.value.trim() == ''){
            document.getElementById("email_alert_message").style.display = 'block';
            email_address.classList.add('border');
            allvalid = false
      }
      else{
            
            document.getElementById("email_alert_message").style.display = 'none';
            pattern.test(email_address.value)? (document.getElementById("invalid_email_message").style.display = 'none',email_address.classList.remove('border')):
            (document.getElementById("invalid_email_message").style.display = 'block',
            allvalid = false);

      }
      Subject.value.trim() ==''? (document.getElementById("Subject_alert_message").style.display = 'block', allvalid = false, Subject.classList.add('border')):
      (document.getElementById("Subject_alert_message").style.display = 'none', Subject.classList.remove('border'));


      message.value.trim() ==''? (document.getElementById("message_alert_message").style.display = 'block', allvalid = false,  message.classList.add('border')): 
      (document.getElementById("message_alert_message").style.display = 'none',message.classList.remove('border'));
      

      if(allvalid){
            contact_form.style.display = 'none';
            document.getElementById("success_message").style.display = 'block';
            document.getElementById("header").style.display = 'none'
            
      }

}