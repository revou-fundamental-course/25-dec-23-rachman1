// Fungsi untuk menghitung luas segitiga
function hitungLuas() {
    const tinggi = parseFloat(document.getElementById('input-tinggi-alas-luas').value);
    const alas = parseFloat(document.getElementById('input-alas-luas').value);
    
    const luas = 0.5 * alas * tinggi;
    
    alert(`Luas segitiga adalah: ${luas}`);
}

// Fungsi untuk menghitung keliling segitiga
function hitungKeliling() {
    const sisi1 = parseFloat(document.getElementById('input-sisi1-keliling').value);
    const sisi2 = parseFloat(document.getElementById('input-sisi2-keliling').value);
    const sisi3 = parseFloat(document.getElementById('input-sisi3-keliling').value);
    
    const keliling = sisi1 + sisi2 + sisi3;
    
    alert(`Keliling segitiga adalah: ${keliling}`);
}

// Fungsi untuk menampilkan hasil luas
function tampilkanHasilLuas(hasil) {
    document.getElementById('hasil-luas').innerText = `Luas segitiga adalah: ${hasil}`;
}

// Fungsi untuk menampilkan hasil keliling
function tampilkanHasilKeliling(hasil) {
    document.getElementById('hasil-keliling').innerText = `Keliling segitiga adalah: ${hasil}`;
}

// Fungsi untuk mereset nilai input luas segitiga
function risetLuas() {
    document.getElementById('input-tinggi-alas-luas').value = '';
    document.getElementById('input-alas-luas').value = '';
}

// Fungsi untuk mereset nilai input keliling segitiga
function risetKeliling() {
    document.getElementById('input-sisi1-keliling').value = '';
    document.getElementById('input-sisi2-keliling').value = '';
    document.getElementById('input-sisi3-keliling').value = '';
}
