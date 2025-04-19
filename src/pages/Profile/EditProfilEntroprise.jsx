import React from 'react';

const EditProfilEntroprise = () => {

    return (
        <div className="min-h-screen flex flex-col overflow-y-auto  h-screen pb-20">


            <div className="flex-1 flex items-center justify-center bg-gradient-to-br  ">
                <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl mx-4 my-4">
                    <h2 className="text-2xl font-semibold text-center text-gray-800 mb-2">
                        Créer un Profil d'Entreprise
                    </h2>
                    <p className="text-center text-gray-500 mb-6">
                        Veuillez remplir les informations de votre entreprise
                    </p>

                    <form action="/entreprise/profile" method="POST" className="space-y-5">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            {/* Address Fields */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Adresse</label>
                                <input type="text" name="address" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
                                <input type="text" name="city" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Pays</label>
                                <input type="text" name="country" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Code Postal</label>
                                <input type="text" name="postal_code" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone</label>
                                <input type="text" name="phone" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Fax (optionnel)</label>
                                <input type="text" name="fax"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Site web</label>
                                <input type="url" name="website"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Secteur d'activité</label>
                                <input type="text" name="sector" required
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Type d'entreprise</label>
                                <select name="company_type" required
                                        className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400">
                                    <option value="LLC">LLC</option>
                                    <option value="SA">SA</option>
                                    <option value="SARL">SARL</option>
                                    <option value="SNC">SNC</option>
                                    <option value="EI">EI</option>
                                    <option value="Other">Autre</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Nombre d'employés</label>
                                <input type="number" name="employees_count" required min="1"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                        </div>

                        {/* Social Media Section */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL LinkedIn</label>
                                <input type="url" name="linkedin_url"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL Facebook</label>
                                <input type="url" name="facebook_url"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Twitter</label>
                                <input type="text" name="twitter_handle"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">URL Instagram</label>
                                <input type="url" name="instagram_url"
                                       className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400" />
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea name="description" required rows="4"
                                      className="w-full px-4 py-2 border border-gray-200 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button type="submit"
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition">
                                Enregistrer le profil
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default EditProfilEntroprise;