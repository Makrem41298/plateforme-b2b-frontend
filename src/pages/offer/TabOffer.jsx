import React from 'react'
import Table from "../../components/Table.jsx";

function TabOffer() {
    const attrbuitTab=["Client"
        ,"Montant","Délia","Statute","Action"]
    const  attrubuteFilter=['test','test','test']

    const titre="Les Offres"

    return (
        <Table attributTab={attrbuitTab} titre={titre} attrubuteFilter={attrubuteFilter}/>
    )
}

export default TabOffer
