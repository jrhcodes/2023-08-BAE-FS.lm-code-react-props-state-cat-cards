export interface CatCardProps {
    name: string;
    species: string;
    favFoods: Array<string>;
    birthYear: number;
}

const CatCard: React.FC<CatCardProps> = (catCardProps) => {
    console.log(`cat card props`, catCardProps);
    return <div className="card">
        <h3 className="card__text card__header">{catCardProps.name}</h3>
        <p className="card__text">Species: {catCardProps.species}</p>
        <p className="card__text">Favourite Food(s): {catCardProps.favFoods}</p>
        <p className="card__text">Birth Year: {catCardProps.birthYear}</p>
    </div>;
};
export default CatCard;