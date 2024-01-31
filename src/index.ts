// let nama: string ;
// nama = "aliando";
// var umurSaya: number|string = 12+" tahun"

// console.log({nama});
// console.log({umurSaya});

// let noms: [string,number,string] = ['nama',12,'dandang']
// console.log({noms});


// //? object

// type Saya = {
//     nama: string,
//     umur: number,
//     healty: boolean,
//     money?: number,
// }
// let saia: Saya;

// saia = {
//     nama:"sach",
//     umur:12,
//     healty:true,
//     money:1200000
// }
// console.log({ saia });

// // ? function

// const cru = (x:number,y:number) => {
//     return `${x} di tambah ${y} = ${x+y}`
// }

// const result = cru(20,10);

// console.log(result);

// // void function

// function cruz(x:number, y:number): void{
//      console.log(`${x} di tambah ${y} sama dengan = ${x+y}`);
// }

// cruz(20,12);

// // ? interface

// interface Vga {
//     names:string,
//     model:string,
//     speed:number|string,
//     size:number|string,
// }

// const product = (vgaz:Vga) => {
// return `terimakasi anda tealah melakukan transaksi berupa ${vgaz.names} dengan model ${vgaz.model} dengan rincian :
// speed ${vgaz.speed}
// virtaul memory ${vgaz.size}
// `
// }

// const Nvdia = {
//     names: "rtx",
//     model: "4080",
//     speed: 2000+"mhz",
//     size:16+" gb"

// }
// let results = product(Nvdia);

// console.log(results);


// ? interface multiple type || extend

interface Vga {
    names:string,
    model:string,
    speed:number|string,
    size:number|string,
}

interface intel extends Vga {
    booster:boolean;
}
interface amd extends Vga {
    clockSpeed?:boolean;
}

const productIntel = (vgaz:intel) => {
return `terimakasi anda tealah melakukan transaksi berupa ${vgaz.names} dengan model ${vgaz.model} dengan rincian :
speed ${vgaz.speed}
virtaul memory ${vgaz.size}
booster ${vgaz.booster}
`
}
const productAmd = (vgaz:amd) => {
return `terimakasi anda tealah melakukan transaksi berupa ${vgaz.names} dengan model ${vgaz.model} dengan rincian :
speed ${vgaz.speed}
virtaul memory ${vgaz.size}
`
}

const coreI = {
    names: "rtx",
    model: "4080",
    speed: 2000+"mhz",
    size:16+" gb",
    booster:true
}
let results = productIntel(coreI);
console.log(results);

const rayzen = {
    names: "rayzem",
    model: "4080",
    speed: 3000+"mhz",
    size:16+" gb",
}
let resultes = productAmd(rayzen);
console.log(resultes);