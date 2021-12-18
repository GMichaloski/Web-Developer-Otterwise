let livros = [
    { cod: "8568014003",
    nome: "mais esperto que o diabo",
    autor: "Napoleon Hill",
    valor: 24.6,
    quantidadeVendido: 17675,},
    {cod: "8550801488",
    nome: "pai rico, pai pobre",
    autor: "Robert T. Kiyosaki",
    valor: 42.71,
    quantidadeVendido: 8992,},
    { cod: "8547001085",
    nome: "antifragil",
    autor: "Nassim Nicholas Taleb",
    valor: 70.99,
    quantidadeVendido: 1700,},
    {cod: "8595080801",
    nome: "o investidor inteligente",
    autor: "Benjamin Graham",
    valor: 36.3,
    quantidadeVendido: 8445, },
    { cod: "8539004119",
    nome: "o poder do hábito",
    autor: "Charles Duhigg",
    valor: 48.9,
    quantidadeVendido: 14581, },
    { cod: "8543102146",
    nome: "essencialismo",
    autor: "Greg Mckeown",
    valor: 36.43,
    quantidadeVendido: 9730, },
    { cod: "9788539003839",
    nome: "rápido e devagar",
    autor: "Daniel Kahneman",
    valor: 50.93,
    quantidadeVendido: 5703, },
    { cod: "8551003429",
    nome: "princípios",
    autor: "Ray Dalio",
    valor: 89.9,
    quantidadeVendido: 3707, },
    { cod: "855717358X",
    nome: "gestão de alta performance",
    autor: "Andrew S. Grove",
    valor: 34.94,
    quantidadeVendido: 442, },
    { cod: "8550805246",
    nome: "empresas feitas para vencer",
    autor: "Jim Collins",
    valor: 44.2,
    quantidadeVendido: 824, },
    { cod: "855080455X",
    nome: "avalie o que importa",
    autor: "John Doerr",
    valor: 40.9,
    quantidadeVendido: 797, },
    ];

    /*
    ● Autor do livro mais vendido;
    ● Filtrar livros que tem um preço abaixo do valor que será inserido;
    ● Filtrar livros que tem um preço acima do valor que será inserido;
    ● Pesquisa pelo nome do livro;
    ● Pesquisa pelo autor do livro;
    ● Pesquisa pelo código do livro;
    ● Lista do Estoque;
    ● Top X livros mais vendidos (X será um valor inserido como entrada);
    ● Aumento de X % no preço dos livros (X será um valor inserido como
    entrada).
    */
    function buscarMaisVendido(array){
        let maisVendido = array[0];
        for(let i = 0; i < array.length;i++){
            if (maisVendido <= array[i].quantidadeVendido){
                maisVendido = array[i].quantidadeVendido;
            }
        }
        return maisVendido;
    }

    function buscarPrecoAbaixo(array,valor){
        let dentroDoPreço = [];
        for(let i = 0; i < array.length;i++){
            if (array[i].valor <= valor){
                dentroDoPreço.push(array[i]);
            }
        }
        return dentroDoPreço;
    }

    function buscarPrecoAcima(array,valor){
        let dentroDoPreço = [];
        for(let i = 0; i < array.length;i++){
            if (array[i].valor >= valor){
                dentroDoPreço.push(array[i]);
            }
        }
        return dentroDoPreço;
    }

    function buscarNome(array,nome){
        for(let i = 0; i < array.length;i++){
            if (array[i].nome === nome){
                return array[i];
            }
        }
        return null;
    }

    function buscarAutor(array,autor){
        let livrosDoAutor = []
        for(let i = 0; i < array.length;i++){
            if (array[i].autor === autor){
                livrosDoAutor.push(array[i]);
            }
        }
        return livrosDoAutor;
    }

    function buscarCodigo(array,codigo){
        for(let i = 0; i < array.length;i++){
            if (array[i].cod === codigo){
                return array[i];
            }
        }
        return null;
    }

    function listarEstoque(array){
        return array;
    }

    function topVendidos(array, quantidade){
        let maisVendidos = []
        for(let i = 0; i < array.length; i++){
            for (let j = 0; j < array.length;j++){
                if (array[i].quantidadeVendido > array[j].quantidadeVendido){
                    temp = array[i].quantidadeVendido;
                    array[i].quantidadeVendido = array[j].quantidadeVendido;
                    array[j].quantidadeVendido = temp;
                }
            }
        }
        for (let k = 0; k < array.length; k++){
            for (let l = 0; l < quantidade; l++){
                maisVendidos.push(array[l]);
            }
        }
        return maisVendidos;
    }

    function aumentoXPorcento(array, aumento){
        for(let i = 0; i < array.length; i++){
            array[i].valor = array[i].valor * aumento / 100;
        }
        return array;
    }

    console.log(buscarMaisVendido(livros));
    console.log(buscarPrecoAbaixo(livros,50));
    console.log(buscarPrecoAcima(livros,50));
    console.log(buscarNome(livros,"gestão de alta performance"));
    console.log(buscarAutor(livros, "Jim Collins"));
    console.log(buscarCodigo(livros, "8550805246"));
    console.log(listarEstoque(livros));
    console.log(topVendidos(livros,3));