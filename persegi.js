const PersegiForm = document.getElementById("PersegiForm");
const panjang = document.getElementById("panjang");
const lebar = document.getElementById("lebar");
const tampil = document.getElementById("tampilContainer");

const hasilPersegi = JSON.parse(localStorage.getItem("persegi")) || [];

const addPersegi = (panjang, lebar, hasil) => {
    hasilPersegi.push({
        panjang,
        lebar,
        hasil
    });

    localStorage.setItem("persegi", JSON.stringify(hasilPersegi));

    return {panjang, lebar, hasil};
}

const buatPersegi = ({panjang, lebar, hasil}) => { 
    
    const divPersegi = document.createElement("div");
    const Panjang = document.createElement("p");
    const Lebar = document.createElement("p");
    const Hasil = document.createElement("h2");
    // const hr = document.createElement("hr")

    Panjang.innerHTML = "panjang : " + panjang;
    Lebar.innerHTML = "lebar : " + lebar;
    Hasil.innerHTML = "Luas Persegi : " + hasil;

    // divPersegi.append( Hasil,);
    divPersegi.append(Panjang, Lebar, Hasil);
    tampil.appendChild(divPersegi);
    

};

hasilPersegi.forEach(buatPersegi);

PersegiForm.onsubmit = e => {
    e.preventDefault();

    const Ppanjang = panjang.value;
    const Llebar = lebar.value;
    const Luas = (Ppanjang*Llebar);

    const PersegiBaru = addPersegi(
        Ppanjang,
        Llebar,
        Luas
    );

    buatPersegi(PersegiBaru);

    panjang.value = "";
    lebar.value = "";

};