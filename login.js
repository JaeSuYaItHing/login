var id = 'id';
var password = 'password';
function login(){
  if(document.querySelector('#id').value === id && document.querySelector('#password').value === password){
alert('로그인에 성공하셨습니다');  
}else{
  alert('틀림 ㅅㄱ');
  window.location.reload();
}
}