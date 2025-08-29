const user = {
    name: "Sarah Williams" ,
    age: 27,
    bio: "Front-end developer and cat lover. Enjoys hiking and coffee" ,
    image: "MV5BZWZkNjM0NTEtNjJlYy00Y2Y1LTk5MjgtNzhiMjAyZjkxODBjXkEyXkFqcGc@._V1_.jpg"
};

// Use JavaScript to update HTML with object values
document.getElementById("user-name").textContent = user.name;
document.getElementById("user-age").textContent = "Age: " + user.age;
document.getElementById("user-bio").textContent = user.bio;
document.getElementById("user-image").src = user.image;
