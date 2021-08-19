import {IconButton, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {HamburgerIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import "./NavBar.css"


const NavBar = () => {
    return (
        <Menu className={"padding"}>
            <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<HamburgerIcon/>}
                variant="outline"
            />
            <MenuList>
                <Link to="/">
                    <MenuItem>
                        Login
                    </MenuItem>
                </Link>
                <Link to="/altaproducto">
                    <MenuItem>
                        Alta de Producto
                    </MenuItem>
                </Link>
                <Link to="/altacliente">
                    <MenuItem>
                        Alta de Cliente
                    </MenuItem>
                </Link>
            </MenuList>
        </Menu>
    )
}

export default NavBar