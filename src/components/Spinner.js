import { ImSpinner9 } from 'react-icons/im';
import './Spinner.css'
const Spinner = () => {
    return (
        <div className="spinner-overlay">
            <ImSpinner9 className='spinner-icon' />
        </div>
    );
};

export default Spinner;