import { Provider } from 'react-redux';
import { store } from './redux/store.js'; // Import your Redux store
import { AppRoutes } from "./Routes/AppRoutes.jsx";
import { AuthClientProvider } from "./services/AuthClientContext.jsx";
import { AuthEntrepriseProvider } from "./services/AuthEnterpriseContext.jsx";

function App() {
    return (
        <Provider store={store}>
            <AuthClientProvider>
                <AuthEntrepriseProvider>
                    <div className="app-container">
                        <AppRoutes />
                    </div>
                </AuthEntrepriseProvider>
            </AuthClientProvider>
        </Provider>
    )
}

export default App;