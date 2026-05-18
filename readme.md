# Penjelasan Program

### Program penampilkan nama sesuai urutan waktu dengan penerapan konsep Promise

#### Catatan ini ditulis untuk menjalaskan proses dari penerapan Promise menggunakan chaining then-catch dan juga async-await pada kasus menampilkan nama antrian.

Program dimulai dari pen-dekralasian sebuah function bernama handleQueue() yang menerima 2 parameter yaitu waktu tunggu dan nama, didalamnya terdapat function beranama queue yang memiliki program error handling menggunakan switch case dimana tipe dari parameter waktu tunggu harus valid dan program selanjutnya merupkan built-in function timer yaitu setTimeOut() dimana akan melakukan program mengembalikan nama lewat parameter resolve() dan program akan dijalankan setelah waktu tunggunya selesai. 

Setelah semua progam selesai dijalankan, function queue() dikembalikan lewat new Promise() yang nantinya akan diproses saat pemanggilan handleQueue() menggunakan then-catch maupun async-await.