document.getElementById("searchInput").addEventListener("keyup", function(event){
    let searchQuery = event.target.value.toLowerCase();
    let allNamesDOMCollection = document.getElementsByClassName("name");
        
    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        let currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none"
        }
    }
})

