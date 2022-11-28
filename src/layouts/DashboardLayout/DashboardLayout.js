import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import useBuyer from '../../hooks/useBuyer';
import useSeller from '../../hooks/useSeller';
import useToken from '../../hooks/useToken';
import Navbar from '../../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        {isBuyer &&
                            <>
                            <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                            <li><Link to='/dashboard/mywishlist'>My Wishlist</Link></li>
                            </>
                        }
                        {
                            isAdmin && <>
                                <li><Link to='/dashboard/allsellers'>All Seller</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyer</Link></li>
                                <li><Link to='/dashboard/reportedItems'>Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to='/dashboard/addProducts'>Add A Product</Link></li>
                                <li><Link to='/dashboard/myProducts'>My Products</Link></li>
                                <li><Link to='/dashboard/myBuyers'>My Buyers</Link></li>
                            </>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;