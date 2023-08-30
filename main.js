/* Consegna:
Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.
Consigli:
Ricordiamoci di inizializzare la variabile di contatore prima dell'inizio del ciclo while
Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
 */


let elementoSpesa;
let listaSpesa = ['banane', 'yogurt', 'pollo' , 'bresaola', 'tonno' , 'tacchino']
console.log(listaSpesa);
let i = -1
while (i < 5) {
    i++
    elementoSpesa = listaSpesa
  console.log(elementoSpesa[i]);
    
}