"use strict";
// let nama: string ;
// nama = "aliando";
// var umurSaya: number|string = 12+" tahun"
const productIntel = (vgaz) => {
    return `terimakasi anda tealah melakukan transaksi berupa ${vgaz.names} dengan model ${vgaz.model} dengan rincian :
speed ${vgaz.speed}
virtaul memory ${vgaz.size}
booster ${vgaz.booster}
`;
};
const productAmd = (vgaz) => {
    return `terimakasi anda tealah melakukan transaksi berupa ${vgaz.names} dengan model ${vgaz.model} dengan rincian :
speed ${vgaz.speed}
virtaul memory ${vgaz.size}

`;
};
const coreI = {
    names: "rtx",
    model: "4080",
    speed: 2000 + "mhz",
    size: 16 + " gb",
    booster: true
};
let results = productIntel(coreI);
console.log(results);
const rayzen = {
    names: "rtx",
    model: "4080",
    speed: 2000 + "mhz",
    size: 16 + " gb",
};
let resultes = productAmd(rayzen);
console.log(resultes);
