function computeTime(m, P, c, L, tm, ti) {
    return (m/P)*(c*(tm - ti) + L);
}

function handleCompute() {
    let m = parseFloat(document.getElementById("mass").value);
    let p = parseFloat(document.getElementById("power").value);
    let ti = parseFloat(document.getElementById("initialTemp").value);
    let c = parseFloat(document.getElementById("specificHeat").value);
    let L = parseFloat(document.getElementById("latentHeat").value);
    let tm = parseFloat(document.getElementById("meltingTemp").value);

    let time = computeTime(m, p, c, L, tm, ti);

    document.getElementById("meltingTime").value = time.toFixed(2);
}