import { addDoc, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import Swal from 'sweetalert2';
import { db } from '../firebase';
import { useState, useEffect } from 'react';
import { useParams, } from "react-router-dom";
function Formulario() {
    const { id } = useParams();
    const [formulario, setFormulario] = useState({
        nombre: '',
        puesto: '',
        fecha_contratacion: '',
    });


    const handleInputChange = (event) => {
        setFormulario({
            ...formulario,
            [event.target.name]: event.target.value
        });
    }


    async function guardarInformacion(event) {
        event.preventDefault();
        console.log(formulario);
        if(!id){
            await addDoc(collection(db, "empleados"), formulario);
        } else {
            await updateDoc(doc(db, "empleados", id), formulario);
        }
        Swal.fire(
            'Mensaje',
            'Formulado enviado a la base de datos',
            'success'
        ).then(() => {
            window.location.href = "/tabla";
        });
    }

    async function cargarCliente(id) {
        const docRef = doc(db, "empleados", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            setFormulario(docSnap.data());
        } else {
            console.log("No such document!");
        }
    }

    function tituloFormulario() {
        return id ? <h1>Editando</h1> : <h1>Nuevo registro</h1>;
    }

    useEffect(() => {
        if (id) {
            console.log(id);
            cargarCliente(id);

        }
    }, [id]);
    return (
        <>
        <code>{JSON.stringify(formulario)}</code>
            {tituloFormulario()}
            <form onSubmit={guardarInformacion}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Nombre</label>
                    <input type="text" className="form-control" name="nombre" value={formulario.nombre} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Puesto</label>
                    <input type="text" className="form-control" name="puesto" value={formulario.puesto} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Fecha contratacion</label>
                    <input type="date" className="form-control" name="fecha_contratacion" value={formulario.fecha_contratacion} onChange={handleInputChange} />
                </div>

                <button type="submit" className="btn btn-primary">Guardar</button>
            </form>

        </>
    );
}

export default Formulario;