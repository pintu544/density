import MovingBox from "@/components/MovingBox"
import Navbar from "@/components/NavBar"
import VerticalLinearStepper from "@/components/Stepper"
import Header from '@/components/Header'
import Content from '@/components/Content'
import Fourpaper from '@/components/Fourpaper'
import Meetaap from '@/components/Meetaap'
import HorizontalStepper from '@/components/HorizontalStepper'
import HorizontalStepperDotted from '@/components/HorizontalStepperDotted'
import PrivacyMessage from '@/components/PrivacyMessage'
import ThreePaper from '@/components/ThreePaper'
import Footer from '@/components/Footer'
const Main = () => {

    return <>
     <Header />
      <main>
        {/* Your page content goes here */}
       
      </main>

        <Navbar/>
        <Content/>
        <Fourpaper/>
        <Meetaap/>

        <VerticalLinearStepper/>
 <Content/>
 
        
        <HorizontalStepperDotted/>
       <PrivacyMessage/>
       <ThreePaper/>
       <Footer/>
    </>
   

}

export default Main