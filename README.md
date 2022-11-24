## React site - Copa 2022

### Iniciando e configurando

- `npx create-react-app aulao-react-copa`
- `cd aulao-react-copa`
- Adicionar o _eslint_: `npm install eslint-config-trybe-frontend`
	- criar os arquivos `.eslintignore` e `.eslintrc.json`.
```json
// .eslintrc.json
{
	"extends": "trybe-frontend"
}
```
- `npm install --save-dev prop-types`

- **Dica de ícone para página:** https://fav.farm/.
- **Dica de ícones:** https://www.flaticon.com/

### Estrutura de pastas

- Repositório com os dados: [aqui](https://github.com/Maysa-B/world-cup-api).

```
	|- public
	|- src
	|	- componentes
	|	- pages
	|	- data
	|	App.js
	|	index.js
```

### Usando componentes de classe

```jsx
import  React  from  "react";
import Header from './components/Header'

class  App  extends  React.Component {
	render() {
		return (
			<Header />
		)
	}
};

export  default  App;
```

### Uso de PropTypes

```jsx
import  React  from  'react';
import  PropTypes  from  'prop-types';

class  JogadorCard  extends  React.Component {
	render() {
		const { img, number, currentTeam, position } =  this.props;
		return (
			<div  className="br-player">
				<h4>{number}</h4>
				<img  src={  img  } alt="jogador"  />
				<h3>{currentTeam}</h3>
				<p>{position}</p>
			</div>
		);
	}
}

JogadorCard.propTypes  = {
	img:  PropTypes.string.isRequired,
	number:  PropTypes.number.isRequired,
	currentTeam:  PropTypes.string.isRequired,
	position:  PropTypes.string.isRequired,
};

export  default  JogadorCard;
```