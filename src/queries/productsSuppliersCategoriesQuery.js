import gql from 'graphql-tag';

const GET_PRODUCTS_SUPPLIERS_CATEGORIES = gql`
query ($outletId: Int!, $businessId: String!){
  business(id: $businessId){
    supplierBusiness{
      id
      name
    }
  }
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
