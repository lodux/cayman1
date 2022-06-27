import { useNavigate } from 'react-router-dom'
import './custom-button.styles.scss'

const CustomButton = ({ testo, path }) => {
    const navigate = useNavigate()

    return (
        <button 
            className='custom-button'
            onClick={() => navigate(path, { replace: true })}
        >
            <span>{testo}</span>
        </button>
    )
}

export default CustomButton