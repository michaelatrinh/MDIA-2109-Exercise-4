import contactPageStyle from '../styles/contactPage.module.css'

function ContactPage(){
    return <div class={contactPageStyle.body}>
        <div class={contactPageStyle.container}>
        <h3 class={contactPageStyle.login}>LOGIN</h3>
        <p>Email</p>
        <input class={contactPageStyle.input_1}></input>
        <p>Password</p>
        <input class={contactPageStyle.input_2}></input>

        <br></br><br></br>

        <button class={contactPageStyle.submit}>LOGIN</button>
        </div>
    </div>
}
  
export default ContactPage; 