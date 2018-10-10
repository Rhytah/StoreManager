//show signup when button is clicked            
function show(id) {
    var e = document.getElementById(id);
    if(e.style.display == 'none')
    e.style.display = 'block';
    else
    e.style.display = 'none';
    }
//hide login
function hide(id) {
    var d = document.getElementById(id);
    if(d.style.display == 'block')
    d.style.display ='none';
    else
    d.style.display='block';
  }

  //signup message 
function singupAlert(){
    alert("Sign up successful");
}