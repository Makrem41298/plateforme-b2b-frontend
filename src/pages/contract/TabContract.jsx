import React from 'react';
import Table from "../../components/Table.jsx";

function TabContract() {


     const attrbuitTab=["Référence"
        ,"Statut","Projet Associé","Dates","Voir"]
    const  attrubuteFilter=['test','test','test']

    const titre="Les Contrats"


    return (
        <Table attributTab={attrbuitTab} titre={titre} attrubuteFilter={attrubuteFilter}/>
    )

}

export default TabContract;
