import { useNavigate } from 'react-router-dom';

function Activewearview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Activewearview = () => {
    // function that navigates to activewear page
        navigate('/activewearview')
    };

    return(
        <div>
            <button href="#" onClick={Activewearview}>Activewear</button>
        </div>
    );
}

export default Activewearview;