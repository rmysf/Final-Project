"use strict";
function hitungRataRataDanGrade(nilaiWeb, nilaiKomputer, nilaiStatistika, nilaiBasisData) {
    // Validasi bahwa semua nilai harus diisi dan bukan null
    if (nilaiWeb == null || nilaiKomputer == null || nilaiStatistika == null || nilaiBasisData == null) {
        console.log("Semua nilai harus diisi dan tidak boleh null!");
        return;
    }
    // Validasi bahwa semua nilai harus dalam rentang 0 - 100
    if (nilaiWeb < 0 || nilaiWeb > 100 ||
        nilaiKomputer < 0 || nilaiKomputer > 100 ||
        nilaiStatistika < 0 || nilaiStatistika > 100 ||
        nilaiBasisData < 0 || nilaiBasisData > 100) {
        console.log("Semua nilai harus berada dalam rentang 0 - 100!");
        return;
    }
    // Menghitung rata-rata
    let rataRata = (nilaiWeb + nilaiKomputer + nilaiStatistika + nilaiBasisData) / 4;
    // Menentukan grade
    let grade;
    if (rataRata >= 90) {
        grade = 'A';
    }
    else if (rataRata >= 80) {
        grade = 'B';
    }
    else if (rataRata >= 70) {
        grade = 'C';
    }
    else if (rataRata >= 60) {
        grade = 'D';
    }
    else {
        grade = 'E';
    }
    // Menampilkan hasil
    console.log(`Rata-rata: ${rataRata.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}
hitungRataRataDanGrade(50, 40, 78, 62);
