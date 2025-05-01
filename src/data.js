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
        { name: 'Inbox', icon: 'far fa-comment-dots w-5 mr-3', link:  routes.client.inbox },
        { name: 'Transactions', icon: 'fas fa-receipt w-5 mr-3', link:  routes.client.transaction },

    ]
}


export {sideBar} ;








