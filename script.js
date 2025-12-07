document.addEventListener('DOMContentLoaded', function() {
    fetch('image-manifest.json')
        .then(response => response.json())
        .then(data => {
            const heroImages = data.hero;
            const avatarImages = data.avatar;

            if (heroImages && heroImages.length > 0) {
                const randomHeroImage = heroImages[Math.floor(Math.random() * heroImages.length)];
                document.getElementById('hero-image').src = randomHeroImage;
            }

            if (avatarImages && avatarImages.length > 0) {
                const randomAvatarImage = avatarImages[Math.floor(Math.random() * avatarImages.length)];
                document.getElementById('avatar-image').src = randomAvatarImage;
            }
        })
        .catch(error => console.error('Error fetching image manifest:', error));
});
