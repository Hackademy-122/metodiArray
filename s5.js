function operazione(nElementi, operazione){
    let a = [];
    let b = [];
 
    for (let i = 0; i < nElementi; i++) {
      a.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
      b.push(Math.floor(Math.random() * (10 - 1 + 1) + 1))
    }
     let risultato1 = a.reduce((acc, el) => acc + el);
     let risultato2 = b.reduce((acc, el) => acc + el);
  
     switch (operazione) {
      case 'somma':
        c.push(risultato1 + risultato2);
        break;
      case 'sottrazione':
        c.push(risultato1 - risultato2);
        break;
      case 'divisione':
        c.push(+(risultato1 / risultato2).toFixed(2));
        break;
      case 'moltiplicazione':
        c.push(risultato1 * risultato2);
        break;
      default:
        console.log('Operazione non esistente');
    }
  }
  
  let nElementi = 10;
  let operazioneScelta = 'somma';
  let c = [];
  
  operazione(nElementi, operazioneScelta, c);
  console.log(c);
