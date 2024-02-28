import "./styles.css";
import leftImage from '../../assets/1.png';
import rightImage from '../../assets/2.png';
import bottomImage from '../../assets/3.png';

function Section(){
    return(
        <div className="main-section">
                  <div className="section-container">
            <div className="left-section">
                <img src={leftImage} alt="leftImage"/>
            </div>
            <div className="right-section">
                <div className="top-section">
                    <h1>C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h1>
                </div>
                <div className="bottom-section">
                    <div className="b1">    
                            <li id="list1">C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</li>
                            <li> C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel. </li>
                    </div>
                    <div className="b2"><img src={rightImage} alt="rightImage" /></div>
                    <div className="b3">
                        <p>Government of India has awarded the <span>"National Energy Conservation Award 2018"</span>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</p>
                    </div>
                </div>    
            </div>
                  </div>
                  <div className="botom-section-container">
                      <div className="bsc1">
                        <p>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </p>
                      </div>
                      <div className="bsc2">
                          <div><img src={bottomImage} alt="bottomImage" /></div>
                          <div><p>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </p></div>
                      </div>
                      <div className="bsc3">
                           <div><h1>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</h1></div>
                           <div>
                              <p> CHEMICALS & PROCESS <span>|</span> POWER <span>|</span> WATER & WASTE WATER <span>|</span> OILS & GAS <span>|</span> PHARMA <span>|</span> SUGARS & DISTILLERIES <span>|</span> PAPER & PULP <span>|</span> MARINE & DEFENCE <span>|</span> METAL & MINING <span>|</span> FOOD & BEVERAGE <span>|</span> PETROCHEMICAL & REFINERIES <span>|</span> SOLAR <span>|</span> BUILDING <span>|</span> HVAC <span>|</span> FIRE FIGHTING <span>|</span> AGRICULTURE & RESIDENTIAL</p>
                           </div>
                      </div>
                  </div>
        </div>
        
    )
}

export default Section;