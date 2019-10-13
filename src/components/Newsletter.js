import React from 'react';

const Newsletter = () => {

    return (
        <div className="w-full p-6 bg-blue-100">
            <div className="container mx-auto px-4">
                <div className="sm:flex mt-10 mb-10">
                    <div className="sm:mt-0 mt-8 h-auto">
                        <div className="text-red-light mb-2 font-medium">Newsletter</div>
                        <p className="text-grey-darker leading-normal">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, consectetur. </p>
                        <div className="mt-4 flex">
                            <input type="text" className="p-2 border border-grey-light round text-grey-dark text-sm h-auto" placeholder="Your email address" />
                            <button className="bg-orange text-white rounded-sm h-auto text-xs p-3">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Newsletter