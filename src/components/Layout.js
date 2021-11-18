import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';

export default function Layout(props) {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
        </>
    )
}