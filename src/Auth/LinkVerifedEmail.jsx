import { useSearchParams, useNavigate } from 'react-router-dom';
import {useContext, useEffect} from 'react';
import axiosInstanceClient from "../services/axiosInstanceClient.js";
import { routes } from "../Routes/routesName.js";
import Swal from "sweetalert2";

import axiosInstanceEnterprise from "../services/axiosInstanceEnterprise.js";
import {AuthEnterpriseContext} from "../services/AuthEnterpriseContext.jsx";

const LinkVerifedEmail = () => {
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();


    useEffect(() => {
        const controller = new AbortController();
        const verifyEmail = async () => {

            try {
                if(searchParams.get('guard')==="entreprise"){
                    await axiosInstanceEnterprise.get(
                        `enterprise/email/verify/${searchParams.get('id')}/${searchParams.get('hash')}`,
                        { signal: controller.signal }

                    );
                    Swal.fire({
                        icon: 'success',
                        title: 'Email Verified!',
                        text: 'Your email has been successfully verified.',
                        position: 'top',
                        showConfirmButton: false,
                        timer: 3000,
                        toast: true
                    });
                    navigate(routes.entreprise.dashboard);

                }else {
                    await axiosInstanceClient.get(
                        `/email/verify/${searchParams.get('id')}/${searchParams.get('hash')}`,
                        { signal: controller.signal }
                    );
                    Swal.fire({
                        icon: 'success',
                        title: 'Email Verified!',
                        text: 'Your email has been successfully verified.',
                        position: 'top',
                        showConfirmButton: false,
                        timer: 3000,
                        toast: true
                    });
                    navigate(routes.client.dashboard);


                }


            } catch (error) {
                console.log(error);
            }
        };

        verifyEmail();

        return () => {
            controller.abort();
        };
    }, [navigate, searchParams]);

    return <div>Verifying email...</div>;
};

export default LinkVerifedEmail;