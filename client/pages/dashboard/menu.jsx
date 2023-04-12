import { Fragment, useState } from 'react'
import {
  CheckIcon,
  ChevronDownIcon,
  CurrencyDollarIcon,
  NoSymbolIcon,
} from '@heroicons/react/20/solid'
import Paginator from "@/components/Paginator";
// import useFetch from "@hooks/useFetch";
// import endPoints from "@services/api";
import { Menu, Transition } from '@headlessui/react'
import Modal from '@/components/Modal';
import FormProduct from '@/components_dash/FormProducts';
import useAlert from '@/hooks/useAlert';
import Alert from '@/Components/Alert';
import MenuJSON from '@/pages/menu/menujson';
import Nav from '@/components_dash/Nav';

const PRODUCT_LIMIT = 5;

export default function MenuDashboard() {
  const [offsetProducts, setOffsetProducts] = useState(0);
  const [open, setOpen] = useState(false);
  const {alert, setAlert, toggleAlert} = useAlert();

//   const products = useFetch(endPoints.products.getProducts(PRODUCT_LIMIT, offsetProducts), offsetProducts);
//   const totalProducts = useFetch(endPoints.products.getProducts(0, 0)).length;
const products = MenuJSON.slice(offsetProducts, offsetProducts+PRODUCT_LIMIT);
const totalProducts = MenuJSON.length;

  return (
    <>
    <Nav />
    <Alert alert={alert} handleClose={toggleAlert} />
    <div className="lg:flex lg:items-center lg:justify-between py-12 px-4 sm:px-10 lg:px-12">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
          Lista de platos
        </h2>
      </div>
      <div className="mt-5 flex lg:mt-0 lg:ml-4">
        <span className="sm:ml-3">
          <button
            onClick={()=>setOpen(true)}
            type="button"
            className="inline-flex items-center rounded-md bg-olive px-3 py-2 text-sm font-semibold text-white hover:text-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            <CheckIcon className="-ml-0.5 mr-1.5 h-5 w-5" aria-hidden="true" />
            Crear
          </button>
        </span>
        <Menu as="div" className="relative ml-3 sm:hidden">
          <Menu.Button className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:ring-gray-400">
            More
            <ChevronDownIcon className="-mr-1 ml-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
          </Menu.Button>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute right-0 z-10 mt-2 -mr-1 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    Edit
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                  >
                    View
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
    <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nombre
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Categoria
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Precio
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Descuento
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={product?.email}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img className="h-10 w-10 rounded-full" src={product?.imageUrl} alt="" />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{product?.name}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap max-w-sm">
                        <div className="text-sm text-gray-900">{product?.category}</div>
                        <div className="text-sm text-gray-500 overflow-hidden overflow-ellipsis">{product?.description}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">${product?.value || product?.valueUnit}</span>
                      </td>
                      <td className="px-12 py-4 whitespace-nowrap text-sm text-gray-500">{product?.descuento?<CurrencyDollarIcon title='En descuento' className="h-8 w-8 text-green-500" />:<NoSymbolIcon title='Sin descuento' className="h-8 w-8 text-red-500" />}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-amber-600 hover:text-amber-900">
                          Editar
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <a href="#" className="text-red-600 hover:text-red-900">
                          Eliminar
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {totalProducts > 0 && <Paginator totalItems={totalProducts} itemsPerPage={PRODUCT_LIMIT} setOffset={setOffsetProducts} neighbours={3}></Paginator>}
          </div>
        </div>
      </div>
      <Modal open={open} setOpen={setOpen}>
        <FormProduct setAlert={setAlert} setOpen={setOpen} />
      </Modal>
    </>
  )
}