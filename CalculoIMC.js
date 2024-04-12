class Pessoa {
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    calcularIMC() {
        return this.peso / (this.altura * this.altura);
    }

    RetornarFaixa(){
        const imc = this.calcularIMC()
        let resultado
        if(imc < 16){
             resultado = 'magreza grave'
        }else if(imc > 16 && imc < 16.9){
             resultado = 'magreza moderada'
        }else if (imc > 17 && imc < 18.5){
             resultado = 'magreza leve'
           
        }else if (imc > 18.5 && imc < 24.9){
             resultado = 'peso ideal'

        }else if (imc > 25 && imc < 29.9){
             resultado = 'sobrepeso'
        }else{
             resultado = 'obesidade grau 1'
        }
        return resultado
    }
}

const vinicius = new Pessoa('Vinicius', 64, 1.66);
const Keyla = new Pessoa('Keyla',49,1.55);
console.log(vinicius);
console.log("IMC de Vinicius:", vinicius.calcularIMC());
console.log("Faixa de IMC é:", vinicius.RetornarFaixa());


console.log(Keyla);
console.log("IMC de Keyla:", Keyla.calcularIMC());
console.log("Faixa de IMC é:", Keyla.RetornarFaixa());
