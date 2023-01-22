import {
  Container,
  InpuField,
  Label,
  FormInput,
  Button,
} from './SearchBox.styled';
import { Formik, ErrorMessage } from 'formik';
import { Error } from 'components/Error/Error';
import * as yup from 'yup';

export const SearchBox = ({ onSubmit }) => {
  const initialValues = {
    vinCode: '',
  };
  const schema = yup.object().shape({
    vinCode: yup.string().min(17).max(17).required(''),
  });
  const handleSubmit = (value, { setSubmitting }) => {
    console.log(value.vinCode);
    onSubmit(value.vinCode);
    value.vinCode = '';
    setSubmitting(false);
  };

  return (
    <Container>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        <FormInput autoComplete="off">
          <Label htmlFor="vinCode">
            <InpuField
              placeholder="1VWBN7A35CCXXXXXX"
              type="text"
              name="vinCode"
            />
          </Label>
          <Button
            border-top-left-radius="0px"
            borderBottomLeftRadius="0px"
            type="submit"
          >
            Send
          </Button>
          <ErrorMessage name="vinCode" component={Error} />
        </FormInput>
      </Formik>
    </Container>
  );
};
