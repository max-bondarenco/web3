import { func, string } from 'prop-types'
import { useEffect, useState } from 'react'

const variantDefaults = {
    grinder: { kkd: 0.92, cos: 0.9, U: 0.38, n: 4, P: 24, K: 0.15, tg: 1.33 },
    driller: { kkd: 0.92, cos: 0.9, U: 0.38, n: 2, P: 14, K: 0.12, tg: 1 },
    grouter: { kkd: 0.92, cos: 0.9, U: 0.38, n: 4, P: 42, K: 0.15, tg: 1.33 },
    saw: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 36, K: 0.3, tg: 1.59 },
    press: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 20, K: 0.5, tg: 0.75 },
    polisher: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 40, K: 0.25, tg: 1 },
    shaper: { kkd: 0.92, cos: 0.9, U: 0.38, n: 2, P: 32, K: 0.2, tg: 1 },
    fan: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 20, K: 0.65, tg: 0.75 },
}

const exampleDefaults = {
    grinder: { kkd: 0.92, cos: 0.9, U: 0.38, n: 4, P: 20, K: 0.15, tg: 1.33 },
    driller: { kkd: 0.92, cos: 0.9, U: 0.38, n: 2, P: 14, K: 0.12, tg: 1 },
    grouter: { kkd: 0.92, cos: 0.9, U: 0.38, n: 4, P: 42, K: 0.15, tg: 1.33 },
    saw: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 36, K: 0.3, tg: 1.52 },
    press: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 20, K: 0.5, tg: 0.75 },
    polisher: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 40, K: 0.2, tg: 1 },
    shaper: { kkd: 0.92, cos: 0.9, U: 0.38, n: 2, P: 32, K: 0.2, tg: 1 },
    fan: { kkd: 0.92, cos: 0.9, U: 0.38, n: 1, P: 20, K: 0.65, tg: 0.75 },
}

const nameMapping = {
    grinder: 'Шліфувальний верстат',
    driller: 'Свердрильний верстат',
    grouter: 'Фугувальний верстат',
    saw: 'Циркулярна пила',
    press: 'Прес',
    polisher: 'Полірувальний верстат',
    shaper: 'Фрезерний верстат',
    fan: 'Вентилятор',
}

const InputElement = ({ handleInputChange, name, dataPreset, setFormData }) => {
    const [defaultValues, setDefaultValues] = useState({})

    useEffect(() => {
        if (dataPreset === 'example') {
            setDefaultValues(exampleDefaults[name])
            setFormData((prev) => ({ ...prev, [name]: exampleDefaults[name] }))
        } else if (dataPreset === 'variant') {
            setDefaultValues(variantDefaults[name])
            setFormData((prev) => ({ ...prev, [name]: variantDefaults[name] }))
        }
    }, [dataPreset, name, setFormData])

    return (
        <div>
            <h3>{nameMapping[name]}</h3>
            <div>
                <label htmlFor={`kkd-${name}`}>
                    Номінальне значення коефіцієнта корисної дії ЕП:
                </label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.kkd}
                    id={`kkd-${name}`}
                    step="0.01"
                    name="kkd"
                    required
                    min="0"
                    max="1"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`cos-${name}`}>
                    Коефіцієнт потужності навантаження:
                </label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.cos}
                    id={`cos-${name}`}
                    step="0.01"
                    name="cos"
                    required
                    min="0"
                    max="1"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`U-${name}`}>Напруга навантаження, кВ:</label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.U}
                    id={`U-${name}`}
                    step="0.01"
                    name="U"
                    required
                    min="0"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`n-${name}`}>Кількість ЕП:</label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.n}
                    id={`n-${name}`}
                    step="1"
                    name="n"
                    required
                    min="0"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`P-${name}`}>
                    Номінальна потужність ЕП, кВт:
                </label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.P}
                    id={`P-${name}`}
                    step="0.01"
                    name="P"
                    required
                    min="0"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`K-${name}`}>
                    Номінальна потужність ЕП, кВт:
                </label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.K}
                    id={`K-${name}`}
                    step="0.01"
                    name="K"
                    required
                    min="0"
                    max="1"
                    type="number"
                />
            </div>
            <div>
                <label htmlFor={`tg-${name}`}>
                    Коефіцієнт реактивної потужності:
                </label>
                <input
                    onChange={handleInputChange}
                    defaultValue={defaultValues?.tg}
                    id={`tg-${name}`}
                    step="0.01"
                    name="tg"
                    required
                    min="0"
                    type="number"
                />
            </div>
        </div>
    )
}

InputElement.propTypes = {
    handleInputChange: func,
    name: string,
    dataPreset: string,
    setFormData: func,
}

export default InputElement
