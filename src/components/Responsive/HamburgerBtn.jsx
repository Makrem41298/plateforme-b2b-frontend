import React, {Fragment} from 'react'
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import "../../index.css"
const HamburgerBtn = () => {
    const [state, setState] = React.useState({

        left: false,

    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = () => (
        <Box
            role="presentation"
            onClick={toggleDrawer("left", false)}
            onKeyDown={toggleDrawer("left", false)}
        >
            <List>
                <div className="w-full md:w-60 bg-white border-r flex flex-col justify-between">
                    <div>
                        <div className="px-6 py-4 text-xl font-bold">
                            <span className="text-blue-500">Dash</span><span className="text-black">Stack</span>
                        </div>
                        <nav className="mt-6 flex flex-col gap-1 text-sm">
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="fas fa-columns w-5 mr-3"></i>Dashboard
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="fas fa-clipboard-list w-5 mr-3"></i>Projets
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-md">
                                <i className="fas fa-briefcase w-5 mr-3"></i>Contrats
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="far fa-comment-dots w-5 mr-3"></i>Inbox
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="fas fa-bullhorn w-5 mr-3"></i>Mes Offers
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="fas fa-receipt w-5 mr-3"></i>Transactions
                            </a>
                            <a href="#" className="flex items-center px-6 py-2 hover:bg-gray-100 text-gray-800">
                                <i className="fas fa-money-bill-transfer w-5 mr-3"></i>Withdraw Balance
                            </a>
                        </nav>
                    </div>
                    <div className="border-t mt-4 pt-4 px-6 flex flex-col gap-3 pb-6 text-sm">
                        <a href="#" className="flex items-center hover:text-blue-500">
                            <i className="fas fa-cog w-5 mr-3"></i>Settings
                        </a>
                        <a href="#" className="flex items-center hover:text-red-500">
                            <i className="fas fa-right-from-bracket w-5 mr-3"></i>Logout
                        </a>
                    </div>
                </div>
            </List>

        </Box>
    );
    return (

        <>
            <div className="hamburgerBtn" >
                    <Fragment >
                        <Button onClick={toggleDrawer("left", true)}>
                            <MenuIcon/>
                        </Button>
                        <Drawer
                            anchor={"left"}
                            open={state["left"]}
                            onClose={toggleDrawer("left", false)}
                        >
                            {list()}
                        </Drawer>
                    </Fragment>

            </div>

        </>
    )
}
export default HamburgerBtn
