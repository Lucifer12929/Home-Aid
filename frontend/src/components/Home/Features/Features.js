import React from 'react'
import styled from 'styled-components'
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scroller,
} from "react-scroll";
import headeri from'./header.png'
import './Feature.css';



function Hero(){
  const exploreButtonHandle = () => {
        scroller.scrollTo('service', {
          duration: 500,
          delay: 10,
          smooth: true,
        });
      }
  return(
    <>
    <div id="hero">
    <section className='hero'>
      <div className='overlay'>
        <div className='wave'></div>
    <div class="main-banner wow fadeIn" id="top" data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container ">
      <div class="row ">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12 textf">
                    <h6>Home Service Provider</h6>
                    <h2>HOMEAID</h2>
                    <p>HomeAid offers home services such as electricians, plumbers, and mechanics from the nearest location as well as providing household needs online from electric, mechanical, and plumbing shops. With the daily job opportunity for local vendors, it makes it easier to find local vendors. . Thank you.</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="border-first-button scroll-to-section bfeature">
                      <a onClick={exploreButtonHandle} >Explore</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src={headeri} alt=""/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
  </section>
   
 
</div>
    </>
  )
}

// function Hero() {

//   const exploreButtonHandle = () => {
//     scroller.scrollTo('service', {
//       duration: 500,
//       delay: 10,
//       smooth: true,
//     });
//   }
//     return (
//         <Container>
//           <TextSection>
//             <div className="text">
//               <p className="long">NFT Marketplace for Creators</p>
//               <p className="short">Buy, sell and discover rare digital item</p>
//             </div>
//             <div className="buttons">
//               <button className="explore-button" onClick={exploreButtonHandle}>
//                 <p>Explore Store</p>
//               </button>
//             </div>
//           </TextSection>
//           <SliderSection>
//             <div className="carousel-div">
//               <div className="containeri">
//                 <img src={headeri}/>
//               </div>
              
            
//               {/* <div className="s-1">
//                 <img src="/images/sphere.png"/>
//               </div> */}
//             </div>

//           </SliderSection>
//         </Container>
//     )
// }

export default Hero

// const Container=styled.div`
//  position:relative;
//   width: 100%;
//   background: linear-gradient(180deg, #FFB7B7 0%, #727272 100%), radial-gradient(60.91% 100% at 50% 0%, #FFD1D1 0%, #260000 100%), linear-gradient(238.72deg, #FFDDDD 0%, #720066 100%), linear-gradient(127.43deg, #00FFFF 0%, #FF4444 100%), radial-gradient(100.22% 100% at 70.57% 0%, #FF0000 0%, #00FFE0 100%), linear-gradient(127.43deg, #B7D500 0%, #3300FF 100%);

//   height: 100vh;
//   display: flex;
//   justify-content: center;
//   border-bottom: 1px solid rgba(255, 255, 255, 0.67);
// `

// const TextSection=styled.div`
//   flex:1.3;
//   height: 550px;
//   margin-left: 15rem;
//   margin-top: 50px;
//   display: flex;
//   flex-direction: column;
//   .text {
//     flex:1;
//     .long {
//       margin: 0;
//       margin-top: 22px;
//       font-size: 80px;
//       font-weight: 700;
//       letter-spacing: 2.5px;
//       color: #0D004D;
//     }
//     .short {
//       margin-top: 35px;
//       color: rgba(255, 255, 255, 0.8);
//       font-size: 20px;
//       font-weight: 500;
//     }
//   }
//   .buttons {
//     padding-top: 40px;
//     flex:1;
//     button {
//       border: 1px solid white;
//       width: 190px;
//       height: 2.5rem;
//       font-family: Poppins;
//       font-size: 17px;
//       font-weight: 500;
//       color: white;
//       background: rgb(49,45,122);
//       background: linear-gradient(90deg, rgba(49,45,122,0.8799894957983193) 0%, rgba(136,24,158,0.9332107843137255) 37%, rgba(0,31,255,0.6839110644257703) 100%);
//       cursor: pointer;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       transition: opacity 0.25s;
//       &:hover {
//         opacity: 0.9;
//       }
//       &:active {
//         opacity: 0.6;
//       }
//     }
//   }
// `
// const SliderSection=styled.div`
//   flex:1;
 
//   margin-right: 15rem;
//   margin-top: 10rem;
//   height: 20rem;
//   display: flex;
//   align-items: center;
//   justify-content: end;
//   .carousel-div {
 
//     height: 100%;
//     width: 100%;
//     background: rgba( 255, 255, 255, 0.35 );
//     box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
//     backdrop-filter: blur( 4px );
//     -webkit-backdrop-filter: blur( 4px );
//     border-radius: 3px;
//     border: 1px solid rgba(255, 255, 255,0.6);
//     display: flex;
//     flex-direction: column;
//     position: relative;
//     cursor: pointer;
//     transition: all 0.25s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
//     .container {
//       height: 391px;
//       margin-right: 8px;
//       margin-left: 8px;
//       margin-top: 8px;
//       border-radius: 3px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         width: 100%;
      
//       }
//     }
//     .below {
//       height: 100%;
//       display: flex;
//       align-items: center;
//       .details {
//         display: flex;
//         flex-direction: column;
//         height: 63px;
//         width: 140px;
//         .nft-id {
//             height: 23px;
//             margin: 0;
//             margin-left: 10px;
//             margin-top: 8px;
//             font-size: 15px;
//             color: rgba(59, 127, 242, 0.82);
//             opacity: 0.7;
//         }
//         .nft-name {
//           margin: 0;
//           margin-left: 10px;
//           margin-top: 2px;
//           height: 30px;
//           font-size: 20px;
//           font-weight: 600;
//           background: -webkit-radial-gradient(rgba(60, 88, 208, 1), rgba(215, 141, 241, 0.93));
//           -webkit-background-clip: text;
//           -webkit-text-fill-color: transparent
//         }
//       }
      
//       }
//     }
//     .s-1 {
//       position: absolute;
//       height: 155px;
//       width: 155px;
//       right: -30px;
//       top: 390px;
//       display: flex;
//       justify-content: center;
//       align-items: center;
//       img {
//         width: 100%;
//       }
//     }
//     &:hover {
//       transform: scale(1.07);
//     }
//   }
// `