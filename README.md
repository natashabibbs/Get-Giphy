# GIF Finder

## Objective

Use your knowledge of HTTP requests and XHR to get gifs to render onto your web page.

## Prerequisites

* Basic knowledge of HTTP requests.
* Basic understanding of API's.
* Basic understanding of JSON.
* Understanding of Event Listeners
* Understanding of Using Forms

## Setup

* Fork Repo
* Clone repo to local machine.
* Create and link index.html app.js style.css

## Your Challenge

You will be creating your own version of [GIPHY](https://giphy.com/)

Create a search bar using `HTML Form` and rendering gif from that search value. 

Make a `GET` request using XHR to the gifphy endpoint with your API key. Grab and append the respective values
requested onto the DOM.

#### HTML

- Create `div` element with id `container`
  - Create `h1` element with content "GIF Finder"
  - Create `form` element with id `form`
    - Create text input with id `text`
    - Create submit button
  - Create `div` element with id `result`
  
#### JS

1. Before implementing your search function, check if you can pull data from GIPHY API
  
    - check GIPHY documentation on how to use [Search Endpoint](https://developers.giphy.com/docs/)
    ```
    [Host][Get Path]?[q=YOUR VALUE]&[api_key=YOUR API KEY]&[limit= YOUR LIMIT AMOUNT]
    ```

    - Create a new XHR object
    ```js 
    var oReq = new XMLHttpRequest();
    ```
    - Declare a function to be used as the event listener.
    ```js
    function reqListener () {
      console.log(JSON.parse(this.responseText));
    }
    ```
    - Attach the event listener to an event
    ``` js
    oReq.addEventListener("load", reqListener);
    ```
    - Set the destination and send the request!
    ``` js
    oReq.open("GET", "http://www.example.com/api");
    oReq.send();
    ```
    - The code 
    ```js 
    function reqListener () {
      console.log(this.responseText);
    }

    var oReq = new XMLHttpRequest();
    oReq.addEventListener("load", reqListener);
    oReq.open("GET", "http://www.example.com/api");
    oReq.send();
    ```
  
2. Create `img` element 
3. Set each GIPHY image url to each `img` element `src`
4. append `img` to element with `id` container 
5. Implement the search function by concatenating input value in API Search Enpoint

#### CSS
  - Center your element with id `container` and id `result` 

## Stretch Goals

## Resources

[GIPHY](https://developers.giphy.com/docs/)

[Using XMLHttpRequest - Web APIs | MDN](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest)

[HTML DOM createElement() Method](https://www.w3schools.com/jsreaf/met_document_createelement.asp)

[HTML DOM appendChild() Method](https://www.w3schools.com/jsref/met_node_appendchild.asp)
