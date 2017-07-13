var request = new Request('https://www.reddit.com/r/memes.json');

fetch(request).then(function(res){
    if(res.status !== 200){
        console.log('Looks like there was a problem');
        return;
    }
res.json().then(function(success){
    
    var children = success.data.children;
    for(var i = 0; i < children.length; i++){
        var redditPosts = document.createElement('div');
        document.body.appendChild(redditPosts);
        var title = success.data.children[i].data.title;
        console.log(title);
        var titleDiv = document.createElement('h2');
        redditPosts.appendChild(titleDiv);

        var imgDiv = document.createElement('IMG');
        imgDiv.src = success.data.children[i].data.url;
        redditPosts.appendChild(imgDiv);

        var aTag = document.createElement('a');
        aTag.setAttribute('href',"single.html?url=https://www.reddit.com" + success.data.children[i].data.permalink);
        aTag.innerHTML = title;
        titleDiv.appendChild(aTag);
       
    }
  console.log(success);
    })
})

// if((/\.(gif|jpg|jpeg|tiff|png)$/i).test([0].data.children[0].data.url)){

// }
