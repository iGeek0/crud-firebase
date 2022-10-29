import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from '../firebase';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';

function Tabla() {
    const [datos, setDatos] = useState([]);

    const getData = async () => {
        onSnapshot(collection(db, "empleados"), (querySnapshot) => {
            console.log(querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }));
            setDatos(querySnapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }));
        });
    };

    const eliminar = async (id) => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteDoc(doc(db, "empleados", id));
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    };

    useEffect(() => {
        getData();
    }, []);

    return (<table className="table table-bordered">
        <thead className='table-dark'>
            <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Puesto</th>
                <th>Fecha contratacion</th>
                <th>Opciones</th>
            </tr>
        </thead>
        <tbody>

            {datos.map((dato, index) => (
                <tr key={dato.id}>
                    <th>{index + 1}</th>
                    <td>{dato.nombre}</td>
                    <td>{dato.puesto}</td>
                    <td>
                        {new Date(dato.fecha_contratacion).toLocaleDateString("es-MX")}
                    </td>
                    <td className="text-center">
                        <button type="button" class="btn btn-danger" onClick={() => eliminar(dato.id)}>Eliminar</button>
                        <Link class="btn btn-primary ms-2" to={`/formulario/${dato.id}`}>Editar</Link>
                    </td>
                </tr>
            ))}
        </tbody>
    </table>);
}

export default Tabla;