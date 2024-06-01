import { loadStripe } from "@stripe/stripe-js";
import SectionTitles from "../../../components/SectionTitles/SectionTitles";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_key); 

const Payment = () => {
    return (
        <div>
            <SectionTitles heading="Payment" subHeading="Pay before you eat"></SectionTitles>
            <div>
                <Elements stripe={stripePromise}>
                    <CheckOutForm></CheckOutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;