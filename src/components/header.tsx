export interface HeaderProps {
	numberOfPets: number;
	numberOfPetsDisplayed: number;
};


const Header: React.FC<HeaderProps> = (props: HeaderProps) => (
	<header className='header__container'>
		<h1 className='header__title header__welcome'>Welcome to React!</h1>
		<h2 className='header__title'>
			There are currently {props.numberOfPets} Pets in this App, {props.numberOfPetsDisplayed} displayed
		</h2>
	</header>
);

export default Header;
