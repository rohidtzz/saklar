function saklar(){

 let saklar1 = document.getElementById("saklar1");
 let saklar2 = document.getElementById("saklar2");
 let saklar3 = document.getElementById("saklar3");
 
 let lampu1  = document.getElementById("lampu1");
 let lampu2  = document.getElementById("lampu2");
 let lampu3  = document.getElementById("lampu3");

    if(saklar1.checked){    

        lampu1.src = "on.jpg";

    } else{
        lampu1.src = "off.jpg";
    }

    if(saklar2.checked){    

        lampu2.src = "on.jpg";

    } else{
        lampu2.src = "off.jpg";
    }

    if(saklar3.checked){    

        lampu3.src = "on.jpg";

    } else{
        lampu3.src = "off.jpg";
    }

}