document.getElementById("form_pesoIdeal").addEventListener('submit', function (event){
    event.preventDefault();
    const sexop = document.getElementById('sexop').value;
    const edadp = parseInt(document.getElementById('edadp').value);
    const pesoActual = parseFloat(document.getElementById('pesoActual').value);
    const estaturap = parseFloat(document.getElementById('estaturap').value);
    
    if(isNaN(edadp) || isNaN(pesoActual) || isNaN(estaturap)){
        document.getElementById('resultados').innerHTML= '<div class="alert  alert-danger  " role="alert"><i class="bi bi-emoji-frown"></i> por favor digite todos los campos</div>';
    return;

    }
    let pesoIdeal, imcp, clasificacion, pesoAPerder;

    if (sexop === 'Masculino') {
        pesoIdeal = (estaturap - 100) - ((estaturap - 150) / 4);
    } else if (sexop === 'Femenino') {
        pesoIdeal = (estaturap - 100) - ((estaturap - 150) / 2);
    }

    imcp = pesoActual / ((estaturap/100) * (estaturap/100));

    if (imcp < 18.5) {
        clasificacion = "Bajo peso";
        pesoAPerder = pesoActual - pesoIdeal;
    } else if (imcp >= 18.5 && imcp < 25) {
        clasificacion = "Peso normal";
        pesoAPerder = 0; // No necesita perder peso
    } else if (imcp >= 25 && imcp < 30) {
        clasificacion = "Sobrepeso";
        pesoAPerder = pesoActual - pesoIdeal;
    } else if (imcp >= 30 && imcp < 35) {
        clasificacion = "Obesidad tipo I";
        pesoAPerder = pesoActual - pesoIdeal;
    } else if (imcp >= 35 && imcp < 40) {
        clasificacion = "Obesidad tipo II";
        pesoAPerder = pesoActual - pesoIdeal;
    } else if (imcp >= 40) { 
        clasificacion = "Obesidad tipo III";
        pesoAPerder = pesoActual - pesoIdeal;
    }

    // Mostrar los resultados en el contenedor
    document.getElementById('resultados').innerHTML = `<div class="alert alert-primary" role="alert">
        <p>Edad: ${edadp} años</p>
        <p>Sexo: ${sexop}</p>
        <p>Estatura: ${estaturap} cm</p>
        <p>Peso actual: ${pesoActual} kg</p>
        <p>Peso ideal: ${pesoIdeal} kg</p>
        <p>IMC: ${imcp}</p>
        <p>Clasificación: ${clasificacion}</p>
        <p>Peso a perder: ${pesoAPerder} kg</p></div>
`;
});




