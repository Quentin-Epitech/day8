new Vue({
    el: '#bouge',
    data() {
        return {
            imgStyle: {
                position: 'absolute',
                top: '50%',  
                left: '50%'}};},
    methods: {
        modifie(event) {
            const img = this.$el.querySelector('img');
            const largeur = img.offsetWidth;
            const hauteur = img.offsetHeight;
            let X2 = Math.random() * (window.innerWidth - largeur);
            let Y2 = Math.random() * (window.innerHeight - hauteur);
            const o = 50; 
            if (event.clientX < X2 + largeur + o && event.clientX + o > X2) {
                X2 += largeur + o;}
            if (event.clientY < Y2 + hauteur + o && event.clientY + o > Y2) {
                Y2 += hauteur + o;}
            this.imgStyle.left = X2 + 'px';
            this.imgStyle.top = Y2 + 'px';}}});
