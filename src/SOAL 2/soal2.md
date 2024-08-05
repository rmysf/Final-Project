let lirik_lagu:
Objek lirik_lagu berisi informasi mengenai lagu termasuk status, nama artis, judul lagu, lirik lengkap lagu, dan array dari setiap baris lirik

 let updatedData = {
    ...lirik_lagu.data,
    artist: "Rama",
    songTitle: "Kapal Lawd"
  };
updatedData adalah objek baru yang dibuat dengan menyebarkan (...) properti dari lirik_lagu.data dan kemudian memperbarui nilai artist menjadi "Rama" dan songTitle menjadi "Kapal Lawd".

Operator spread (...) digunakan untuk menyalin properti dari objek lama ke objek baru dan kemudian memperbarui beberapa propertinya.

let songLyricsLine = lirik_lagu.data.songLyricsArr.find(line => line.includes("For me to take what's mine, until the end of time?"));
console.log(songLyricsLine);
songLyricsLine mencari baris dalam array songLyricsArr yang berisi string "For me to take what's mine, until the end of time?".
Metode find digunakan untuk menemukan elemen pertama dalam array yang memenuhi kondisi yang ditentukan oleh fungsi callback. Dalam hal ini, fungsi callback adalah line => line.includes(...), yang memeriksa apakah setiap baris lirik (line) mengandung substring tertentu.
console.log(songLyricsLine); mencetak baris lirik yang ditemukan ke konsol