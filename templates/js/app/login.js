function login() {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if (user === "1" && password === "1") {
        location.href = "/templates/admin/admin.html";
    } else {
        alert("usuario y contraseña incorrectos");
    }
}