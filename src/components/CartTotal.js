import React from 'react';
import { Link } from 'react-router-dom';

export default function CartColumn({value}) {
    const {carritoSubtotal,carritoIva,carritoTotal,borrarcarrito} = value;
    return (
        <React.Fragment>
            <div className="container">
                <div className="row justify-content-end">
                    <div className="col-10 mt-2 ms-sm-5  col-sm-8 text-capitalize text-end">
                        <Link to='/'>
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>borrarcarrito()}>Borrar Carrito</button>
                        </Link>
                        <h5>
                            <span className="text-title">subtotal</span>
                            <strong>USD {carritoSubtotal}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">iva</span>
                            <strong>USD {carritoIva}</strong>
                        </h5>
                        <h5>
                            <span className="text-title">total</span>
                            <strong>USD {carritoTotal}</strong>
                        </h5>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}