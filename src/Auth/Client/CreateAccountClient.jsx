import {Link, useNavigate} from "react-router-dom";
import { AuthClientContext } from "../../services/AuthClientContext.jsx";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import {useContext} from "react";
import {routes} from "../../Routes/routesName.js";


const CreateAccountClient = () => {
    const { register, watch, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        mode: 'onTouched'
    });
    const {registerForm}=useContext(AuthClientContext);
    const navigate = useNavigate();

    const onSubmit = async (dataForm) => {
        try {


            console.log(dataForm)


        const success= await    registerForm(dataForm)
            console.log(success)
            if(success){
                Swal.fire({
                    title: "Inscription réussie!",
                    text: "Un email de vérification a été envoyé à votre adresse",
                    icon: "success"
                });
                navigate(routes.verificationEmailClient.path)
            }
            else navigate(routes.createAccountClient.path)


        } catch (error) {
            Swal.fire({
                title: "Erreur!",
                text: error.message || "Une erreur est survenue lors de l'inscription",
                icon: "error"
            });
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-400 to-blue-500 overflow-hidden">
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Créer un Compte Client</h2>
                <p className="text-center text-gray-600 mb-6">Remplissez les champs pour créer votre compte</p>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Nom du client</label>
                        <input
                            type="text"
                            {...register('name', {
                                required: 'Le nom est requis',
                                minLength: { value: 3, message: 'Au moins 3 caractères' },
                            })}
                            aria-invalid={!!errors.name}
                            aria-describedby="error-name"
                            placeholder="Nom du client"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.name && (
                            <p id="error-name" className="text-red-500 text-sm mt-1">
                                {errors.name.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            {...register('email', {
                                required: "L'email est requis",
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Format d\'email invalide',
                                },
                            })}
                            aria-invalid={!!errors.email}
                            aria-describedby="error-email"
                            placeholder="exemple@client.com"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && (
                            <p id="error-email" className="text-red-500 text-sm mt-1">
                                {errors.email.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mot de passe</label>
                        <input
                            type="password"
                            {...register('password', {
                                required: 'Le mot de passe est requis',
                                minLength: { value: 8, message: 'Au moins 8 caractères' },
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                                    message: 'Doit contenir une majuscule, une minuscule et un chiffre',
                                },
                            })}
                            aria-invalid={!!errors.password}
                            aria-describedby="error-password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && (
                            <p id="error-password" className="text-red-500 text-sm mt-1">
                                {errors.password.message}
                            </p>
                        )}
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmation de votre mot de passe
                        </label>
                        <input
                            type="password"
                            {...register('confirm_password', {

                                required: 'La confirmation du mot de passe est requise',
                                validate: (value) =>
                                    value === watch('password') || 'Les mots de passe ne correspondent pas',
                            })}
                            aria-invalid={!!errors.confirm_password}
                            aria-describedby="error-confirm-password"
                            placeholder="••••••••"
                            className="w-full px-4 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.confirm_password && (
                            <p id="error-confirm-password" className="text-red-500 text-sm mt-1">
                                {errors.confirm_password.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'En cours...' : 'Créer le compte'}
                    </button>
                </form>

                <p className="mt-4 text-center text-sm text-gray-600">
                    Vous avez déjà un compte ?{' '}
                    <Link to="/login/client" className="text-blue-600 hover:underline">
                        Connectez-vous
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default CreateAccountClient;