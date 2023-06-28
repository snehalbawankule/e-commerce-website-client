import styled from "styled-components";

const ProductName = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #171520;
`;

const ProductTitle = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #171520;

  /* Paragraph/R-16px */

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 125% */

  display: flex;
  align-items: center;

  /* Type/Low-Emphasis */

  color: #626262;
`;

const AddToCardText = styled.button`
  font-family: "Inter";
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
  font-family: "Inter";
  font-weight: 500;
  font-size: 18px;
  display: flex;
  justify-content: end;
  color: #171520;
`;

export { ProductName, ProductTitle, AddToCardText, Price };
