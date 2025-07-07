import './Button.css'
import ceta from '../../assets/ceta-icon.svg'
 
function Button({arrow,buttonStyle,loading,children, ...props}){
    return(
        <button className={`button ${buttonStyle}`} {...props}>
            {children} {arrow && <img src={ceta} /> }
        </button>
    )
}

export default Button