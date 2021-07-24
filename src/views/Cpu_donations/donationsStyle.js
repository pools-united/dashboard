import { createGlobalStyle } from 'styled-components';


const DonationsStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Lato');

* {
	box-sizing: border-box;
}

.donated {
    width: 100%;
    text-align: center;
}


h1 {
	text-align: center;
}

#app {
	padding: 0 20px;
	width: 100%;
}

.timeline-container {
    display: flex;
    flex-direction: column;
    position: relative;
    margin: 40px 0;
}

.timeline-container::after {
    background-color: #e17b77;
    content: '';
    position: absolute;
    left: calc(50% - 2px);
    width: 4px;
    height: 100%;
}

.timeline-item {
    display: flex;
    justify-content: flex-end;
    padding-right: 30px;
    position: relative;
    margin: 10px 0;
    width: 50%;
}

.timeline-item:nth-child(odd) {
    align-self: flex-end;
    justify-content: flex-start;
    padding-left: 30px;
    padding-right: 0;
}

.timeline-item-content {
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 15px;
    position: relative;
    width: 560px;
    max-width: 86%;
    text-align: right;
}

.timeline-item-content::after {
    content: ' ';
    background-color: #fff;
    box-shadow: 1px -1px 1px rgba(0, 0, 0, 0.2);
    position: absolute;
    right: -7.5px;
    top: calc(50% - 7.5px);
    transform: rotate(45deg);
    width: 15px;
    height: 15px;
}

.timeline-item:nth-child(odd) .timeline-item-content {
    text-align: left;
    align-items: flex-start;
}

.timeline-item:nth-child(odd) .timeline-item-content::after {
    right: auto;
    left: -7.5px;
    box-shadow: -1px 1px 1px rgba(0, 0, 0, 0.2);
}

.timeline-item-content .tag {
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    top: 5px;
    left: 5px;
    letter-spacing: 1px;
    padding: 5px;
    position: absolute;
    text-transform: uppercase;
}

.donateTitle {
    width: 100%;
    text-align:center;
    font-weight: bold;
    display: block;
}

.timeline-item:nth-child(odd) .timeline-item-content .tag {
    left: auto;
    right: 5px;
}

.donationDesc{
    margin-top:unset !important;
    width:100%;
}

.donationImg {
    width: 100%;
    object-fit: contain;
}

.timeline-item-content time {
    color: #777;
    font-size: 12px;
    font-weight: bold;
  
}

.timeline-item-content p {
    font-size: 16px;
    line-height: 24px;
    margin: 15px 0;
    
}

.timeline-item-content a {
	color: #333;
	text-decoration: none;
    font-size: 14px;
    font-weight: bold;
}

// .timeline-item-content a::after {
//     content: ' ►';
//     font-size: 12px;
// }

.timeline-item-content .circle {
    background-color: #fff;
    border: 3px solid #e17b77;
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 10px);
    right: -40px;
    width: 20px;
    height: 20px;
    z-index: 100;
}

.timeline-item:nth-child(odd) .timeline-item-content .circle {
    right: auto;
    left: -40px;
}

@media only screen and (max-width: 1023px) {
    .timeline-item-content {
        max-width: 100%;
    }
}

@media only screen and (max-width: 767px) {
    .timeline-item-content,
    .timeline-item:nth-child(odd) .timeline-item-content {
        padding: 15px 10px;
        text-align: center;
        align-items: center;
    }

    .timeline-item-content .tag {
        width: calc(100% - 10px);
        text-align: center;
    }

    .timeline-item-content time {
      transform:translateY(-38px);
    }

.donateTitle {
    margin-top:36px;
}

    .timeline-item-content a {
        text-decoration: underline;
    }

    .timeline-item-content a::after {
        display: none;
    }
}

`;
 
export default DonationsStyle;