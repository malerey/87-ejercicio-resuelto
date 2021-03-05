import './Tarjeta.css'

const Tarjeta = (props) => {

  return (
    <article className="tarjeta">
      <h2>{props.titulo}</h2>
      <h3>Precio: {props.precio}</h3>
      <img src={props.imagen} />
    </article>
  )
}

export default Tarjeta;


// Para que el codigo quede mas lindo:
// // desestructurar props: en lugar de poner props, desestructuro el objeto aca mismo
// // Parametros por defecto: por si el parametro no esta declarado en el componente
// const Tarjeta = ({ titulo = "No disponible", precio, imagen }) => {

//   return (
//     <article className="tarjeta">
//       <h2>{titulo}</h2>
//       <h3>Precio: {precio}</h3>
//       <img src={imagen} />
//     </article>
//   )
// }

// export default Tarjeta;
