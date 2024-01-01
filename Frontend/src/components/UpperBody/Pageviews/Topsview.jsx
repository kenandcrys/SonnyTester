import { useNavigate } from 'react-router-dom';

function Topsview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Topsview = () => {
    // function that navigates to tops page
        navigate('/topsview')
    };

    return(
        <div>
            <button href="#" onClick={Topsview}>Tops</button>
        </div>
    );
}

export default Topsview;