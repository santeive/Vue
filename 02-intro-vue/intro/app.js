const { createApp, ref } = Vue;

const app  = createApp({

    setup() {
        const author = ref("I'm Batman")
        const message = ref("Soy Bruce Wayne")

        const changeQuote = () => {
            author.value = "Hola, soy Goku"
            message.value = "Pacman"
        }

        // Exportamos
        return {
            //variables
            author,
            message,
            
            // Funciones
            changeQuote
        }
    }
});

app.mount('#myApp')