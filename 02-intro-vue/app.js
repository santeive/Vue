const { createApp, ref } = Vue;

const app  = createApp({
    template: `
    <h1>{{author}}</h1>
    <p>{{message}}</p>
    `,

    setup() {
        const author = ref("I'm Batman")
        const message = ref("Soy Bruce Wayne")

        setTimeout(() => {
            author.value = "I'm Goku";
            message.value = "Soy Vegeta";
        }, 1000);

        return {
            author,
            message
        }
    }
});

app.mount('#myApp')