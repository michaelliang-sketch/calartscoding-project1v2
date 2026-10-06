document.addEventListener('DOMContentLoaded', function() {

    // Menu
    var menuTrigger = document.querySelector('.js-menu-trigger');

    if (menuTrigger) {
        menuTrigger.addEventListener('click', function() {
            document.body.classList.toggle('show-menu');
        });
    }


    // Random card colors
    const colors = [
        "#FFD6E7", // pastel pink
        "#D8F3DC", // pastel green
        "#D6E8FF", // pastel blue
        "#FFF1C1", // pastel yellow
        "#E4D7FF", // pastel purple
        "#FFE0C2"  // pastel peach
    ];

    const borderColors = [
        "#FF69B4",
        "#7B68EE",
        "#00BFFF",
        "#32CD32",
        "#FF8C00",
        "#FF1493"
    ];

    const headerColors = [
        "#FF69B4",
        "#7B68EE",
        "#00BFFF",
        "#32CD32",
        "#FF8C00",
        "#FF1493"
    ];

    const photos = document.querySelectorAll(".photo");

    photos.forEach(function(photo) {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        photo.style.backgroundColor = randomColor;

        const randomBorderColor = borderColors[Math.floor(Math.random() * borderColors.length)];
        photo.style.borderColor = randomBorderColor;
    });


    // Random header letter colors
    const letters = document.querySelectorAll(".photos_header span");

    letters.forEach(function(letter) {
        const randomColor = headerColors[Math.floor(Math.random() * headerColors.length)];
        letter.style.color = randomColor;
    });

});