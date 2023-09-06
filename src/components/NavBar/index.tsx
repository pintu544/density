import { Paper, Button } from "@mui/material";
import styles from './navbar.module.css';

const Navbar = () => {
  return (
    <div>
      <Paper className={styles.paper} elevation={3}>
        <div className={styles.content}>
          {/* Left-side container */}
          <div className={styles.leftContainer}>
            <div className={styles.textContainer}>
            <h1 className={styles.textContainer}>Ahead app</h1>
              <h1 className={styles.textContainerh}>
Master your life by mastering emotions</h1>
              <p>Think of it as your pocket companion.</p>
              <div className={styles.buttonContainer}>
                <Button variant="contained" color="primary" startIcon={<img src="https://w7.pngwing.com/pngs/506/939/png-transparent-app-store-logo-iphone-app-store-get-started-now-button-electronics-text-telephone-call-thumbnail.png" alt="App Store" className={styles.icon} />}>
                  
                </Button>
                <Button variant="outlined" color="primary" endIcon={<span>{'⭐⭐⭐⭐⭐'}</span>}>
                  
                </Button>
              </div>
            </div>
          </div>

          {/* Right-side container */}
          <div className={styles.rightContainer}>
            <div className={styles.circle}>
              <img src="https://www.freeiconspng.com/uploads/phone-png-19.png" alt="Phone" className={styles.phoneImage} />
            </div>
            <div className={styles.chakraUI}>
              {/* Chakra UI component */}
             
            </div>
          </div>
        </div>
      </Paper>
    </div>
  );
};

export default Navbar;
