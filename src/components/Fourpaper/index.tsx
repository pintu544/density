import { Paper, Button } from "@mui/material";
import styles from './Fourpaper.module.css';

const Fourpaper = () => {
  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
      <h1 style={{margin:'5%'}}>Does this sound familiar</h1>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
           
          {/* First Stick */}
          <div style={{ background: '#ffffff', height: '200px', margin: '5%', width: '300px', borderRadius: '10px' }}>
            {/* Content for the first stick */}
            <h2>emotional</h2>
            <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
     </p>
          </div>

          {/* Second Stick */}
          <div style={{ background: '#fafafa', height: '200px', margin: '5%', width: '300px', borderRadius: '10px' }}>
            {/* Content for the second stick */}
            <h2>emotional</h2>
            <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
     </p>
          </div>

          {/* Third Stick */}
          <div style={{ background: '#f0f0f0', height: '200px', margin: '5%', width: '300px', borderRadius: '10px' }}>
            {/* Content for the third stick */}
            <h2>emotional</h2>
            <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
     </p>
          </div>

          {/* Fourth Stick */}
          <div style={{ background: '#f5f5f5', height: '200px', margin: '5%', width: '300px', borderRadius: '10px' }}>
            {/* Content for the fourth stick */}
            <h2>emotional</h2>
            <p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.
     </p>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Fourpaper;
