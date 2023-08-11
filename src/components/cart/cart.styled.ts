import styled from "styled-components";

const ProductName = styled.div`
  font-weight: 500;
  font-size: 18px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  color: #171520;
`;

const ProductTitle = styled.div`
  font-weight: 300;
  font-size: 14px;
  display: flex;
  align-items: center;
  color: #171520;
  display: flex;
  align-items: center;
`;

const AddToCardText = styled.button`
  font-weight: 600;
  font-size: 14px;
  background: none;
  border: none;
  text-decoration-line: underline;
  color: #1b4b66;
  padding: 0px;
  @media (max-width: 767px) {
    font-size: 12px;
    text-align: start;
    padding-right: 5px;
  }
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 20px;
  display: flex;
  justify-content: end;
  color: #171520;
`;

export { ProductName, ProductTitle, AddToCardText, Price };
