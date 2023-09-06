import { Paper, Button } from "@mui/material";
import styles from './ThreePaper.module.css';

const ThreePaper = () => {
  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
      <h1 style={{margin:'5%'}}>Open Vacancies</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           
          {/* First Stick */}
          <div style={{ background: '#ffffff', height: '200px', margin: '5%', width: '400px', borderRadius: '10px' }}>
            {/* Content for the first stick */}
            <ul>
<h1>Senior Full-Stack Engineer</h1>
<li> Full-time position</li>
 <li>Berlin or remote</li>
<li>€65-85k, 0.5-1.50% equity share options</li>
</ul>
          </div>

          {/* Second Stick */}
          <div style={{ background: '#fafafa', height: '200px', margin: '5%', width: '400px', borderRadius: '10px' }}>
            {/* Content for the second stick */}
            <ul>
<h1>Senior Full-Stack Engineer</h1>
<li> Full-time position</li>
 <li>Berlin or remote</li>
<li>€65-85k, 0.5-1.50% equity share options</li>
</ul>
          </div>

          {/* Third Stick */}
          <div style={{ background: '#f0f0f0', height: '200px', margin: '5%', width: '400px', borderRadius: '10px' }}>
            {/* Content for the third stick */}
            <ul>
<h1>Senior Full-Stack Engineer</h1>
<li> Full-time position</li>
 <li>Berlin or remote</li>
<li>€65-85k, 0.5-1.50% equity share options</li>
</ul>
          </div>

          {/* Fourth Stick */}
          
        </div>
      </Paper>
    </div>
  );
};

export default ThreePaper;
