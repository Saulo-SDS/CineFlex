import { BackImage, Footer } from "../Shared/style";

export default function BottomBar({title, image}) {

    return (
        <Footer>
            <BackImage>
                <img src={image} alt=""/>
            </BackImage>
            <div>
                <p>{title}</p>
            </div>       
        </Footer>
    );
}