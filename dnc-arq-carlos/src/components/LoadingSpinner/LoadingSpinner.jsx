import"./LoadingSpinner.css"
import LoadingSpinnerIMG from '../../assets/LoadingSpinner.gif'

function LoadingSpinner (){
    return(
        <div className="d-flex al-center jc-center loading-overlay-container">
            <img src={LoadingSpinnerIMG} alt="Loading" height="80px"/>
        </div>
    )
}

export default LoadingSpinner