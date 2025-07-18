import"./ContacForm.css"
import Button from '../../components/Button/Button'
import { useEffect, useState } from "react"

function ContacForm (){
    const [FormData,setFormData] = useState({
        name:'',
        email:'',
        message:''
    })
    const [isFormValid, setIsFormValid] = useState(false)
    const [formSubmitLoading, setFormSubmitLoading] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false)

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if (isFormValid){
            setFormSubmitLoading(true)
            try{
                const response = await fetch('https://api.web3forms.com/submit', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        ...FormData,
                        access_key: "3e36036a-cad1-4e15-bac5-28e5e8fae7bb"
                    }) 
                })
            if (response.ok){
                setFormSubmitted(true)
            } else{
                alert('Erro ao enviar')
            }

            } catch (e) {
                alert('Erro:', e)
            } finally{
                setFormSubmitLoading(false)
            }
            
        }
    }

    useEffect(() =>{
        const isValidEmail = (email) => {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return emailRegex.test(email)
        }
        const isValid = FormData.name.trim() && 
        FormData.email.trim() && 
        isValidEmail(FormData.email) &&
        FormData.message.trim()
        
        setIsFormValid(isValid)
    }, [FormData])

    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...FormData,
            [name]:value
        })
    }

    return(
                <div className="contact-form d-flex fd-column al-center">
                    <h2>We love meeting new people and helping them.</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="d-flex form-group">
                            <input className="form-input"
                            type="text" 
                            id="name"
                            name="name"
                            placeholder="Name *"
                            onChange={handleChange}
                        />
                        <input className="form-input"
                            type="email" 
                            id="email"
                            name="email"
                            placeholder="Email *"
                            onChange={handleChange}
                        />
                        </div>
                        <div className="d-flex form-group">
                        <textarea 
                            className="form-input"
                            id="message"
                            name="message"
                            placeholder="Message *"
                            onChange={handleChange}
                            rows="4"
                        ></textarea>
                        </div>
                        <div className="al-center d-flex jc-end form-group ">
                            {formSubmitted && <p className="text-primary">Sucesso</p>}
                            <Button type="submit" buttonStyle="secondary" disabled={!isFormValid || formSubmitLoading}>
                                Enviar
                            </Button>
                        </div>
                    </form>
                </div>
    )
}

export default ContacForm