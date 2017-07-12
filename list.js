var redditPosts = document.querySelector('#reddit-posts');
var request = new Request('https://www.reddit.com/r/memes.json');

fetch(request).then(function(res){
    if(res.status !== 200){
        console.log('Looks like there was a problem');
        return;
    }
res.json().then(function(success){

    var children = success.data.children;
    for(var i = 0; i < children.length; i++){
        var i = children.indexOf();
        if(i != -1) {
	        children.splice(i, 1);
        }
        var title = success.data.children[i].data.title;
        title= title.replace(new RegExp('cum', 'g'), 'applesauce');
        console.log(title);
        var titleDiv = document.createElement('div');
        redditPosts.appendChild(titleDiv);
        titleDiv.innerHTML = title;

        var imgDiv = document.createElement('IMG');
        imgDiv.src = success.data.children[i].data.url;
        redditPosts.appendChild(imgDiv);
        imgDiv.style.height = '200px';
    }
})
})
