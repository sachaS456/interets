export default function calculInterets(solde, taux, operations) {
    let soldeChangeant = solde;
    let interets = 0;

    for (let i = 1; i <= 12; i++) {
        const operationsInMonth = operations.filter((el) => {
            return (new Date(el.get('date')).getMonth()) + 1 === i
        });
        const operationsFirstQuinzaine = operationsInMonth.filter((el) => {
           return (new Date(el.get('date')).getDate()) < 16;
        });
        const operationsSecondQuinzaine = operationsInMonth.filter((el) => {
           return (new Date(el.get('date')).getDate()) > 15;
        });

        let depotTemp = 0;
        operationsFirstQuinzaine.forEach((op) => {
            if(op.get('type') === 0) {
                depotTemp += op.get('value');
            } else if (op.get('type') === 1) {
                soldeChangeant -= op.get('value');
            }
        });
        interets += (soldeChangeant * taux * 15) / 36_000;
        soldeChangeant += depotTemp;
        depotTemp = 0;

        operationsSecondQuinzaine.forEach((op) => {
            if(op.get('type') === 0) {
                depotTemp += op.get('value');
            } else if (op.get('type') === 1) {
                soldeChangeant -= op.get('value');
            }
        });
        interets += (soldeChangeant * taux * 15) / 36_000;
        soldeChangeant += depotTemp;

        console.log(soldeChangeant)
    }

    return soldeChangeant + interets;
}