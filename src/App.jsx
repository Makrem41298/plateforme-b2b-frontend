import { AppRoutes } from "./AppRoutes.jsx"
import { AuthClientProvider } from "./services/AuthClientContext.jsx"
import { AuthEntrepriseProvider } from "./services/AuthEnterpriseContext.jsx"

function App() {
    return (
        <AuthClientProvider>
            <AuthEntrepriseProvider>
                <div className="app-container">
                    <AppRoutes />
                </div>
            </AuthEntrepriseProvider>
        </AuthClientProvider>
    )
}

export default App