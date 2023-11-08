


let visible = false;
        let interval;

        function efectoEscritura(elemento, texto, velocidad, callback) {
            let i = 0;
            function efectoTypeo() {
                if (i < texto.length) {
                    elemento.textContent += texto[i];
                    i++;
                    interval = setTimeout(efectoTypeo, velocidad);
                } else {
                    if (callback) callback();
                }
            }
            efectoTypeo();
        }

        function efectoRetroceso(elemento, texto, velocidad, callback) {
            let i = texto.length - 1;
            function retrocesoTypeo() {
                if (i >= 0) {
                    elemento.textContent = elemento.textContent.slice(0, -1);
                    i--;
                    interval = setTimeout(retrocesoTypeo, velocidad);
                } else {
                    if (callback) callback();
                }
            }
            retrocesoTypeo();
        }

        const elemento = document.querySelector('.parrafo-oculto');
        const texto = "Este octubre, noviembre y diciembre, Moto Rama te brinda una oportunidad única para adquirir la moto de tus sueños a precios excepcionales. Nuestra concesionaria ofrece una amplia gama de opciones, desde scooters urbanos hasta potentes motocicletas deportivas y motos de aventura. Durante estos tres meses, aprovecha descuentos especiales, atractivas opciones de financiamiento y promociones exclusivas en todos nuestros modelos. ¡Visita Moto Rama y vive la emoción de la carretera con estilo a precios inigualables!"
        const velocidad = 40;

        const divGrande = document.querySelector('.contenedor-oculto');
        divGrande.textContent = '';

        function toggleMostrar() {
            if (visible) {
                clearTimeout(interval);
                visible = false;
                efectoRetroceso(divGrande, divGrande.textContent, velocidad, function() {
                    divGrande.style.display = 'none';
                });
            } else {
                divGrande.style.display = 'block';
                efectoEscritura(divGrande, texto, velocidad);
            }
            visible = !visible;
        }

        const btn = document.querySelector('#btn-Div');
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleMostrar();
        });