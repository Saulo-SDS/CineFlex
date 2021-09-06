import { Load } from "./style";
import loading from "./loading.png"
export default function Loading() {

    return (
        <Load>
            <div>
                <img src={loading} alt=""/>  
                <p>Carrengando...</p>
            </div>     
        </Load>    
    );
}