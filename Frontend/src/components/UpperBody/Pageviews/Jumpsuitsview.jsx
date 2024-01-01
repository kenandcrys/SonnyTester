import { useNavigate } from 'react-router-dom';

function Jumpsuitsview(){
 
    //React Router element that helps to navigate between pages
    const navigate = useNavigate();

    const Jumpsuitsview = () => {
    // function that navigates to jumpsuits page
        navigate('/jumpsuitsview')
    };

    return(
        <div>
            <button href="#" onClick={Jumpsuitsview}>Jumpsuits</button>
        </div>
    );
}

export default Jumpsuitsview;