function sendEmail(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let message = document.getElementById("message").value;

  let body = "NAME: " + name + "<br/> EMAIL: " + email + "<br/> PHONE No: " + phone + "<br/> MESSAGE: " + message;
  
    Email.send({
      SecureToken :"ea5c47f6-1e8b-4754-bc10-8f66cb607895",
        To : "trillionmagnetlogs@gmail.com",
        From : "trillionmagnetlogs@gmail.com",
        ReplyFrom : document.getElementById("email").value,
        Subject : "Contact Form",
        Body : body
    }).then(
      message => alert(message)
    );
}