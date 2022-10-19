function success() {
        alert("Form submitted succesfully, we'll reply as soon as possible!");
}

function uSure() {
        if(confirm("Are you sure you want to erase your progress?")) {
                alert("Do as you please!");
        } else {}
}

function hideCards() {
        $("#cards").toggle(750);
}