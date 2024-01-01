import { useNavigate } from 'react-router-dom';

function Swimwearview(){

    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Swimwearview = () => {
    // function that navigates to swimwear page
        navigate('/swimwearview')
    };

    return(
        <div>
            <button href="#" onClick={Swimwearview}>Swimwear</button>
        </div>
    );
}

export default Swimwearview;