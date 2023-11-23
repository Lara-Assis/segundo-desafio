saldo (103,98)

function saldo(vitorias,derrotas){
    let saldoDeRankeadas = vitorias-derrotas
    let nivel=""

    if (vitorias<=10){
        nivel="Ferro"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if (vitorias>=11 && vitorias<=20){
        nivel="Bronze"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if (vitorias>=21 && vitorias <=50){
        nivel="Prata"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if(vitorias>=51 && vitorias<=80){
        nivel="Ouro"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if (vitorias>= 81 && vitorias <= 90){
        nivel="Diamente"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if (vitorias>=91 && vitorias<=100){
        nivel="Lendário"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
    else if (vitorias>=101){
        nivel="Imortal"
        console.log ("O Herói tem saldo de "+ saldoDeRankeadas+ " e está no nível "+nivel)}
 }  