import React, { useEffect, useState ,Component} from 'react'
//import DashboardNavbar from '../Dashboard/DashboardNavbar'
//import { getAllStagiaires } from '../../../helpers/Stagiaires/getAllStagiaires';
//import { postAbsence } from '../../../helpers/Absences/postAbsence';
import { useHistory } from "react-router-dom";
import PieceJustificativeAction from '../../actions/PieceJustificativeAction';
import PersonnelAction from '../../actions/PersonnelAction';
import { components } from 'react-select';
class AddPieceJustificative extends Component {

     AddAbsenceFormateur({user}) {
    const [personnels, setPersonnels] = useState([]);

    const [personnel, setPersonnel] = useState("");
    const [code, setCode] = useState();
    const [libelle, setLibelle] = useState();
    //const [heureFin, setheureFin] = useState();

    const history = useHistory();

    useEffect(() => {
        PersonnelAction.getPersonnels()
            .then((result) => {
                setPersonnels(result.personnels)
            }).catch((err) => console.log(err));
    })

    const remplirComboPersonnels = () => {
        return personnels.map((item, index) => {
            return (
                <option value={item.id} key={index}>{item.emploi + " " + item.prenom}</option>
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let PieceJustificative = {code, libelle,personnel };
        PieceJustificativeAction.createPieceJustificative(PieceJustificative)
        //postAbsence(user._id, stagiaire, user._id, dateabsence, heureDebut, heureFin)
            .then((result) => {
                if (result.status === "OK") {
                    history.push("/PieceJustificatives")
                }
                else {
                    console.log(result.message);
                }
            }).catch((err) => {
                console.log(err);
            })
    }

    return (
        <div>
            <div>
                {/*<DashboardNavbar />*/}
                <div>
                    <div className="container mt-4">
                        <div className="row justify-content-center">
                            <div className="col-md-6">
                                <h2 className="h2 pb-4">Ajouter une absence</h2>
                                <form className="form mt-4" onSubmit={(e) => handleSubmit(e)}>

                                    <div className="form-group ">
                                        <label htmlFor="stagiaire">stagiaire :</label><br />
                                        <select
                                            className="form-control mb-3"
                                            aria-label="stagiaire"
                                            onChange={(e) => setPersonnel(e.target.value)}
                                        >
                                            <option>Selectionner stagiaire</option>
                                            {
                                                remplirComboPersonnels()
                                            }
                                        </select>
                                    </div>
                                    <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">code</label>
                                            <input type="text" name="code" defaultValue={code}
                                                   onChange={(e) => setCode(e.target.value)} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="code"/>
                                        </div> 
                                        <div className="form-group mb-1">
                                            <label htmlFor="exampleInputEmail2">libelle</label>
                                            <input type="text" name="libelle" defaultValue={libelle}
                                                   onChange={(e) => setLibelle(e.target.value)} className="form-control" required
                                                   id="exampleInputEmail2" aria-describedby="emailHelp"
                                                   placeholder="Entrer code piece justificative"/>
                                        </div> 
                                    


                                    <div className="form-group justify-content-center">
                                        <input type="submit" className="btn btn-success form-control" value="Ajouter" />
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
}
export default AddPieceJustificative;