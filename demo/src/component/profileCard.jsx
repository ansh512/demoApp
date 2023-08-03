import { Card,Dropdown  } from 'flowbite-react';

export default function profileCard({name,company,image}) {
  return (
    <Card className="max-w-sm">
      <div className="flex justify-end px-4 pt-4">
      </div>
      <div className="flex flex-col items-center pb-10">
        <img Display Name
          alt="Bonnie image"
          className="mb-3 rounded-full shadow-lg"
          height="96"
          src={image}
          width="96"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
          {name}
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Hired by: {company}
        </span>
        <div className="mt-4 flex space-x-3 lg:mt-6 p-4 rounded-lg bg-orange-300">
            <p className="italic text-justify">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
        </div>
      </div>
    </Card>
  )
}


