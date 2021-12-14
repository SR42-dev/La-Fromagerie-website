import "./AboutScreen.css";

const AboutScreen =() =>{
return(
<div className="aboutpage">
    <div className="homescreen__title">
         <b>Celebrate the joy of giving this Christmas by using offer code : 
          <u> MERRYCHEEZUS20 </u>and save upto 20% on your next order. Terms and Conditions apply.</b>
    </div>

    <h1 align="center">OUR TEAM</h1>
    <hr/>

<div class="row">
  <div class="column">
    <div class="card">
      <img  src="https://i.ibb.co/bQ0cC4c/sriram2.png" height="500vw" width="500vw"></img>
      <div class="container">
        <h2>Sriram R</h2>
        <p class="title">Backend Whiz</p>
        <p><b>The one with glasses that dont bend.Loudmouth.</b></p>
        <p>sriramradhakrishna42@gmail.com</p>
        <br/>
        <p><button class="button">Contact</button></p>
        <br/>
      </div>
    </div>
  </div>
  

  <div class="column">
    <div class="card">
      <img src="https://i.ibb.co/WkFSRcn/sundeep.jpg" height="500vw"></img>
      <div class="container">
        <h2>Sundeep A</h2>
        <p class="title">Server Supremo</p>
        
        <p><b> When can I get out of hostel mess ?</b></p>
        <email>sundeepannabattula@gmail.com</email>
        <br/>
        <br/>
        <p><button class="button">Contact</button></p>
        <br/>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
    <img src="https://i.ibb.co/x11TZtL/swapnil.png" height="500vw" width="400vw"></img>
      <div class="container">
        <h2>Swapnil Nair</h2>
        <p class="title">UI/UX Ninja</p>
        
        <p><b>A little bit obsessive. What to do... ;)</b></p>
        <email><i>swapnilnair747@gmail.com</i></email>
        <br/>
        <br/>
        <p><button class="button">Contact</button></p>
        <br/>
      </div>
    </div>
  </div>
</div>
<hr/>

</div>
);
};
export default AboutScreen;
