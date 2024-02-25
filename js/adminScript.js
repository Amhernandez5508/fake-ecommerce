const table = document.querySelector("#userTable");
const url = "https://fake-ecommerce-back.onrender.com/api/v1/users/";

const xhr = new XMLHttpRequest();
xhr.open("GET", url + "/");
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
    xhr.response.forEach(el => {
        table.children.item(1).appendChild(document.createElement("tr"));
        table.children.item(1).lastChild.innerHTML =  ` <td>${el.id}</td>
                                                        <td>${el.username}</td>
                                                        <td>${el.role}</td>`;
    });
}