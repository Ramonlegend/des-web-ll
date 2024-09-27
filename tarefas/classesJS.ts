class Pessoa {
  nome: string;
  idade: number;
  email: string;

  constructor(nome: string, idade: number, email: string) {
    this.nome = nome;
    this.idade = idade;
    this.email = email;
  }
  Apresentar() {
    return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e meu email é ${this.email}.`;
  }
}

const pessoa1 = new Pessoa("João", 30, "joao@gmail.com");
console.log(pessoa1.Apresentar());

