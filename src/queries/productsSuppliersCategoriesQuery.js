import gql from 'graphql-tag';

const GET_PRODUCTS_SUPPLIERS_CATEGORIES = gql`
query ($businessId: String!){
  approvedSuppliers{
  id,
  name
  }
  productCategories(
    businessId: $businessId,
    ){
    id
    name
    loyaltyWeight
    isVatApplicable
    markup
  }
  dispensingSize{
    id,
    name
  }
  products{
  id,
  productName,
  isApproved
  }
}
`;

export default GET_PRODUCTS_SUPPLIERS_CATEGORIES;
