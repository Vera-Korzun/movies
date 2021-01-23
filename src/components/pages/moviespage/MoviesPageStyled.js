import styled from "styled-components";

const Wrapper = styled.div`
  .movies {
    padding: 20px;
    border-bottom: 2px solid #ffdab9;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
  }
  .movies__form {
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 600px;
    overflow: hidden;
  }
  .movies__form-input {
    display: inline-block;
    width: 100%;
    height: 50px;
    font-size: 20px;
    border: 2px solid #ffdab9;
    border-radius: 4px;
    outline: none;
    padding-left: 15px;
  }
  .movies__form-input::placeholder {
    font-size: 20px;
  }
  .movies__form-btn {
    background-color: #ffdab9;
    color: #696969;
    font-size: 20px;
    border: none;
    border-radius: 4px;
    height: 56px;
    cursor: pointer;
    outline: none;
    margin-left: 20px;
    padding: 10px 25px;
  }
  .movies__form-btn:hover {
    border: 2px solid#ffdab9;
    background-color: white;
    color: #ffdab9;
  }

  .movies__form-btn-label {
    font-size: 18px;
  }
`;

export default Wrapper;
