function sendtowhatsapp(){

    let number = "+917505929180";

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let city = document.getElementById("city").value;
    // let puja = document.getElementById("puja").value;
    let message = document.getElementById("message").value;

    var url="https://wa.me/" + number + "?text="
    +"Name : " +name+ "%0a"
    +"Email : " +email+ "%0a"
    +"City : " + city+ "%0a"
    // +"Puja :" +puja+ "%0a"
    +"Message :"+message+ "%0a"

    window.open(url,'_blank').focus()
    
}
