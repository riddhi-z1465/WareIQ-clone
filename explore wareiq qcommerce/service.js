 document.addEventListener("DOMContentLoaded", function () {
    const text = "Accelerate Your Quick <br> Commerce Sales with <br> WareIQ Fulfillment";
    const typingTarget = document.querySelector('.typing-text');
    let index = 0;

    function type() {
      if (index < text.length) {
        // Check if next part is a <br> tag
        if (text.slice(index, index + 4) === "<br>") {
          typingTarget.innerHTML += "<br>";
          index += 4;
        } else {
          typingTarget.innerHTML += text.charAt(index);
          index++;
        }
        setTimeout(type, 50);
      }
    }

    type();
  });





 