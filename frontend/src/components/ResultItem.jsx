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

const ResultItem = ({ name, value }) => {
    return (
        <div>
            <label htmlFor={`${name}`}>{nameMapping[name]}:</label>
            <input defaultValue={value} disabled id={`${name}`} />
        </div>
    )
}

export default ResultItem
