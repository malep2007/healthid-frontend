import gql from 'graphql-tag';

const GET_USER_INFO = gql`
  query {
    me {
      id
      firstName
      lastName
      username
      mobileNumber
      secondaryPhoneNumber
      email
      secondaryEmail
      profileImage
      role {
        name
      }
      outlets {
        id
        name
        kind {
          name
        }
        city{
          name
          country{
            name
          }
        }
        outletRegister{
          name
        }
        dateLaunched
        users {
          id
          username
          email
          role {
            id
            name
          }
          jobTitle
        }
      }
      businessUser {
        id
        logo
        legalName
        tradingName
        addressLine1
        addressLine2
        city
        country
        localGovernmentArea
        phoneNumber
        twitter
        businessEmail
        facebook
        website
        instagram
        user {
          id
        }
      }
      birthday
      startingDate
      jobTitle
      activeOutlet {
        id
        name
        city {
          name
        }
        outletpreference {
          outletTimezone {
            name
          }
          paymentMethod
        }
      }
    }
  }
`;

export default GET_USER_INFO;
