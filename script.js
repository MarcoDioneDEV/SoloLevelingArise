var nivel = 1;
var EqualizadoDoNivel = 2;
var cristal = 0;
var ouro = 0;
var PedraDeEssencia = 0;

var vida = 100;
var fadiga = 0;
var mana = 10;
var agilidade = 10;
var forca = 10;
var percepcao = 10;
var inteligencia = 10;

var experienciaYoo = 0;
var experienciaParaUsarNasHabilidades = 0;
var experienciaKang = 0;
var experienciaCerberus = 0;
var experienciaGoblin = 0;
var experienciaLican = 0;
var experienciaAranha = 0;
var experienciaKasaka = 0;
var experienciaInsectoids = 0;
var experienciaCacadores = 0;

var atributo = 1000;
var treino = 0;
var dia = 1;

var RecompensaDaClasseMago = 0;
var RecompensaDaClasseHealer = 0;
var RecompensaDoTitulo50Cristais = 0;
var RecompensaDoTitulo999Cristais = 0;
var RecompensaDaMisaoDiaria = 0;
var RecompensaDiaria = 0;
var AumentoDoNivelDaMana = 20;

var SomaDoIndicadorDoNivel = 6;
var SomaDaPocaoDeRecuperacao = 0;
var SomaDaPocaoDeVida = 0;
var SomaDoNivel = 0;
var SomaDaPercepcao = 0;
var SomaDaForca = 0;
var SomaDosCristais = 0;
var SomaPedraDeEssenciaGoblin = 0;
var SomaPedraDeEssenciaAranha = 0;
var SomaPedraDeEssenciaLycan = 0;
var SomaDaPresaDeLycan = 0;
var SomaPedraDeEssenciaKasaka = 0;
var SomaPedraDeEssenciaCacadores = 0;
var SomaDaPedraDeEssenciaParaMissaDiaria = 0;

var ElmoEquipada = 0;
var AssassinaCavaleirosEquipada = 0;
var EspadaSimplesEquipada = 0;
var EspadaEquipada = 0;
var KasakaEquipada = 0;
var ColeiraEquipada = 0;

var Magos = 0;
var Yoo = 0;
var Igris = 0;
var Kang = 0;
var Cerberus = 0;
var Cacadores = 0;
var Aranha = 0;
var Insectoids = 0;
var Goblin = 0;
var PopulacaoGoblin = 0;
var Lycan = 0;
var PopulacaoLycan = 0;
var PresaDeLycan = 0;
var Kasaka = 0;
var PopulacaoKasaka = 0;

var Kandiaru = 1;

var Arrancada = 0;
var ArrancadaEmUso = 0;
var Assassina = 0;
var Furtividade = 0;

var SaudeElogenvidadeNivel2 = 0;
var ArrancadaNivel2 = 0;

var SombraIgris = 0;
var SombraMago = 0;

/*Início da função minerar cristais*/
function funcaominerarcristal() {
  /* Início apagar as mensagem de RETORNO */
  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Você quer desafiar o Kandiaru?";
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Você quer desafiar o Goblin?";
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";
  document.getElementById("idatributopercepcao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = "";
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = "";
  document.getElementById("idRetornoCompraEspada").innerHTML = "";
  document.getElementById("idvenderpresa").innerHTML = "";
  document.getElementById("idRetornoEquiparAssassinaCavaleiros").innerHTML = "";
  document.getElementById("idRetornoEquiparElmo").innerHTML = "";
  document.getElementById("idRetornoEquiparColeira").innerHTML = "";
  document.getElementById("idRetornoEquiparKasaka").innerHTML = "";
  document.getElementById("idvendercristal").innerHTML = "";
  document.getElementById("idvenderpedra").innerHTML = "";
  document.getElementById("idminerarcristal").innerHTML = "";
   document.getElementById("idTituloAlerta").innerHTML = "";
  /*Fim apagar as mensagem de RETORNO*/

  if (fadiga < 100) {
    document.getElementById("idatributopercepcao").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    SomaDaPercepcao = percepcao - 9; 
    if (SomaDaPercepcao > 10) {
      SomaDaPercepcao = 10;
    }

    fadiga = fadiga + 11 - SomaDaPercepcao;
    cristal = cristal + SomaDaPercepcao;
    SomaDosCristais = SomaDosCristais + SomaDaPercepcao;

    if (fadiga > 100) {
      fadiga = 100;
    }

    if (fadiga < 1) {
      fadiga = 0;
    }

    if (SomaDosCristais > 999 && RecompensaDoTitulo50Cristais === 0) {
      RecompensaDoTitulo50Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Entusiasta da Mineração",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Entusiasta da Mineração";

        document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

      document.getElementById("idCheckEntusiasta").innerHTML =
        "✅ Título Entusiata da Mineração: Obtida ao minerar 1000 Cristais de mana.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";
    }

    if (SomaDosCristais > 3999 && RecompensaDoTitulo999Cristais === 0) {
      RecompensaDoTitulo999Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Lorde da Mineração",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Lorde da Mineração";

         document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

      document.getElementById("idCheckLorde").innerHTML =
        "✅ Título Lorde da Mineração: Obtida ao minerar 4000 Cristais de mana.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";
    }

    document.getElementById("idminerarcristal").innerHTML =
      "Cristais minerado: " + SomaDaPercepcao;

    if (dia === 1) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10 Cristais de Mana minerados: " + SomaDosCristais + "/10";
    }

    if (dia === 2) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";
    }

    if (dia === 3) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";
    }

    if (dia === 4) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";
    }

    if (dia === 5) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";
    }

    if (dia === 6) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";
    }

    if (dia === 7) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";
    }

    if (dia === 9) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";
    }

    if (dia === 10) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";
    }

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "⚠️ Cristais de Mana: " + cristal;

      document.getElementById("idAlertaNoMenuInventario").innerHTML =
      "⚠️ Inventário";

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  } else {
    document.getElementById("idminerarcristal").innerHTML =
      "Sua Fadiga está em 100% [Compre poção de fadiga na loja de itens ou realize a missão diária para regarregar]";
  }
}
/* Fim da função minerar cristais */

/* Início da função minerar cristais ATÉ A FADIGA SER 100*/
function funcaominerarcristalAteAfadigaSer100() {

  /* Início apagar as mensagem de RETORNO */
  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Você quer desafiar o Kandiaru?";
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Você quer desafiar o Goblin?";
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";
  document.getElementById("idatributopercepcao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = "";
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = "";
  document.getElementById("idRetornoCompraEspada").innerHTML = "";
  document.getElementById("idvendercristal").innerHTML = "";
  document.getElementById("idvenderpedra").innerHTML = "";
  document.getElementById("idminerarcristal").innerHTML = "";
   document.getElementById("idTituloAlerta").innerHTML = "";
  /*Fim apagar as mensagem de RETORNO*/

  while (fadiga < 100) {
    document.getElementById("idatributopercepcao").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    SomaDaPercepcao = percepcao - 9; 
    if (SomaDaPercepcao > 10) {
      SomaDaPercepcao = 10;
    }

    fadiga = fadiga + 11 - SomaDaPercepcao;
    cristal = cristal + SomaDaPercepcao;
    SomaDosCristais = SomaDosCristais + SomaDaPercepcao;

    if (fadiga > 100) {
      fadiga = 100;
    }

    if (fadiga < 1) {
      fadiga = 0;
    }

    if (SomaDosCristais > 999 && RecompensaDoTitulo50Cristais === 0) {
      RecompensaDoTitulo50Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Entusiasta da Mineração",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Entusiasta da Mineração";

        document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

      document.getElementById("idCheckEntusiasta").innerHTML =
        "✅ Título Entusiata da Mineração: Obtida ao minerar 1000 Cristais de mana.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;
    }

    if (SomaDosCristais > 3999 && RecompensaDoTitulo999Cristais === 0) {
      RecompensaDoTitulo999Cristais = 1;
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Lorde da Mineração",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Lorde da Mineração";

         document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

      document.getElementById("idCheckLorde").innerHTML =
        "✅ Título Lorde da Mineração: Obtida ao minerar 4000 Cristais de mana.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";
    }

    document.getElementById("idminerarcristal").innerHTML =
      "Cristais minerado: " + SomaDaPercepcao;

    if (dia === 1) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10 Cristais de Mana minerados: " + SomaDosCristais + "/10";
    }

    if (dia === 2) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";
    }

    if (dia === 3) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";
    }

    if (dia === 4) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";
    }

    if (dia === 5) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";
    }

    if (dia === 6) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";
    }

    if (dia === 7) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";
    }

    if (dia === 9) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";
    }

    if (dia === 10) {
      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";
    }

    document.getElementById("idcristal").innerHTML =
      "Cristais de Mana: " + cristal;

    document.getElementById("idcristalinventario").innerHTML =
      "⚠️ Cristais de Mana: " + cristal;

      document.getElementById("idAlertaNoMenuInventario").innerHTML =
      "⚠️ Inventário";

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  } if(fadiga > 99) {
    document.getElementById("idminerarcristal").innerHTML =
      "Sua Fadiga está em 100% [Compre poção de fadiga na loja de itens ou realize a missão diária para regarregar]";
  }
  
}
/* Fim da função minerar cristais ATÉ A FADIGA SER 100*/

/*Início da fução atribuir pontos na Força*/
function funcaoatribuirforca() {
  if (atributo > 0) {
    document.getElementById("idminerarcristal").innerHTML = "";
    document.getElementById("idvendercristal").innerHTML = "";

    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";

    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    forca = forca + 1;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*Fim da função atribuir pontos na Força*/

/*início da função comprar poção de Vida*/
function funcaoComprarPocaoVida() {

  document.getElementById("idAlertaNoMenuLoja").innerHTML =
        "Loja";

  if (ouro > 4 && vida < 100) {
    vida = vida + 10;
    ouro = ouro - 5;
    SomaDaPocaoDeVida = SomaDaPocaoDeVida + 1;

    if (vida > 100) {
      vida = 100;
    }

    if (SomaDaPocaoDeVida > 99 && RecompensaDaClasseHealer === 0) {
      RecompensaDaClasseHealer = 1;
      atributo = atributo + 5;
      alert(
        "Parabéns você trocou de Título e ganhou 5 Ponto de atributo. Novo título: Healer",
      );
      document.getElementById("idCheckHealer").innerHTML =
        "✅ Título Healer: Obtida ao comprar 100 poções de vida.";
      document.getElementById("idtitulo").innerHTML = "Título: Healer";
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

    }

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    progresso2.setAttribute("style", "width: " + vida + "%");

    document.getElementById("idRetornoCompraPocaoVida").innerHTML =
      "10% de Vida recuperada";

    if (dia === 4) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 5 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/5";
    }
    if (dia === 5) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 10 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/10";
    }
    if (dia === 6) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 30 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/30";
    }
    if (dia === 7) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 50 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/50";
    }
    if (dia === 8) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 100 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/100";
    }
    if (dia === 9) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 150 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/150";
    }
    if (dia === 10) {
      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 180 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/180";
    }
  } else {
    document.getElementById("idRetornoCompraPocaoVida").innerHTML =
      "Compra não realizada, você não tem ouro suficiente ou sua vida está 100%";
  }
}
/*Fim da função comprar poção de Vida*/

/*início da função comprar poção de Mana*/
function funcaoComprarPocaoMana() {
  if (ouro > 9 && mana < AumentoDoNivelDaMana) {
    mana = mana + 5;
    ouro = ouro - 10;

    if (mana > AumentoDoNivelDaMana) {
      mana = AumentoDoNivelDaMana;
    }

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    document.getElementById("idRetornoCompraPocaoMana").innerHTML =
      "Mana restaurada";
  } else {
    document.getElementById("idRetornoCompraPocaoMana").innerHTML =
      "Compra não realizada, você não tem ouro suficiente ou sua Mana está no limite";
  }
}
/*Fim da função comprar poção de Mana*/

/*início da função comprar ESPADA*/
function funcaoComprarEspada() {
  if (EspadaEquipada === 1) {
    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Espada já equipada";
  } else if (ouro > 99 && EspadaEquipada === 0) {
    EspadaEquipada = 1;
    forca = forca + 15;
    ouro = ouro - 100;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Espada comprada e equipada com sucesso";

    document.getElementById("idCheckCompraEspada").innerHTML = "✅ Espada";

    document.getElementById("idRetornoCompraEspadaComum3").innerHTML = "+ 15";
  } else {
    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Ouro insuficiente";
  }
}

/*início da função comprar ADAGA*/
function funcaoComprarEspadaComum() {
  if (EspadaSimplesEquipada === 1) {
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Adaga já equipada";
  } else if (ouro > 49 && EspadaSimplesEquipada === 0) {
    EspadaSimplesEquipada = 1;
    forca = forca + 5;
    ouro = ouro - 50;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Adaga comprada e equipada com sucesso";

    document.getElementById("idCheckCompraAdaga").innerHTML = "✅ Adaga";

    document.getElementById("idRetornoCompraEspadaComum2").innerHTML = "+ 5";
  } else {
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Ouro insuficiente";
  }
}


/*início da função Treino diário*/
function misaoDiaria() {
  if (treino < 100 && RecompensaDaMisaoDiaria === 0 && fadiga < 100) {
    SomaDaForca = forca - 8;
    treino = treino + SomaDaForca;

    fadiga = fadiga + 1;

    document.getElementById("idtreino").innerHTML =
      "⚠️ Treino: " + treino + "%";

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  }

  if (treino > 99 && RecompensaDaMisaoDiaria === 0) {
    RecompensaDaMisaoDiaria = 1;

    treino = 100;

    document.getElementById("idtreino").innerHTML = "✅ Treino: 100% ";

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");


    forca = forca + 1;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    alert("Receba a recompensa pelo Treino Diário [1 Ponto de atributo Força]",);

    

  }
}
/*Fim da função Treinamento de força*/

/*início da função Objetivo do dia(MISSÃO DIÁRIA)*/
function misaoDiariaReceberRecompensa() {
  /*Início apagar as mensagem de RETORNO*/

  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Você quer desafiar o Kandiaru?";
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Você quer desafiar o Goblin?";
  document.getElementById("idRetornoMissaoDiaria").innerHTML = "";
  document.getElementById("idatributopercepcao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoRecuperacao").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoVida").innerHTML = "";
  document.getElementById("idRetornoCompraPocaoMana").innerHTML = "";
  document.getElementById("idRetornoCompraEspadaComum").innerHTML = "";
  document.getElementById("idRetornoCompraEspada").innerHTML = "";
  document.getElementById("idvendercristal").innerHTML = "";
  document.getElementById("idvenderpedra").innerHTML = "";
  document.getElementById("idminerarcristal").innerHTML = "";
   document.getElementById("idTituloAlerta").innerHTML = "";
  /* Fim apagar as mensagem de RETORNO */
  if (dia === 1) {
    if (SomaDosCristais > 9 && RecompensaDiaria === 0) {
      RecompensaDiaria = 1;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      document.getElementById("idRetornoMissaoDiariaTreino").innerHTML =
        "Faça 100% do Treinamento de força";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

        document.getElementById("idAlertaNoMenuLoja").innerHTML =
        "⚠️ Loja";

      ouro = ouro + 3;
      document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

      dia = 2;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 70 Cristais de Mana minerados: " + SomaDosCristais + "/70";

      alert(
        "Receba as recompensas do dia 1 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa(3 moedas de ouro)]",
      );
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 1 incompleta";
    }
  }

  if (dia === 2) {
    if (SomaDosCristais > 69 && RecompensaDiaria === 1 && treino === 100) {
      RecompensaDiaria = 2;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 3;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 400 Cristais de Mana minerados: " + SomaDosCristais + "/400";

      alert(
        "Receba as recompensas do dia 2 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 20 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/20";

      RecompensaDaMisaoDiaria = 0;
      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 2 incompleta";
    }
  }
  if (dia === 3) {
    if (
      SomaDosCristais > 399 &&
      RecompensaDiaria === 2 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 19
    ) {
      RecompensaDiaria = 3;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 4;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 700 Cristais de Mana minerados: " + SomaDosCristais + "/700";

      alert(
        "Receba as recompensas do dia 3 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 35 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/35";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 5 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/5";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 3 incompleta";
    }
  }

  if (dia === 4) {
    if (
      SomaDaPocaoDeVida > 4 &&
      SomaDosCristais > 699 &&
      RecompensaDiaria === 3 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 34
    ) {
      RecompensaDiaria = 4;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 5;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 1500 Cristais de Mana minerados: " + SomaDosCristais + "/1500";

      alert(
        "Receba as recompensas do dia 4 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 70 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/70";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 10 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/10";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 4 incompleta";
    }
  }

  if (dia === 5) {
    if (
      SomaDaPocaoDeVida > 9 &&
      SomaDosCristais > 1499 &&
      RecompensaDiaria === 4 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 69
    ) {
      RecompensaDiaria = 5;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 6;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 3500 Cristais de Mana minerados: " + SomaDosCristais + "/3500";

      SomaDaPedraDeEssenciaParaMissaDiaria =
        SomaDaPedraDeEssenciaParaMissaDiaria + Goblin;
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 10 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/10";

      alert(
        "Receba as recompensas do dia 5 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa contém 1 Ponto extra de Atributo]",
      );

         atributo = atributo + 1;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 100 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/100";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 30 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/30";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 5 incompleta";
    }
  }

  if (dia === 6) {
    if (
      SomaDaPocaoDeVida > 29 &&
      SomaDosCristais > 3499 &&
      RecompensaDiaria === 5 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 99 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 9
    ) {
      RecompensaDiaria = 6;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 6;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 7;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 5000 Cristais de Mana minerados: " + SomaDosCristais + "/5000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 10 presas de Lycan: " + Lycan + "/10";

      alert(
        "Receba as recompensas do dia 6 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa contém 3 pontos de atributos]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 150 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/150";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 50 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/50";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 11 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/11";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 6 incompleta";
    }
  }

  if (dia === 7) {
    if (
      SomaDaPocaoDeVida > 49 &&
      SomaDosCristais > 4999 &&
      RecompensaDiaria === 6 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 149 &&
      Lycan > 9 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 10
    ) {
      RecompensaDiaria = 7;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 8;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 7000 Cristais de Mana minerados: " + SomaDosCristais + "/7000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 20 presas de Lycan: " + Lycan + "/20";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 12 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/12";

      alert(
        "Receba as recompensas do dia 7 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 200 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/200";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 100 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/100";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 7 incompleta";
    }
  }

  if (dia === 8) {
    if (
      Lycan > 19 &&
      SomaDaPocaoDeVida > 99 &&
      SomaDosCristais > 6999 &&
      RecompensaDiaria === 7 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 199 &&
      SomaDaPedraDeEssenciaParaMissaDiaria > 11
    ) {
      RecompensaDiaria = 8;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 9;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 10.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/10000";

      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML = "";

      alert(
        "Receba as recompensas do dia 8 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 250 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/250";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 150 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/150";

      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML = "";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 8 incompleta";
    }
  }

  if (dia === 9) {
    if (
      SomaDaPocaoDeVida > 149 &&
      SomaDosCristais > 9999 &&
      RecompensaDiaria === 8 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 249
    ) {
      RecompensaDiaria = 9;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 10;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Objetivo do dia: " + dia;

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "Tenha 14.000 Cristais de Mana minerados: " +
        SomaDosCristais +
        "/14000";


      alert(
        "Receba as recompensas do dia 9 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "Faça a compra de 350 Poções de recuperação na loja: " +
        SomaDaPocaoDeRecuperacao +
        "/350";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "Faça a compra de 180 Poções de Vida na loja: " +
        SomaDaPocaoDeVida +
        "/180";

      treino = 0;
      RecompensaDaMisaoDiaria = 0;
      document.getElementById("idtreino").innerHTML = "Um novo dia começou";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 9 incompleta";
    }
  }
    if (dia === 10) {
    if (
      SomaDaPocaoDeVida > 179 &&
      SomaDosCristais > 13999 &&
      RecompensaDiaria === 9 &&
      treino === 100 &&
      SomaDaPocaoDeRecuperacao > 349
    ) {
      RecompensaDiaria = 11;

      document.getElementById("idRetornoMissaoDiaria").innerHTML = "Você zerou a Missão Diária!!";

      fadiga = 0;
      document.getElementById("idfadiga").innerHTML =
        "🪫Fadiga: " + fadiga + "%";

      progresso.setAttribute("style", "width: " + fadiga + "%");

      atributo = atributo + 3;
      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      dia = 11;
      document.getElementById("idDiaMissaoDiaria").innerHTML =
        "Todos os dias foram realizados";

      document.getElementById("idMissaoDiariaCristais").innerHTML =
        "";


      alert(
        "Receba as recompensas do dia 10 [3 Pontos de atributos - Recuperação total da Fadiga - Caixa misteriosa vazia]",
      );

      document.getElementById(
        "idRetornoMissaoDiariaPocaoDeRecuperacao",
      ).innerHTML =
        "";

      document.getElementById("idRetornoMissaoDiariaPocaoDeVida").innerHTML =
        "";

    document.getElementById("idRetornoMissaoDiariaTreino").innerHTML =
        "";

      document.getElementById("idtreino").innerHTML = "Você zerou a Missão Diária!!";
    } else {
      document.getElementById("idRetornoMissaoDiaria").innerHTML =
        "Missão do dia 10 incompleta";
    }
  }

}
/*fim da função Objetivo do dia(MISSÃO DIÁRIA)*/

/*Barra de vida e fadiga */
const progresso = document.querySelector(".barra div");

progresso.setAttribute("style", "width: " + fadiga + "%");

const progresso2 = document.querySelector(".barraVida div");

progresso2.setAttribute("style", "width: " + vida + "%");
/* Barra de vida e fadiga */

/* INÍCIO DA LUTA GOBLIN */
function LutaContraGoblinBotao() {
  if (vida < 30 || fadiga > 70) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "Vida ou Fadiga insuficiente";
  } 
  
  else if (vida > 0 && fadiga < 100 && Goblin > 9) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "✨ Você derrotou todos os goblins ✨";
  } 
  
  else if (
    vida > 29 &&
    fadiga < 71 &&
    forca > 15 &&
    agilidade > 11 &&
    Goblin < 10
  ) {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Goblin = Goblin + 1;
    document.getElementById("idGoblin").innerHTML =
      "🚶‍♂️População: " + Goblin + "/10";

    PedraDeEssencia = PedraDeEssencia + 1;
    SomaPedraDeEssenciaGoblin = SomaPedraDeEssenciaGoblin + 1;
    document.getElementById("idPedrasDeEssenciaGoblin").innerHTML =
      "💎 Pedras de Essência: " + SomaPedraDeEssenciaGoblin;

    document.getElementById("idpedrainventario").innerHTML =
      "⚠️ Pedras de Essência: " + PedraDeEssencia;

    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou um Goblin [Recompensas: 1 ponto de experiência - 5 pontos distribuidos em seus atributos - 1 Pedra de essência]";

    if (Goblin > 9) {
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Exterminador de Goblins",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Exterminador de Goblins";

 document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "⚠️ Atributos";

      document.getElementById("idCheckGoblin").innerHTML =
        "✅ Título Exterminador de Goblins: Obtida ao derrotar todos os Goblins.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;  

    }

    if (dia === 6){
    SomaDaPedraDeEssenciaParaMissaDiaria = SomaDaPedraDeEssenciaParaMissaDiaria + 1;
    document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
      "Ganhe 10 Pedras de essência: " +
      SomaDaPedraDeEssenciaParaMissaDiaria +
      "/10";
  }

  if (dia === 7){
    SomaDaPedraDeEssenciaParaMissaDiaria = SomaDaPedraDeEssenciaParaMissaDiaria + 1;
    document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
      "Ganhe 11 Pedras de essência: " +
      SomaDaPedraDeEssenciaParaMissaDiaria +
      "/11";
  }

    experienciaGoblin = experienciaGoblin + 1;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 1;

    document.getElementById("idexperiencia").innerHTML =
      "🏆 Experiência: " + experienciaGoblin;
    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraGoblinBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /* Fim da função subir de nível */
  } else {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraGoblinBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO GOBILIN*/

/*INÍCIO DA LUTA DO Kandiaru*/
function LutaContraKandiaruBotao() {
  if (vida < 0 || fadiga > 99) {
    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "Você está sem vida ou com a fadiga em 100%";
  } else if (vida > 0 && fadiga < 100 && Kandiaru === 2) {
    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "✨ Você já sobreviveu  a Dangeon dupla ✨";
  } else if (
    vida > 0 &&
    fadiga < 100 &&
    agilidade > 9 &&
    Kandiaru === 1 &&
    inteligencia > 11
  ) {
    Kandiaru = 2;
    document.getElementById("idKandiaru").innerHTML = "⚔️ Rounds da batalha: 1/1";

    vida = vida - 100;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 100;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "✨ VITÓRIA ✨ Você sobreviveu ao Templo de Cartenon [Recompensas: Habilidade Saúde e longevidade -  5 pontos distribuidos em seus atributos]";

document.getElementById("idCheckSaudelongevidade").innerHTML =
      "⚠️ Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "⚠️ Habilidades";
      
    document.getElementById("idLutaContraKandiaruBotao").innerHTML =
      "Dangeon fechada";


    

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 5;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    vida = vida - 100;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 100;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraKandiaruBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO Kandiaru*/

/*INÍCIO DO BOTÃO ANALISAR LUTA Kandiaru*/
function AnalisarLutaContraKandiaruBotao() {
  document.getElementById("idQuadroDeRetornoKandiaru").innerHTML =
    "Análise dos seus Status e do Kandiaru";

  document.getElementById("idLutaContraKandiaruBotao").innerHTML =
    "Seguir com a Luta";

  if (inteligencia < 12) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 12/" + inteligencia + " ❌";
  }

  if (inteligencia > 11) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 12/" + inteligencia + " ✅";
  }

  if (vida !== 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: 100%/" + vida + "%" + " ❌";
  }

  if (vida === 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: 100%/" + vida + "%" + " ✅";
  }

  if (fadiga !== 99) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga: 0%/" + fadiga + "%" + " ❌";
  }

  if (fadiga === 0) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga: 0%/" + fadiga + "%" + " ✅";
  }

  if (agilidade > 9) {
    document.getElementById("idAgilidadeKandiaru").innerHTML =
      "🦵 Agilidade: 9/" + agilidade + " ✅";
  }

}

/*FIM DO BOTÃO ANALISAR LUTA Kandiaru*/

/*INÍCIO DO BOTÃO ANALISAR LUTA GOBLIN*/
function AnalisarLutaContraGoblinBotao() {
  document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
    "Análise dos seus Status e do Goblin";

  document.getElementById("idLutaContraGoblinBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 30) {
    document.getElementById("idVidaGoblin").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaGoblin").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 12) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11/" + agilidade + " ❌";
  }

  if (agilidade > 11) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11/" + agilidade + " ✅";
  }

  if (forca > 15) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15/" + forca + " ✅";
  }

  if (forca < 16) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15/" + forca + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA GOBLIN*/

/*INÍCIO DA FUNÇÃO ATRIBUIR PONTOS NA AGILIDADE*/
function funcaoatribuiragilidade() {
  if (atributo > 0) {
    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    agilidade = agilidade + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}
/*FIM DA FUNÇÃO ATRIBUIR PONTOS NA AGILIDADE*/

/*INÍCIO DA FUNÇÃO ATRIBUIR PONTOS NA INTELIGÊNCIA*/
function funcaoatribuirinteligencia() {
  if (atributo > 0) {
    atributo = atributo - 1;

    document.getElementById("idatributopercepcao").innerHTML =
      "1 ponto de atributo adicionado";
    document.getElementById("idatributo").innerHTML =
      "Disponíveis: " + atributo;

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

    inteligencia = inteligencia + 1;
    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}


/* INÍCIO DA HABILIDADE SAÚDE E LONGEVIDADE */
function FuncaoSaudeElogenvidade() {
  
  document.getElementById("idCheckSaudelongevidade").innerHTML =
      "Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "Habilidades";

  if (SaudeElogenvidadeNivel2 === 0){
  if (vida > 89 && vida < 100 && Kandiaru > 1 && mana > 0) {
    mana = mana - 1;
    if (mana < 1) {
      mana = 0;
    }
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    vida = 100;
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você está com a vida no máximo";

  } else if (Kandiaru === 1) {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Habilidade será liberada ao derrotar o Kandiaru";
  } else {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Os requisitos desta habilidade não foram cumpridos";
  }
}



if (SaudeElogenvidadeNivel2 === 1){
  if (vida > 79 && vida < 100 && Kandiaru > 1 && mana > 0) {
    mana = mana - 1;
    if (mana < 1) {
      mana = 0;
    }
    document.getElementById("idAumentoDoNivelDaMana").innerHTML =
      "🪄 Mana: " + mana + "/" + AumentoDoNivelDaMana;

    vida = 100;
    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Você está com a vida no máximo";

    document.getElementById("idCheckSaudelongevidade").innerHTML =
      "Habilidade: Saúde e longevidade";

      document.getElementById("idAlertaNoMenuHabilidade").innerHTML =
      "Habilidades";
  } else if (Kandiaru === 1) {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Habilidade será liberada ao derrotar o Kandiaru";
  } else {
    document.getElementById("idRetornoSaudeElogenvidade").innerHTML =
      "Os requisitos desta habilidade não foram cumpridos";
  }
}


}

/*FIM DA HABILIDADE SAÚDE E LONGEVIDADE*/

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

/*INÍCIO DA LUTA DO LYCAN*/
function LutaContraLycanBotao() {
  if (vida < 30 || fadiga > 70) {
    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "Vida ou Fadiga insuficiente";
  } else if (vida > 0 && fadiga < 100 && Lycan > 19) {
    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "✨ Você derrotou todos os Lycan ✨";
  } else if (
    vida > 29 &&
    fadiga < 71 &&
    forca > 40 &&
    agilidade > 30 &&
    Lycan < 20
  ) {
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Lycan = Lycan + 1;
    document.getElementById("idLycan").innerHTML =
      "🚶‍♂️População: " + Lycan + "/20";

    if (dia === 7) {
      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 10 presas de Lycan: " + Lycan + "/10";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaPresaDeLycan").innerHTML =
        "Ganhe 20 presas de Lycan: " + Lycan + "/20";
    }

    PresaDeLycan = PresaDeLycan + 1;
    SomaDaPresaDeLycan = SomaDaPresaDeLycan + 1;

    document.getElementById("idPresaDeLycan").innerHTML =
      "💰 Presas de Lycan: " + SomaDaPresaDeLycan;

    document.getElementById("idPresainventario").innerHTML =
      "⚠️ Presa de Lycan: " + PresaDeLycan;

    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou um Lycan [Recompensas: 2 pontos de experiência - 5 pontos distribuidos em seus atributos - 1 Presa de Lycan]";

    if (Lycan > 19) {
      atributo = atributo + 1;
      alert(
        "Parabéns você trocou de Título e ganhou 1 Ponto de atributo. Novo título: Assassino de Lobos",
      );
      document.getElementById("idtitulo").innerHTML =
        "Título: Assassino de Lobos";

 document.getElementById("idTituloAlerta").innerHTML =
        "⚠️";

      document.getElementById("idCheckLobos").innerHTML =
        "✅ Título Assassino de Lobos: Obtida ao derrotar todos os Lycan.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;

        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "⚠️ Inventário";
    }

    experienciaLican = experienciaLican + 2;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 2;
    document.getElementById("idexperienciaLycan").innerHTML =
      "🏆 Experiência: " + experienciaLican;

    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraLycanBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /*início da função subir de nível*/

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/

    /* Início de remover Arrancada*/
    if (Arrancada === 1) {
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
    /*Fim de remover Arrancada */

    /*Início de remover Intenção Assassina */
    if (Assassina === 1) {
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
    vida = vida - 30;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 30;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoLycan").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraLycanBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO LYCAN*/

/*INÍCIO DO BOTÃO ANALISAR LUTA LYCAN*/
function AnalisarLutaContraLycanBotao() {
  document.getElementById("idQuadroDeRetornoLycan").innerHTML =
    "Análise dos seus Status e do Lycan";

  document.getElementById("idLutaContraLycanBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 30) {
    document.getElementById("idVidaLycan").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaLycan").innerHTML =
      "❤️ Vida: 30%/" + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga: 30%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 31) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 30/" + agilidade + " ❌";
  }

  if (agilidade > 30) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 30/" + agilidade + " ✅";
  }

  if (forca > 40) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 40/" + forca + " ✅";
  }

  if (forca < 41) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 40/" + forca + " ❌";
  }
}

/* FIM DO BOTÃO ANALISAR LUTA LYCAN */

/* INÍCIO DA LUTA Kasaka */
function LutaContraKasakaBotao() {

  if (vida < 70 || fadiga > 30) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "Vida ou Fadiga insuficiente";
  } 
  
  else if (vida > 0 && fadiga < 100 && Kasaka > 0) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "✨ Você derrotou Kasaka o Chefe da Dangeon✨";
  } 
  
  else if (
    vida > 69 &&
    fadiga < 31 &&
    forca > 50 &&
    agilidade > 40 &&
    Kasaka < 2
  ) {
    vida = vida - 70;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 70;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    Kasaka = Kasaka + 1;
    document.getElementById("idKasaka").innerHTML =
      "🚶‍♂️População: " + Kasaka + "/1";

    PedraDeEssencia = PedraDeEssencia + 1;
    SomaPedraDeEssenciaKasaka = SomaPedraDeEssenciaKasaka + 1;

    document.getElementById("idPedrasDeEssenciaKasaka").innerHTML =
      "💎 Pedras de Essência: " + SomaPedraDeEssenciaKasaka;
    document.getElementById("idpedrainventario").innerHTML =
      "⚠️ Pedras de Essência: " + PedraDeEssencia;

    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "✨ VITÓRIA ✨ Você derrotou a Kasaka [Recompensas: 4 pontos de experiência - 5 pontos distribuidos em seus atributos - 1 Pedra de essência - Adaga Presa Venenosa de Kasaka - Habilidade: Arrancada]";

    document.getElementById("idCheckArrancada").innerHTML =
      "⚠️ Habilidade: Arrancada";

    document.getElementById("idItemPresaKasakaAdquirida").innerHTML =
      "⚠️ Presa Venenosa de Kasaka";

    SomaDaPedraDeEssenciaParaMissaDiaria =
      SomaDaPedraDeEssenciaParaMissaDiaria + 1;

      if (dia === 6) {
        document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
          "Ganhe 10 Pedras de essência: " +
          SomaDaPedraDeEssenciaParaMissaDiaria +
          "/10";}

    if (dia === 7) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 11 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/11";
    }

    if (dia === 8) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "Ganhe 12 Pedras de essência: " +
        SomaDaPedraDeEssenciaParaMissaDiaria +
        "/12";
    }

    if (dia > 8) {
      document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
        "";
    }

    experienciaKasaka = experienciaKasaka + 4;
    experienciaParaUsarNasHabilidades = experienciaParaUsarNasHabilidades + 4;
    document.getElementById("idexperienciaKasaka").innerHTML =
      "🏆 Experiência: " + experienciaKasaka;

    document.getElementById(
      "idContarExperienciaNoQuadroHabilidades",
    ).innerHTML = "Pontos de experiência: " + experienciaParaUsarNasHabilidades;

    document.getElementById("idLutaContraKasakaBotao").innerHTML =
      "Lutar novamente";

    agilidade = agilidade + 1;
    forca = forca + 1;
    percepcao = percepcao + 1;
    inteligencia = inteligencia + 1;
    document.getElementById("idagilidade").innerHTML =
      "🦵 Agilidade: " + agilidade;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;
    document.getElementById("idpercepcao").innerHTML =
      "👀 Percepção: " + percepcao;

    document.getElementById("idinteligencia").innerHTML =
      "🧠 Inteligência: " + inteligencia;

    /* início da função subir de nível */

    SomaDoNivel = SomaDoNivel + 5;
    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
    }
    /*Fim da função subir de nível*/
  } else {
    vida = vida - 70;
    if (vida < 1) {
      vida = 0;
    }

    progresso2.setAttribute("style", "width: " + vida + "%");
    document.getElementById("idvida").innerHTML = "❤️ Vida: " + vida + "%";

    fadiga = fadiga + 70;
    if (fadiga > 99) {
      fadiga = 100;
    }
    progresso.setAttribute("style", "width: " + fadiga + "%");
    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "☠️ DERROTA - Tente melhorar os seus atributos antes de lutar novamente ☠️";

    document.getElementById("idLutaContraKasakaBotao").innerHTML =
      "Tentar novamente";
  }
}
/*FIM DA LUTA DO Kasaka*/

/*INÍCIO DO BOTÃO ANALISAR LUTA Kasaka */
function AnalisarLutaContraKasakaBotao() {
  document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
    "Análise dos seus Status e da Kasaka";

  document.getElementById("idLutaContraKasakaBotao").innerHTML =
    "Seguir com a Luta";

  if (vida < 70) {
    document.getElementById("idVidaKasaka").innerHTML =
      "❤️ Vida: 70%/" + vida + "%" + " ❌";
  }

  if (vida > 69) {
    document.getElementById("idVidaKasaka").innerHTML =
      "❤️ Vida: 70%/" + vida + "%" + " ✅";
  }

  if (fadiga > 30) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga: 70%/" + fadiga + "%" + " ❌";
  }

  if (fadiga < 31) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga: 70%/" + fadiga + "%" + " ✅";
  }

  if (agilidade < 41) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 40/" + agilidade + " ❌";
  }

  if (agilidade > 40) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 40/" + agilidade + " ✅";
  }

  if (forca > 50) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 50/" + forca + " ✅";
  }

  if (forca < 51) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 50/" + forca + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA Kasaka*/



/*início da fução Deus Nível */

function deus() {



  /*
  
  document.getElementById("idDIVEsconderKandiaru").innerHTML = "";
  document.getElementById("idDIVEsconderGoblin").innerHTML = "";
  document.getElementById("idDIVEsconderLycan").innerHTML = "";
  document.getElementById("idDIVEsconderKasaka").innerHTML = "";
  document.getElementById("idDIVEsconderInsectoids").innerHTML = "";
  document.getElementById("idDIVEsconderAranha").innerHTML = "";
  document.getElementById("idDIVEsconderCacadores").innerHTML = "";
  document.getElementById("idDIVEsconderCerberus").innerHTML = "";
  document.getElementById("idDIVEsconderKang").innerHTML = "";
*/

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
  
  /* INÍCIO VENDER CRISTAIS DE MANA*/
  function funcaovendercristal() {
    
     /*Início da função vender cristais 100*/
  if (cristal > 99)
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
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    
  }
  
  /* Fim da função vender cristais 100*/
  
    /* Início da função vender cristais 10*/
    else {
    if (cristal > 9) {
      document.getElementById("idvendercristal").innerHTML =
        "Notificação: Venda realizada com sucesso";
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
  
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
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    }
    }
    /* Fim da função vender cristais 10*/
  
  
  }
  
  /* FIM VENDER CRISTAIS DE MANA*/
  
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
  
        document.getElementById("idAlertaNoMenuInventario").innerHTML =
        "Inventário";
    }
  }
  
  /* Fim da função vender cristais 100*/
  
  /*Início da função vender Pedras de essência*/
  
  function funcaovenderpedra() {
  
    document.getElementById("idAlertaNoMenuInventario").innerHTML =
          "Inventário";
  
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
  
    document.getElementById("idAlertaNoMenuLoja").innerHTML = "Loja";
  
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
  
        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
          "⚠️ Atributos";
  
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
        SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 6;
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
  
  /*INÍCIO DO BOTÃO ANALISAR LUTA Insectoids*/
  function AnalisarLutaContraInsectoidsBotao() {
    document.getElementById("idQuadroDeRetornoInsectoids").innerHTML =
      "Análise dos seus Status e do Insectoid";
  
    document.getElementById("idLutaContraInsectoidsBotao").innerHTML =
      "Seguir com a Luta";
  
    if (vida < 10) {
      document.getElementById("idVidaInsectoids").innerHTML =
        "❤️ Vida: 10%/" + vida + "%" + " ❌";
    }
  
    if (vida > 9) {
      document.getElementById("idVidaInsectoids").innerHTML =
        "❤️ Vida: 10%/" + vida + "%" + " ✅";
    }
  
    if (fadiga > 80) {
      document.getElementById("idFadigaInsectoids").innerHTML =
        "🪫Fadiga: 80%/: " + fadiga + "%" + " ❌";
    }
  
    if (fadiga < 81) {
      document.getElementById("idFadigaInsectoids").innerHTML =
        "🪫Fadiga: 20%/: " + fadiga + "%" + " ✅";
    }
  
    if (agilidade < 31) {
      document.getElementById("idAgilidadeInsectoids").innerHTML =
        "🦵 Agilidade: 30/" + agilidade + " ❌";
    }
  
    if (agilidade > 30) {
      document.getElementById("idAgilidadeInsectoids").innerHTML =
        "🦵 Agilidade: 30/" + agilidade + " ✅";
    }
  
    if (forca > 30) {
      document.getElementById("idForcaInsectoids").innerHTML =
        "💪 Força: 30/" + forca + " ✅";
    }
  
    if (forca < 31) {
      document.getElementById("idForcaInsectoids").innerHTML =
        "💪 Força: 30/" + forca + " ❌";
    }
  
    if (percepcao > 35) {
      document.getElementById("idPercepcaoInsectoids").innerHTML =
        "👀 Percepção: 35/" + percepcao + " ✅";
    }
  
    if (percepcao < 36) {
      document.getElementById("idPercepcaoInsectoids").innerHTML =
        "👀 Percepção: 35/" + percepcao + " ❌";
    }
  
    if (Kasaka === 0) {
      document.getElementById("idRequisitoInsectoids").innerHTML =
        "🐍 Kasaka derrotada: Não ❌";
    }
  
   if (Kasaka === 1) {
      document.getElementById("idRequisitoInsectoids").innerHTML =
        "🐍 Kasaka derrotada: Sim ✅";
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
      SomaDoIndicadorDoNivel + 6;
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
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 50) {
    document.getElementById(
      "idVidaAranha").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 60) {
    document.getElementById(
      "idFadigaAranha").innerHTML =
     "🪫Fadiga: 60%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga < 41) {
    document.getElementById(
      "idFadigaAranha").innerHTML =
     "🪫Fadiga : 60%/" + fadiga + "%" + " ✅";
   }
  
   if (agilidade < 61) {
    document.getElementById(
      "idAgilidadeAranha").innerHTML =
     "🦵 Agilidade: 60/" +  agilidade + " ❌";
   }
  
   if (agilidade > 60) {
    document.getElementById(
      "idAgilidadeAranha").innerHTML =
     "🦵 Agilidade: 60/" + agilidade + " ✅";
   }
  
   if (forca > 79) {
    document.getElementById(
      "idForcaAranha").innerHTML =
     "💪 Força: 79/" +  forca + " ✅";
   }
  
   if (forca < 80) {
    document.getElementById(
      "idForcaAranha").innerHTML =
     "💪 Força: 79/" +   forca + " ❌";
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
      SomaDoIndicadorDoNivel + 6;
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
     "❤️ Vida: 5%/" + vida + "%" + " ❌";
   }
  
   if (vida > 4) {
    document.getElementById(
      "idVidaCacadores").innerHTML =
     "❤️ Vida: 5%/" + vida + "%" + " ✅";
   }
  
   if (fadiga > 96) {
    document.getElementById(
      "idFadigaCacadores").innerHTML =
     "🪫Fadiga: 5%/" + fadiga + "%" + " ❌";
   }
  
   if (fadiga < 94) {
    document.getElementById(
      "idFadigaCacadores").innerHTML =
     "🪫Fadiga: 5%/" +  fadiga + "%" + " ✅";
   }
  
   if (agilidade < 61) {
    document.getElementById(
      "idAgilidadeCacadores").innerHTML =
     "🦵 Agilidade: 60/" + agilidade + " ❌";
   }
  
   if (agilidade > 60) {
    document.getElementById(
      "idAgilidadeCacadores").innerHTML =
     "🦵 Agilidade: 60/" + forca + " ✅";
   }
  
   if (forca > 80) {
    document.getElementById(
      "idForcaCacadores").innerHTML =
     "💪 Força: 80/" + forca + " ✅";
   }
  
   if (forca < 81) {
    document.getElementById(
      "idForcaCacadores").innerHTML =
     "💪 Força: 80/" + forca + " ❌";
   }
  
   if (inteligencia < 36) {
    document.getElementById(
      "idInteligenciaCacadores").innerHTML =
     "🧠 Inteligência: 35/" + inteligencia + " ❌";
   }
   if (inteligencia > 35) {
    document.getElementById(
      "idInteligenciaCacadores").innerHTML =
     "🧠 Inteligência: 35/" + inteligencia + " ✅";
   }
  
    if (percepcao < 40) {
    document.getElementById(
      "idPercepcaoCacadores").innerHTML =
     "👀 Percepção: 39/" +  percepcao + " ❌";
   }
   if (percepcao > 39) {
    document.getElementById(
      "idPercepcaoCacadores").innerHTML =
     "👀 Percepção: 39/" + percepcao + " ✅";
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
      SomaDoIndicadorDoNivel + 6;
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
     "❤️ Vida: 100%/" + vida +
     "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaCerberus").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaCerberus").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaCerberus").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 76) {
    document.getElementById(
      "idAgilidadeCerberus").innerHTML =
     "🦵 Agilidade: 75/" + agilidade + " ❌";
   }
  
   if (agilidade > 75) {
    document.getElementById(
      "idAgilidadeCerberus").innerHTML =
     "🦵 Agilidade: 75/" + agilidade + " ✅";
   }
  
   if (forca > 90) {
    document.getElementById(
      "idForcaCerberus").innerHTML =
     "💪 Força: 90/" + forca + " ✅";
   }
  
   if (forca < 91) {
    document.getElementById(
      "idForcaCerberus").innerHTML =
     "💪 Força: 90/" +  forca + " ❌";
   }
  
  
  
    if (percepcao < 51) {
    document.getElementById(
      "idPercepcaoCerberus").innerHTML =
     "👀 Percepção: 50/" + percepcao + " ❌";
   }
   if (percepcao > 50) {
    document.getElementById(
      "idPercepcaoCerberus").innerHTML =
     "👀 Percepção: 50/" + percepcao + " ✅";
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
      SomaDoIndicadorDoNivel + 6;
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
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 49) {
    document.getElementById(
      "idVidaKang").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 70) {
    document.getElementById(
      "idFadigaKang").innerHTML =
     "🪫Fadiga: 30%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga < 69) {
    document.getElementById(
      "idFadigaKang").innerHTML =
     "🪫Fadiga: 30%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 86) {
    document.getElementById(
      "idAgilidadeKang").innerHTML =
     "🦵 Agilidade: 85/" + agilidade + " ❌";
   }
  
   if (agilidade > 85) {
    document.getElementById(
      "idAgilidadeKang").innerHTML =
     "🦵 Agilidade: 85/" + agilidade + " ✅";
   }
  
   if (forca > 95) {
    document.getElementById(
      "idForcaKang").innerHTML =
     "💪 Força: 95/" +
     forca + " ✅";
   }
  
   if (forca < 96) {
    document.getElementById(
      "idForcaKang").innerHTML =
     "💪 Força: 95/" +
     forca + " ❌";
   }
  
  
  
    if (percepcao < 61) {
    document.getElementById(
      "idPercepcaoKang").innerHTML =
     "👀 Percepção: 60/" +
     percepcao + " ❌";
   }
   if (percepcao > 60) {
    document.getElementById(
      "idPercepcaoKang").innerHTML =
     "👀 Percepção: 60/" +
     percepcao + " ✅";
   }
  
    if (Cerberus === 0) {
    document.getElementById(
      "idDerrotouOCerberus").innerHTML =
     "🔥Cerberus derrotado: Não ❌";
   }
   if (Cerberus === 1) {
    document.getElementById(
      "idDerrotouOCerberus").innerHTML =
     "🔥Cerberus derrotado: Sim ✅";
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
     "❤️ Vida: 100%/" + vida +
     "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaIgris").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaIgris").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaIgris").innerHTML =
     "🪫Fadiga : 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 121) {
    document.getElementById(
      "idAgilidadeIgris").innerHTML =
     "🦵 Agilidade: 120/" +
     agilidade + " ❌";
   }
  
   if (agilidade > 120) {
    document.getElementById(
      "idAgilidadeIgris").innerHTML =
     "🦵 Agilidade: 120" +
     agilidade + " ✅";
   }
  
   if (forca > 100) {
    document.getElementById(
      "idForcaIgris").innerHTML =
     "💪 Força: 100/" +
     forca + " ✅";
   }
  
   if (forca < 101) {
    document.getElementById(
      "idForcaIgris").innerHTML =
     "💪 Força: 100/" +
     forca + " ❌";
   }
  
    if (percepcao < 81) {
    document.getElementById(
      "idPercepcaoIgris").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ❌";
   }
   if (percepcao > 80) {
    document.getElementById(
      "idPercepcaoIgris").innerHTML =
     "👀 Percepção: 80/" +
     percepcao + " ✅";
   }
  
   if (inteligencia < 61) {
    document.getElementById(
      "idInteligenciaIgris").innerHTML =
     "🧠 Inteligência: 60/" +
     inteligencia + " ❌";
   }
   if (inteligencia > 60) {
    document.getElementById(
      "idInteligenciaIgris").innerHTML =
     "🧠 Inteligência: 60/" +
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
      SomaDoIndicadorDoNivel + 6;
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
     "❤️ Vida: 50%/" + vida +
     "%" + " ❌";
   }
  
   if (vida > 49) {
    document.getElementById(
      "idVidaYoo").innerHTML =
     "❤️ Vida: 50%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 50) {
    document.getElementById(
      "idFadigaYoo").innerHTML =
     "🪫Fadiga: 50%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga < 51) {
    document.getElementById(
      "idFadigaYoo").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 86) {
    document.getElementById(
      "idAgilidadeYoo").innerHTML =
     "🦵 Agilidade: 85/" +
     agilidade + " ❌";
   }
  
   if (agilidade >85) {
    document.getElementById(
      "idAgilidadeYoo").innerHTML =
     "🦵 Agilidade: 85" +
     agilidade + " ✅";
   }
  
   if (forca > 95) {
    document.getElementById(
      "idForcaYoo").innerHTML =
     "💪 Força: 95/" +
     forca + " ✅";
   }
  
   if (forca < 96) {
    document.getElementById(
      "idForcaYoo").innerHTML =
     "💪 Força: 95/" +
     forca + " ❌";
   }
  
    if (percepcao < 66) {
    document.getElementById(
      "idPercepcaoYoo").innerHTML =
     "👀 Percepção: 65/" +
     percepcao + " ❌";
   }
   if (percepcao > 65) {
    document.getElementById(
      "idPercepcaoYoo").innerHTML =
     "👀 Percepção: 65/" +
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
  
        document.getElementById("idAlertaNoMenuAtributos").innerHTML =
          "⚠️ Atributos";
    
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
     "❤️ Vida: 100%/" + vida +
     "%" + " ❌";
   }
  
   if (vida === 100) {
    document.getElementById(
      "idVidaMagos").innerHTML =
     "❤️ Vida: 100%/" + vida +
     "%" + " ✅";
   }
  
   if (fadiga > 0) {
    document.getElementById(
      "idFadigaMagos").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ❌";
   }
  
   if (fadiga === 0) {
    document.getElementById(
      "idFadigaMagos").innerHTML =
     "🪫Fadiga: 100%/" +
     fadiga + "%" + " ✅";
   }
  
   if (agilidade < 141) {
    document.getElementById(
      "idAgilidadeMagos").innerHTML =
     "🦵 Agilidade: 140/" +
     agilidade + " ❌";
   }
  
   if (agilidade > 140) {
    document.getElementById(
      "idAgilidadeMagos").innerHTML =
     "🦵 Agilidade: 140" +
     agilidade + " ✅";
   }
  
   if (forca > 145) {
    document.getElementById(
      "idForcaMagos").innerHTML =
     "💪 Força: 145/" +
     forca + " ✅";
   }
  
   if (forca < 146) {
    document.getElementById(
      "idForcaMagos").innerHTML =
     "💪 Força: 145/" +
     forca + " ❌";
   }
  
    if (percepcao < 86) {
    document.getElementById(
      "idPercepcaoMagos").innerHTML =
     "👀 Percepção: 85/" +
     percepcao + " ❌";
   }
   if (percepcao > 85) {
    document.getElementById(
      "idPercepcaoMagos").innerHTML =
     "👀 Percepção: 85/" +
     percepcao + " ✅";
   }
  
   if (inteligencia < 67) {
    document.getElementById(
      "idInteligenciaMagos").innerHTML =
     "🧠 Inteligência: 65/" +
     inteligencia + " ❌";
   }
   if (inteligencia > 65) {
    document.getElementById(
      "idInteligenciaMagos").innerHTML =
     "🧠 Inteligência: 65/" +
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

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

      document.getElementById("idAlertaNoMenuAtributos").innerHTML =
        "Atributos";

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

/*Início abas do menu lateral esquerdo*/
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
/*Fim abas do menu lateral esquerdo*/
  
  
