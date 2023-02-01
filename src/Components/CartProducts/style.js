import styled from "styled-components";

export const CartProductsBox = styled.div`
  margin-top: 23px;
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 0px 20px 22px;
  min-width: 880px;
`;

export const CouponCheckoutBox = styled.div`
  padding: 22px 0;
`;

export const Products = styled.div``;
export const Coupon = styled.div`
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  padding: 20px 16px 22px 17px;
`;

export const CouponQuestion = styled.h3`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.fifty};
  margin-bottom: 9px;
`;

export const CouponInput = styled.input`
  outline: none;
  width: 164px;
  height: 40px;
  padding: 11px 5px 10px 10px;

  &:focus {
    outline: none;
  }
  border: 1px solid #e0e0e0;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const ApplyButton = styled.button`
  border: 1px solid #e3e8ee;
  padding: 11px 12px 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  text-align: center;
  color: #0d6efd;
  cursor: pointer;
  background-color: #fff;
  height: 40px;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;

export const Receipt = styled.div`
  background-color: ${(props) => props.theme.pallet.Box};
  border: 1px solid #e3e8ee;
  border-radius: 6px;
  box-shadow: 0px 4px 10px rgba(56, 56, 56, 0.1);
  padding: 20px 16px 21px 20px;
`;

export const Subtotal = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: -0.2px;
  color: ${(props) => props.theme.pallet.fifty};
  margin-bottom: 5px;
`;

export const Discount = styled(Subtotal)`
  & span {
    color: #fa3434;
  }
`;

export const Tax = styled(Subtotal)`
  & span {
    color: #00b517;
  }
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
  border-top: 1px solid #e4e4e4;
  padding: 23px 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  color: ${(props) => props.theme.pallet.Text};
`;

export const CheckOutButton = styled.button`
  width: 247px;
  height: 54px;
  background: #00b517;
  border-radius: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  border: none;
  cursor: pointer;
`;

export const PaymentMethodsPics = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
  margin: auto;
  margin-top: 18px;
  width: fit-content;
`;
