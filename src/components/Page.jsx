import './page.css';

export const Page = (props) => {
    return(
        <section className='blackPage'>
            <img className='bgImg' src={props.data.bgImg} alt="" />
            <section className='page'>
                <div className='pageData'>
                    <h1>{props.data.title}</h1>
                    <h3>{props.data.subTitle}</h3>
                    <div><img src={props.data.downArrow} alt="" /></div>
                </div>
            </section>
        </section>
    )
}