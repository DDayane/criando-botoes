import { LightningElement } from "lwc";

export default class App extends LightningElement {
  
  Nome="João";
  Telefone="(13)5452-1254";
  CPF= "165.215.742-65";
  idade = 27

  Email='nanana@uhausha';
  Instagram=  'https://www.linguee.com.br/portugues-ingles';
  Linkeding='https://www.linkedin.com/in/dayane-duarte-145b88a2/';

//visible é um elemento, que só funciona com if, em boolean, se for true 
//fica oculta a informação, se for false ela fica visivel
 
 visible = true;

 trocarDiv(){
  // this.visible = !this.visible; // uma opção 
      if(this.visible == true){
        this.visible = false;
      }else{
        this.visible = true;
      }
      
    }

/**
 * Criar um metódo chamado de Alterar Valores
 * Esse metódo ele vai mudar os valores de nome, telefone, cpf, idade, e-mail.
 * 
 * No Html criar um novo botão chamado Alterar Valor que ative essa função.
 */

  alterarValores(){

    this.Nome ="Maria";
    this.Telefone="(35)5452-1254";
    this.CPF= "165.215.742-65";
    this.idade = 16
    this.Email='bru.pinzon@gmail.com';
}

}
