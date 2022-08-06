// 1. Apa itu synchronous?
// 2. Apa itu asynchronous?
// 3. Dapatkah kita menerapkan konsep asynchronous pada browser?
// 4. Apa hasil yang akan tercetak pada baris kode dibawah?
// 5. Apabila terdapat ketidak samaan antara console.log pertama dan kedua, bisakah kalian memberikan penjelasan mengapa hal tersebut bisa terjadi
// 6. Perbaiki baris kode dibawah sehingga ia akan menampilkan angka yang sama
for (var i = 1; i <= 5; i++) {
	console.log("first log: ", i); // 01 - Pertama
	setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}

// jawaban
// 1. Synchronous adalah sebuah operasi akan dijalankan setelah operasi sebelumnya selesai dijalankan alias berurutan.
// 2. Asynchronous adalah proses jalannya program bisa dilakukan secara bersamaan tanpa harus menunggu proses antrian.
// 3. Bisa
// 4. first log:  1
//    first log:  2
//    first log:  3
//    first log:  4
//    first log:  5
//    second log:  6
//    second log:  6
//    second log:  6
//    second log:  6
//    second log:  6
// 5. Karena var itu hoisted sehingga variable i akan di eksekusi di atas perulangan for,
//    dan fungsi setTimeout akan berjalan setelah loop melakukan perulangan terakhir(tiap pengulangan for di jadikan tugas utama sehingga setTimeout di eksekusi terakhir)
//    dimana pada saat perulangan terakhir var i sudah bernilai 5 atau telah memenuhi persyaratan untuk berhenti
//    looping, sehingga saat setTimeout di mulai dia akan memunculkan nilai
//    var i tadi yang ter hoist(var i akan terdeklarasi di atas for loop).
// 6. Kita dapat memperbaiki dengan cara mengganti var menjadi let(karena let block-scope jadi variable i dapat mempunyai nilai nya masing masing sesuai perintah yang di jalankan)
for (let i = 1; i <= 5; i++) {
	console.log("first log: ", i); // 01 - Pertama
	setTimeout(() => console.log("second log: ", i), 100); // 02 - Kedua
}
// ada hal yang bisa kita notice dari sini yaitu hasil dari setTimeout tidak men delay tiap i yang di cetak di dalam nya karena waktu men delay nya sama.
// Jika kita ingin agar tiap i yang di cetak hasil dari setTimeout memiliki delay satu dengan lain nya, kita bisa mengkalikan waktu timeout nya dengan variable i
for (var i = 1; i <= 5; i++) {
	console.log("first log: ", i); // 01 - Pertama
	setTimeout(() => console.log("second log: ", i), i * 100); // 02 - Kedua
}
// dengan begini setiap setTimeout memiliki waktu timeout nya tersendiri
