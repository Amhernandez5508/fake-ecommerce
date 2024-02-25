const form = document.querySelector("form");
const allInputs = document.querySelectorAll("form div input");

/*
    1_ Tomar datos del form
    2_ Agregar escucha de click al submit y prevenir el default
    3_ Conectar a API y guardar datos
    4_ Validar el acceso
*/

let sendedUser, sendedPassword;
const url = "https://fake-ecommerce-back.onrender.com/api/v1/users/";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    allInputs.forEach(dataInput => {
        if (dataInput.id === "user") {
            sendedUser = dataInput.value;

        } else if (dataInput.id === "password"){
            sendedPassword = dataInput.value;
        }
    });

    const xhr = new XMLHttpRequest();
    xhr.open("GET", url + "/")
    xhr.responseType = "json";
    xhr.send();

    xhr.onload = function() {
        xhr.response.forEach(el => {
            if (el.username === sendedUser && el.password === sendedPassword) {
                console.log(el.role)
                location.href = `./pages/${el.role}.html`;
            }
        });
    };
});
