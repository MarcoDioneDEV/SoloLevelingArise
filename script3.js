/* Início da habilidade Arrancada 12345678910*/
function FuncaoArrancada() {

  if (ArrancadaNivel2 === 0){
  if (Kasaka === 0) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Habilidade será desbloqueada ao derrotar a Kasaka";
  }

  if (Kasaka > 0 && Arrancada === 1) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Buff já aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana > 5) {
    Arrancada = 1;
    agilidade = agilidade + 10;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoArrancadaNoStatus").innerHTML = " + 10";

    document.getElementById("idCheckArrancada").innerHTML =
      "✅ Habilidade: Arrancada";

     


    mana = mana - 6;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    document.getElementById("idRetornoArrancada").innerHTML = "Buff aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana < 6) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Mana insuficiente";
  }}

if (ArrancadaNivel2 === 1){
  if (Kasaka === 0) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Habilidade será desbloqueada ao derrotar a Kasaka";
  }

  if (Kasaka > 0 && Arrancada === 1) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Buff já aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana > 5) {
    Arrancada = 1;
    agilidade = agilidade + 20;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoArrancadaNoStatus").innerHTML = " + 20";

    document.getElementById("idCheckArrancada").innerHTML =
      "✅ Habilidade: Arrancada";

    mana = mana - 6;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    document.getElementById("idRetornoArrancada").innerHTML = "Buff aplicado";
  }

  if (Kasaka > 0 && Arrancada === 0 && mana < 6) {
    document.getElementById("idRetornoArrancada").innerHTML =
      "Mana insuficiente";
  }}
}
/* Fim da habilidade Arrancada */


/* INÍCIO DA HABILIDADE SUBIR O NÍVEL arrancada */
function FuncaoArrancadaUplevel() {

if (ArrancadaNivel2 === 0 && experienciaParaUsarNasHabilidades > 44){

ArrancadaNivel2 = 1;
experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 45;

 document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

  document.getElementById("idRetornoArrancada").innerHTML =
      "Você subiu o nível da habilidade";


 document.getElementById("idRetornoArrancadaUplevel").innerHTML =
      "Buff que melhora sua Agilidade em 20 pontos.";

} 

else if (ArrancadaNivel2 === 0 && experienciaParaUsarNasHabilidades < 25){
  document.getElementById("idRetornoArrancada").innerHTML =
      "Experiência insuficiente";
}
else if (ArrancadaNivel2 === 1 && experienciaParaUsarNasHabilidades ){
  document.getElementById("idRetornoArrancada").innerHTML =
      "Você já evoluiu a Habilidade";
}

}
/*FIM DA HABILIDADE SUBIR O NÍVEL DA arrancada*/

/*INÍCIO DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/
function FuncaoSaudeElogenvidadeUplevel() {

if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades > 25){

SaudeElogenvidadeNivel2 = 1;
experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades - 25;

 document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você subiu o nível da habilidade";


document.getElementById("SaudeElogenvidadeUpleve").innerHTML = "Se a sua vida for maior ou igual a 80% gaste 1 ponto de Mana e ganhe 20% de vida";
} else if (SaudeElogenvidadeNivel2 === 0 && experienciaParaUsarNasHabilidades < 25){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Experiência insuficiente";
}
else if (SaudeElogenvidadeNivel2 === 1 && experienciaParaUsarNasHabilidades ){
  document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você já evoluiu a Habilidade";
}

}
/*FIM DA HABILIDADE SUBIR O NÍVEL DA SAÚDE E LONGEVIDADE*/


/* Início da função atribuir pontos na PERCEPÇÃO  */
function funcaoatribuirpercepcao() {
  if (atributo > 0) {
    document.getElementById("idminerarcristal").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

    percepcao = percepcao + 1;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    /* início da função subir de nível */
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /* Fim da função subir de nível */
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*Fim da fução atribuir pontos na PERCEPÇÃO*/

/*Início da habilidade Extração de Sombras IGRIS*/
function FuncaoExtracao1() {

  if (Magos === 0){
    document.getElementById("idRetornoExtracao1").innerHTML =
      "Habilidade exclussiva da Classe Monarca das Sombras";
  }

    else if (Magos > 0 && mana === 20 && SombraIgris === 0){
      SombraIgris = 1;
    document.getElementById("idRetornoExtracao1").innerHTML =
      "Alma extraída com sucesso";

       document.getElementById("idCheckExtracao").innerHTML =
      "Habilidade: Extração de Sombra";

      mana = mana - 20;

       document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;
  }
   else if (Magos > 0 && mana < 20 && SombraIgris === 0){
     document.getElementById("idRetornoExtracao1").innerHTML =
      "Mana insuficiente";
   }
}
/*Fim da habilidade Extração de Sombras IGRIS*/

/*Início da habilidade Extração de Sombras MAGOS*/
function FuncaoExtracao2() {

  if (Magos === 0){
    document.getElementById("idRetornoExtracao2").innerHTML =
      "Habilidade exclussiva da Classe Monarca das Sombras";
  }

    else if (Magos > 0 && mana > 9 && SombraMago === 0){
      SombraMago = 1;
    document.getElementById("idRetornoExtracao2").innerHTML =
      "Alma extraída com sucesso";

      document.getElementById("idCheckExtracao").innerHTML =
      "Habilidade: Extração de Sombra";

 mana = mana - 10;

       document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;
  }
  else if (Magos > 0 && mana < 10 && SombraMago === 0){
     document.getElementById("idRetornoExtracao2").innerHTML =
      "Mana insuficiente";
  }
  
}
/* Fim da habilidade Extração de Sombras MAGOS */

/*teste*/
function abrirAba(id) {
  const abas = document.querySelectorAll('.aba');
  const botoes = document.querySelectorAll('.botao');

  abas.forEach((aba) => {
    aba.classList.remove('ativo');
  });

  botoes.forEach((botao) => {
    botao.classList.remove('ativo');
  });

  document.getElementById(`aba${id}`).classList.add('ativo');
  botoes[id - 1].classList.add('ativo');
}
/*teste*/
