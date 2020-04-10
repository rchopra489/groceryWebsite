
function setUp() {
    var firebaseConfig = {
        apiKey: "AIzaSyCEr1WRDFr5KcDGh0SidFebSfZjNQIM-nc",
        authDomain: "grocery-83a6c.firebaseapp.com",
        databaseURL: "https://grocery-83a6c.firebaseio.com",
        projectId: "grocery-83a6c",
        storageBucket: "grocery-83a6c.appspot.com",
        messagingSenderId: "633619697295",
        appId: "1:633619697295:web:07eb778b3a7df1790deafa"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    console.log(firebase);

    //getting data
    var database = firebase.database();
    var ref = database.ref('products');
    ref.on('value', gotData, errData);
}

function gotData(data) {
    //console.log(data.val());
    var products = data.val();
    var keys = Object.keys(products);
    console.log(keys);
    for (var i = 0; i < keys.length; i++) {
        var k = keys[i];
        var title = products[k].title;
        var image = products[k].image;
        var des = products[k].des;
        console.log(title, image, des);

        /*var para = `<p>${des}</p>`;
        var img = `<img src=${image} alt="prod-${i}" style="max-height: 100px; max-width: 100px; height: auto; width: auto;>`;   
        var description = `<h2>${title}</h2>`;
        var $topDiv = $("<div>", {id: "prod-"+i, "class": "products"});    
        var $bottomDiv = $("<div>", {class: "des"});
        $bottomDiv.append(description);
        $topDiv.append()*/
        var topDiv = document.createElement("div");
        topDiv.className = "products";
        topDiv.id = `prod-${i}`;
        $(`h1`).after(topDiv);
        $(`#prod-${i}`).append(
            [
                $("<img/>", { "src": image, "style": "max-height: 300px; max-width: 300px; height: auto; width: auto;" }),
                $("<div/>", { "class": "des" }).append(`<h2>${title}</h2>`, `<p>${des}</p>`, `<button id="btn-${i}" class="buyBtn" onclick="buy(this.id,0)">Buy</button>`),
            ]
        );
    }
}

function errData(err) {
    console.log("Error");
    console.log(err);
}

function yay() {

    $("form").remove();
    $("h3").after("<h3>Congratulations! Get first item for free</h3>");
}

function buy(clicked) {
    $(`#${clicked}`).attr("onclick","addToCart(this.id)");
    $(`#${clicked}`).text("Added to Cart");
    //$(`#${clicked}`).html(`<button id= "${clicked}" class="buyBtn" onclick="addToCart(this.id)">Added to Cart</button>`);
    console.log("1");
}

function addToCart(clicked){
    $(`#${clicked}`).attr("onclick","buy(this.id)");
    $(`#${clicked}`).text("Buy");
    //$(`#${clicked}`).html(`<button id="${clicked}" class="buyBtn" onclick="buy(this.id)">Buy</button>`);
    console.log("0");
}