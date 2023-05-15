// Menambahkan elemen baru
const birds = ["Elang", "Nuri"]

birds.push("Cendrawasih", "Jalak");

console.log(birds);

// Menambahkan array baru ke dalam array (multidimensional)

const tumbuhan = ["Jati", "Mahoni"];

tumbuhan.push(["Akasia", "Durian"]);

console.log(tumbuhan);

// Menggabungkan 2 array

const rakBuku = ["Kimia", "Fisika", "Matematika"];
const bukuBaru = ["Geografi", "Agama"];

rakBuku.push(...bukuBaru);

console.log(rakBuku);
