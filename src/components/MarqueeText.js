import Marquee from 'react-fast-marquee'

const MarqueeText = () => {
    return(
        <>
        <div style={{position : "fixed" , bottom : 0}}>
        {/* <span style={{display : 'inline' , backgroundColor : "black" , color : 'yellow' , float : "left" , opacity : 0.7}}> Breaking News</span> */}
        <Marquee style={{ backgroundColor : "red" , color : "white"}}>
            <span style={{margin: "0 15px"}}>Elon Musk calls US media and schools 'racist against whites & Asians' - CNBC.</span>
            <span style={{margin: "0 15px"}}>Belarusian opposition says it damaged Russian warplane.</span>
            <span style={{margin: "0 15px"}}>Ukraine war: How Russia took the south - and then got stuck.</span>
            <span style={{margin: "0 15px"}}>People marched on the presidential palace in Mexico City, where organisers claim 500,000 gathered.</span>
        </Marquee>
        </div>
        </>
    );
}

export default MarqueeText;