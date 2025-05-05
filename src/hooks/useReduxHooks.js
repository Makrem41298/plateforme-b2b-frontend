import {useDispatch, useSelector} from "react-redux";
import {
    clearProjectStatus,
    createProjet,
    deleteProject, getProjectClient,
    getProjectsClient,
    updateProject
} from "../redux/project/projectClientSlice.js";

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