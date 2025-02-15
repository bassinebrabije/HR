import React, { useEffect } from 'react';
import Image from 'next/image';

import Lodear from '@/public/lodear.gif'; // Import your loader GIF

interface LoaderProps {
    // Removed the message prop
}

const Loader: React.FC<LoaderProps> = () => {

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        // Re-enable scrolling once the loader is gone (if necessary)
        return () => {
            document.body.style.overflow = '';
        };
    }, []);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-white  z-50">
            <div className="loader">
                {/* Replace with your GIF */}
                <Image src={Lodear} alt="Loading" width={50000} height={50000} className="w-80" />
            </div>
        </div>
    );
};

export default Loader;
