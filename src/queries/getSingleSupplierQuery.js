import gql from 'graphql-tag';

const GET_SINGLE_SUPPLIER = gql`
query($id: String){
  singleSupplier(id: $id)
  {
    id
    name
    supplierContacts{
      id
      email
      country { name }
      city { name }
      addressLine1
      addressLine2
      mobileNumber
    }
    supplierMeta{
      id
      displayName
      creditDays
      paymentTerms
      commentary
      adminComment
    }
  }
}
`;

export default GET_SINGLE_SUPPLIER;
