import axiosInstanceEnterprise from "./axiosInstanceEnterprise.js";
import axiosInstanceClient from "./axiosInstanceClient.js";

 const clientApi = {
    // Projets
    getProjets: (params) => axiosInstanceClient.get('/projets', { params }),
    getProjet: (slug) => axiosInstanceClient.get(`/projets/${slug}`),
    createProjet: (data) => axiosInstanceClient.post('/projets', data),
    updateProjet: (slug, data) => axiosInstanceClient.put(`/projets/${slug}`, data),
    deleteProjet: (slug) => axiosInstanceClient.delete(`/projets/${slug}`),
    //offer
    getOfferProject:(slugProject,params)=>axiosInstanceClient.get(`/project/offers/${slugProject}`, {params}),
     updateOffre: (offreId, data) => axiosInstanceClient.put(`/offres/${offreId}`, data),

     // Contrats
    getContrats: (params) => axiosInstanceClient.get('/contrats', { params }),
    getContrat: (reference) => axiosInstanceClient.get(`/contrats/${reference}`),
    updateContrat: (reference, data) => axiosInstanceClient.put(`/contrats/${reference}`, data),

    // Litiges
    createLitige: (data) => axiosInstanceClient.post('/litiges', data),
    getLitiges: (params) => axiosInstanceClient.get('/litiges', { params }),
    getLitige: (reference) => axiosInstanceClient.get(`/litiges/${reference}`),
    deleteLitige: (reference) => axiosInstanceClient.delete(`/litiges/${reference}`),

    // Profile
    getProfile: () => axiosInstanceClient.get('/client/profile'),
    updateProfile: (data) => axiosInstanceClient.put('/client/profile', data),
    changePassword: (data) => axiosInstanceClient.put('/client/change_password', data),

    sendMessage: (data) => axiosInstanceClient.post('/messages', data),
    getMessages: () => axiosInstanceClient.get('/messages'),
    getConversation: (receiverId, receiverType) =>
        axiosInstanceClient.get(`/conversation/${receiverId}/${receiverType}`),
    markAsRead: (id) => axiosInstanceClient.put(`/messages/${id}/read`),
     checkout: (reference)=> axiosInstanceClient.post(`/contracts/${reference}/checkout`),
     successCheckout: (reference) =>
         axiosInstanceClient.get(`/paiement/succes/${reference}`),

     cancelCheckout: (reference) =>
         axiosInstanceClient.get(`/paiement/annulation/${reference}`),
};

const entrepriseApi = {
    // Projets
    getProjets: (params) => axiosInstanceEnterprise.get('/projets', { params }),
    getProjet: (slug) => axiosInstanceEnterprise.get(`/projets/${slug}`),
    updateProjet: (slug) => axiosInstanceEnterprise.put(`/projets/${slug}`),

    // Offres
    getOffres: (params) => axiosInstanceEnterprise.get('/offres', { params }),
    createOffre: (data) => axiosInstanceEnterprise.post('/offres', data),
    getOffre: (offreId) => axiosInstanceEnterprise.get(`/offres/${offreId}`),
    updateOffre: (offreId, data) => axiosInstanceEnterprise.put(`/offres/${offreId}`, data),
    deleteOffre: (offreId) => axiosInstanceEnterprise.delete(`/offres/${offreId}`),

    // Contrats
    getContrats: (params) => axiosInstanceEnterprise.get('/contrats', { params }),
    getContrat: (reference) => axiosInstanceEnterprise.get(`/contrats/${reference}`),
    updateContrat: (reference, data) => axiosInstanceEnterprise.put(`/contrats/${reference}`, data),
    createContrat: (data) => axiosInstanceEnterprise.post('/contrats', data),

    // Retraits
    createRetrait: (data) => axiosInstanceEnterprise.post('/retraits', data),
    getRetraits: (params) => axiosInstanceEnterprise.get('/retraits', { params }),
    getRetrait: (reference) => axiosInstanceEnterprise.get(`/retraits/${reference}`),
    deleteRetrait: (reference) => axiosInstanceEnterprise.delete(`/retraits/${reference}`),

    // Litiges
    createLitige: (data) => axiosInstanceEnterprise.post('/litiges', data),
    getLitiges: (params) => axiosInstanceEnterprise.get('/litiges', { params }),
    getLitige: (reference) => axiosInstanceEnterprise.get(`/litiges/${reference}`),
    deleteLitige: (reference) => axiosInstanceEnterprise.delete(`/litiges/${reference}`),

    // Profile
    getProfile: () => axiosInstanceEnterprise.get('/enterprise/profile'),
    updateProfile: (data) => axiosInstanceEnterprise.put('/enterprise/profile', data),
    changePassword: (data) => axiosInstanceEnterprise.put('/enterprise/change_password', data),

    // Messages
    sendMessage: (data) => axiosInstanceEnterprise.post('/messages', data),
    getMessages: () => axiosInstanceEnterprise.get('/messages'),
    getConversation: (receiverId, receiverType) =>
        axiosInstanceEnterprise.get(`/conversation/${receiverId}/${receiverType}`),
    markAsRead: (id) => axiosInstanceEnterprise.put(`/messages/${id}/read`),
    resendEmailVerifyEnterprise:()=>axiosInstanceEnterprise.post('enterprise/email/resend')

};

export {clientApi,entrepriseApi}