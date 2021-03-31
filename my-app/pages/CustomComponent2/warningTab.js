import warningTabStyle from '../../styles/warningTab.module.css'

function WarningTab(){
    return <div class={warningTabStyle.body1}>
        <div class={warningTabStyle.container1}> 
            <h3 class={warningTabStyle.tab}>You Have Completed the Form</h3> 
            <p class={warningTabStyle.line1}>Thank You For Your Participation!</p>
            <p class={warningTabStyle.line2}>Return To <span class={warningTabStyle.homepage}>Home Page</span></p>
            <button class={warningTabStyle.okay_button}>Okay</button>
        </div>
    </div> 
}

export default WarningTab;

export {WarningTab};