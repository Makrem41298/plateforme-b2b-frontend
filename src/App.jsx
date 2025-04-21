

import {AppRoutes} from "./AppRoutes.jsx";
import {AuthClientProvider} from "./services/AuthClientContext.jsx";

function App() {

  return (
      <>
          <AuthClientProvider>
              <AppRoutes/>

          </AuthClientProvider>
      </>

  )
}

export default App
