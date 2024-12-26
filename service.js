function bookNow(serviceName) {
    var message = "Hello, I am interested in the " + serviceName + " astrology service.";
    var encodedMessage = encodeURIComponent(message);

  
    var whatsappURL = "https://wa.me/+917505929180?text=" + encodedMessage;

   
    window.open(whatsappURL, "_blank");
}