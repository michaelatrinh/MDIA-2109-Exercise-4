import textImageBoxStyle from '../../styles/textImageBox.module.css'

function TextImageBoxUI(){
    return <div className="main" style={{
        width:300,
        height:400,
    }}>
        <h3 className={textImageBoxStyle.h3}>Default Text</h3>
        <img src="http://placekitten.com/250/150" className={textImageBoxStyle.img}></img>
        
        <p className={textImageBoxStyle.p}><span className={textImageBoxStyle.span}>M</span>inions ipsum jeje tulaliloo baboiii tatata bala tu butt daa bappleees belloo! Jeje ti aamoo! Po kass para tú bee do bee do bee do. Poulet tikka masala tulaliloo para ti bananaaaa daa hana dul sae potatoooo.   </p>

        <button id={textImageBoxStyle.button}>Read More</button>
    </div>
}
    
export default TextImageBoxUI;