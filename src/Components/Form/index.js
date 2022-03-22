import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../Context";
import "./styles.css";

const Form = () => {
    const { submitData } = useMyContext();
    const [stickers, setStickers] = useState([]);
    const [counter, setCounter] = useState(0);
    const [observation, setObservation] = useState("");
    const navigate = useNavigate();

    const onChange = (ev) => {
        const isChecked = ev.target.checked;
        if (isChecked) {
            setStickers([...stickers, ev.target.value]);
        } else {
            const newStickers = stickers.filter((s) => s !== ev.target.value);
            setStickers(newStickers);
        }
    };

    const setCounterUp = () => {
        setCounter(counter + 1);
    };

    const setCounterDown = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const handleObsChange = (ev) => {
        setObservation(ev.target.value)
    };

    const sendData = () => {
        if(stickers && counter){
            submitData(stickers, counter, observation);
            navigate("/checkout")
        }
        else{
            alert("Não possuí quantidade e/ou adesivos")
        }
    };
    console.log("counter", counter);
    console.log("observation", observation);

    return (
        <div className="formContainer">
            <div className="formContainer-Header"></div>
            <div className="formContainer-Content">
                <div className="formContainer-Content--divCheckbox">
                    <h3>Quais adesivos:</h3>
                    <div>
                        <input
                            type="checkbox"
                            id="react"
                            name="adesivos"
                            value="React"
                            onChange={onChange}
                        />
                        <label htmlFor="react">React</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="vue"
                            name="adesivos"
                            value="Vue"
                            onChange={onChange}
                        />
                        <label htmlFor="vue">Vue</label>
                    </div>
                    <div>
                        <input
                            type="checkbox"
                            id="angular"
                            name="adesivos"
                            value="Angular"
                            onChange={onChange}
                        />
                        <label htmlFor="angular">Angular</label>
                    </div>
                </div>
                <div className="formContainer-Content--divInfo">
                    <h3>Quantos adesivos de cada?</h3>
                    <div className="formContainer-Content-divInfo--buttons">
                        <button onClick={setCounterDown}>-</button>
                        <input type="number" readOnly value={counter} />
                        <button onClick={setCounterUp}>+</button>
                    </div>
                    <h3>Observações</h3>
                    <div className="formContainer-Content--obsInfo">
                        <textarea
                            cols="22"
                            rows="7"
                            placeholder="Alguma duvida? Recado?"
                            value={observation}
                            onChange={handleObsChange}
                        />
                        <button onClick={sendData}>Enviar</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
