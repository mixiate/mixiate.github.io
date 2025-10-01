function displayName(event) {
    var name = document.createElement("span");
    name.appendChild(document.createTextNode(event.currentTarget.title));
    document.getElementById("names").appendChild(name);
}
function removeName(event) {
    document.getElementById("names").innerHTML = "";
}

var elements = document.getElementsByClassName("preview");
for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", displayName);
    elements[i].addEventListener("mouseout", removeName );
}
