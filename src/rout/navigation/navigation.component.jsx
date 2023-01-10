import { Outlet } from 'react-router-dom';

import { Fragment, useContext } from 'react';

import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'

import { UserContext } from '../../components/context/user.contex';

import { CartContext } from '../../components/context/cart.context';

import { signOutUser } from '../../utils/firebase/firebise.utils'

import CartIcon from '../../components/card-icon/cart-icon.component';

import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component'
import { NavigationContainer, NavLink, NavLinks, LogoContainer } from './navigation.styles.jsx'

const Navigation = () => {
    const { currentUser } = useContext(UserContext)
    const { isCartOpen } = useContext(CartContext)

    return (
        <Fragment>
            <NavigationContainer >
                <LogoContainer to='/'>
                    <CrwnLogo className='logo' />
                </LogoContainer>
                <NavLinks >
                    <NavLink className="nav-link" to='/shop'>
                        Shop
                    </NavLink>
                    {
                        currentUser ? (<NavLink as={'span'} onClick={signOutUser} >Sign out</NavLink>) : (<NavLink to='/signIn'>
                            Sign In
                        </NavLink>)
                    }
                    <CartIcon />
                </NavLinks>
                {isCartOpen && <CartDropdown />}
            </NavigationContainer>
            <Outlet />
        </Fragment>
    )

}


export default Navigation