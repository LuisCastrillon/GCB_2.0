import './contactUs.css';
import img from'../img/social/facebook.png';
import img1 from'../img/social/gorjeo.png';
import img2 from'../img/social/instagram.png';
import img3 from'../img/social/telegrama.png';
import img4 from'../img/social/whatsapp.png';

export const ContactUs = () => {
    const props = [img, img1, img2, img3, img4];
    return(
        <div className='contactPage'>
                <span className='span'></span>
            <div className='contact'>
                <h1>Contact Us</h1>
                <div className='imgContainer'>
                    {props.map(element => <div key={element} className='img'><img src={element} alt="" /></div>)}
                </div>
            </div> 
        </div>
    )
}