import gql from 'graphql-tag';

const CREATE_BATCH_INFO = gql`
 mutation createBatchInfo(
  $notes: String,
  $dateReceived: String!,
  $deliveryPromptness: Boolean!,
  $expiryDate: String!,
  $productId: Int!,
  $quantityReceived: Int!,
  $serviceQuality: ServiceQuality!,
  $supplierId: String!,
  $costPerItem: Float!
) {
    createBatchInfo(
      comment: $notes
      dateReceived: $dateReceived
      deliveryPromptness: $deliveryPromptness
      expiryDate: $expiryDate
      productId: $productId 
      quantity: $quantityReceived 
      serviceQuality: $serviceQuality
      supplierId: $supplierId
      unitCost: $costPerItem
    ){
      message
    }
  } 
`;

export default CREATE_BATCH_INFO;
