
function impostoDeRenda(CLT, PJ){
    let CLTmenosImposto, PJmenosImposto;
    CLT = 12 * (CLT + 700) + CLT + 0.08 * CLT;
    PJ = PJ * 12;
    if (CLT <= 21453.24){
        CLTmenosImposto = CLT;
    }
    else if (CLT <= 32151.48){
        CLTmenosImposto = CLT * 0.925;
    }
    else if (CLT <= 42869.16){
        CLTmenosImposto = CLT * 0.85;
    }
    else if (CLT <= 53565.72){
        CLTmenosImposto = CLT * 0.775;
    }
    else {
        CLTmenosImposto = CLT * 0.725;
    }
    if (PJ <= 21453.24){
        PJmenosImposto = PJ;
    }
    else if (PJ <= 32151.48){
        PJmenosImposto = PJ * 0.925;
    }
    else if (PJ <= 42869.16){
        PJmenosImposto = PJ * 0.85;
    }
    else if (PJ <= 53565.72){
        PJmenosImposto = PJ * 0.775;
    }
    else {
        PJmenosImposto = PJ * 0.725;
    }

    return "CLT: "+CLTmenosImposto + "\nPJ: " + PJmenosImposto;
}
console.log(impostoDeRenda(1000,1750));