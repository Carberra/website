import Link from 'next/link';
import React from 'react';

import { Button } from '@ui/Button';

interface Props {}

const PageNotFound: React.FC<Props> = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <p className="text-brand-gradient text-7xl font-brand lowercase text-center mb-3">
          404
        </p>
        <p className="text-white text-3xl font-sans text-center">
          Page Not Found
        </p>
        <div className="flex justify-center">
          <Link href="/" passHref>
            <Button className="w-11/12 mt-4" component="a">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
