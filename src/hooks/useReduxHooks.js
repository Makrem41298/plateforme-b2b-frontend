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
    getOfferEnterprise, getAllOffersEnterprise, getProjectOffersClient, updateOfferClient
} from "../redux/offerSlice.js";
//contract
import {
    clearContractStatus,
    createContract,
    updateContract,
    getContractEnterprise,
    getAllContractsEnterprise,
    getAllContractsClient,
    getContractClient,
    updateContractClient
} from "../redux/contractSlice.js";
import {getConversationClient, sendMessage,sendMessageEntreprise,getConversationEntreprise} from "../redux/messageSlice.js";


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
        updateOfferClient:(id,data) => dispatch(updateOfferClient({ id, data })),

};
};

export const useMessage=()=>{
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

export const useContract = () => {
    const dispatch = useDispatch();
    const { items: contracts, status, error } = useSelector(state => state.contracts);

    return {
        contracts,
        status,
        error,
        clearContractStatus: () => dispatch(clearContractStatus()),
        getAllContracts: (params) => dispatch(getAllContractsEnterprise(params)),
        getContractByReference: (reference) => dispatch(getContractEnterprise(reference)),
        createContract: (data) => dispatch(createContract(data)),
        updateContract: (reference, data) => dispatch(updateContract({ reference, data })),



        updateContractClient: (reference, data) => dispatch(updateContractClient({ reference, data })),
        getContractClientByReference: (reference) => dispatch(getContractClient(reference)),
        getAllContractsClient: (params) => dispatch(getAllContractsClient(params)),


    }
}
