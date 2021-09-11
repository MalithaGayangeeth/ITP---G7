import React, { Fragment, useEffect } from 'react'
import AdminHome from './AdminHome'
import Orders from './Orders'
import Products from './Products'
import Payments from './Payments'
import UserManagement from './user-managment/UserManagement'
import EmployeeManagment from './EmployeeManagment'
import SupplierManagment from './SupplierManagment'
import AdvertismentManagment from './AdvertismentManagment'
import { Link, useParams, useHistory } from 'react-router-dom'

const Dashboard = () => {
  const DEFAULT_ACTIVE_TAB = 'dashboard'
  const tabs = {
    dashboard: {
      id: 'admin_home',
      title: 'Dashboard',
      icon: <i className='bi bi-house'></i>,
      content: <AdminHome />,
    },
    orders: {
      id: 'orders',
      title: 'Orders',
      icon: <i className='bi bi-clipboard-check'></i>,
      content: <Orders />,
    },
    products: {
      id: 'products',
      title: 'Products',
      icon: <i className='bi bi-basket'></i>,
      content: <Products />,
    },
    payments: {
      id: 'payments',
      title: 'Payments',
      icon: <i className='bi bi-credit-card'></i>,
      content: <Payments />,
    },
    users: {
      id: 'userManagment',
      title: 'User Managment',
      icon: <i className='bi bi-people'></i>,
      content: <UserManagement />,
    },
    employees: {
      id: 'employeeManagment',
      title: 'Employees Managment',
      icon: <i className='bi bi-building'></i>,
      content: <EmployeeManagment />,
    },
    suppliers: {
      id: 'supplierManagment',
      title: 'Supplier Managment',
      icon: <i className='bi bi-truck'></i>,
      content: <SupplierManagment />,
    },
    advertisments: {
      id: 'advertismentManagment',
      title: 'Advertisment Managment',
      icon: <i className='bi bi-badge-ad'></i>,
      content: <AdvertismentManagment />,
    },
  }

  const { active_tab } = useParams()
  const history = useHistory()

  useEffect(() => {
    if (!active_tab) {
      history.push(`/admin/${DEFAULT_ACTIVE_TAB}`)
    }
  }, [])

  const toggle = (tab) => {
    if (active_tab !== tab) {
      history.push(`/admin/${tab}`)
    }
  }

  return (
    <Fragment>
      <header className='navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow'>
        <Link
          className='navbar-brand admin-brand col-md-3 col-lg-2 me-0 px-3 fw-bold'
          to='/'
        >
          TECH GEAR
        </Link>
        <button
          className='navbar-toggler position-absolute d-md-none collapsed'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#sidebarMenu'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='navbar-nav'>
          <div className='nav-item text-nowrap'>
            <Link className='nav-link px-3' to='/'>
              Sign out
            </Link>
          </div>
        </div>
      </header>

      <div className='container-fluid'>
        <div className='row'>
          <nav
            className='col-md-3 col-lg-2 d-md-block bg-light sidebar collapse'
            id='sidebarMenu'
          >
            <div className='position-sticky pt-3'>
              <ul className='nav flex-column' id='myTab'>
                {Object.entries(tabs).map((tab) => (
                  <li className='nav-item' role='button' key={tab[0]}>
                    <span
                      className={
                        active_tab === tab[0]
                          ? 'active nav-link text-danger'
                          : 'nav-link'
                      }
                      onClick={() => {
                        toggle(tab[0])
                      }}
                      role='button'
                      data-bs-toggle='tab'
                      data-bs-target={`#${tab[1].id}`}
                    >
                      <span className='nav-item-icon'>{tab[1].icon}</span>
                      {tab[1].title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          <main className='col-md-9 ms-sm-auto col-lg-10 px-md-4'>
            <div className='tab-content' id='myTabContent'>
              {Object.entries(tabs).map((tab) => (
                <div
                  className={`tab-pane ${active_tab === tab[0] && 'active'}`}
                  key={tab[0]}
                  id={tab[1].id}
                >
                  {tab[1].content}
                </div>
              ))}
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  )
}

export default Dashboard
