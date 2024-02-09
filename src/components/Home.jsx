import './home.css';
import homeImg1 from '../img/about/about-barbearia-22-1024x683.jpg';
import homeImg2 from '../img/about/about-barbearia-106-1024x683.jpg';
export const Home = () => {
    return(
        <>
        <section className='blackHome'>
            <section className="home">
                <div className='homeContent'>
                    <h1>HAIRCUTS <br></br> & SHAVES</h1>
                    <h3>Old School Young Soul</h3>
                    <button>MAKE AN APPOINTMENT</button>
                </div>
            </section>
        </section>
        <section className='home_section2'>
            <section className='home_section2_cnt1'>
                <h1> | Barber Shop</h1>
                <p>Barbearia started as a dream back in 1998 in a small city called Guaranta do Norte, Brazil. In June of 2017 it became reality here, in the heart of the Historic Marietta Square. Our vintage style fits perfectly with the Marietta square vibe. Once you walk in, you will be welcomed by good music, our vintage barber chairs dating back to the 1920s and big smiles. We are a family owned and operated barbershop and our main goal is to provide our customers with high quality haircuts & shaves.</p>
            </section>
            <section className='home_section2_cnt2'>
                <div>
                    <img src={homeImg1} alt="" />
                </div>
                <div>
                    <img src={homeImg2} alt="" />
                </div>
            </section>
        </section>
        </>
    )
}