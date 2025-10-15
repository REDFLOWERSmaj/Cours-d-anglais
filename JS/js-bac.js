function BAC(){
//initialisation des sorties
    document.getElementById("resultat").innerHTML = ""
    document.getElementById("mention").innerHTML = ""
    document.getElementById("sortie").innerHTML = "./20"
    document.getElementById("stop").innerHTML = ""
//Notes / Prend les valeurs de chaque note rentrée
    //Controle Continu
    var ES1 = parseFloat(document.getElementById("ES1").value)
    var EST = parseFloat(document.getElementById("EST").value)     
    var EMC1 = parseFloat(document.getElementById("EMC1").value)
    var EMCT = parseFloat(document.getElementById("EMCT").value)
    var LVA1 = parseFloat(document.getElementById("LVA1").value)     
    var LVAT = parseFloat(document.getElementById("LVAT").value)
    var LVB1 = parseFloat(document.getElementById("LVB1").value)
    var LVBT = parseFloat(document.getElementById("LVBT").value)
    var EPST = parseFloat(document.getElementById("EPST").value)
    var SPE11 = parseFloat(document.getElementById("SPE11").value)
    var HG1 = parseFloat(document.getElementById("HG1").value)
    var HGT = parseFloat(document.getElementById("HGT").value)
    //Epreuves
    var FRE = parseFloat(document.getElementById("FRE").value)
    var FRO = parseFloat(document.getElementById("FRO").value)
    var PH = parseFloat(document.getElementById("PH").value)
    var GO = parseFloat(document.getElementById("GO").value)
    var SPE1T = parseFloat(document.getElementById("SPE1T").value)
    var SPE2T = parseFloat(document.getElementById("SPE2T").value)
    //Options
    var GR1 = parseFloat(document.getElementById("GR1").value)
    var GRT = parseFloat(document.getElementById("GRT").value)
    var L1 = parseFloat(document.getElementById("L1").value)
    var LT = parseFloat(document.getElementById("LT").value)
    var O11 = parseFloat(document.getElementById("O11").value)
    var O1T = parseFloat(document.getElementById("O1T").value)
    var O21 = parseFloat(document.getElementById("O21").value)
    var O2T = parseFloat(document.getElementById("O2T").value)
//easter egg
    if (SPE1T == -10 && SPE2T == -20){
        document.getElementById("resultat").innerHTML = "Sans BAC"
        document.getElementById("mention").innerHTML = "JULIEN BENOIT"
        document.getElementById("sortie").innerHTML = "Bravo vous êtes comme"
        return
    }
    if (O21 == -10 && O2T == -20){
        document.getElementById("resultat").innerHTML = "RESTEZ DANS L'IGNORANCE"
        document.getElementById("mention").innerHTML = "JULIEN BENOIT"
        document.getElementById("sortie").innerHTML = "Si vous avez un soucis faites comme"
        document.getElementById("stop").innerHTML = "<br/>ATTENTION, ANTOINE POLET peut s'énerver"
        return
    }
//Coefficient / Etabli les coefficiant correspondant à chaque note
    //Controle Continu
    var cES1 = 3
    var cEST = 3
    var cEMC1 = 1
    var cEMCT = 1
    var cLVA1 = 3
    var cLVAT = 3
    var cLVB1 = 3
    var cLVBT = 3
    var cEPST = 6
    var cSPE11 = 8
    var cHG1 = 3
    var cHGT = 3
    //Epreuves
    var cFRE = 5
    var cFRO = 5
    var cPH = 8
    var cGO = 10
    var cSPE1T = 16
    var cSPE2T = 16
    //Options
    var cGR1 = 3
    var cGRT = 3
    var cL1 = 3
    var cLT = 3
    var cO11 = 2
    var cO1T = 2
    var cO21 = 2
    var cO2T = 2

//Verification
    //Matières Obligatoires / Verifie si les matières obligatoires ont toutes étaient rentrées
    if (isNaN(ES1) || isNaN(EST) || isNaN(EMC1) || isNaN(EMCT) || isNaN(LVA1) || isNaN(LVAT) || isNaN(LVB1) || isNaN(LVBT) || isNaN(EPST) || isNaN(SPE11) || isNaN(HG1) || isNaN(HGT)
        || isNaN(FRE) || isNaN(FRO) || isNaN(PH) || isNaN(GO) || isNaN(SPE1T) || isNaN(SPE2T)){
        document.getElementById("resultat").innerHTML = "ATTENTION, il faut rentrer des notes dans toutes le matières obligatoires."
        return;
    }
    //Valeus Autorisés / Permet de vérifier si toutes les valeurs entrées sont incluses entre 0 et 20, si elle ne sont pas bonne on retourne la note invalide
    //Controle Continu
    if (ES1<0 || ES1>20){
        document.getElementById("resultat").innerHTML = "La note d'enseignement scientifique de Première doit être comprise entre 0 et 20."
        return
    }if (EST<0 || EST>20){
        document.getElementById("resultat").innerHTML = "La note d'enseignement scientifique de Terminale doit être comprise entre 0 et 20."
        return
    }if (EMC1<0 || EMC1>20){
        document.getElementById("resultat").innerHTML = "La note d'enseignement moral et civic de Première doit être comprise entre 0 et 20."
        return
    }if (EMCT<0 || EMCT>20){
        document.getElementById("resultat").innerHTML = "La note d'enseignement moral et civic de Terminale doit être comprise entre 0 et 20."
        return
    }if (LVA1<0 || LVA1>20){
        document.getElementById("resultat").innerHTML = "La note de langue vivante numéro 1 de Première doit être comprise entre 0 et 20."
        return
    }if (LVAT<0 || LVAT>20){
        document.getElementById("resultat").innerHTML = "La note de langue vivante numéro 1 de Terminale doit être comprise entre 0 et 20."
        return
    }if (LVB1<0 || LVB1>20){
        document.getElementById("resultat").innerHTML = "La note de langue vivante numéro 2 de Première doit être comprise entre 0 et 20."
        return
    }if (LVBT<0 || LVBT>20){
        document.getElementById("resultat").innerHTML = "La note de langue vivante numéro 2 de Terminale doit être comprise entre 0 et 20."
        return
    }if (EPST<0 || EPST>20){
        document.getElementById("resultat").innerHTML = "La note d'enseignement physique et sportif de Terminale doit être comprise entre 0 et 20."
        return
    }if (SPE11<0 || SPE11>20){
        document.getElementById("resultat").innerHTML = "La note de spécialité arrété en Première doit être comprise entre 0 et 20."
        return
    }if (HG1<0 || HG1>20){
        document.getElementById("resultat").innerHTML = "La note d'histoire géographie de Première doit être comprise entre 0 et 20."
        return
    }if (HGT<0 || HGT>20){
        document.getElementById("resultat").innerHTML = "La note d'histoire géographie de Terminale doit être comprise entre 0 et 20."
        return
    }
    //Epreuves
    if (FRE<0 || FRE>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve écrite de français doit être comprise entre 0 et 20."
        return
    }if (FRO<0 || FRO>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve orale de français doit être comprise entre 0 et 20."
        return
    }if (PH<0 || PH>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve de philosophie doit être comprise entre 0 et 20."
        return
    }if (GO<0 || GO>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve du grand oral doit être comprise entre 0 et 20."
        return
    }if (SPE1T<0 || SPE1T>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve de spécialité numéro 1 doit être comprise entre 0 et 20."
        return
    }if (SPE2T<0 || SPE2T>20){
        document.getElementById("resultat").innerHTML = "La note de l'épreuve de spécialité numéro 2 doit être comprise entre 0 et 20."
        return
    }
    //Options
    if (GR1<0 || GR1>20){
        document.getElementById("resultat").innerHTML = "La note de grec de Première doit être comprise entre 0 et 20."
        return
    }if (GRT<0 || GRT>20){
        document.getElementById("resultat").innerHTML = "La note de grec de Terminale doit être comprise entre 0 et 20."
        return
    }if (L1<0 || L1>20){
        document.getElementById("resultat").innerHTML = "La note de latin de Première doit être comprise entre 0 et 20."
        return
    }if (LT<0 || LT>20){
        document.getElementById("resultat").innerHTML = "La note de latin de Terminale doit être comprise entre 0 et 20."
        return
    }if (O11<0 || O11>20){
        document.getElementById("resultat").innerHTML = "La note d'option numéro 1 de Première doit être comprise entre 0 et 20."
        return
    }if (O1T<0 || O1T>20){
        document.getElementById("resultat").innerHTML = "La note d'option numéro 1 de Terminale doit être comprise entre 0 et 20."
        return
    }if (O21<0 || O21>20){
        document.getElementById("resultat").innerHTML = "La note d'option numéro 2 de Première doit être comprise entre 0 et 20."
        return
    }if (O2T<0 || O2T>20){
        document.getElementById("resultat").innerHTML = "La note d'option numéro 2 de Terminale doit être comprise entre 0 et 20."
        return
    }
    
    //Valeurs Options / Permet de ne pas compter les options dans le calcul total de la moyenne
    if (isNaN(GR1)){
        GR1 = 0
        cGR1 = 0
    }if (isNaN(GRT)){
        GRT = 0
        cGRT = 0
    }if (isNaN(L1)){
        L1 = 0
        cL1 = 0
    }if (isNaN(LT)){
        LT = 0
        cLT = 0
    }if (isNaN(O11)){
        O11 = 0
        cO11 = 0
    }if (isNaN(O1T)){
        O1T = 0
        cO1T = 0
    }if (isNaN(O21)){
        O21 = 0
        cO21 = 0
    }if (isNaN(O2T)){
        O2T = 0
        cO2T = 0
    }

//Calcul de la moyenne pondérée
    //Calcul la somme de toutes les notes multiplier chacune par leur coefficient correspondant
    var sum = (ES1*cES1 + EST*cEST + EMC1*cEMC1 + EMCT*cEMCT + LVA1*cLVA1 + LVAT*cLVAT + LVB1*cLVB1 + LVBT*cLVBT + EPST*cEPST + SPE11*cSPE11 + HG1*cHG1 + HGT*cHGT
               + FRE*cFRE + FRO*cFRO + PH*cPH + GO*cGO + SPE1T*cSPE1T + SPE2T*cSPE2T
               + (GR1*cGR1) + (GRT*cGRT) + (L1*cL1) + (LT*cLT) + (O11*cO11) + (O1T*cO1T) + (O21*cO21) + (O2T*cO2T))
    //Calcul la somme de touts les coefficiants
    var coef = (cES1 + cEST + cEMC1 + cEMCT + cLVA1 + cLVAT + cLVB1 + cLVBT + cEPST + cSPE11 + cHG1 + cHGT
                + cFRE + cFRO + cPH + cGO + cSPE1T + cSPE2T
                + cGR1 + cGRT + cL1 + cLT + cO11 + cO1T + cO21 + cO2T)
    //Fait le calcul global de la moyenne pondérée
    var moyenne = sum / coef

//Mention / admet ma mention correspondant à la moyenne
    if (moyenne <= 20) var mention = "Admis, <br/> Félicitations du jury"
    if (moyenne < 18) var mention = "Admis, <br/> Mention Très Bien"
    if (moyenne < 16) var mention = "Admis, <br/> Mention Bien"
    if (moyenne < 14) var mention = "Admis, <br/> Mention Assez Bien"
    if (moyenne < 12) var mention = "Admis, <br/> Sans Mention"
    if (moyenne < 10) var mention = "Non Admis, <br/> Rattrapage"
    if (moyenne < 8) var mention = "Non Admis"

//Sortie / renvoie la moyenne pondérée ainsi que la mention coresspondante
    document.getElementById("resultat").innerHTML = ""
    document.getElementById("mention").innerHTML = mention
    document.getElementById("sortie").innerHTML = moyenne.toFixed(2) + "/20"
}