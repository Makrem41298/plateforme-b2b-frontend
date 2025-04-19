import React from 'react'
import Table from "../../components/Table.jsx";

const ListProjectClient = () => {
    const entetesTableau = [
        "nom de Projet",
        "Statut",
        "Budget",
        "Offers",
        "Délai",
        "Date de publication",
        "Action"
    ];
    const  attrubuteFilter=['test','test','test']

    return (
        <Table attributTab={entetesTableau} titre={"Mes Projets"} attrubuteFilter={attrubuteFilter}/>
    )
}
export default ListProjectClient
