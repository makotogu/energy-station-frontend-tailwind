import React, { Fragment } from 'react'; 
import { UserIcon } from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}
export default function UserMenu() {
  return (
      <Menu>
          <Menu.Button className="hidden sm:inline text-xl left-0 ">User</Menu.Button>
          <Menu.Button className="inline sm:hidden text-xl left-0"><UserIcon className="h-8 absolute bottom-0 right-2" /></Menu.Button>
          <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
          >
              <Menu.Items className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item >
                      {({ active }) => (
                          <a
                              className={classNames(active ? 'bg-gray-100' : '', 'flex justify-end text-base text-gray-700')}
                              href="/account-settings"
                          >
                              <div>设置&nbsp;&nbsp;&nbsp;&nbsp;</div>
                          </a>
                      )}
                  </Menu.Item>
                  <Menu.Item >
                      {({ active }) => (
                          <a
                              className={classNames(active ? 'bg-gray-100' : '', 'flex justify-end mt-2 text-base text-gray-700')}
                              href="/account-settings"
                          >
                              <div>退出&nbsp;&nbsp;&nbsp;&nbsp;</div>
                          </a>
                      )}
                  </Menu.Item>
              </Menu.Items>
          </Transition>
      </Menu>
  )
}
