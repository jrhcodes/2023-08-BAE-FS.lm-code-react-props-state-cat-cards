import PetImage from "./pet_image";
import { findImage } from "../data/images";

export interface CatCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
    key: string;
    id: string;
}

const CatCard: React.FC<CatCardProps> = ({ name, species, favFoods, birthYear, id }) => {
    const imageData = findImage(id);
    return <div className="card">
        <h3 className="card__text card__header">{name}</h3>
        <p className="card__text">Species: {species}</p>
        <p className="card__text">Favourite Food(s): {favFoods.map(food => food.trim()).join(', ')}.</p>
        <p className="card__text">Birth Year: {birthYear}</p>

        {imageData && (
            <PetImage
                image={imageData.image}
                altText={imageData.altText}
                licenceType={imageData.licenceType}
                licenceUrl={imageData.licenceUrl}
                attributionName={imageData.attributionName}
                attributionUrl={imageData.attributionUrl}
            />
        )}
    </div>;
};

export default CatCard;