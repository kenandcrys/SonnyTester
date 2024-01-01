import { useNavigate } from 'react-router-dom';

function Bottomsview(){
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Bottomsview = () => {
    // function that navigates to bottoms page
        navigate('/bottomsview')
    };

    return(
        <div>
            <button href="#" onClick={Bottomsview}>Bottoms</button>
        </div>
    );
}

export default Bottomsview;