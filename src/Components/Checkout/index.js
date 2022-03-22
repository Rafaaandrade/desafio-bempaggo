import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useMyContext } from '../../Context';
import './styles.css';

const Checkout = () => {
    const { formData, removeData } = useMyContext();
    const { adesivos, counter, obs } = formData;
    const navigate = useNavigate();

    const returnPage = () => {

        navigate("/");
        removeData();
    }
    return (
        <div className="checkoutContainer">
            <div>

                {adesivos && counter ?
                    <div className="checkoutContainer-Content">
                        <h3>Informações do pedido</h3>
                        <p>Adesivos selecionados: {adesivos.map((a) => (<span key={a}>{a} &nbsp;</span>))}</p>
                        <p>Quantidades selecionadas: <span>{counter}</span></p>
                        {obs && <p>Observações: <span>{obs}</span></p>}
                        <button onClick={returnPage}>Voltar</button>
                    </div> :
                    <div className="checkoutContainer-Content">
                        <h4>
                            Nenhum pedido foi realizado
                        </h4>
                        <button onClick={returnPage}>Voltar</button>
                    </div>
                }

            </div>

        </div>
    )
}

export default Checkout