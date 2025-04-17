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

var atributo = 0;
var treino = 0;
var dia = 1;

var RecompensaDaClasseMago = 0;
var RecompensaDaClasseHealer = 0;
var RecompensaDoTitulo50Cristais = 0;
var RecompensaDoTitulo999Cristais = 0;
var RecompensaDaMisaoDiaria = 0;
var RecompensaDiaria = 0;
var AumentoDoNivelDaMana = 20;

var SomaDoIndicadorDoNivel = 2;
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

/*Início da função minerar cristais 123*/
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

    document.getElementById("idfadiga").innerHTML = "🪫Fadiga: " + fadiga + "%";

    progresso.setAttribute("style", "width: " + fadiga + "%");
  } else {
    document.getElementById("idminerarcristal").innerHTML =
      "Sua Fadiga está em 100% [Compre poção de fadiga na loja de itens ou realize a missão diária para regarregar]";
  }
}
/* Fim da função minerar cristais */


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

    forca = forca + 1;
    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    /*início da função subir de nível*/
    SomaDoNivel = SomaDoNivel + 1;

    if (SomaDoNivel > SomaDoIndicadorDoNivel) {
      document.getElementById("idnivel").innerHTML =
        "Nível: " + EqualizadoDoNivel;

      alert("Level Up");

      EqualizadoDoNivel = EqualizadoDoNivel + 1;
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Espada já equipada";
  } else if (ouro > 99 && EspadaEquipada === 0) {
    EspadaEquipada = 1;
    forca = forca + 15;
    ouro = ouro - 100;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idBotaoVenderEspada").innerHTML = "Vender";

    document.getElementById("idBotaoComprarEspada").innerHTML = "Indisponível";

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
/*Fim da função comprar ESPADA*/

/*início da função vender ESPADA*/
function funcaoVenderEspada() {
  if (EspadaEquipada === 0) {
    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Espada deve ser compranda antes de ser vendida";
  }

  if (EspadaEquipada === 1) {
    EspadaEquipada = 0;
    forca = forca - 15;
    ouro = ouro + 50;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idBotaoComprarEspada").innerHTML =
      "Comprar e Equipar";

    document.getElementById("idBotaoVenderEspada").innerHTML = "Indisponível";

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspada").innerHTML =
      "Venda realizada com sucesso";

    document.getElementById("idCheckCompraEspada").innerHTML = "⚠️ Adaga";

    document.getElementById("idRetornoCompraEspadaComum3").innerHTML = "";
  }
}
/*Fim da função vender ESPADA*/

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

    document.getElementById("idBotaoVender").innerHTML = "Vender";

    document.getElementById("idBotaoComprar").innerHTML = "Indisponível";

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
/*Fim da função comprar ADAGA*/

/*início da função vender ADAGA*/
function funcaoVenderEspadaComum() {
  if (EspadaSimplesEquipada === 0) {
    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Adaga deve ser compranda antes de ser vendida";
  }

  if (EspadaSimplesEquipada === 1) {
    EspadaSimplesEquipada = 0;
    forca = forca - 5;
    ouro = ouro + 10;

    document.getElementById("idouro").innerHTML = "Ouro: " + ouro;

    document.getElementById("idBotaoComprar").innerHTML = "Comprar e Equipar";

    document.getElementById("idBotaoVender").innerHTML = "Indisponível";

    document.getElementById("idforca").innerHTML = "💪 Força: " + forca;

    document.getElementById("idRetornoCompraEspadaComum").innerHTML =
      "Venda realizada com sucesso";

    document.getElementById("idCheckCompraAdaga").innerHTML = "⚠️ Adaga";

    document.getElementById("idRetornoCompraEspadaComum2").innerHTML = "";
  }
}
/*Fim da função vender ADAGA*/

/*início da função Treinamento de força*/
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

/* INÍCIO DA LUTA DO GOBILIN */
function LutaContraGoblinBotao() {
  if (vida < 30 || fadiga > 70) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "Vida ou Fadiga insuficiente";
  } else if (vida > 0 && fadiga < 100 && Goblin > 9) {
    document.getElementById("idQuadroDeRetornoGoblin").innerHTML =
      "✨ Você derrotou todos os goblins ✨";
  } else if (
    vida > 29 &&
    fadiga < 71 &&
    forca > 11 &&
    agilidade > 15 &&
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

      document.getElementById("idCheckGoblin").innerHTML =
        "✅ Título Exterminador de Goblins: Obtida ao derrotar todos os Goblins.";

      document.getElementById("idatributo").innerHTML =
        "Disponíveis: " + atributo;
    }

    SomaDaPedraDeEssenciaParaMissaDiaria =
      SomaDaPedraDeEssenciaParaMissaDiaria + 1;
    document.getElementById("idMissaoDiariaPedrasDeEssencia").innerHTML =
      "Ganhe 10 Pedras de essência: " +
      SomaDaPedraDeEssenciaParaMissaDiaria +
      "/10";

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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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
      "✨ Dangeon dupla inacessível ✨";
  } else if (
    vida > 0 &&
    fadiga < 100 &&
    forca > 9 &&
    agilidade > 9 &&
    Kandiaru === 1 &&
    inteligencia > 12
  ) {
    Kandiaru = 2;
    document.getElementById("idKandiaru").innerHTML = "🚶‍♂️População: 1/1";

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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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

  if (inteligencia < 13) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 12 ⏩ 🧠 Inteligência: " + inteligencia + " ❌";
  }

  if (inteligencia > 12) {
    document.getElementById("idInteligenciaKandiaru").innerHTML =
      "🧠 Inteligência: 12 ⏩ 🧠 Inteligência: " + inteligencia + " ✅";
  }

  if (vida !== 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: -100% ⏩ Vida: " + vida + "%" + " ❌";
  }

  if (vida === 100) {
    document.getElementById("idVidaKandiaru").innerHTML =
      "❤️ Vida: -100% ⏩ Vida: " + vida + "%" + " ✅";
  }

  if (fadiga !== 99) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga : +100% ⏩ Fadiga: " + fadiga + "%" + " ❌";
  }

  if (fadiga === 0) {
    document.getElementById("idFadigaKandiaru").innerHTML =
      "🪫Fadiga : +100% ⏩ Fadiga: " + fadiga + "%" + " ✅";
  }

  if (forca > 9) {
    document.getElementById("idAgilidadeKandiaru").innerHTML =
      "🦵 Agilidade: 9 ⏩ Força: " + forca + " ✅";
  }

  if (agilidade > 9) {
    document.getElementById("idForcaKandiaru").innerHTML =
      "💪 Força: 9 ⏩ Agilidade: " + agilidade + " ✅";
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
      "❤️ Vida: -30% ⏩ Vida: " + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaGoblin").innerHTML =
      "❤️ Vida: -30% ⏩ Vida: " + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga : +30% ⏩ Fadiga: " + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaGoblin").innerHTML =
      "🪫Fadiga : +30% ⏩ Fadiga: " + fadiga + "%" + " ✅";
  }

  if (forca < 12) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11 ⏩ Força: " + forca + " ❌";
  }

  if (forca > 11) {
    document.getElementById("idAgilidadeGoblin").innerHTML =
      "🦵 Agilidade: 11 ⏩ Força: " + forca + " ✅";
  }

  if (agilidade > 15) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15 ⏩ Agilidade: " + agilidade + " ✅";
  }

  if (agilidade < 16) {
    document.getElementById("idForcaGoblin").innerHTML =
      "💪 Força: 15 ⏩ Agilidade: " + agilidade + " ❌";
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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
    }
    /*Fim da função subir de nível*/
  } else {
    document.getElementById("idatributopercepcao").innerHTML =
      "Você não possui nenhum Ponto de atributo disponível";
  }
}


/* INÍCIO DA HABILIDADE SAÚDE E LONGEVIDADE */
function FuncaoSaudeElogenvidade() {
  
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

    document.getElementById("idCheckSaudelongevidade").innerHTML =
      "Habilidade: Saúde e longevidade";
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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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
      "❤️ Vida: -30% ⏩ Vida: " + vida + "%" + " ❌";
  }

  if (vida > 29) {
    document.getElementById("idVidaLycan").innerHTML =
      "❤️ Vida: -30% ⏩ Vida: " + vida + "%" + " ✅";
  }

  if (fadiga > 70) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga : +30% ⏩ Fadiga: " + fadiga + "%" + " ❌";
  }

  if (fadiga < 71) {
    document.getElementById("idFadigaLycan").innerHTML =
      "🪫Fadiga : +30% ⏩ Fadiga: " + fadiga + "%" + " ✅";
  }

  if (forca < 41) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 40 ⏩ Força: " + forca + " ❌";
  }

  if (forca > 40) {
    document.getElementById("idAgilidadeLycan").innerHTML =
      "🦵 Agilidade: 40 ⏩ Força: " + forca + " ✅";
  }

  if (agilidade > 30) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 30 ⏩ Agilidade: " + agilidade + " ✅";
  }

  if (agilidade < 31) {
    document.getElementById("idForcaLycan").innerHTML =
      "💪 Força: 30 ⏩ Agilidade: " + agilidade + " ❌";
  }
}

/* FIM DO BOTÃO ANALISAR LUTA LYCAN */

/* INÍCIO DA LUTA DO Kasaka */
function LutaContraKasakaBotao() {
  if (vida < 70 || fadiga > 30) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "Vida ou Fadiga insuficiente";
  } else if (vida > 0 && fadiga < 100 && Kasaka > 0) {
    document.getElementById("idQuadroDeRetornoKasaka").innerHTML =
      "✨ Você derrotou Kasaka o Chefe da Dangeon✨";
  } else if (
    vida > 69 &&
    fadiga < 31 &&
    forca > 50 &&
    agilidade > 30 &&
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
      SomaDoIndicadorDoNivel = SomaDoIndicadorDoNivel + 3;
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
      "❤️ Vida: -70% ⏩ Vida: " + vida + "%" + " ❌";
  }

  if (vida > 69) {
    document.getElementById("idVidaKasaka").innerHTML =
      "❤️ Vida: -70% ⏩ Vida: " + vida + "%" + " ✅";
  }

  if (fadiga > 30) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga : +70% ⏩ Fadiga: " + fadiga + "%" + " ❌";
  }

  if (fadiga < 31) {
    document.getElementById("idFadigaKasaka").innerHTML =
      "🪫Fadiga : +70% ⏩ Fadiga: " + fadiga + "%" + " ✅";
  }

  if (forca < 51) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 50 ⏩ Força: " + forca + " ❌";
  }

  if (forca > 50) {
    document.getElementById("idAgilidadeKasaka").innerHTML =
      "🦵 Agilidade: 50 ⏩ Força: " + forca + " ✅";
  }

  if (agilidade > 40) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 40 ⏩ Agilidade: " + agilidade + " ✅";
  }

  if (agilidade < 41) {
    document.getElementById("idForcaKasaka").innerHTML =
      "💪 Força: 40 ⏩ Agilidade: " + agilidade + " ❌";
  }
}

/*FIM DO BOTÃO ANALISAR LUTA Kasaka*/
