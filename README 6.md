# JSON & REST - Reddit Lab
Today you'll be making HTTP requests using plain JavaScript or jQuery (your choice).

## Structure
Create your git repo.

Inside your folder you'll have index.html, styles.css, script.js, single.html, single.js, list.html, and list.js.

## Objectives
1. Make an HTTP GET request to a subreddit of your choice, keep it R-rated or under.
2. Your index.html must have a heading that lets the user know what subreddit you will be hitting and a button that takes you to the list page.
3. Once on the list page you will make the GET request and print the data out to the page in a visually appealing way.
4. A user should be able to click on the title of each post and this takes them to the single.html page.
5. Once on the single page you will grab that single post from reddit and display it on the page.
6. Make it look good and give it functionality that you believe makes sense.

### Things you will need to know to do this lab
1. How to make HTTP requests
2. How to append a query string to an href
3. How to read a query string from an href
4. How to use multiple html/js pages
5. How to parse JSON data you recieve back from the reddit server

#### NOTE
DO NOT put your HTTP request in a loop (the only time you may want to use a loop is once you recieve the data back), we do not want reddit being hit thousands of times in quick succession.
