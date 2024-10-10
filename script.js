const username = document.getElementById("username")
const inputUsername = document.getElementById("inputUsername")
const inputImage = document.getElementById("inputImage")
const image = document.getElementById("profile")
function setUsername(){
    username.textContent = inputUsername.value
    inputUsername.value = ""
}
function setImage(){
    image.style.backgroundImage = "url(" + inputImage.value + ")"
}
function addName(){
    const e = document.createElement("p")
    e.textContent = "sasdsad"
    document.getElementById("create").appendChild(e)
}
function saveCSV() {
    const csvContent = phonenumber.map(row => row.join(",")).join("\n"); // Convert array to CSV string
        const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
        const link = document.createElement("a");
        const url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", "data.csv");
        link.style.visibility = "hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
}