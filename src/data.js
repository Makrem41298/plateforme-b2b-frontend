import {routes} from "./Routes/routesName.js";
const sideBar = {
    menuEnterprise : [
        { name: 'Dashboard', icon: 'fas fa-columns w-5 mr-3', link: routes.entreprise.dashboard },
        { name: 'Projets', icon: 'fas fa-clipboard-list w-5 mr-3', link: routes.entreprise.projects },
        { name: 'Contrats', icon: 'fas fa-briefcase w-5 mr-3', link: routes.entreprise.contract },
        { name: 'Inbox', icon: 'far fa-comment-dots w-5 mr-3', link: routes.entreprise.inbox },
        { name: 'Mes Offres', icon: 'fas fa-bullhorn w-5 mr-3', link: routes.entreprise.offer },
        { name: 'Transactions', icon: 'fas fa-receipt w-5 mr-3', link: routes.entreprise.transaction },
        { name: 'Retrait', icon: 'fas fa-money-bill-transfer w-5 mr-3', link: routes.entreprise.withdraw },
    ],
     menuClient:[
        { name: 'Dashboard', icon: 'fas fa-columns w-5 mr-3', link: routes.client.dashboard },
        { name: ' MesProjets', icon: 'fas fa-clipboard-list w-5 mr-3', link:  routes.client.mesProjects },
         { name: 'Contrats', icon: 'fas fa-briefcase w-5 mr-3', link: routes.client.contract },

         { name: 'Inbox', icon: 'far fa-comment-dots w-5 mr-3', link:  routes.client.inbox },
        { name: 'Transactions', icon: 'fas fa-receipt w-5 mr-3', link:  routes.client.transaction },

    ]
}
export const NameProjectColumns = [
    "Nom de Projet",
    "Statut",
    "Budget",
    "Offres",
    "Délai",
    "Date de publication",
    "Action"
];
export const filterProjectGroups = [
    {
        id: 'budget',
        label: 'Budget',
        fields: ['budget_min', 'budget_max'],
    },
    {
        id: 'type',
        label: 'Type de projet',
        fields: ['type'],
    },
    {
        id: 'sort',
        label: 'Trier par',
        fields: ['sort'],
    },
    {
        id: 'date',
        label: 'Date',
        fields: ['date_start', 'date_end'],
    },
    {
        id: 'per_page',
        label: 'Résultats par page',
        fields: ['per_page'],
    },
];

 export const filterProjectConfig = [

    {
        id: 'budget_min',
        type: 'number',
        placeholder: 'Budget min',
    },
    {
        id: 'budget_max',
        type: 'number',
        placeholder: 'Budget max',
    },
    {
        id: 'type',
        type: 'select',
        placeholder: 'Type de projet',
        options: [
            { value: 'developpement_web', label: 'Développement Web' },
            { value: 'developpement_mobile', label: 'Application Mobile' },
            { value: 'design_graphique', label: 'Design Graphique' },
            { value: 'marketing_digital', label: 'Marketing Digital' },
            { value: 'redaction_de_contenu', label: 'Rédaction de Contenu' },
            { value: 'conseil_en_affaires', label: 'Conseil en Affaires' },
            { value: 'intelligence_artificielle', label: 'Intelligence Artificielle' },
            { value: 'autre', label: 'Autre' },
        ],
    },

    {
        id: 'sort',
        type: 'select',
        placeholder: 'Trier par',
        options: [
            { value: 'budget_asc', label: 'Budget (Croissant)' },
            { value: 'budget_desc', label: 'Budget (Décroissant)' },
            { value: 'date_asc', label: 'Date (Ancien)' },
            { value: 'date_desc', label: 'Date (Récent)' },
        ],
    },
    {
        id: 'date_start',
        type: 'date',
        placeholder: 'Date début',
    },
    {
        id: 'date_end',
        type: 'date',
        placeholder: 'Date fin',
    },
    {
        id: 'per_page',
        type: 'select',
        placeholder: 'Résultats par page',
        options: [
            { value: '10', label: '10' },
            { value: '25', label: '25' },
            { value: '50', label: '50' },
        ],
    },
];
export const filterOfferGroups = [
    {
        id: 'montant',
        label: 'Montant proposé',
        fields: ['montant_min', 'montant_max'],
    },
    {
        id: 'statut',
        label: 'Statut',
        fields: ['statut'],
    },

    {
        id: 'date',
        label: 'Date',
        fields: ['date_debut', 'date_fin'],
    },
    {
        id: 'sort',
        label: 'Trier par',
        fields: ['sort_by', 'sort_order'],
    },
    {
        id: 'per_page',
        label: 'Résultats par page',
        fields: ['per_page'],
    },
];
export const filterOfferConfig = [
    {
        id: 'montant_min',
        type: 'number',
        placeholder: 'Montant min',
    },
    {
        id: 'montant_max',
        type: 'number',
        placeholder: 'Montant max',
    },
    {
        id: 'statut',
        type: 'select',
        placeholder: 'Statut',
        options: [
            { value: 'en_attente', label: 'En attente' },
            { value: 'acceptee', label: 'Acceptée' },
            { value: 'rejetee', label: 'Rejetée' },
        ],
    },
    {
        id: 'projet_titre',
        type: 'text',
        placeholder: 'Titre du projet',
    },
    {
        id: 'date_debut',
        type: 'date',
        placeholder: 'Date début',
    },
    {
        id: 'date_fin',
        type: 'date',
        placeholder: 'Date fin',
    },
    {
        id: 'sort_by',
        type: 'select',
        placeholder: 'Trier par',
        options: [
            { value: 'created_at', label: 'Date de création' },
            { value: 'montant_propose', label: 'Montant proposé' },
            { value: 'delai', label: 'Délai' },
        ],
    },
    {
        id: 'sort_order',
        type: 'select',
        placeholder: 'Ordre de tri',
        options: [
            { value: 'asc', label: 'Croissant' },
            { value: 'desc', label: 'Décroissant' },
        ],
    },
    {
        id: 'per_page',
        type: 'select',
        placeholder: 'Résultats par page',
        options: [
            { value: '10', label: '10' },
            { value: '25', label: '25' },
            { value: '50', label: '50' },
            { value: '100', label: '100' },
        ],
    },
];

export {sideBar} ;








