import {Dropdown} from '@mui/base/Dropdown';
import {MenuButton} from '@mui/base/MenuButton';
import {Menu} from '@mui/base/Menu';
import {MenuItem} from '@mui/base/MenuItem';


const DropdownMenu = () => {
    return (
        <div>
            <Dropdown>
                <MenuButton
                    className="p-3 rounded-2xl transition-all ease-in-out hover:bg-dark-gray/50 active:bg-dark-gray">
                    <svg width="39" height="32" viewBox="0 0 39 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.7">
                            <rect y="26" width="24" height="2" rx="1" fill="white"/>
                            <rect y="15" width="7" height="2" rx="1" fill="white"/>
                            <rect y="4" width="21" height="2" rx="1" fill="white"/>
                            <rect x="32" y="26" width="7" height="2" rx="1" fill="white"/>
                            <rect x="15" y="15" width="24" height="2" rx="1" fill="white"/>
                            <rect x="29" y="4" width="10" height="2" rx="1" fill="white"/>
                            <circle cx="28" cy="27" r="4" stroke="white" strokeWidth="2"/>
                            <circle cx="11" cy="16" r="4" stroke="white" strokeWidth="2"/>
                            <circle cx="25" cy="5" r="4" stroke="white" strokeWidth="2"/>
                        </g>
                    </svg>
                </MenuButton>
                <Menu className="bg-dark-gray min-w-[150px] rounded-2xl">
                    <MenuItem
                        className="py-2 rounded-2xl text-white text-xl text-center cursor-pointer transition-all ease-in-out hover:bg-gray/50 active:bg-gray/20">
                        <form>
                            <label htmlFor="post">Пост</label>
                            <input type="text" name="post" id="post"/>
                        </form>
                    </MenuItem>
                    <MenuItem
                        className="py-2 rounded-2xl text-white text-xl text-center cursor-pointer transition-all ease-in-out hover:bg-gray/50 active:bg-gray/20">
                        <form>
                            <input type="radio"
                                   id="roleChoice1"
                                   name="role"
                                   value="admin"/>
                            <label htmlFor="roleChoice1">Админ</label>
                            <input type="radio"
                                   id="roleChoice2"
                                   name="role"
                                   value="sender"/>
                            <label htmlFor="roleChoice2">Отправитель</label>
                            <input type="radio"
                                   id="roleChoice3"
                                   name="role"
                                   value="hydrologist"/>
                            <label htmlFor="roleChoice3">Гидролог</label>
                        </form>
                    </MenuItem>
                </Menu>
            </Dropdown>
        </div>
    );
};

export default DropdownMenu;
