import gql from 'graphql-tag';

const CREATE_SUPPLIER = gql`
  mutation addSupplier(
    $name: String!
    $email: String!
    $mobileNumber: String!
    $addressLine1: String!
    $addressLine2: String
    $lga: String
    $citId: Int!
    $tierId: Int!
    $countryId: Int!
    $creditDays: Int
    $logo: String
    $commentary: String
    $paymentTerms: String!
  ) {
    addSupplier(
      input: {
        name: $name,
        tierId: $tierId
      },
      contactsInput:{
        email: $email
        mobileNumber: $mobileNumber
        addressLine1: $addressLine1
        addressLine2: $addressLine2
        lga: $lga
        cityId: $citId
        countryId: $countryId
      },
      metaInput:{
        creditDays: $creditDays
        logo: $logo
        paymentTerms: $paymentTerms
        commentary: $commentary
      }
    ) {
      supplier {
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
  }
`;

export default CREATE_SUPPLIER;
