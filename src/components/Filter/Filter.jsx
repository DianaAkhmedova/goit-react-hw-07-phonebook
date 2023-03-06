import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from 'redux/filter/filter-slice';

import {
  Form,
  FormLabel,
  FormInput,
} from 'components/ContactForm/ContactForm.styled';

const Filter = () => {
  const filterValue = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleChangeFilter = ({ currentTarget: { value } }) =>
    dispatch(setFilter(value));

  return (
    <Form>
      <FormLabel>
        Find contacts by name
        <FormInput
          type="text"
          name="contactName"
          value={filterValue}
          placeholder="Enter name"
          onChange={handleChangeFilter}
        />
      </FormLabel>
    </Form>
  );
};
export default Filter;
