function hitungRataRataDanGrade(
    nilaiWeb: number, 
    nilaiKomputer: number, 
    nilaiStatistika: number, 
    nilaiBasisData: number
): void {
hitungRataRataDanGrade adalah nama fungsi.
Fungsi ini memiliki empat parameter bertipe number:

nilaiWeb: nilai mata pelajaran Web
nilaiKomputer: nilai mata pelajaran Komputer
nilaiStatistika: nilai mata pelajaran Statistika
nilaiBasisData: nilai mata pelajaran Basis Data

Tipe pengembalian void menunjukkan bahwa fungsi ini tidak mengembalikan nilai; sebaliknya, ia hanya mencetak hasil ke konsol.

if (nilaiWeb == null || nilaiKomputer == null || nilaiStatistika == null || nilaiBasisData == null) {
    console.log("Semua nilai harus diisi dan tidak boleh null!");
    return;
}
Memeriksa apakah salah satu dari nilai-nilai tersebut adalah null. Jika ada nilai yang null, maka fungsi mencetak pesan kesalahan dan menghentikan eksekusi dengan return.

if (
    nilaiWeb < 0 || nilaiWeb > 100 || 
    nilaiKomputer < 0 || nilaiKomputer > 100 || 
    nilaiStatistika < 0 || nilaiStatistika > 100 || 
    nilaiBasisData < 0 || nilaiBasisData > 100
) {
    console.log("Semua nilai harus berada dalam rentang 0 - 100!");
    return;
}
Memeriksa apakah nilai-nilai tersebut berada dalam rentang yang valid (0 hingga 100). Jika ada nilai yang tidak sesuai dengan rentang ini, fungsi mencetak pesan kesalahan dan menghentikan eksekusi dengan return.

let rataRata = (nilaiWeb + nilaiKomputer + nilaiStatistika + nilaiBasisData) / 4;
Menghitung rata-rata dari empat nilai dengan menjumlahkan semua nilai dan membaginya dengan 4 (jumlah mata pelajaran).
rataRata adalah variabel bertipe number yang menyimpan hasil rata-rata.

let grade: string;
if (rataRata >= 90) {
    grade = 'A';
} else if (rataRata >= 80) {
    grade = 'B';
} else if (rataRata >= 70) {
    grade = 'C';
} else if (rataRata >= 60) {
    grade = 'D';
} else {
    grade = 'E';
}
Menentukan grade berdasarkan nilai rataRata:
Jika rataRata >= 90, grade adalah 'A'.
Jika rataRata >= 80 tetapi < 90, grade adalah 'B'.
Jika rataRata >= 70 tetapi < 80, grade adalah 'C'.
Jika rataRata >= 60 tetapi < 70, grade adalah 'D'.
Jika rataRata < 60, grade adalah 'E'.

console.log(`Rata-rata: ${rataRata.toFixed(2)}`);
console.log(`Grade: ${grade}`);
Mencetak rata-rata dengan dua angka di belakang koma menggunakan toFixed(2).
Mencetak grade yang telah ditentukan.

hitungRataRataDanGrade(50, 40, 78, 62);
Memanggil fungsi hitungRataRataDanGrade dengan empat nilai: 50, 40, 78, dan 62.
Fungsi ini akan menghitung rata-rata dari nilai-nilai tersebut, menentukan grade, dan mencetak hasilnya ke konsol.