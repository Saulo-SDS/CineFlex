import { BackImage, Footer } from "../Shared/style";

export default function BottomBar({seats, title, name, image, weekday}) {

    return (
        <Footer>
            <BackImage>
                <img src={seats === null ? "" : image} alt=""/>
            </BackImage>
            <div>
                <p>{seats === null ? "" : title}</p>
                <p>{seats === null ? "" : `${weekday} - ${name}`}</p>                 
            </div>       
        </Footer>
    );
}