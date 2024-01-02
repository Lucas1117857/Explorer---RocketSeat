import { BrowserRouter } from 'react-router-dom';

import { AppRoutes } from '../Routes/app.routes';
import { AuthRoutes } from '../Routes/auth.routes';

export function Routes() {
    return (
        <BrowserRouter>
            <AppRoutes />
        </BrowserRouter>
    )
}