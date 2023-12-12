console.log("cargando");
const urlApi="https://chicadev-ad6e.restdb.io/rest/merch?apikey=65786ebb40ec5e3b463054e5";
const appMerch= {
    listarMerch: ()=>{
    //Tomamos la referencia del contenedor donde se mostraran los libros

    const contenedor=document.getElementById("contenedorMerch");

    //creamos una variable vacia que contrendra todo el codigo HTML que vamos a instertar
    let contenidoHTML=`
    <h2 class="mb-4">Nuestro merch</h2>
  
    <div class="row">
    `


    fetch(urlApi).then(respuesta=>respuesta.json()).then(merch=>{
console.log(merch);
        for (const product of merch) {
            contenidoHTML += `
            <div class="col-md-4">
                <div class="card">
                    <img src="${product.imagen}" class="card-img-top"/>
                    <div class="card-body">
                        <h5 class="card-title">${product.nombre}</h5>
                        <p class="card-text">${product.descripcion}</p>
                        <a href="#" class="btn btn-primary" id="boton" data-toggle="modal" data-target="#exampleModal" data-img="img/cap1.png">Ver Detalles</a>
                        <a href="#" onclick="appMerch.editarProduct('${product._id}')">Editar</a>
                        <a href="#" onclick="appMerch.eliminarProduct('${product._id}','${product.nombre}')">Eliminar</a>
            
                    </div>
                </div>
            </div>
            `
        };
        contenedor.innerHTML=contenidoHTML;
    })
    
    }
}
   /*eliminarProduct: (idAEliminar, nombreABorrar)=>{
      Swal.fire({
        title: `Está seguro de que desea borrar ${nombreABorrar}?`,
        text: "Esto no se puede revertir",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Si, quiero borrarlo',
        confirmButtonText: 'Si, quiero borrarlo'
      }).then((result) => {
        if (result.isConfirmed) {
            const urlApi=`https://biblioisp20-fd75.restdb.io/rest/libros/${idAEliminar}?apikey=64f8c711688854c6ec0bfe8c`
        fetch(urlApi, {
          method: 'DELETE'
          })
          .then(response => {
            console.log(response);
            return applibros.listarLibros();
          }).then(response =>{
            Swal.fire(
              'Eliminado!',
              `El libro ${nombreABorrar} fue borrado .`,
              'satisfactoriamente'
            )
          });
          }

        });
     }, */
      
  /*  libroAGuardar:()=>{
       const txtId=document.getElementById("txtId");
       const txtNombre=document.getElementById("txtNombre");
        const txtPaginas=document.getElementById("txtPaginas");
        const txtAutor=document.getElementById("txtAutor");
        const txtEditorial=document.getElementById("txtEditorial");
        const txtPortadaUrl=document.getElementById("txtPortadaUrl");
        const txtSinopsis=document.getElementById("txtSinopsis");
        const txtGenero=document.getElementById("txtGenero");
        let urlApi='';
        let metodohttp='';
        if(txtId.value==='')
        {
        urlApi="https://biblioisp20-fd75.restdb.io/rest/libros?apikey=64f8c711688854c6ec0bfe8c";
        metodohttp='POST';
        } 
        else{
        urlApi=`https://biblioisp20-fd75.restdb.io/rest/libros/${txtId.value}?apikey=64f8c711688854c6ec0bfe8c`;
        metodohttp='PUT';
        }
        const libroAGuardar = {
            "nombre": txtNombre.value,
            "paginas": txtPaginas.value,
            "autor": txtAutor.value,
            "editorial": txtEditorial.value,
            "portadaurl": txtPortadaUrl.value,
            "sinopsis": txtSinopsis.value,
            "genero": txtGenero.value,

            };
            console.log(libroAGuardar)

            fetch(urlApi, {
                method: metodohttp,
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(libroAGuardar)
                })  
                .then(response => {
                  console.log(response);
                  window.location.href="index.html";
                });
    },*/
   /* editarLibro:(idLibroAEDitar)=>{
        const urlApi=`https://biblioisp20-fd75.restdb.io/rest/libros/${idLibroAEDitar}?apikey=64f8c711688854c6ec0bfe8c`;
 
        fetch(urlApi
            ).then(res => res.json())
              .then(libro => {
                document.getElementById("txtId").value=libro._id;
                document.getElementById("txtNombre").value=libro.nombre;
                document.getElementById("txtPaginas").value=libro.paginas;
                document.getElementById("txtAutor").value=libro.autor;
                document.getElementById("txtEditorial").value=libro.editorial;
                document.getElementById("txtPortadaUrl").value=libro.portada_url;
                document.getElementById("txtSinopsis").value=libro.sinopsis;
                document.getElementById("txtGenero").value=libro.genero;

                const ventanaEditar=document.getElementById ("agregarEditarModal");
                let ventana = new bootstrap.Modal(ventanaEditar);
                ventana.show();

                });
    }
}
*/

appMerch.listarMerch();