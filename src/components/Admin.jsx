import React from 'react';
import AjouterRecete from './AjouterRecette';

class Admin extends React.Component {

    traiterChangement = (e, key) => {
        const recette = this.props.recettes[key];
        const majRecette = {
            ...recette,
            [e.target.name]: e.target.value
        };
        this.props.majRecette(key, majRecette);
    }

    renderAdmin = key => {
        const recette = this.props.recettes[key];
        return (
			<div className="card" key={key} >
				<form className="admin-form">

					<input type="text" name="nom" placeholder="Nom de la recette" value={recette.nom} onChange={(e) => this.traiterChangement(e, key)} />

					<input type="text" name="image" placeholder="Adresse de l'image" value={recette.image} onChange={(e) => this.traiterChangement(e, key)} />

					<textarea name="ingredients" rows="3" placeholder="Liste des ingrédients" value={recette.ingredients} onChange={(e) => this.traiterChangement(e, key)} ></textarea>

					<textarea name="instructions" rows="15" placeholder="Liste des instructions" value={recette.instructions} onChange={(e) => this.traiterChangement(e, key)} ></textarea>
					
				</form>
                <button onClick={() => this.props.supprimerRecette(key)}>Supprimer</button>
			</div>
		)
    }

    render() {
        const adminCards = Object
            .keys(this.props.recettes)
            .map(this.renderAdmin)

        return (
            <div className="cards">
                <AjouterRecete ajouterRecette={this.props.ajouterRecette} />
                {adminCards}
                <footer>
                    <button onClick={this.props.chargerExemple}>Remplir</button>
                </footer>
            </div>
        )
    }

    static propTypes = {
        chargerExemple: React.PropTypes.func.isRequired,
        ajouterRecette: React.PropTypes.func.isRequired,
        majRecette: React.PropTypes.func.isRequired,
        supprimerRecette: React.PropTypes.func.isRequired,
        recettes: React.PropTypes.object.isRequired
    };
}

export default Admin;