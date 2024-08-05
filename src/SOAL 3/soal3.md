function cetakSegitigaSikuSiku(tinggi: number)
cetakSegitigaSikuSiku adalah nama fungsi
tinggi: number adalah parameter fungsi yang bertipe number, menentukan berapa banyak baris yang akan dicetak

for (let i = 1; i <= tinggi; i++)
Loop for ini digunakan untuk iterasi dari 1 hingga tinggi. Variabel i menunjukkan nomor baris saat ini, mulai dari 1 hingga tinggi

let spasi = ' '.repeat(tinggi - i);
spasi adalah string yang berisi spasi. Fungsi repeat(n) membuat string dengan n karakter spasi
tinggi - i menghitung jumlah spasi yang dibutuhkan untuk setiap baris. Semakin banyak baris, semakin sedikit spasi yang diperlukan

let bintang = '*'.repeat(i);
bintang adalah string yang berisi karakter bintang (*). Fungsi repeat(i) membuat string dengan i karakter bintang
Pada setiap iterasi, jumlah bintang yang dicetak bertambah seiring dengan meningkatnya nilai i

console.log(spasi + bintang);
console.log mencetak gabungan spasi dan bintang ke konsol
Ini mencetak baris dengan jumlah spasi yang sesuai diikuti oleh jumlah bintang yang sesuai

cetakSegitigaSikuSiku(10);
Memanggil fungsi cetakSegitigaSikuSiku dengan argumen 10
Fungsi ini akan mencetak segitiga siku-siku dengan tinggi 10 baris ke konsol

