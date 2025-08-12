import './App.css'

function App() {

  return (
    <>
      <div>
        <div className='header' >
          <img src='./left.png' alt='Left' width={20} height={20} />
          <h1 className='title' >Terms & Conditions</h1>
        </div>
        <p className='text' >This Privacy Policy describes how TapAndGo Limited ("the Platorm," "we," "us," or "our")  collects, uses, processes, and protects your personal data when you use our mobile  application ("the App") and related services.
        <br/><br/>
          We are commi ed to protec ng your privacy and handling your personal data in a  transparent and secure manner, in accordance with the Data Protec on Act, 2019 (DPA) and  other applicable laws of Kenya.
        <br/><br/>
          By using our App and services, you agree to the collec on and use of your informa on in  accordance with this Privacy Policy.
          If you <span className='span' >do not</span> agree with the terms of this Privacy Policy,  <span className='span' >please do not</span> use our App or services.
        <br/><br/>
          <span className='span' >1. Who We Are</span><br/>
          TapAndGo Limited  [Company Address]  P.O. Box [Company P.O. Box]  Nairobi, Kenya  Email: [Company Email Address]  Phone: [Company Phone Number]  We are registered as a Data Controller with the Office of the Data Protec on Commissioner  (ODPC) in Kenya.</p>

        <div className='buttons' >
          <button className='accept'  >Accept</button>
          <button className='decline' >Decline</button>
        </div>
      </div>
    </>
  )
}

export default App
