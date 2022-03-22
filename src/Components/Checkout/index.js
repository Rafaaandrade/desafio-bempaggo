import React from 'react'
import { useMyContext } from '../../Context'
import './styles.css'

const Checkout = () => {
    const { formData } = useMyContext();
    const { adesivos, counter, obs } = formData;
    return (
        <div className="checkoutContainer">
            <h3>Confirme suas informações</h3>
            {formData ?
                <div>
                    <p>Adesivos selecionados: {adesivos.map((a) => (<span>{a} &nbsp;</span>))}</p>
                    <p>Quantidades selecionadas: {counter}</p>
                    {obs && <p>Observações: {obs}</p>}
                </div>
                : "NÃO EXISTE PEDIDO"}

        </div>
    )
}

export default Checkout