// First, write an asynchronous function that fetches the products data from the dummyJSON api. Note that within this asynchronous function, it may be good to check out how the data is being returned to you from dummyJSON. Is the data the actual array of objects you want? Or is the data formatted in a nested format, and you need to "take the data out of its box"?

async function fetchProducts (){
    try{
        let response= await fetch ('https://dummyjson.com/products');
        console.log(response);
        let translatedData= await response.json();
        let productData= translatedData.products

        return productData;

    } catch (error){
        console.error(error);
    }
}

// Next, write another asynchronous function that accepts one parameter, an array of objects (each object representing an individual product). This function should append a new element (of your choice) for each object in the products array into the #products-container element.
// Within this function, be sure that each new element you're creating to represent each individual product reflects relevant data from the actual fetched data. Some key-value pairs you could render onto the DOM could be title, description, and price, to name a few. Feel free to render more if you so choose though.

async function renderData (){
    let productsContainer= document.getElementById ("products-container")
    let myProducts= await fetchProducts ();

    for (let i=0; i< myProducts.length; i++){
        let myCurrProduct= myProducts [i];
        let newProductElement= document.createElement ("p");

        newProductElement.innerText= myCurrProduct.title;
        newProductElement.style.color= "white";
        newProductElement.style.border= "3px solid #95B46A";
        newProductElement.style.fontFamily= "Arial";
        productsContainer.appendChild(newProductElement);
    }
}

renderData();

// Now we'll have you do the exact same as step 4, except this time for the posts data from dummyJSON. Note that instead of rendering the data inside of the #products-container element, you should render the posts data inside of the #posts-container element. The steps you'll take to accomplish this will be almost identical to step 4, except in this situation, you should at least render each post's title and body values.

async function fetchPosts (){
    try{
        let response= await fetch ('https://dummyjson.com/posts');
        console.log(response);
        let translatedData= await response.json();
        let postData= translatedData.posts

        return postData;

    } catch (error){
        console.error(error);
    }
}

async function renderPosts (){
    let postsContainer= document.getElementById ("posts-container");
    let myPosts= await fetchPosts ();

    for (let i=0; i< myPosts.length; i++) {
        let myCurrPosts= myPosts [i];
        let newPostElement= document.createElement ("p");

        newPostElement.innerText= myCurrPosts.title;
        newPostElement.style.color= "blue";
        newPostElement.style.border= "1px solid red";
        newPostElement.backgroundColor= "black";
        postsContainer.appendChild(newPostElement);
    }
}

renderPosts();