
$(function(){
  $('#registr').click(function(){
    $('#reg').slideToggle('slow');
  })
});
        
function addData()
{
const email=document.getElementById("email").value;
const name=document.getElementById("name").value;
const password=document.getElementById("password").value;

let data=new Array();
data=JSON.parse(localStorage.getItem("users"))?JSON.parse(localStorage.getItem("users")):[]
if(data.some((v)=>{return v.email==email}))
{
  alert("This data has already been used");
}
else
{
  data.push({ "email":email, "name":name, "password":password })
localStorage.setItem("users",JSON.stringify(data));
}

}