var search = location.search.substring(1).split('=')[1] + '.json';
// var query = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g,'":"') + '"}');
// console.log(query.url); 
console.log(search);

var request = new Request(search);



fetch(request).then(function(res){
    if(res.status !== 200){
        console.log('Looks like there was a problem');
        return;
    }
res.json().then(function(success){
    var children = success[0].data.children;
    // for(var i = 0; i < children.length; i++){
    var redditPosts = document.createElement('div');
    document.body.appendChild(redditPosts);
    console.log(success[0]);
    var title = success[0].data.children[0].data.title;
    console.log(title);
    var titleDiv = document.createElement('h3');
    titleDiv.innerHTML = title;
    redditPosts.appendChild(titleDiv);
    var imgDiv = document.createElement('IMG');
    imgDiv.src = success[0].data.children[0].data.url;
    redditPosts.appendChild(imgDiv);

    var aTag = document.createElement('a');
    titleDiv.appendChild(aTag); 
    // }
    })
});


