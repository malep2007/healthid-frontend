import gql from 'graphql-tag';

const PRODUCT_DETAIL_QUERY = gql`
  query($id: Int) {
    product(id: $id) {
      id
      productName
      productCategory {
        id
        name
      }
      dispensingSize {
        id
        name
      }
      skuNumber
      description
      brand
      manufacturer
      vatStatus
      salesPrice
      createdAt
      reorderPoint
      reorderMax
      nearestExpiryDate
      preferredSupplier {
        id
        name
      }
      backupSupplier {
        id
        name
      }
      tags
      markup
      unitCost
      loyaltyWeight
      batchInfo {
        id
        batchNo
        supplier {
          id
          name
        }
        dateReceived
        quantity
        expiryDate
        unitCost
      }
      business {
        outletSet {
          outletpreference {
            outletCurrency {
              symbol
            }
          }
        }
      }
      quantityInStock
      image
    }
  }
`;

export default PRODUCT_DETAIL_QUERY;
