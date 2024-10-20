const gatos = [
    { url: 'enlace_del_gato1.jpg', emocion: 'feliz' },
    { url: 'enlace_del_gato2.jpg', emocion: 'triste' },
    { url: 'enlace_del_gato3.jpg', emocion: 'enojado' },
    { url: 'enlace_del_gato4.jpg', emocion: 'asustado' },
    { url: 'enlace_del_gato5.jpg', emocion: 'sorprendido' }
];

function abrirRegalo() {
    const regalo = document.getElementById('regalo');
    regalo.style.transform = 'rotate(10deg)';
    
    const gatoAleatorio = gatos[Math.floor(Math.random() * gatos.length)];
    
    document.getElementById('gato').innerHTML = `<img src="${gatoAleatorio.url}" alt="Gato ${gatoAleatorio.emocion}">`;
    document.getElementById('mensaje').innerText = `El gato está ${gatoAleatorio.emocion}`;
}
