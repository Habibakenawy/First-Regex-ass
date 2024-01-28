function validate()
{
 var u1=document.getElementById("User").value;
 console.log(u1);
 var user_regex=/^[a-z]+$/ig;
 var u2=user_regex.test(u1);
 if(u2==false)
 {
     alert('Please enter a valid username');
     
 }
 var p=document.getElementById('pass').value;
 var pass_regex=/(?=.?[A-Z])(?=.?[a-z])(?=.*?[0-9]).{8,}/g;
 var pass=pass_regex.test(p);
 if(pass==false)
 {
     alert('Please enter a valid password');
     
 }
 var phone=document.getElementById("num").value;
 console.log(phone);
 var phone_regex=/(011|012|015|010)[0-9]{8}/g;
 var p2=phone_regex.test(phone);
 if(p2==false)
 {
     alert('Please enter a valid phone number');
     
 }
 var mail=document.getElementById("email").value;
 console.log(mail);
 var email_regex=/^[A-Za-z0-9]+@[a-zA-Z]+\.{1}[a-zA-Z]{2,3}/gi;
 var e=email_regex.test(mail);
 if(e==false)
 {
     alert('Please enter a valid email');
     
 }
 if(u2==true&&pass==true&&p2==true&&e==true)
 {
     document.write(`Hello dear ${u1}, your email is ${mail} and your phone number is ${phone}.`);
 }
}
