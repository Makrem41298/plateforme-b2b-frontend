import {useDispatch, useSelector} from "react-redux";
import {createProjet, deleteProject, getProjectsClient, updateProject} from "../redux/project/projectClientSlice.js";

export const useProject=()=>{
    const dispatch = useDispatch();
    const {items: projects,status,error} = useSelector((state)=>state.projects);
    return {
        projects,
        status,
        error,
        getProjects: (parmes)=>dispatch(getProjectsClient(parmes)),
        getProject: ()=>dispatch(getProjectsClient),
        createProject: (project)=>dispatch(createProjet(project)),
        updateProject: (slug,project)=>dispatch(updateProject(slug,project)),
        deleteProject: (slug)=>dispatch(deleteProject(slug)),

    }
}