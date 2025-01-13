Vue.component('photo-gallery', {
    template: `
        <div class="gallery">
            <h2 class="section-title">Photo Gallery</h2>
            <div class="gallery-row">
                <div class="gallery-item" v-for="(image, index) in images" :key="index">
                    <img :src="image.src" :alt="image.alt" class="img-fluid" />
                </div>
            </div>
        </div>
    `,
    data() {
        return {
            images: [
                { src: 'Images/gf1.jpg', alt: 'Image 1' },
                { src: 'Images/gf2.jpg', alt: 'Image 2' },
                { src: 'Images/gf3.jpg', alt: 'Image 3' },
                { src: 'Images/kodak1.jpg', alt: 'Image 4' },
                { src: 'Images/kodak2.jpg', alt: 'Image 5' },
                { src: 'Images/kodak3.jpg', alt: 'Image 6' },
                { src: 'Images/me1.jpg', alt: 'Image 7' },
                { src: 'Images/me2.jpg', alt: 'Image 8' },
                { src: 'Images/me3.jpg', alt: 'Image 9' },
            ]
        };
    }
});

new Vue({
    el: '#app',
});
