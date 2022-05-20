import { InputContainer, ButtonSubmit, Input, IconSearch } from "./Form.styled";

const Form = ({ handleSubmit, handleInputChange, query }) => {
  return (
    <form onSubmit={handleSubmit}>
      <InputContainer>
        {query ? (
          <Input
            // value={query}
            placeholder="Type to search"
            type="text"
            onChange={handleInputChange}
          />
        ) : (
          <Input
            type="text"
            placeholder="Type to search"
            onChange={handleInputChange}
          />
        )}

        <ButtonSubmit type="submit">
          <IconSearch size={30} />
        </ButtonSubmit>
      </InputContainer>
    </form>
  );
};

export default Form;
