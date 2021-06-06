declare module '*.svg' {
  import { FunctionComponent, SVGProps } from 'react';

  const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;

  export default ReactComponent;
}
