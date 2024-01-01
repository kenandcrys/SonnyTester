import { useNavigate } from 'react-router-dom';

function Dressesview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Dressesview = () => {
    // function that navigates to dresses page
        navigate('/dressesview')
    };

    return(
        <div>
            <button href="#" onClick={Dressesview}>Dresses</button>
        </div>
    );
}

export default Dressesview;