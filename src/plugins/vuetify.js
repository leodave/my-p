import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#FFD700', // Gold from his original theme
                secondary: '#262b37',
                accent: '#f2c640',
                background: '#121212',
            },
        },
    },
});
