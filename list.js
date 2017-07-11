var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
            myObj = JSON.parse(this.responseText);
            document.getElementById("reddit-posts").innerHTML = myObj;
        }

}

    xhttp.open("GET", "https://www.reddit.com/r/NPR/.json", true);
    xhttp.send('');