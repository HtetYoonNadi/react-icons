import './tailwind.css';
import React from 'react';
import ReactDOM from 'react-dom/client';

//icon
import { ReactComponent as PlusIcon } from './icons/plus.svg';
import { ReactComponent as ShopIcon } from './icons/shop.svg';
import { ReactComponent as MessageIcon} from './icons/message.svg';
import { ReactComponent as NotiIcon} from './icons/notification.svg';
import { ReactComponent as ProfileIcon} from './icons/profile.svg';
import { ReactComponent as DashboardIcon } from './icons/dashboard.svg';
import { ReactComponent as ProductIcon } from './icons/product.svg';
import { ReactComponent as SalesIcon } from './icons/sales.svg';
import { ReactComponent as PurchaseIcon } from './icons/purchase.svg';
import { ReactComponent as ReturnsIcon } from './icons/returns.svg';
import { ReactComponent as TransfersIcon } from './icons/transfers.svg';
import { ReactComponent as UsersIcon } from './icons/users.svg';
import { ReactComponent as OthersIcon } from './icons/others.svg';
import { ReactComponent as SettingsIcon } from './icons/settings.svg';
import { ReactComponent as FilterIcon } from './icons/filter.svg';
import { ReactComponent as SearchIcon } from './icons/search.svg';
import { ReactComponent as ExportIcon } from './icons/export.svg';
import { ReactComponent as ActionIcon } from './icons/action.svg';
import { ReactComponent as MoreIcon } from './icons/more.svg';
import { ReactComponent as DownIcon } from './icons/down.svg';
import { ReactComponent as SideIcon } from './icons/side.svg';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <main className='flex items-center justify-center flex-col space-y-10'>
    <div>React Icon Example</div>
    <PlusIcon />
    <ShopIcon />
    <MessageIcon />
    <NotiIcon />
    <ProfileIcon />
    <DashboardIcon />
    <ProductIcon />
    <SalesIcon />
    <PurchaseIcon />
    <ReturnsIcon />
    <TransfersIcon />
    <UsersIcon />
    <OthersIcon />
    <SettingsIcon />
    <FilterIcon />
    <SearchIcon />
    <ExportIcon />
    <ActionIcon />
    <MoreIcon />
    <DownIcon />
    <SideIcon />

  </main>,
);
