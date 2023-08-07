import styled from "styled-components";

const ProductName = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #171520;
`;

const ProductTitle = styled.div`
  font-weight: 500;
  font-size: 16px;
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
`;

const Price = styled.div`
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: end;
  color: #171520;
`;

export { ProductName, ProductTitle, AddToCardText, Price };
