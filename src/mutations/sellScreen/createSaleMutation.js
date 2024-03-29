import gql from 'graphql-tag';

const CREATE_SALE_MUTATION = gql`
    mutation createSale(
        $amountToPay: Float!,
        $changeDue: Float!,
        $customerId: String,
        $discountTotal: Float!,
        $notes: String,
        $outletId: Int!,
        $paidAmount: Float!,
        $paymentMethod: String!,
        $subTotal: Float!
        $batches: [Batches]!,
        ) {
            createSale(
            amountToPay: $amountToPay,
            changeDue: $changeDue,
            customerId: $customerId,
            discountTotal: $discountTotal,
            notes: $notes,
            outletId: $outletId,
            paidAmount: $paidAmount,
            paymentMethod: $paymentMethod,
            subTotal: $subTotal,
            batches: $batches
            ) 
        {
      sale {
        id
        amountToPay
        discountTotal
        paidAmount
        changeDue
        paymentMethod
        customer {
          firstName
          lastName
          email
        }
        salesPerson {
          username
        }
        outlet {
          outletRegister {
            id
          }
          business {
            tradingName
            legalName
            country
            city
            phoneNumber
            addressLine1
            addressLine2
            }
          }
      },
      message
      receipt {
        receiptNo
        barcodeUrl
        footer
      }
    }
  }
`;

export default CREATE_SALE_MUTATION;
