import './gallery.css'
import img from'../img/gallery/1-galeria-2021-barbearia.jpg';
import img1 from'../img/gallery/2-galeria-2021-barbearia.jpg';
import img2 from'../img/gallery/3-galeria-2021-barbearia.jpg';
import img3 from'../img/gallery/4-galeria-2021-barbearia.jpg';
import img4 from'../img/gallery/5-galeria-2021-barbearia.jpg';
import img5 from'../img/gallery/6-galeria-2021-barbearia.jpg';
import img6 from'../img/gallery/7-galeria-2021-barbearia.jpg';
import img7 from'../img/gallery/8-galeria-2021-barbearia.jpg';
import img8 from'../img/gallery/9-galeria-2021-barbearia.jpg';
import img9 from'../img/gallery/10-galeria-2021-barbearia.jpg';
import img10 from'../img/gallery/11-galeria-2021-barbearia.jpg';
import img11 from'../img/gallery/12-galeria-2021-barbearia.jpg';
import img13 from'../img/gallery/14-galeria-2021-barbearia.jpg';
import img14 from'../img/gallery/15-galeria-2021-barbearia.jpg';
import img17 from'../img/gallery/18-galeria-2021-barbearia.jpg';
import img18 from'../img/gallery/19-galeria-2021-barbearia.jpg';
import img19 from'../img/gallery/20-galeria-2021-barbearia.jpg';
import img20 from'../img/gallery/21-galeria-2021-barbearia.jpg';
import img21 from'../img/gallery/22-galeria-2021-barbearia.jpg';
import img22 from'../img/gallery/23-galeria-2021-barbearia.jpg';
import img23 from'../img/gallery/Barbearia-2.jpg';
import img24 from'../img/gallery/Barbearia-7.jpg';
import img25 from'../img/gallery/Barbearia-11.jpg';
import img26 from'../img/gallery/Barbearia-14.jpg';
import img27 from'../img/gallery/Barbearia-21.jpg';
import img28 from'../img/gallery/Barbearia-52.jpg';
import img29 from'../img/gallery/Barbearia-129.jpg';
import img30 from'../img/gallery/Barbearia-220.jpg';


export const Gallery = () => {
    const props = [img, img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img13, img14, img17, img18, img19, img20, img21, img22, img23, img24, img25, img26, img27, img28, img29, img30]
    return(
        <div className='galleryPage'>
                <span className='span'></span>
            <div className='gallery'>
                <h1>Gallery</h1>
                <div className='photosContainer'>
                    {props.map(element => <div key={element} className='photo'><img src={element} alt="" /></div>)}
                </div>
            </div> 
        </div>
    )
}
