function classificar(nota) {
    if (nota >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

const classificarArrow = (nota) => nota >= 6 ? "Aprovado" : "Reprovado";