import gql from 'graphql-tag';

const GET_SINGLE_SUPPLIER = gql`
query($id: String){
  singleSupplier(id: $id){
    id
    name
    tier {
      id
      name
    }
    isApproved
    supplierContacts{
      email
      mobileNumber
      addressLine1
      addressLine2
      city{ name }
      country{ name }
    }
    supplierratingSet{
      rating
    }
    supplierMeta{
      displayName
      creditDays
      logo
      paymentTerms
      commentary
    }
  }
}
`;

export default GET_SINGLE_SUPPLIER;
