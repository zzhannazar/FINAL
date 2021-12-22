   var name=localStorage.getItem('name')?localStorage.getItem('name'):''
        console.log(name);
        if(name!='')
        {
          alert('Go to the admin page');
          window.location.href="admin.html";
        }
function addData()
{
let email;
let password;

email=document.getElementById("email").value;
password=document.getElementById("password").value;

let data=new Array();
data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(data.some((v)=>{return v.email==email && v.password==password}))
{
  alert("Login Pass");
  let current_user=data.filter((v)=>{return v.email==email && v.password==password})[0]
 localStorage.setItem('name',current_user.name);
 localStorage.setItem('email',current_user.email);
  window.location.href="admin.html"
}
else
{
  alert('Login Fail');
}

}