function getData(){
    firebase.database().ref('/').once('value', function(snapshot){
        snapshot.forEach(function(childSnapshot){
            var childKey = childSnapshot.key;
            var childData = childSnapshot.val();
            document.getElementsByClassName("products").children[0] = childData.image;
        })
    })
}