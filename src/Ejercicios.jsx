import React from "react";
import { useState } from 'react'
import './Estilos.css'

function Ejercicios(props) {

    const [curso, setCurso] = useState('React');
    const [software, setSoftware] = useState('Visual Studio Code');
    const [description, setDescription] = useState('Curso de React con Hooks');
    const [image, setImage] = useState('../images/3d.jpg')

    const changeCourse = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setCurso(valueInput);

        e.target.previousSibling.value = '';
    }
    const changeSoftware = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setSoftware(valueInput);

        e.target.previousSibling.value = '';
    }
    const changeDescription = (e) => {
        e.preventDefault();
        const valueInput = e.target.previousSibling.value;
        setDescription(valueInput);

        e.target.previousSibling.value = '';
    }
    
    const changeImage = (e) => {
        e.preventDefault();
        const valueInput = e.target.src;
        setImage(valueInput )
    }

    return (
        <div className="row">
            <div className="col-12 col-lg-6 bg-img d-flex justify-content-start align-items-center" style={{ background: `url(${image}) center/cover` }}>
                <div className="ms-4">
                    <h1 className="text-light">Curso de {curso}</h1>
                    <h5 className="text-light my-2">Software: {software}</h5>
                    <p className="text-light">{description}</p>
                    <button className="px-4 border">¡Inscribete!</button>
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center my-4">
                <form action="">
                    <div>
                        <input className="form-control pad" autoComplete="off" id="cursos" type="text" placeholder="Nombre del curso" />
                        <button className="px-3 border mt-3" onClick={changeCourse}>Actualizar</button>
                    </div>
                    <div className="my-4">
                        <input className="form-control pad" type="text" placeholder="Software" />
                        <button className="px-3 border mt-3" onClick={changeSoftware}>Actualizar</button>
                    </div>
                    <div>
                        <textarea className="form-control pad pad2" type="area-text" placeholder="Descripcion" />
                        <button className="px-3 border mt-3" onClick={changeDescription}>Actualizar</button>
                    </div>
                    <div className="mt-4" onClick={changeImage}>
                        <p className="fw-bolder">Nueva Imagen:</p>
                        <a href=""> <img src="../images/car.jpg" alt="" className="me-2" width="80px" height="50px" /></a>
                        <a href=""> <img src="../images/K6Rz.gif" alt="" className="me-2" width="80px" height="50px" /></a>
                        <a href=""> <img src="../images/film.jpg" alt="" className="me-2" width="80px" height="50px" /></a>
                        <a href=""> <img src="../images/3d.jpg" alt="" className="me-2" width="80px" height="50px" /></a>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Ejercicios