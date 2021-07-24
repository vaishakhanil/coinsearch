import React from 'react';

import {CryptoSet, ThemeSet} from '../../components';
import {SideBarLayout} from './SideBar.styles'

export const SideBar = () => {
    return(
        <SideBarLayout>
            <CryptoSet/>
            <ThemeSet/>
        </SideBarLayout>
    )
}
