//import axios from "axios";
import { toast } from "react-toastify";


//const apiUrl = "http://esp8266-server/api/set-power";

const handleSet = async (voltage: number, current: number): Promise<void> => {
    try {
        // const response = await axios.post(apiUrl, {
        //     setvoltage: voltage,
        //     setcurrent: current,
        // });
       // console.log(response.data);
        toast.success(`Set: Voltage ${voltage}V, Current ${current}A from api`);
    } catch (error) {
        console.error(error);
        toast.error("Failed to set power supply. Please try again. from api");
    }
};

export default handleSet;