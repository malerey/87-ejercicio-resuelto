import './App.css';
import Tarjeta from './components/Tarjeta';
import imagenTriciclo from './img/triciclo.jpeg'

const App = () => {
  return (
    <div>
      <h1>Hola</h1>
      <Tarjeta
        // titulo="Monopatin"
        precio={2000}
        imagen={imagenTriciclo}
      />
      <Tarjeta
        titulo="Moto"
        precio={2500}
        imagen="https://d319yleido6tgg.cloudfront.net/stores/909/583/products/graffiti1-fb59cc3c44c81f2cdb15956978149655-240-0.jpg"
      />
      <Tarjeta
        titulo="Auto"
        precio={10000}
        imagen="https://d319yleido6tgg.cloudfront.net/stores/909/583/products/51-32e8fe65780afc7dfe15877407467793-640-0.jpg"
      />
      <Tarjeta
        titulo="Bicicleta"
        precio={500}
        imagen="https://d319yleido6tgg.cloudfront.net/stores/909/583/products/51-32e8fe65780afc7dfe15877407467793-640-0.jpg"
      />
      <Tarjeta 
      titulo="Triciclo" 
      precio={200}
      imagen="https://d319yleido6tgg.cloudfront.net/stores/909/583/products/51-32e8fe65780afc7dfe15877407467793-640-0.jpg" />
    </div>
  );
};

export default App;
