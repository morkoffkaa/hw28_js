    const img = [
        "./img/1.webp",
        "./img/2.jpeg",
        "./img/3.jpeg",
        "./img/4.jpeg",
        "./img/5.jpeg",
        "./img/6.jpeg",
        "./img/7.jpeg",
        "./img/8.jpeg",
        "./img/9.jpeg",
        "./img/10.jpeg",
    ];
    const randomIndex = Math.floor(Math.random() * img.length);
    const randomImage = img[randomIndex];
    const imagePath = '' + randomImage;
    const imgElement = document.createElement('img');
    imgElement.src = imagePath;
    document.body.appendChild(imgElement);