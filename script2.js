

/*início da fução Deus Nível 1234568910*/

function deus() {


agilidade = 700;
forca = 550;
percepcao = 600;
inteligencia = 600;
experienciaParaUsarNasHabilidades = 750;

fadiga = 0;
vida = 100;

cristal = 70000;
SomaDosCristais =  70000;
ouro = 2800;
SomaDaPocaoDeRecuperacao = 2300;
SomaDaPocaoDeVida = 13000;
SomaDaPedraDeEssenciaParaMissaDiaria = 120;

SomaDaPresaDeLycan = 20;
PresaDeLycan = 20;
Lycan = 20;
Kasaka = 1;
Cerberus = 1;
Kandiaru = 1;
Cacadores = 1;
Kang = 1;

atributo = 100;



  alert("Você achou um Easter Egg e virou Deus no jogo, aproveite os prêmios");
}

/*fim da fução Deus*/

/*Início da função vender Presas de Lycan*/

function funcaovenderpresa() {
  if (PresaDeLycan > 0) {
    PresaDeLycan = PresaDeLycan - 1;

    document.getElementById("idvenderpresa").innerHTML =
      "Notificação: Venda realizada com sucesso";

    document.getElementById("idPresainventario").innerHTML =
      "Presa de Lycan: " + PresaDeLycan;

    ouro = ouro + 20;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  } else {
    document.getElementById("idvenderpresa").innerHTML =
      "Presa de Lycan insuficiente";
  }
}


function funcaovendercristal() {
  if (cristal > 9) {
    document.getElementById("idvendercristal").innerHTML =
      "Notificação: Venda realizada com sucesso";

    cristal = cristal - 10;

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "Cristais de Mana: " + cristal;

    ouro = ouro + 1;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  } else {
    document.getElementById("idminerarcristal").innerHTML = "";

    document.getElementById("idatributopercepcao").innerHTML = "";

    document.getElementById("idvendercristal").innerHTML =
      "Cristais insuficiente";
  }
}

/* Fim da função vender cristais 10*/

/*Início da função vender cristais 100*/

function funcaovendercristal100() {
  if (cristal > 99) {
    document.getElementById("idvendercristal").innerHTML =
      "Notificação: Venda realizada com sucesso";

    cristal = cristal - 100;

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "Cristais de Mana: " + cristal;

    ouro = ouro + 10;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  } else {
    document.getElementById("idminerarcristal").innerHTML = "";

    document.getElementById("idatributopercepcao").innerHTML = "";

    document.getElementById("idvendercristal").innerHTML =
      "Cristais insuficiente";
  }
}

/* Fim da função vender cristais 100*/

/*Início da função vender Pedras de essência*/

function funcaovenderpedra() {
  if (PedraDeEssencia > 0) {
    PedraDeEssencia = PedraDeEssencia - 1;

    document.getElementById("idvenderpedra").innerHTML =
      "Notificação: Venda realizada com sucesso";

    document.getElementById("idpedrainventario").innerHTML =
      "Pedra de Essência: " + PedraDeEssencia;

    ouro = ouro + 10;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;
  } else {
    document.getElementById("idvenderpedra").innerHTML =
      "Pedra de Essência insuficiente";
  }
}

/* Fim da função vender Pedras de essência*/

/*início da função equipar Kasaka*/

function funcaoEquiparKasaka() {
  if (KasakaEquipada === 1) {
    document.getElementById("idRetornoEquiparKasaka").innerHTML =
      "Kasaka já equipada";
  } else if (Kasaka > 0 && KasakaEquipada === 0) {
    KasakaEquipada = 1;

    forca = forca + 25;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoEquiparKasaka").innerHTML =
      "Kasaka equipada com sucesso";

    document.getElementById("idItemPresaKasakaAdquirida").innerHTML =
      "✅ Presa Venenosa de Kasaka";

    document.getElementById("idRetornoCompraEspadaComum4").innerHTML = "+ 25";
  } else {
    document.getElementById("idRetornoEquiparKasaka").innerHTML =
      "Necessário derrotar a Kasaka para adquirir essa Adaga";
  }
}

/* Fim da função equipar Kasaka */

/* início da função equipar Coleira do Guardião */

function funcaoEquiparColeira() {
  if (ColeiraEquipada === 1) {
    document.getElementById("idRetornoEquiparColeira").innerHTML =
      "Colar já equipada";
  } else if (Cerberus > 0 && ColeiraEquipada === 0) {
    ColeiraEquipada = 1;

    agilidade = agilidade + 20;
    percepcao = percepcao + 20;

   document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;

     document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoEquiparColeira").innerHTML =
      "Colar equipado com sucesso";

    document.getElementById("idItemColeiraAdquirida").innerHTML =
      "✅ Coleira do Guardião";


    document.getElementById("idRetornoColeira1").innerHTML = "+ 20";
      document.getElementById("idRetornoColeira2").innerHTML = "+ 20";
  } else {
    document.getElementById("idRetornoEquiparColeira").innerHTML =
      "Necessário derrotar o Cerberus Guardião do Inferno para adquirir esse Colar";
  }
}

/* Fim da função equipar Coleira do Guardião */

/* Início da habilidade Arrancada
function FuncaoArrancada() {
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
  }
}
 Fim da habilidade Arrancada */

/* início da função comprar poção de recuperação */
function funcaoComprarPocaoRecuperacao() {
  if (ouro > 0 && fadiga > 0) {
    fadiga = fadiga - 10;
    ouro = ouro - 1;
    SomaDaPocaoDeRecuperacao = SomaDaPocaoDeRecuperacao + 1;

    if (fadiga < 1) {
      fadiga = 0;
    }
    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");

    document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML =
      "10% de recuperação aplicada em Fadiga";

    if (dia === 3) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 20 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/20";
    }

    if (dia === 4) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 35 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/35";
    }
    if (dia === 5) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 70 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/70";
    }
    if (dia === 6) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 100 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/100";
    }

    if (dia === 7) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 150 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/150";
    }
    if (dia === 8) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 200 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/200";
    }
    if (dia === 9) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 250 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/250";
    }
    if (dia === 10) {
      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 350 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/350";
    }
  } else {
    document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML =
      "Compra não realizada, você não tem ouro suficiente ou sua fadiga está zerada";
  }
}
/*Fim da função comprar poção de recuperação*/

/*INÍCIO DA LUTA DO dos Insectoids*/
function LutaContraInsectoidsBotao() {
  if (vida < 10 || fadiga > 80) {
    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "Vida ou Fadiga insuficiente";
  } else if (vida > 0 && fadiga < 100 && Insectoids > 4) {
    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "✨ Você derrotou todos os Insectoids ✨";
  } else if (
    vida > 9 &&
    fadiga < 81 &&
    forca > 29 &&
    agilidade > 29 &&
    Insectoids < 5 &&
    Kasaka === 1 &&
    percepcao > 34
  ) {
    vida = vida - 10;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 20;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Insectoids = Insectoids + 1;
    document.getElementById("idInsectoids").innerHTML =
      "🚶‍♂️População: " + Insectoids + "/5";

    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou um Insectoids [Recompensas: 1 ponto de experiência - 1 pontos de atributos]";

    experienciaInsectoids = experienciaInsectoids + 1;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 1;
    document.getElementById("idexperienciaInsectoids").innerHTML =
      "🏆 Experiência: " + experienciaInsectoids;

    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
      "Lutar novamente";

    atributo = atributo + 1;
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      /* Início de remover Arrancada*/
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/* Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade:  Intenção Assassina";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/*Fim de remover Intenção Assassina*/

    /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
    }
    /* Fim da função subir de nível */
  } else {
    vida = vida - 10;
    if (vida < 1) {
      vida = 0;
    }
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 20;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA dos Insectoids*/

/*INÍCIO DO BOTÃO ANALISAR LUTA dos Insectoids*/
function AnalisarLutaContraInsectoidsBotao() {
  document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
    "Análise dos seus Status e do Insectoid";

  document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 10) {
    document.getElementById("idVidaInsectoids").innerHTML =
      "❤️ Vida: -10% ⏩ Vida: " + vida + "%" + " ❌";
  }

  if (vida > 9) {
    document.getElementById("idVidaInsectoids").innerHTML =
      "❤️ Vida: -10% ⏩ Vida: " + vida + "%" + " ✅";
  }

  if (fadiga > 80) {
    document.getElementById("idFadigaInsectoids").innerHTML =
      "🪫Fadiga : +80% ⏩ Fadiga: " + fadiga + "%" + " ❌";
  }

  if (fadiga < 81) {
    document.getElementById("idFadigaInsectoids").innerHTML =
      "🪫Fadiga : +20% ⏩ Fadiga: " + fadiga + "%" + " ✅";
  }

  if (forca < 31) {
    document.getElementById("idAgilidadeInsectoids").innerHTML =
      "🦵 Agilidade: 30 ⏩ Força: " + forca + " ❌";
  }

  if (forca > 30) {
    document.getElementById("idAgilidadeInsectoids").innerHTML =
      "🦵 Agilidade: 30 ⏩ Força: " + forca + " ✅";
  }

  if (agilidade > 30) {
    document.getElementById("idForcaInsectoids").innerHTML =
      "💪 Força: 30 ⏩ Agilidade: " + agilidade + " ✅";
  }

  if (agilidade < 31) {
    document.getElementById("idForcaInsectoids").innerHTML =
      "💪 Força: 30 ⏩ Agilidade: " + agilidade + " ❌";
  }

  if (percepcao > 35) {
    document.getElementById("idPercepcaoInsectoids").innerHTML =
      "👀 Percepção: 35 ⏩ Agilidade: " + percepcao + " ✅";
  }

  if (percepcao < 36) {
    document.getElementById("idPercepcaoInsectoids").innerHTML =
      "👀 Percepção: 35 ⏩ Agilidade: " + percepcao + " ❌";
  }

  if (Kasaka === 0) {
    document.getElementById("idRequisitoInsectoids").innerHTML =
      "🐍 Kasaka derrotada: ⏩ Não ❌";
  }

 if (Kasaka === 1) {
    document.getElementById("idRequisitoInsectoids").innerHTML =
      "🐍 Kasaka derrotada: ⏩ Sim ✅";
  }

}

/* FIM DO BOTÃO ANALISAR LUTA dos Insectoids */


/* INÍCIO DA LUTA da Aranha Gigante */
function LutaContraAranhaBotao() {
 if (vida < 50 || fadiga > 40) {
  document.getElementById(
    "idQuadroDeRetornoAranha")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  101 && Aranha > 0) {
  document.getElementById(
    "idQuadroDeRetornoAranha")
   .innerHTML =
   "✨ Você derrotou o chefe da dangeon ✨";
 } else if (
  vida > 49 &&
  fadiga < 41 &&
  forca > 79 &&
  agilidade > 60 &&
  Aranha < 1
 ) {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 60;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

 Aranha = Aranha + 1;
  document.getElementById(
    "idAranha").innerHTML =
   "🚶‍♂️População: " + Aranha +
   "/1";

  PedraDeEssencia =
   PedraDeEssencia + 1;
  SomaPedraDeEssenciaAranha =
   SomaPedraDeEssenciaAranha + 1;
  document.getElementById(
    "idPedrasDeEssenciaAranha")
   .innerHTML =
   "💎 Pedras de Essência: " +
   SomaPedraDeEssenciaAranha;
  document.getElementById(
    "idpedrainventario").innerHTML =
   "⚠️ Pedras de Essência: " +
   PedraDeEssencia;

  document.getElementById(
    "idQuadroDeRetornoAranha")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou a Aranha Gigante [Recompensas: 1 ponto de experiência - 5 pontos distribuidos em seus atributos - 1 Pedra de essência]";


  SomaDaPedraDeEssenciaParaMissaDiaria
   =
   SomaDaPedraDeEssenciaParaMissaDiaria +
   1;


 if (dia === 7){
  document.getElementById(
    "idMissaoDiariaPedrasDeEssencia"
   ).innerHTML =
   "Ganhe 11 Pedras de essência: " +
   SomaDaPedraDeEssenciaParaMissaDiaria +
   "/11";
   }

 if (dia === 8){
  document.getElementById(
    "idMissaoDiariaPedrasDeEssencia"
   ).innerHTML =
   "Ganhe 12 Pedras de essência: " +
   SomaDaPedraDeEssenciaParaMissaDiaria +
   "/12";
   }

    if (dia > 8){
  document.getElementById(
    "idMissaoDiariaPedrasDeEssencia"
   ).innerHTML =
   "";
   }

  experienciaAranha =
   experienciaAranha + 1;
  experienciaParaUsarNasHabilidades
   =
   experienciaParaUsarNasHabilidades +
   1;

  document.getElementById(
    "idexperienciaAranha").innerHTML =
   "🏆 Experiência: " +
   experienciaAranha;
  document.getElementById(
    "idContarExperienciaNoQuadroHabilidades",
   ).innerHTML =
   "Pontos de experiência: " +
   experienciaParaUsarNasHabilidades;

  document.getElementById(
    "idLutaContraAranhaBotao")
   .innerHTML =
   "Lutar novamente";

  agilidade = agilidade + 1;
  forca = forca + 1;
  percepcao = percepcao + 1;
  inteligencia = inteligencia + 1;
  document.getElementById(
    "idagilidade").innerHTML =
   "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca")
   .innerHTML = "💪 Força: " +
   forca;
  document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;
 
  document.getElementById(
    "idinteligencia").innerHTML =
   "🧠 Inteligência: " +
   inteligencia;

  /*início da função subir de nível 123456789*/

  SomaDoNivel = SomaDoNivel + 5;
  if (SomaDoNivel >
   SomaDoIndicadorDoNivel) {
   document.getElementById(
     "idnivel").innerHTML =
    "Nível: " + EqualizadoDoNivel;

   alert("Level Up");

   EqualizadoDoNivel =
    EqualizadoDoNivel + 1;
   SomaDoIndicadorDoNivel =
    SomaDoIndicadorDoNivel + 3;
  }
  /*Fim da função subir de nível*/

   /* Início de remover Arrancada*/
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/* Fim de remover Arrancada*/

 } else {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 60;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoAranha")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraAranhaBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/*FIM DA LUTA da Aranha Gigante*/

/*INÍCIO DO BOTÃO ANALISAR LUTA da Aranha*/
function AnalisarLutaContraAranhaBotao() {
 document.getElementById(
   "idQuadroDeRetornoAranha")
  .innerHTML =
  "Análise dos seus Status e da Aranha Gigante";

 document.getElementById(
   "idLutaContraAranhaBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 49) {
  document.getElementById(
    "idVidaAranha").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida > 50) {
  document.getElementById(
    "idVidaAranha").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 60) {
  document.getElementById(
    "idFadigaAranha").innerHTML =
   "🪫Fadiga : +60% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga < 41) {
  document.getElementById(
    "idFadigaAranha").innerHTML =
   "🪫Fadiga : +60% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 80) {
  document.getElementById(
    "idAgilidadeAranha").innerHTML =
   "🦵 Agilidade: 79 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 79) {
  document.getElementById(
    "idAgilidadeAranha").innerHTML =
   "🦵 Agilidade: 79 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 60) {
  document.getElementById(
    "idForcaAranha").innerHTML =
   "💪 Força: 60 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 60) {
  document.getElementById(
    "idForcaAranha").innerHTML =
   "💪 Força: 60 ⏩ Agilidade: " +
   agilidade + " ❌";
 }
}

/* FIM DO BOTÃO ANALISAR LUTA da Aranha Gigante */

/*INÍCIO DA LUTA dos Caçadores*/
function LutaContraCacadoresBotao() {
 if (vida < 5 || fadiga > 95) {
  document.getElementById(
    "idQuadroDeRetornoCacadores")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  100 && Cacadores > 5) {
  document.getElementById(
    "idQuadroDeRetornoCacadores")
   .innerHTML =
   "✨ Você derrotou todos os Caçadores ✨";
 } else if (
  vida > 4 &&
  fadiga < 96 &&
  forca > 80 &&
  agilidade > 60 &&
  Cacadores < 6 &&
  inteligencia > 35 &&
  percepcao > 39
 ) {
  vida = vida - 5;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 5;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

 Cacadores = Cacadores + 1;
  document.getElementById(
    "idCacadores").innerHTML =
   "🚶‍♂️População: " + Cacadores +
   "/6";


  document.getElementById(
    "idQuadroDeRetornoCacadores")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou um Caçador [Recompensas: 1 ponto de experiência - 5 pontos distribuidos em seus atributos - Habilidade Intenção Assassina]";


 document.getElementById("idCheckAssassina").innerHTML =
      "⚠️ Habilidade: Intenção Assassina";

/* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

  experienciaCacadores =
   experienciaCacadores + 1;
  experienciaParaUsarNasHabilidades
   =
   experienciaParaUsarNasHabilidades +
   1;

  document.getElementById(
    "idexperienciaCacadores").innerHTML =
   "🏆 Experiência: " +
   experienciaCacadores;
  document.getElementById(
    "idContarExperienciaNoQuadroHabilidades",
   ).innerHTML =
   "Pontos de experiência: " +
   experienciaParaUsarNasHabilidades;

  document.getElementById(
    "idLutaContraCacadoresBotao")
   .innerHTML =
   "Lutar novamente";

  agilidade = agilidade + 1;
  forca = forca + 1;
  percepcao = percepcao + 1;

  inteligencia = inteligencia + 1;
  document.getElementById(
    "idagilidade").innerHTML =
   "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca")
   .innerHTML = "💪 Força: " +
   forca;
  document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;

  document.getElementById(
    "idinteligencia").innerHTML =
   "🧠 Inteligência: " +
   inteligencia;

  /*início da função subir de nível*/

  SomaDoNivel = SomaDoNivel + 5;
  if (SomaDoNivel >
   SomaDoIndicadorDoNivel) {
   document.getElementById(
     "idnivel").innerHTML =
    "Nível: " + EqualizadoDoNivel;

   alert("Level Up");

   EqualizadoDoNivel =
    EqualizadoDoNivel + 1;
   SomaDoIndicadorDoNivel =
    SomaDoIndicadorDoNivel + 3;
  }
  /*Fim da função subir de nível*/

  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/* Fim de remover Intenção Assassina */

 } else {
  vida = vida - 5;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 5;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoCacadores")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraCacadoresBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/* FIM DA LUTA dos Cacadores */

/* INÍCIO DO BOTÃO ANALISAR LUTA dos Cacadores */
function AnalisarLutaContraCacadoresBotao() {
 document.getElementById(
   "idQuadroDeRetornoCacadores")
  .innerHTML =
  "Análise dos seus Status e do Caçadores";

 document.getElementById(
   "idLutaContraCacadoresBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 5) {
  document.getElementById(
    "idVidaCacadores").innerHTML =
   "❤️ Vida: -5% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida > 4) {
  document.getElementById(
    "idVidaCacadores").innerHTML =
   "❤️ Vida: -5% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 96) {
  document.getElementById(
    "idFadigaCacadores").innerHTML =
   "🪫Fadiga : +5% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga < 94) {
  document.getElementById(
    "idFadigaCacadores").innerHTML =
   "🪫Fadiga : +5% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 81) {
  document.getElementById(
    "idAgilidadeCacadores").innerHTML =
   "🦵 Agilidade: 80 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 80) {
  document.getElementById(
    "idAgilidadeCacadores").innerHTML =
   "🦵 Agilidade: 80 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 60) {
  document.getElementById(
    "idForcaCacadores").innerHTML =
   "💪 Força: 60 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 61) {
  document.getElementById(
    "idForcaCacadores").innerHTML =
   "💪 Força: 60 ⏩ Agilidade: " +
   agilidade + " ❌";
 }

 if (inteligencia < 36) {
  document.getElementById(
    "idInteligenciaCacadores").innerHTML =
   "🧠 Inteligência: 35 ⏩ Inteligência: " +
   inteligencia + " ❌";
 }
 if (inteligencia > 35) {
  document.getElementById(
    "idInteligenciaCacadores").innerHTML =
   "🧠 Inteligência: 35 ⏩ Inteligência: " +
   inteligencia + " ✅";
 }

  if (percepcao < 40) {
  document.getElementById(
    "idPercepcaoCacadores").innerHTML =
   "👀 Percepção: 39 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 39) {
  document.getElementById(
    "idPercepcaoCacadores").innerHTML =
   "👀 Percepção: 39 ⏩ Percepção: " +
   percepcao + " ✅";
 }
}

/*FIM DO BOTÃO ANALISAR LUTA dos Cacadores*/


/* Início da habilidade Intenção Assassina*/
function FuncaoAssassina() {
  if (Cacadores === 0) {
    document.getElementById("idRetornoAssassina").innerHTML =
      "Habilidade será desbloqueada ao derrotar o Grupo de Caçadores";
  }

  if (Cacadores > 0 && Assassina === 1) {
    document.getElementById("idRetornoAssassina").innerHTML =
      "Buff já aplicado";
  }

  if (Cacadores > 0 && Assassina === 0 && mana > 3) {
    Assassina = 1;
    agilidade = agilidade + 5;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoAssassinaNoStatus").innerHTML = " + 5";

    document.getElementById("idCheckAssassina").innerHTML =
      "✅ Habilidade: Intenção Assassina";

    mana = mana - 4;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    document.getElementById("idRetornoAssassina").innerHTML = "Buff aplicado";
  }

  if (Cacadores > 0 && Assassina === 0 && mana < 4) {
    document.getElementById("idRetornoAssassina").innerHTML =
      "Mana insuficiente";
  }
}
/*Fim da habilidade Intenção Assassina*/


/* INÍCIO DA LUTA do Cerberus Guardião do Inferno */
function LutaContraCerberusBotao() {
 if (vida < 100 || fadiga > 0) {
  document.getElementById(
    "idQuadroDeRetornoCerberus")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  100 && Cerberus > 0) {
  document.getElementById(
    "idQuadroDeRetornoCerberus")
   .innerHTML =
   "✨ Você derrotou o Cerberus ✨";
 } else if (
  vida === 100 &&
  fadiga === 0 &&
  forca > 90 &&
  agilidade > 75 &&
  Cerberus === 0 &&
  percepcao > 50
 ) {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

Cerberus = Cerberus + 1;
  document.getElementById(
    "idCerberus").innerHTML =
   "🚶‍♂️População: " + Cerberus +
   "/1";


  document.getElementById(
    "idQuadroDeRetornoCerberus")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou o Cerbero [Recompensas: 1 ponto de experiência - 5 pontos distribuidos em seus atributos - 1 Pedra de essência - Coleira do Guardião]";

document.getElementById(
    "idItemColeiraAdquirida")
   .innerHTML =
   "⚠️ Coleira do Guardião";




  experienciaCerberus =
   experienciaCerberus + 1;
  experienciaParaUsarNasHabilidades
   =
   experienciaParaUsarNasHabilidades +
   1;

  document.getElementById(
    "idexperienciaCerberus").innerHTML =
   "🏆 Experiência: " +
   experienciaCerberus;
  document.getElementById(
    "idContarExperienciaNoQuadroHabilidades",
   ).innerHTML =
   "Pontos de experiência: " +
   experienciaParaUsarNasHabilidades;

  document.getElementById(
    "idLutaContraCerberusBotao")
   .innerHTML =
   "Cerberus derrotado";

  agilidade = agilidade + 1;
  forca = forca + 1;
  percepcao = percepcao + 1;
 
  inteligencia = inteligencia + 1;
  document.getElementById(
    "idagilidade").innerHTML =
   "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca")
   .innerHTML = "💪 Força: " +
   forca;
  document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;
  
  document.getElementById(
    "idinteligencia").innerHTML =
   "🧠 Inteligência: " +
   inteligencia;

  /* início da função subir de nível */

  SomaDoNivel = SomaDoNivel + 5;
  if (SomaDoNivel >
   SomaDoIndicadorDoNivel) {
   document.getElementById(
     "idnivel").innerHTML =
    "Nível: " + EqualizadoDoNivel;

   alert("Level Up");

   EqualizadoDoNivel =
    EqualizadoDoNivel + 1;
   SomaDoIndicadorDoNivel =
    SomaDoIndicadorDoNivel + 3;
  }
  /*Fim da função subir de nível*/

  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/* Fim de remover Intenção Assassina */

 } else {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoCerberus")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraCerberusBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/* FIM DA LUTA do Cerberus Guardião do Inferno */

/* INÍCIO DO BOTÃO ANALISAR LUTA do Cerberus Guardião do Inferno */
function AnalisarLutaContraCerberusBotao() {
 document.getElementById(
   "idQuadroDeRetornoCerberus")
  .innerHTML =
  "Análise dos seus Status e do Cerberus";

 document.getElementById(
   "idLutaContraCerberusBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 100) {
  document.getElementById(
    "idVidaCerberus").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida === 100) {
  document.getElementById(
    "idVidaCerberus").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 0) {
  document.getElementById(
    "idFadigaCerberus").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga === 0) {
  document.getElementById(
    "idFadigaCerberus").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 91) {
  document.getElementById(
    "idAgilidadeCerberus").innerHTML =
   "🦵 Agilidade: 90 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 90) {
  document.getElementById(
    "idAgilidadeCerberus").innerHTML =
   "🦵 Agilidade: 90 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 75) {
  document.getElementById(
    "idForcaCerberus").innerHTML =
   "💪 Força: 75 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 76) {
  document.getElementById(
    "idForcaCerberus").innerHTML =
   "💪 Força: 75 ⏩ Agilidade: " +
   agilidade + " ❌";
 }



  if (percepcao < 51) {
  document.getElementById(
    "idPercepcaoCerberus").innerHTML =
   "👀 Percepção: 50 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 50) {
  document.getElementById(
    "idPercepcaoCerberus").innerHTML =
   "👀 Percepção: 50 ⏩ Percepção: " +
   percepcao + " ✅";
 }

}

/*FIM DO BOTÃO ANALISAR LUTA do Cerberus Guardião do Inferno*/


/* INÍCIO DA LUTA DO MR. KANG */
function LutaContraKangBotao() {
 if (vida < 51 || fadiga > 69) {
  document.getElementById(
    "idQuadroDeRetornoKang")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  100 && Kang > 0) {
  document.getElementById(
    "idQuadroDeRetornoKang")
   .innerHTML =
   "✨ Você já derrotou o Mr. Kang ✨";
 } else if (
  vida > 49 &&
  fadiga < 71 &&
  forca > 95 &&
  agilidade > 85 &&
  Kang === 0 &&
  percepcao > 60 &&
  Cerberus === 1
 ) {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 30;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

Kang = 1;
  document.getElementById(
    "idKang").innerHTML =
   "🚶‍♂️População: " + Kang +
   "/1";


  document.getElementById(
    "idQuadroDeRetornoKang")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou o Mr. Kang [Recompensas: 1 ponto de experiência - 5 pontos distribuidos em seus atributos - Habilidade: Furtividade]";

 document.getElementById(
    "idCheckFurtividade")
   .innerHTML =
   "⚠️ Habilidade: Furtividade";

  experienciaKang =
   experienciaKang + 1;
  experienciaParaUsarNasHabilidades
   =
   experienciaParaUsarNasHabilidades +
   1;

  document.getElementById(
    "idexperienciaKang").innerHTML =
   "🏆 Experiência: " +
   experienciaKang;
  document.getElementById(
    "idContarExperienciaNoQuadroHabilidades",
   ).innerHTML =
   "Pontos de experiência: " +
   experienciaParaUsarNasHabilidades;

  document.getElementById(
    "idLutaContraKangBotao")
   .innerHTML =
   "Mr. Kang derrotado";

  agilidade = agilidade + 1;
  forca = forca + 1;
  percepcao = percepcao + 1;
  inteligencia = inteligencia + 1;
  document.getElementById(
    "idagilidade").innerHTML =
   "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca")
   .innerHTML = "💪 Força: " +
   forca;
  document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;
  
  document.getElementById(
    "idinteligencia").innerHTML =
   "🧠 Inteligência: " +
   inteligencia;

  /* início da função subir de nível */

  SomaDoNivel = SomaDoNivel + 5;
  if (SomaDoNivel >
   SomaDoIndicadorDoNivel) {
   document.getElementById(
     "idnivel").innerHTML =
    "Nível: " + EqualizadoDoNivel;

   alert("Level Up");

   EqualizadoDoNivel =
    EqualizadoDoNivel + 1;
   SomaDoIndicadorDoNivel =
    SomaDoIndicadorDoNivel + 3;
  }
  /*Fim da função subir de nível*/

  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/* Fim de remover Intenção Assassina */

 } else {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 30;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoKang")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraKangBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/* FIM DA LUTA DO MR. KANG */

/* INÍCIO DO BOTÃO ANALISAR  DA LUTA DO MR. KANG */
function AnalisarLutaContraKangBotao() {
 document.getElementById(
   "idQuadroDeRetornoKang")
  .innerHTML =
  "Análise dos seus Status e do Mr. Kang";

 document.getElementById(
   "idLutaContraKangBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 50) {
  document.getElementById(
    "idVidaKang").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida > 49) {
  document.getElementById(
    "idVidaKang").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 70) {
  document.getElementById(
    "idFadigaKang").innerHTML =
   "🪫Fadiga : +30% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga < 69) {
  document.getElementById(
    "idFadigaKang").innerHTML =
   "🪫Fadiga : +30% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 96) {
  document.getElementById(
    "idAgilidadeKang").innerHTML =
   "🦵 Agilidade: 95 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 95) {
  document.getElementById(
    "idAgilidadeKang").innerHTML =
   "🦵 Agilidade: 95 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 85) {
  document.getElementById(
    "idForcaKang").innerHTML =
   "💪 Força: 85 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 86) {
  document.getElementById(
    "idForcaKang").innerHTML =
   "💪 Força: 85 ⏩ Agilidade: " +
   agilidade + " ❌";
 }



  if (percepcao < 61) {
  document.getElementById(
    "idPercepcaoKang").innerHTML =
   "👀 Percepção: 60 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 60) {
  document.getElementById(
    "idPercepcaoKang").innerHTML =
   "👀 Percepção: 60 ⏩ Percepção: " +
   percepcao + " ✅";
 }

  if (Cerberus === 0) {
  document.getElementById(
    "idDerrotouOCerberus").innerHTML =
   "🔥Cerberus derrotado: ⏩ Não ❌";
 }
 if (Cerberus === 1) {
  document.getElementById(
    "idDerrotouOCerberus").innerHTML =
   "🔥Cerberus derrotado: ⏩ Sim ✅";
 }

}

/*FIM DO BOTÃO ANALISAR DA LUTA DO MR. KANG*/

/*Início da habilidade Furtividade*/
function FuncaoFurtividade() {
  if (Kang === 0) {
    document.getElementById("idRetornoFurtividade").innerHTML =
      "Habilidade será desbloqueada ao derrotar o Mr. Kang";
  }

if (Furtividade === 1) {
    document.getElementById("idRetornoFurtividade").innerHTML =
      "Buff já aplicado";
  }

  if (Kang === 1 && Furtividade === 0 && mana > 14) {
    Furtividade = 1;
    agilidade = agilidade + 30;

    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = " + 30";

    document.getElementById("idCheckFurtividade").innerHTML =
      "✅ Habilidade: Furtividade";

    mana = mana - 15;
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    document.getElementById("idRetornoFurtividade").innerHTML = "Buff aplicado";
  }

  

  if (Kang === 1 && Furtividade === 0 && mana < 15) {
    document.getElementById("idRetornoFurtividade").innerHTML =
      "Mana insuficiente";
  }

 
}
/* Fim da habilidade Furtividade */

/* INÍCIO DO BOTÃO ANALISAR  DA LUTA DO Igris */
function AnalisarLutaContraIgrisBotao() {
 document.getElementById(
   "idQuadroDeRetornoIgris")
  .innerHTML =
  "Análise dos seus Status e do Igris";

 document.getElementById(
   "idLutaContraIgrisBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 101) {
  document.getElementById(
    "idVidaIgris").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida === 100) {
  document.getElementById(
    "idVidaIgris").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 0) {
  document.getElementById(
    "idFadigaIgris").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga === 0) {
  document.getElementById(
    "idFadigaIgris").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 101) {
  document.getElementById(
    "idAgilidadeIgris").innerHTML =
   "🦵 Agilidade: 100 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 100) {
  document.getElementById(
    "idAgilidadeIgris").innerHTML =
   "🦵 Agilidade: 100 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 120) {
  document.getElementById(
    "idForcaIgris").innerHTML =
   "💪 Força: 120 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 121) {
  document.getElementById(
    "idForcaIgris").innerHTML =
   "💪 Força: 120 ⏩ Agilidade: " +
   agilidade + " ❌";
 }

  if (percepcao < 81) {
  document.getElementById(
    "idPercepcaoIgris").innerHTML =
   "👀 Percepção: 80 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 80) {
  document.getElementById(
    "idPercepcaoIgris").innerHTML =
   "👀 Percepção: 80 ⏩ Percepção: " +
   percepcao + " ✅";
 }

 if (inteligencia < 61) {
  document.getElementById(
    "idInteligenciaIgris").innerHTML =
   "🧠 Inteligência: 60 ⏩ Inteligência: " +
   inteligencia + " ❌";
 }
 if (inteligencia > 60) {
  document.getElementById(
    "idInteligenciaIgris").innerHTML =
   "🧠 Inteligência: 60 ⏩ Inteligência: " +
   inteligencia + " ✅";
 }

}

/*FIM DO BOTÃO ANALISAR DA LUTA DO Igris*/

/* INÍCIO DA LUTA DO Igris */
function LutaContraIgrisBotao() {
 if (vida < 100 || fadiga > 0) {
  document.getElementById(
    "idQuadroDeRetornoIgris")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  100 && Igris === 3) {
  document.getElementById(
    "idQuadroDeRetornoIgris")
   .innerHTML =
   "✨ Você já derrotou o Igris ✨";
 } else if (
  vida === 100 &&
  fadiga === 0 &&
  forca > 100 &&
  agilidade > 120 &&
  Igris < 4 &&
  percepcao > 80 &&
  inteligencia > 60
 ) {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

Igris = Igris + 1;
  document.getElementById(
    "idIgris").innerHTML =
   "⚔️ Rounds da batalha: " + Igris +
   "/3";


  document.getElementById(
    "idQuadroDeRetornoIgris")
   .innerHTML =
   "✨ VITÓRIA ✨";



 /* Início de remover Furtividade */
if (Furtividade === 1){

Furtividade = 0;

agilidade = agilidade - 30;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckFurtividade").innerHTML =
      "Habilidade: Furtividade";

document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";

}
/*Fim de remover Furtividade*/


  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Intenção Assassina";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/*Fim de remover Intenção Assassina*/

if(Igris === 3){
   document.getElementById(
    "idQuadroDeRetornoIgris")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou o Igris [Recompensas: Elmo do Cavaleiro Carmesim - Assassina de Cavaleiros disponível para compra - Novo título: Aquele que Superou a Adversidade]";

   document.getElementById("idItemAssassinaCavaleirosAdquirida").innerHTML =
      "⚠️ Assassina de Cavaleiros";

      document.getElementById("idItemElmoAdquirida").innerHTML =
      "⚠️ Elmo do Cavaleiro Carmesim";

document.getElementById("idCheckAdversidade").innerHTML =
        "✅ Título Aquele que Superou a Adversidade: Obtida ao derrotar o Igris.";

      document.getElementById("idtitulo").innerHTML =
        "Título: Aquele que Superou a Adversidade";

        alert(
        "Parabéns você trocou de Título. Novo título: Aquele que Superou a Adversidade",
      );

}


 

  document.getElementById(
    "idLutaContraIgrisBotao")
   .innerHTML =
   "Igris derrotado";

  agilidade = agilidade + 1;
  forca = forca + 1;
  percepcao = percepcao + 1;
  inteligencia = inteligencia + 1;
  document.getElementById(
    "idagilidade").innerHTML =
   "🦵 Agilidade: " + agilidade;
  document.getElementById("idforca")
   .innerHTML = "💪 Força: " +
   forca;
  document.getElementById(
    "idpercepcao").innerHTML =
   "👀 Percepção: " + percepcao;
  
  document.getElementById(
    "idinteligencia").innerHTML =
   "🧠 Inteligência: " +
   inteligencia;

  /* início da função subir de nível */

  SomaDoNivel = SomaDoNivel + 5;
  if (SomaDoNivel >
   SomaDoIndicadorDoNivel) {
   document.getElementById(
     "idnivel").innerHTML =
    "Nível: " + EqualizadoDoNivel;

   alert("Level Up");

   EqualizadoDoNivel =
    EqualizadoDoNivel + 1;
   SomaDoIndicadorDoNivel =
    SomaDoIndicadorDoNivel + 3;
  }
  /*Fim da função subir de nível*/

  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/* Fim de remover Intenção Assassina 12345678910*/

 } else {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoIgris")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraIgrisBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/* FIM DA LUTA DO Igris 12345678910 */

/* INÍCIO DO BOTÃO ANALISAR LUTA DO Yoo Jin-Ho*/
function AnalisarLutaContraYooBotao() {
 document.getElementById(
   "idQuadroDeRetornoYoo")
  .innerHTML =
  "Análise dos seus Status e dos monstros";

 document.getElementById(
   "idLutaContraYooBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 50) {
  document.getElementById(
    "idVidaYoo").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida > 49) {
  document.getElementById(
    "idVidaYoo").innerHTML =
   "❤️ Vida: -50% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 50) {
  document.getElementById(
    "idFadigaYoo").innerHTML =
   "🪫Fadiga : +50% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga < 51) {
  document.getElementById(
    "idFadigaYoo").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 96) {
  document.getElementById(
    "idAgilidadeYoo").innerHTML =
   "🦵 Agilidade: 95 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 95) {
  document.getElementById(
    "idAgilidadeYoo").innerHTML =
   "🦵 Agilidade: 95 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 85) {
  document.getElementById(
    "idForcaYoo").innerHTML =
   "💪 Força: 85 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 86) {
  document.getElementById(
    "idForcaYoo").innerHTML =
   "💪 Força: 85 ⏩ Agilidade: " +
   agilidade + " ❌";
 }

  if (percepcao < 66) {
  document.getElementById(
    "idPercepcaoYoo").innerHTML =
   "👀 Percepção: 65 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 65) {
  document.getElementById(
    "idPercepcaoYoo").innerHTML =
   "👀 Percepção: 65 ⏩ Percepção: " +
   percepcao + " ✅";
 }

}

/*FIM DO BOTÃO ANALISAR  LUTA DO Yoo Jin-Ho*/

/* INÍCIO DA LUTA DO Yoo Jin-Ho */
function LutaContraYooBotao() {
 if (vida < 50 || fadiga > 50) {
  document.getElementById(
    "idQuadroDeRetornoYoo")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 }  else if (
  vida > 49 &&
  fadiga < 51 &&
  forca > 95 &&
  agilidade > 85 &&
  percepcao > 65
 ) {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 50;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

Yoo = Yoo + 1;
  document.getElementById(
    "idYoo").innerHTML =
   "🚶‍♂️População: " + Yoo +
   "/?";


  document.getElementById(
    "idQuadroDeRetornoYoo")
   .innerHTML =
   "✨ VITÓRIA ✨ Você derrotou um Mostro [Recompensas: 1 ponto de experiência - 2 pontos de atributos para distribuir onde quiser]";


  experienciaYoo = experienciaYoo + 1;
  experienciaParaUsarNasHabilidades
   =
   experienciaParaUsarNasHabilidades +
   1;

  document.getElementById(
    "idexperienciaYoo").innerHTML =
   "🏆 Experiência: " +
   experienciaYoo;
  document.getElementById(
    "idContarExperienciaNoQuadroHabilidades",
   ).innerHTML =
   "Pontos de experiência: " +
   experienciaParaUsarNasHabilidades;

  document.getElementById(
    "idLutaContraYooBotao")
   .innerHTML =
   "Mostro derrotado";

atributo = atributo + 2;

    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;
  
  /* Início de remover Furtividade */
if (Furtividade === 1){

Furtividade = 0;

agilidade = agilidade - 30;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckFurtividade").innerHTML =
      "Habilidade: Furtividade";

document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";

}
/*Fim de remover Furtividade*/


  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

agilidade = agilidade - 5;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Intenção Assassina";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/* Fim de remover Intenção Assassina */

 } else {
  vida = vida - 50;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 50;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoYoo")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraYooBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/* FIM DA LUTA DO Yoo Jin-Ho */

/* início da função equipar Elmo do Cavaleiro Carmesim */

function funcaoEquiparElmo() {
  if (ElmoEquipada === 1) {
    document.getElementById("idRetornoEquiparElmo").innerHTML =
      "Elmo já equipado";
  } else if (Igris === 3 && ElmoEquipada === 0) {
    ElmoEquipada = 1;

    forca = forca + 20;

  document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoEquiparElmo").innerHTML =
      "Elmo equipado com sucesso";

    document.getElementById("idItemElmoAdquirida").innerHTML =
      "✅ Elmo do Cavaleiro Carmesim";


    document.getElementById("idRetornoElmo").innerHTML = "+ 20";
     
  } else {
    document.getElementById("idRetornoEquiparElmo").innerHTML =
      "Necessário derrotar o Cavaleiro Comandante Igris o Vermelho-Sangue para adquirir esse Elmo";
  }
}

/* Fim da função equipar Elmo do Cavaleiro Carmesim */

/*início da função equipar Assassina de Cavaleiros*/

function funcaoEquiparAssassinaCavaleiros() {
  if (AssassinaCavaleirosEquipada === 1) {
    document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
      "Adaga já equipada";
  } 
  else if (Igris === 3 && AssassinaCavaleirosEquipada === 0 && ouro < 200){
    document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
      "Ouro insuficiente";
  }
  
  else if (Igris === 3 && AssassinaCavaleirosEquipada === 0 && ouro > 199) {
    AssassinaCavaleirosEquipada = 1;

ouro = ouro - 200;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    forca = forca + 20;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
      "Adaga equipada com sucesso";

    document.getElementById("idItemAssassinaCavaleirosAdquirida").innerHTML =
      "✅ Assassina de Cavaleiros";

    document.getElementById("idRetornoCompraAssassinaCavaleiros").innerHTML = "+ 20";
  } else {
    document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML =
      "Necessário derrotar o Igris para adquirir essa Adaga";
  }
}

/* Fim da função equipar Assassina de Cavaleiros */

/* INÍCIO DO BOTÃO ANALISAR  DA LUTA DO MAGOS */
function AnalisarLutaContraMagosBotao() {
 document.getElementById(
   "idQuadroDeRetornoMagos")
  .innerHTML =
  "Análise dos seus Status e dos Magos";

 document.getElementById(
   "idLutaContraMagosBotao")
  .innerHTML =
  "Seguir com a Luta";

 if (vida < 100) {
  document.getElementById(
    "idVidaMagos").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ❌";
 }

 if (vida === 100) {
  document.getElementById(
    "idVidaMagos").innerHTML =
   "❤️ Vida: -100% ⏩ Vida: " + vida +
   "%" + " ✅";
 }

 if (fadiga > 0) {
  document.getElementById(
    "idFadigaMagos").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ❌";
 }

 if (fadiga === 0) {
  document.getElementById(
    "idFadigaMagos").innerHTML =
   "🪫Fadiga : +100% ⏩ Fadiga: " +
   fadiga + "%" + " ✅";
 }

 if (forca < 146) {
  document.getElementById(
    "idAgilidadeMagos").innerHTML =
   "🦵 Agilidade: 145 ⏩ Força: " +
   forca + " ❌";
 }

 if (forca > 145) {
  document.getElementById(
    "idAgilidadeMagos").innerHTML =
   "🦵 Agilidade: 145 ⏩ Força: " +
   forca + " ✅";
 }

 if (agilidade > 140) {
  document.getElementById(
    "idForcaMagos").innerHTML =
   "💪 Força: 140 ⏩ Agilidade: " +
   agilidade + " ✅";
 }

 if (agilidade < 141) {
  document.getElementById(
    "idForcaMagos").innerHTML =
   "💪 Força: 140 ⏩ Agilidade: " +
   agilidade + " ❌";
 }

  if (percepcao < 86) {
  document.getElementById(
    "idPercepcaoMagos").innerHTML =
   "👀 Percepção: 85 ⏩ Percepção: " +
   percepcao + " ❌";
 }
 if (percepcao > 85) {
  document.getElementById(
    "idPercepcaoMagos").innerHTML =
   "👀 Percepção: 85 ⏩ Percepção: " +
   percepcao + " ✅";
 }

 if (inteligencia < 67) {
  document.getElementById(
    "idInteligenciaMagos").innerHTML =
   "🧠 Inteligência: 65 ⏩ Inteligência: " +
   inteligencia + " ❌";
 }
 if (inteligencia > 65) {
  document.getElementById(
    "idInteligenciaMagos").innerHTML =
   "🧠 Inteligência: 65 ⏩ Inteligência: " +
   inteligencia + " ✅";
 }

}

/*FIM DO BOTÃO ANALISAR DA LUTA DOS MAGOS */


/* INÍCIO DA LUTA DOS MAGOS*/
function LutaContraMagosBotao() {
 if (vida < 100 || fadiga > 0) {
  document.getElementById(
    "idQuadroDeRetornoMagos")
   .innerHTML =
   "Vida ou Fadiga insuficiente";
 } else if (vida > 0 && fadiga <
  100 && Magos === 1) {
  document.getElementById(
    "idQuadroDeRetornoMagos")
   .innerHTML =
   "✨ Você já derrotou os Magos ✨";
 } else if (
  vida === 100 &&
  fadiga === 0 &&
  forca > 145 &&
  agilidade > 140 &&
  Magos === 0 &&
  percepcao > 85 &&
  inteligencia > 65
 ) {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

Magos = 1;
  


  document.getElementById(
    "idQuadroDeRetornoMagos")
   .innerHTML =
   "✨ VITÓRIA ✨";
  
   document.getElementById("idCheckExtracao").innerHTML =
      "⚠️ Habilidade: Extração de Sombra";


   /*Início de remover Furtividade*/
if (Furtividade === 1){

Furtividade = 0;

agilidade = agilidade - 30;

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckFurtividade").innerHTML =
      "Habilidade: Furtividade";

document.getElementById("idRetornoFurtividadeNoStatus").innerHTML = "";

}
/*Fim de remover Furtividade*/


  /* Início de remover Arrancada */
if (Arrancada === 1){

Arrancada = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckArrancada").innerHTML =
      "Habilidade: Arrancada";

document.getElementById("idRetornoArrancadaNoStatus").innerHTML = "";

}
/*Fim de remover Arrancada*/

/* Início de remover Intenção Assassina */
if (Assassina === 1){

Assassina = 0;

if (ArrancadaNivel2 === 0){
agilidade = agilidade - 10;
}
if (ArrancadaNivel2 === 1){
agilidade = agilidade - 20;
}

 document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

document.getElementById("idCheckAssassina").innerHTML =
      "Habilidade: Intenção Assassina";

document.getElementById("idRetornoAssassinaNoStatus").innerHTML = "";

}
/*Fim de remover Intenção Assassina*/

  document.getElementById(
    "idLutaContraMagosBotao")
   .innerHTML =
   "Magos derrotado";

  alert("Aonde o Jogador vai, o anjo da morte o segue. Qualquer caminho que o Jogador seguir estará repleto de cadáveres e o fedor de sangue permanecerá. Além disso, o Jogador anseia por grande poder e abriu seu próprio caminho sem depender de outros. Sua sede de poder invoca os espíritos que vagam pelo vale da morte. Os fantasmas convocados pelo exército das sombras seguirão as ordens do Jogador e obedecerão apenas o Jogador. [Sua classe foi alterada para: Necromante - Monarca das Sombras]");

document.getElementById("idClasse").innerHTML =
        "Classe: Necromante [Monarca das Sombras]";

 } else {
  vida = vida - 100;
  if (vida < 1) {
   vida = 0;
  }

  progresso2.setAttribute("style",
   "width: " + vida + "%");
  document.getElementById("idvida")
   .innerHTML = "❤️ Vida: " + vida +
   "%";

  fadiga = fadiga + 100;
  if (fadiga > 99) {
   fadiga = 100;
  }
  progresso.setAttribute("style",
   "width: " + fadiga + "%");
  document.getElementById(
    "idfadiga").innerHTML =
   "🪫Fadiga: " + fadiga + "%";

  document.getElementById(
    "idQuadroDeRetornoMagos")
   .innerHTML =
   "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

  document.getElementById(
    "idLutaContraMagosBotao")
   .innerHTML =
   "Tentar novamente";
 }
}
/*FIM DA LUTA DO MAGOS*/

