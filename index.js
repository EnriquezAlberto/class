class Auto{
  constructor(nombre,patente, ruedas){
    this.nombre = nombre;
    this.patente = patente;
    this.ruedas = ruedas;
  }
}

const autoMio = new Auto("clio", "UFS", 4)

console.log(autoMio)


class Bicicleta{
  constructor(ruedas, volante, pedales, nitro){
    this.ruedas = ruedas;
    this.volante = volante;
    this.pedales = pedales;
    this.nitro = nitro;
  }
}

const bici = new Bicicleta(2,1,2,'no')

// Convertimos las propiedades de la bicicleta en un array
const propiedadesBici = Object.entries(bici);

// Utilizamos forEach para recorrer el array de propiedades
propiedadesBici.forEach(([clave, valor]) => {
  console.log(`${clave}: ${valor}`);
});

