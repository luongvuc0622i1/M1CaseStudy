// lấy phần Modal
var modal = document.getElementById('myModal');
// Lấy phần button mở Modal
var btn = document.getElementById("myBtn");

// Lấy phần span đóng Modal
var span = document.getElementsByClassName("close")[0];

// Khi button được click thi mở Modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Khi span được click thì đóng Modal
span.onclick = function() {
    modal.style.display = "none";
}

// Khi click ngoài Modal thì đóng Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//Kiểm tra đăng nhập:
function login(){
    let username=document.getElementById("enter").value;
    let password=document.getElementById("enter2").value;
    if(username=="admin" && password=="admin"){
        alert("Bạn là admin của trang");
    }else{
        alert("Kiểm tra lại!");
        // return;
    }
};


window.open("cachtaobang.html");