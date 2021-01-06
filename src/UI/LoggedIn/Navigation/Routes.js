import Home from '../Home/Home';
import Export from '../Export/Export';
import Settings from '../Settings/Settings';
const Routes = [
    {
        path: '/Home',
        sidebarName: 'Sign In',
        component: Home,
    },
    {
        path: '/Export',
        sidebarName: 'Add Graph',
        component: Export,
    },
    {
        path: '/Settings',
        sidebarName: 'View Graphs',
        component: Settings,
    },
];

export default Routes;
