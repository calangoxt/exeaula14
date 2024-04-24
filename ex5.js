const readline = require('readline-sync');

function batalha() {
    let time1 = [];
    let time2 = [];
    let treinador1 = 0;
    let treinador2 = 0;

    // Coleta os Pokémon do primeiro treinador
    for (let i = 1; i <= 6; i++) {
        let pontos = 200;

        let nomeDoTreinador = readline.question("Digite o nome do treinador 1: ");
        let pokemon = readline.question(`Digite seu pokemon numero ${i}: `);
        let pokemonTipo = readline.question("Digite o tipo do seu pokemon: ");
        let ataque = Number(readline.question(`Digite o ataque de seu pokemon (você terá ${pontos} pontos para dividir entre ataque, defesa e hp): `));
        pontos -= ataque;
        let hp = Number(readline.question(`Digite a vida de seu pokemon (você ainda tem ${pontos} pontos): `));
        pontos -= hp;
        let defesa = Number(readline.question(`Digite a defesa de seu pokemon (sobraram ${pontos} pontos): `));

        let pontosSomados = ataque + hp + defesa;
        if (pontosSomados === 200) {
            time1.push({
                nome: nomeDoTreinador,
                pokemon: pokemon,
                ataque: ataque,
                hp: hp,
                defesa: defesa,
                pokemonTipo: pokemonTipo
            });
        }
    }

    // Coleta os Pokémon do segundo treinador
    for (let i = 1; i <= 6; i++) {
        let pontos = 200;

        let nomeDoTreinador2 = readline.question("Digite o nome do treinador 2: ");
        let pokemon2 = readline.question(`Digite seu pokemon numero ${i}: `);
        let pokemonTipo2 = readline.question("Digite o tipo do seu pokemon: ");
        let ataque2 = Number(readline.question(`Digite o ataque de seu pokemon (você terá ${pontos} pontos para dividir entre ataque, defesa e hp): `));
        pontos -= ataque2;
        let hp2 = Number(readline.question(`Digite a vida de seu pokemon (você ainda tem ${pontos} pontos): `));
        pontos -= hp2;
        let defesa2 = Number(readline.question(`Digite a defesa de seu pokemon (sobraram ${pontos} pontos): `));

        let pontosSomados2 = ataque2 + hp2 + defesa2;
        if (pontosSomados2 === 200) {
            time2.push({
                nome: nomeDoTreinador2,
                pokemon: pokemon2,
                ataque: ataque2,
                hp: hp2,
                defesa: defesa2,
                pokemonTipo: pokemonTipo2
            });
        }
    }

    // Batalha entre os Pokémon dos dois treinadores
    for (let i = 0; i < 6; i++) {
        let vida1 = time1[i].hp;
        let vida2 = time2[i].hp;
        let finalizar = false;

        while (!finalizar) {
            vida1 -= ((2 * 50 / 5 + 2) * 80 * time2[i].ataque / time1[i].defesa / 50 + 2);
            if (vida1 <= 0) {
                finalizar = true;
                treinador2++;
                console.log(`${time2[i].nome} ganhou!`);
            } else {
                console.log(`${time1[i].pokemon}: ${vida1.toFixed(2)}`);
            }

            vida2 -= ((2 * 50 / 5 + 2) * 80 * time1[i].ataque / time2[i].defesa / 50 + 2);
            if (vida2 <= 0) {
                finalizar = true;
                treinador1++;
                console.log(`${time1[i].nome} ganhou!`);
            } else {
                console.log(`${time2[i].pokemon}: ${vida2.toFixed(2)}`);
            }
        }
    }

    // Exibe o resultado da batalha
    if (treinador1 > treinador2) {
        console.log(`Parabéns, o treinador 1 ganhou!`);
    } else if (treinador1 < treinador2) {
        console.log(`Parabéns, o treinador 2 ganhou!`);
    } else {
        console.log(`Ficou empatado, parabéns para os dois!`);
    }
}

batalha();
