import React from 'react';
import Card from './Cards';
import Sdata from "./Sdata";

function Ncard() {
  return (
    <div>
      {Sdata.map((val) => (
        <Card
          key={val.id}
          imgsrc={val.imgsrc}
          title={val.title}
          sname={val.sname}
          link={val.link}
        />
      ))}
    </div>
  );
}

export default Ncard;



{/* <Card
  imgsrc={Sdata[0].imgsrc}
  title={Sdata[0].title}
  sname={Sdata[0].sname}
  link={Sdata[0].link}
/>
<Card
  imgsrc={Sdata[1].imgsrc}
  title={Sdata[1].title}
  sname={Sdata[1].sname}
  link={Sdata[1].link}
/>
<Card
  imgsrc={Sdata[2].imgsrc}
  title={Sdata[2].title}
  sname={Sdata[2].sname}
  link={Sdata[2].link}
/> */}


//