import styled from "styled-components";

const Wrapper = styled.div`
  .details {
    padding: 20px;
    border-bottom: 2px solid #ffdab9;
    box-shadow: 7px 7px 12px 3px rgba(0, 0, 0, 0.51);
  }
  .details-btn {
    background-color: #ffdab9;
    color: #696969;
    font-size: 15px;
    border: none;
    border-radius: 4px;
    height: 40px;
    cursor: pointer;
    outline: none;
    margin-left: 20px;
    padding: 10px 20px;
    margin-bottom: 10px;
  }
  .details-btn:hover {
    border: 2px solid#ffdab9;
    background-color: white;
    color: #ffdab9;
  }
  .details__info {
    display: flex;
    margin-bottom: 40px;
  }
  .details__info-description {
    margin-left: 20px;
  }
  .details__info-genre {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .details__info-genre-item:not(:last-child) {
    margin-right: 15px;
  }

  .inform__list {
    display: flex;
    flex-direction: row;
    padding: 0;
    margin: 0;
    list-style: none;
  }
  .inform__list-item:not(:last-child) {
    margin-right: 15px;
  }
  .inform__list-item-link {
    font-weight: 500;
    font-size: 15px;
    line-height: 1.63;
    color: #696969;
    text-decoration: none;
    text-transform: uppercase;
  }
  .active-info-link {
    color: red;
  }
`;

export default Wrapper;
