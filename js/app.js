console.log("cargando");
const urlApi="https://chicadev-ad6e.restdb.io/rest/merch?apikey=65786ebb40ec5e3b463054e5";
const appMerch= {
    listarMerch: ()=>{
    //Tomamos la referencia del contenedor donde se mostraran los libros

    const contenedor=document.getElementById("contenedorMerch");

    //creamos una variable vacia que contrendra todo el codigo HTML que vamos a instertar
    let contenidoHTML=``;


    fetch(urlApi).then(respuesta=>respuesta.json()).then(merch=>{
console.log(merch);
        for (const product of merch) {
            contenidoHTML += `

                <div class="col-md-4">
                    <div class="card">
                        <img src="${product.imagen}.jpg" class="card-img-top"/>
                        <div class="card-body">
                            <h5 class="card-title">${product.nombre}</h5>
                            <p class="card-text">${product.descripcion}</p>
                            <a href="#" class="btn btn-primary" id="boton" data-toggle="modal" data-target="#exampleModal" data-img="img/cap1.png">Ver Detalles</a>
                            <a href="#" onclick="appMerch.editarProduct('${product._id}')">Editar</a>
                            <a href="#" onclick="appMerch.eliminar('${product._id}','${product.nombre}')">Eliminar</a>
                    </div>
                </div>
            </div>
            `
        };
        contenedor.innerHTML=contenidoHTML;
    })
    
    },
    eliminar: (idAEliminar, nombreABorrar) => {
        Swal.fire({
            title: `Seguro que quiere borrar la categoria ${nombreABorrar}?`,
            text: "Todos los hilos se eliminaran con el.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Borrar',
        }).then((result) => {
            if (result.isConfirmed) {
                if (result.isConfirmed) {
                    fetch(`https://chicadev-ad6e.restdb.io/rest/merch/${idAEliminar}?apikey=65786ebb40ec5e3b463054e5`, {
                        method: 'DELETE'
                    })
                        .then(response => {
                            console.log(response);
                            return appMerch.listarMerch();
                        }).then(response => {
                            Swal.fire({
                                position: "center",
                                icon: "success",
                                title: `${nombreABorrar} fue eliminado con exito.`,
                                showConfirmButton: false,
                                timer: 1500
                            });
                        });
                }
            }
        })

    },
    añadirMerch: () =>{

        const id = document.getElementById("txtId")
        const nombre = document.getElementById("txtNombre")
        const descripcion = document.getElementById("txtDescripcion")
        const imagen = document.getElementById("txtImg")
        
        const añadirMerch = {
            "nombre": nombre.value,
            "descripcion": descripcion.value,
            "imagen": imagen.value,
            
        };

        let metodoHTTP = "";
        let urlApi = "";

        if (id.value === "") {
            metodoHTTP = "POST";
            urlApi = 'https://chicadev-ad6e.restdb.io/rest/merch?apikey=65786ebb40ec5e3b463054e5';

        } else {
            metodoHTTP = "PUT";
            urlApi = `https://chicadev-ad6e.restdb.io/rest/merch/${id.value}?apikey=65786ebb40ec5e3b463054e5`;

        }

        fetch(urlApi, {
            method: metodoHTTP,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(añadirMerch)
        }).then(response => {
            //window.location.href = "merch.html";
        });

    },

    editarMerch: (idEdit) =>{
        urlApi = `https://chicadev-ad6e.restdb.io/rest/merch/${idEdit}?apikey=65786ebb40ec5e3b463054e5`;   
        fetch(urlApi)
        .then(response => response.json())
        .then(merch => {
            document.getElementById("txtId").value = comun._id;
            document.getElementById("txtcoca_cola_favorita").value = comun.coca_cola_favorita;
            document.getElementById("txtde").value = comun.de;
            document.getElementById("txtimgUrl").value = comun.imgUrl;
        })
    }
}

appMerch.listarMerch();
