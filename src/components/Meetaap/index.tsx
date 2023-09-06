import { Paper, Button } from "@mui/material";
import styles from './Meetaap.module.css';

const Meetaap = () => {
  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
        <div className={styles.content}>
        
        <div className={styles.rightContainer}>
        <div className={styles.textContainer}>
              <p>Think of it as your pocket companion.</p>
              <h1 className={styles.textContainerh}>
Master your life </h1>
<div className={styles.circle}>
              <img src="https://www.freeiconspng.com/uploads/phone-png-19.png" alt="Phone" className={styles.phoneImage} />
            </div>
            <div className={styles.chakraUI}>
              {/* Chakra UI component */}
             
            </div>
          </div>
          </div>
          {/* Left-side container */}
          <div className={styles.leftContainer}>
            <div className={styles.textContainer}>
           <div style={{margin:'20%'}}>
           <p>Think of it as your pocket companion.Think of it as your pocket companionThink of it as your pocket companion</p>
              <br></br>
              <p>Think of it as your pocket companion.Think of it as your pocket companionThink of it as your pocket companion</p>
              
           </div>
              
            </div>
          </div>

          {/* Right-side container */}
         
        </div>
      </Paper>
    </div>
  );
};

export default Meetaap;
