import { object } from 'prop-types'
import ResultItem from './ResultItem'

const Results = ({ data }) => {
    return (
        <div className="outputs">
            <div className="output">
                <h2>Розрахункові струми на першому рівні електропостачання</h2>
                <ResultItem
                    name="grinder"
                    value={data?.Is?.grinder.toFixed(2)}
                />
                <ResultItem
                    name="driller"
                    value={data?.Is?.driller.toFixed(2)}
                />
                <ResultItem
                    name="grouter"
                    value={data?.Is?.grouter.toFixed(2)}
                />
                <ResultItem name="saw" value={data?.Is?.saw.toFixed(2)} />
                <ResultItem name="press" value={data?.Is?.press.toFixed(2)} />
                <ResultItem
                    name="polisher"
                    value={data?.Is?.polisher.toFixed(2)}
                />
                <ResultItem name="shaper" value={data?.Is?.shaper.toFixed(2)} />
                <ResultItem name="fan" value={data?.Is?.fan.toFixed(2)} />
            </div>
            <div className="output">
                <h2>Результати для ШР</h2>
                <div>
                    <label htmlFor="Ku">
                        Груповий коефіцієнт використання:
                    </label>
                    <input
                        defaultValue={data?.Ku.toFixed(2)}
                        disabled
                        id="Ku"
                    />
                </div>
                <div>
                    <label htmlFor="n">Ефективна кількість ЕП:</label>
                    <input defaultValue={data?.n.toFixed(2)} disabled id="n" />
                </div>
                <div>
                    <label htmlFor="Kp">
                        Розрахунковий коефіцієнт активної потужності:
                    </label>
                    <input
                        defaultValue={data?.Kp.toFixed(2)}
                        disabled
                        id="Kp"
                    />
                </div>
                <div>
                    <label htmlFor="P">
                        Розрахункове активне навантаження:
                    </label>
                    <input defaultValue={data?.P.toFixed(2)} disabled id="P" />
                </div>
                <div>
                    <label htmlFor="Q">
                        Розрахункове реактивне навантаження:
                    </label>
                    <input defaultValue={data?.Q.toFixed(2)} disabled id="Q" />
                </div>
                <div>
                    <label htmlFor="S">Повна потужність:</label>
                    <input defaultValue={data?.S.toFixed(2)} disabled id="S" />
                </div>
                <div>
                    <label htmlFor="I">Розрахунковий груповий струм:</label>
                    <input defaultValue={data?.I.toFixed(2)} disabled id="I" />
                </div>
            </div>
        </div>
    )
}

Results.propTypes = {
    data: object,
}

export default Results
