import { useState } from 'react'
import { func } from 'prop-types'
import axios from '../api/axios'
import InputElement from './InputElement'

const Inputs = ({ setLoading, setData }) => {
    const [formData, setFormData] = useState({})
    const [dataPreset, setDataPreset] = useState(null)

    const setExampleData = () => {
        setDataPreset('example')
    }

    const setVariantData = () => {
        setDataPreset('variant')
    }

    const handleInputChange = (type) => (e) => {
        setFormData((prev) => {
            const newData = { ...prev }
            newData[type] = {
                ...newData[type],
                [e.target.name]: e.target.value,
            }
            return newData
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const controller = new AbortController()

        try {
            setLoading(true)

            const res = await axios.post('/calculate', formData, {
                headers: { 'Content-Type': 'application/json' },
                signal: controller.signal,
            })

            setData(res.data.data)
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }

        return () => controller.abort()
    }

    return (
        <div className="inputs">
            <h2>Вхідні дані</h2>
            <form onSubmit={handleSubmit}>
                <InputElement
                    name="grinder"
                    handleInputChange={handleInputChange('grinder')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="driller"
                    handleInputChange={handleInputChange('driller')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="grouter"
                    handleInputChange={handleInputChange('grouter')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="saw"
                    handleInputChange={handleInputChange('saw')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="press"
                    handleInputChange={handleInputChange('press')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="polisher"
                    handleInputChange={handleInputChange('polisher')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="shaper"
                    handleInputChange={handleInputChange('shaper')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <InputElement
                    name="fan"
                    handleInputChange={handleInputChange('fan')}
                    setFormData={setFormData}
                    dataPreset={dataPreset}
                />
                <button>Розрахувати</button>
                <button onClick={setExampleData} type="button">
                    Дані з контрольного прикладу
                </button>
                <button onClick={setVariantData} type="button">
                    Дані з варіанту (5)
                </button>
            </form>
        </div>
    )
}

Inputs.propTypes = {
    setLoading: func,
    setData: func,
}

export default Inputs
