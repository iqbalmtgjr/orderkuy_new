import { ReactNode } from 'react'

import Label from './Label'

type Props = {
    label: string;
    htmlFor: string;
    children: ReactNode;
};

const InputGroup = ({ label, htmlFor, children }: Props) => {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  )
}

export default InputGroup