document.addEventListener("DOMContentLoaded", (event) => {

    setTimeout(() => {
        document.querySelector("#load-iframe-map").innerHTML = `
            <iframe class="contact__iframe" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2782.965139556918!2d-9.136915632983388!3d38.70811244878448!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19347a30a54b63%3A0x30532f5f6b28e044!2sPlaza%20del%20Comercio!5e0!3m2!1ses!2spt!4v1689447972134!5m2!1ses!2spt"></iframe>
        `;
    }, 500);

});