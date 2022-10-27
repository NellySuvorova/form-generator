import { formAdapter } from "../../utils/form-adapter";

interface IProps {
  jsonInput: string;
}

export const Form: React.FC<IProps> = ({ jsonInput }) => {
  const { title, buttons, formFields } = formAdapter(jsonInput);

  return <div>Hello</div>;
};
