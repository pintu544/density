import React from 'react';

const Content = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between',color:'black' ,margin:'5%'}}>
      {/* First div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        <h2>EQ beats IQ</h2>
        
      </div>

      {/* Second div */}
      <div style={{ flex: 1, marginRight: '10px' }}>
        
        <p>
        
          People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
       
          
        </p>
      </div>

      {/* Third div */}
      <div style={{ flex: 1 }}>
        
        <p>
          Your content for the third div goes here.
          They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.
        </p>
      </div>
    </div>
  );
};

export default Content;
