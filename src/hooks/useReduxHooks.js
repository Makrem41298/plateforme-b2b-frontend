import {useDispatch, useSelector} from "react-redux";
//project Client
import {
    clearProjectStatus,
    createProjet,
    deleteProject, getProjectClient,
    getProjectsClient,
    updateProject} from "../redux/projectClientSlice.js";
//Project Enterprise
import {
    fetchEnterpriseProjects,
    fetchProjectBySlug,
} from "../redux/projectEnterpriseSlice.js";

//offer
import {
    clearOfferStatus,
    createOffer,
    updateOffer,
    deleteOffer,
    getOfferEnterprise, getAllOffersEnterprise, getProjectOffersClient
} from "../redux/offerSlice.js";
import {getConversationClient, sendMessage,sendMessageEntreprise,getConversationEntreprise} from "../redux/messageSlice.js";
import {data} from "react-router-dom";


export const useProject=()=>{
    const dispatch = useDispatch();
    const {items: projects,status,error} = useSelector((state)=>state.projects);
    return {
        projects,
        status,
        error,
        clearProjectStatus: () => dispatch(clearProjectStatus()),
        getProjects: (parmes)=>dispatch(getProjectsClient(parmes)),
        getProject: (slug)=>dispatch(getProjectClient(slug)),
        createProject: (project)=>dispatch(createProjet(project)),
        updateProject: (slug,project)=>dispatch(updateProject({ slug, data: project })),
        deleteProject: (slug)=>dispatch(deleteProject(slug))

    }

}

export const useProjectEnterprise = () => {
    const dispatch = useDispatch();
    const { items: projects, status, error } = useSelector(
        (state) => state.projectEnterprise
    );

    return {
        projects,
        status,
        error,
        getProjects: (params) => dispatch(fetchEnterpriseProjects(params)),
        getProjectEnterpriseBySlug: (slug) => dispatch(fetchProjectBySlug(slug)),
    };
};


export const useOffer = () => {
    const dispatch = useDispatch();
    const { items: offers, status, error } = useSelector(state => state.offers);

    return {
        offers,
        status,
        error,
        clearOfferStatus: () => dispatch(clearOfferStatus()),
        getAllOffers: (params) => dispatch(getAllOffersEnterprise(params)),
        getOfferById: (id) => dispatch(getOfferEnterprise(id)),
        getOfferProject: (slug, params) => dispatch(getProjectOffersClient({ slug, params })),
        createOffer: (data) => dispatch(createOffer(data)),
        updateOffer: (id, data) => dispatch(updateOffer({ id, data })),
        deleteOffer: (id) => dispatch(deleteOffer(id)),
    };
};

export  const useMessage=()=>{
    const dispatch = useDispatch();
       const { items: messages, status, error } = useSelector(state => state.messages);

    return {
        messages,
        status,
        error,
        getConversationClient:(receiverId, receiverType)=>dispatch(getConversationClient({receiverId, receiverType})),
        sendMessage:(data)=>dispatch(sendMessage(data)),
        getConversationEnterprise:(receiverId, receiverType)=>dispatch(getConversationEntreprise({receiverId, receiverType})),
        sendMessageEnterprise:(data)=>dispatch(sendMessageEntreprise(data))

    }

    }