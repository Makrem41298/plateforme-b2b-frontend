import React from 'react'
import Table from "../../components/Table.jsx";

export const TabTransaction = () => {
    const attrbuitTab=["Référence","Statut","Contrat Associé","Méthode","Montant"]
    const  attrubuteFilter=['test','test','test']

    const titre="Les Transactions"
    return (
        <Table attributTab={attrbuitTab} titre={titre} attrubuteFilter={attrubuteFilter}/>
    )
}
