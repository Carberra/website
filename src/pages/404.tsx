import React from 'react';

import Meta from '@utils/meta';

import { Button } from '@ui/Button';

interface Props {}

const PageNotFound: React.FC<Props> = () => {
  return (
    <div>
      <Meta
        title="404 | Carberra"
        description="The requested does not exist."
      />
      <div className="flex justify-center items-center min-h-screen">
        <div>
          <p className="text-brand-gradient text-7xl font-brand uppercase text-center mb-3">
            404
          </p>
          <p className="text-white text-3xl font-sans text-center">
            Page not found.
          </p>
          <div className="flex justify-center">
            <Button className="w-11/12 mt-4" href="/">
              Return home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
