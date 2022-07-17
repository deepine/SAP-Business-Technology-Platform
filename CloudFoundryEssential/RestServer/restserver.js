const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample Mock Data
let salesorderitems = [
  {
    SalesOrder: 1,
    SalesOrderItem: "10",
    HigherLevelItem: "0",
    SalesOrderItemCategory: "TAN",
    SalesOrderItemText: "Trad.Good 11,PD,Reg.Trading",
    PurchaseOrderByCustomer: "gfh",
    PurchaseOrderByShipToParty: "",
    UnderlyingPurchaseOrderItem: "10",
    ExternalItemID: "",
    Material: "MZ-FG-E11",
    MaterialByCustomer: "",
    PricingDate: "/Date(1473120000000)/",
    PricingReferenceMaterial: "",
    BillingPlan: "",
    RequestedQuantity: "2",
    RequestedQuantityUnit: "PC",
    RequestedQuantitySAPUnit: "ST",
    RequestedQuantityISOUnit: "PCE",
    OrderQuantityUnit: "PC",
    OrderQuantitySAPUnit: "ST",
    OrderQuantityISOUnit: "PCE",
    ConfdDelivQtyInOrderQtyUnit: "2",
    ItemGrossWeight: "13.700",
    ItemNetWeight: "10.000",
    ItemWeightUnit: "KG",
    ItemWeightSAPUnit: "KG",
    ItemWeightISOUnit: "KGM",
    ItemVolume: "0.000",
    ItemVolumeUnit: "",
    ItemVolumeSAPUnit: "",
    ItemVolumeISOUnit: "",
    TransactionCurrency: "USD",
    NetAmount: "48.50",
    TotalSDDocReferenceStatus: "",
    SDDocReferenceStatus: "",
    MaterialSubstitutionReason: "",
    MaterialGroup: "L004",
    MaterialPricingGroup: "",
    AdditionalMaterialGroup1: "",
    AdditionalMaterialGroup2: "",
    AdditionalMaterialGroup3: "",
    AdditionalMaterialGroup4: "",
    AdditionalMaterialGroup5: "",
    BillingDocumentDate: "/Date(1473120000000)/",
    ContractAccount: "",
    AdditionalValueDays: "0",
    ServicesRenderedDate: null,
    Batch: "",
    ProductionPlant: "1710",
    StorageLocation: "",
    DeliveryGroup: "0",
    ShippingPoint: "1710",
    ShippingType: "",
    DeliveryPriority: "2",
    DeliveryDateTypeRule: "",
    IncotermsClassification: "EXW",
    IncotermsTransferLocation: "Palo Alto",
    IncotermsLocation1: "Palo Alto",
    IncotermsLocation2: "",
    TaxAmount: "0.00",
    ProductTaxClassification1: "0",
    ProductTaxClassification2: "",
    ProductTaxClassification3: "",
    ProductTaxClassification4: "",
    ProductTaxClassification5: "",
    ProductTaxClassification6: "",
    ProductTaxClassification7: "",
    ProductTaxClassification8: "",
    ProductTaxClassification9: "",
    MatlAccountAssignmentGroup: "03",
    CostAmount: "37.30",
    CustomerPaymentTerms: "0004",
    FixedValueDate: null,
    CustomerGroup: "",
    SalesDocumentRjcnReason: "",
    ItemBillingBlockReason: "",
    SlsDocIsRlvtForProofOfDeliv: false,
    WBSElement: "",
    ProfitCenter: "Z_LOG_PC7",
    AccountingExchangeRate: "0.00000",
    ReferenceSDDocument: "20000001",
    ReferenceSDDocumentItem: "10",
    SDProcessStatus: "C",
    DeliveryStatus: "C",
    OrderRelatedBillingStatus: "",
    YY1_Style_ID_SDI: "0",
    YY1_Engraving_SDI: "",
  },

  {
    SalesOrder: 2,
    SalesOrderItem: "10",
    HigherLevelItem: "0",
    SalesOrderItemCategory: "TAN",
    SalesOrderItemText: "FIN226,MTO,PD,Batch-Fifo,SerialNo",
    PurchaseOrderByCustomer: "gunjan",
    PurchaseOrderByShipToParty: "",
    UnderlyingPurchaseOrderItem: "10",
    ExternalItemID: "",
    Material: "MZ-FG-E11",
    MaterialByCustomer: "",
    PricingDate: "/Date(1473120000000)/",
    PricingReferenceMaterial: "",
    BillingPlan: "",
    RequestedQuantity: "2",
    RequestedQuantityUnit: "PC",
    RequestedQuantitySAPUnit: "ST",
    RequestedQuantityISOUnit: "PCE",
    OrderQuantityUnit: "PC",
    OrderQuantitySAPUnit: "ST",
    OrderQuantityISOUnit: "PCE",
    ConfdDelivQtyInOrderQtyUnit: "2",
    ItemGrossWeight: "13.700",
    ItemNetWeight: "10.000",
    ItemWeightUnit: "KG",
    ItemWeightSAPUnit: "KG",
    ItemWeightISOUnit: "KGM",
    ItemVolume: "0.000",
    ItemVolumeUnit: "",
    ItemVolumeSAPUnit: "",
    ItemVolumeISOUnit: "",
    TransactionCurrency: "USD",
    NetAmount: "48.50",
    TotalSDDocReferenceStatus: "",
    SDDocReferenceStatus: "",
    MaterialSubstitutionReason: "",
    MaterialGroup: "L004",
    MaterialPricingGroup: "",
    AdditionalMaterialGroup1: "",
    AdditionalMaterialGroup2: "",
    AdditionalMaterialGroup3: "",
    AdditionalMaterialGroup4: "",
    AdditionalMaterialGroup5: "",
    BillingDocumentDate: "/Date(1473120000000)/",
    ContractAccount: "",
    AdditionalValueDays: "0",
    ServicesRenderedDate: null,
    Batch: "",
    ProductionPlant: "1710",
    StorageLocation: "",
    DeliveryGroup: "0",
    ShippingPoint: "1710",
    ShippingType: "",
    DeliveryPriority: "2",
    DeliveryDateTypeRule: "",
    IncotermsClassification: "EXW",
    IncotermsTransferLocation: "Palo Alto",
    IncotermsLocation1: "Palo Alto",
    IncotermsLocation2: "",
    TaxAmount: "0.00",
    ProductTaxClassification1: "0",
    ProductTaxClassification2: "",
    ProductTaxClassification3: "",
    ProductTaxClassification4: "",
    ProductTaxClassification5: "",
    ProductTaxClassification6: "",
    ProductTaxClassification7: "",
    ProductTaxClassification8: "",
    ProductTaxClassification9: "",
    MatlAccountAssignmentGroup: "03",
    CostAmount: "37.30",
    CustomerPaymentTerms: "0004",
    FixedValueDate: null,
    CustomerGroup: "",
    SalesDocumentRjcnReason: "",
    ItemBillingBlockReason: "",
    SlsDocIsRlvtForProofOfDeliv: false,
    WBSElement: "",
    ProfitCenter: "Z_LOG_PC7",
    AccountingExchangeRate: "0.00000",
    ReferenceSDDocument: "20000001",
    ReferenceSDDocumentItem: "10",
    SDProcessStatus: "C",
    DeliveryStatus: "C",
    OrderRelatedBillingStatus: "",
    YY1_Style_ID_SDI: "0",
    YY1_Engraving_SDI: "",
  },

  {
    SalesOrder: 3,
    SalesOrderItem: "10",
    HigherLevelItem: "0",
    SalesOrderItemCategory: "TAN",
    SalesOrderItemText: "eBike E11",
    PurchaseOrderByCustomer: "USCU-CUS02",
    PurchaseOrderByShipToParty: "",
    UnderlyingPurchaseOrderItem: "10",
    ExternalItemID: "",
    Material: "MZ-FG-E11",
    MaterialByCustomer: "",
    PricingDate: "/Date(1473120000000)/",
    PricingReferenceMaterial: "",
    BillingPlan: "",
    RequestedQuantity: "2",
    RequestedQuantityUnit: "PC",
    RequestedQuantitySAPUnit: "ST",
    RequestedQuantityISOUnit: "PCE",
    OrderQuantityUnit: "PC",
    OrderQuantitySAPUnit: "ST",
    OrderQuantityISOUnit: "PCE",
    ConfdDelivQtyInOrderQtyUnit: "2",
    ItemGrossWeight: "13.700",
    ItemNetWeight: "10.000",
    ItemWeightUnit: "KG",
    ItemWeightSAPUnit: "KG",
    ItemWeightISOUnit: "KGM",
    ItemVolume: "0.000",
    ItemVolumeUnit: "",
    ItemVolumeSAPUnit: "",
    ItemVolumeISOUnit: "",
    TransactionCurrency: "USD",
    NetAmount: "48.50",
    TotalSDDocReferenceStatus: "",
    SDDocReferenceStatus: "",
    MaterialSubstitutionReason: "",
    MaterialGroup: "L004",
    MaterialPricingGroup: "",
    AdditionalMaterialGroup1: "",
    AdditionalMaterialGroup2: "",
    AdditionalMaterialGroup3: "",
    AdditionalMaterialGroup4: "",
    AdditionalMaterialGroup5: "",
    BillingDocumentDate: "/Date(1473120000000)/",
    ContractAccount: "",
    AdditionalValueDays: "0",
    ServicesRenderedDate: null,
    Batch: "",
    ProductionPlant: "1710",
    StorageLocation: "",
    DeliveryGroup: "0",
    ShippingPoint: "1710",
    ShippingType: "",
    DeliveryPriority: "2",
    DeliveryDateTypeRule: "",
    IncotermsClassification: "EXW",
    IncotermsTransferLocation: "Palo Alto",
    IncotermsLocation1: "Palo Alto",
    IncotermsLocation2: "",
    TaxAmount: "0.00",
    ProductTaxClassification1: "0",
    ProductTaxClassification2: "",
    ProductTaxClassification3: "",
    ProductTaxClassification4: "",
    ProductTaxClassification5: "",
    ProductTaxClassification6: "",
    ProductTaxClassification7: "",
    ProductTaxClassification8: "",
    ProductTaxClassification9: "",
    MatlAccountAssignmentGroup: "03",
    CostAmount: "37.30",
    CustomerPaymentTerms: "0004",
    FixedValueDate: null,
    CustomerGroup: "",
    SalesDocumentRjcnReason: "",
    ItemBillingBlockReason: "",
    SlsDocIsRlvtForProofOfDeliv: false,
    WBSElement: "",
    ProfitCenter: "Z_LOG_PC7",
    AccountingExchangeRate: "0.00000",
    ReferenceSDDocument: "20000001",
    ReferenceSDDocumentItem: "10",
    SDProcessStatus: "C",
    DeliveryStatus: "C",
    OrderRelatedBillingStatus: "",
    YY1_Style_ID_SDI: "0",
    YY1_Engraving_SDI: "",
  },

  {
    SalesOrder: 4,
    SalesOrderItem: "10",
    HigherLevelItem: "0",
    SalesOrderItemCategory: "CB2",
    SalesOrderItemText: "Trad.Good 13,Reorder Point,Thrd Party",
    PurchaseOrderByCustomer: "MRINAL99",
    PurchaseOrderByShipToParty: "",
    UnderlyingPurchaseOrderItem: "10",
    ExternalItemID: "",
    Material: "MZ-FG-E11",
    MaterialByCustomer: "",
    PricingDate: "/Date(1473120000000)/",
    PricingReferenceMaterial: "",
    BillingPlan: "",
    RequestedQuantity: "2",
    RequestedQuantityUnit: "PC",
    RequestedQuantitySAPUnit: "ST",
    RequestedQuantityISOUnit: "PCE",
    OrderQuantityUnit: "PC",
    OrderQuantitySAPUnit: "ST",
    OrderQuantityISOUnit: "PCE",
    ConfdDelivQtyInOrderQtyUnit: "2",
    ItemGrossWeight: "13.700",
    ItemNetWeight: "10.000",
    ItemWeightUnit: "KG",
    ItemWeightSAPUnit: "KG",
    ItemWeightISOUnit: "KGM",
    ItemVolume: "0.000",
    ItemVolumeUnit: "",
    ItemVolumeSAPUnit: "",
    ItemVolumeISOUnit: "",
    TransactionCurrency: "USD",
    NetAmount: "48.50",
    TotalSDDocReferenceStatus: "",
    SDDocReferenceStatus: "",
    MaterialSubstitutionReason: "",
    MaterialGroup: "L004",
    MaterialPricingGroup: "",
    AdditionalMaterialGroup1: "",
    AdditionalMaterialGroup2: "",
    AdditionalMaterialGroup3: "",
    AdditionalMaterialGroup4: "",
    AdditionalMaterialGroup5: "",
    BillingDocumentDate: "/Date(1473120000000)/",
    ContractAccount: "",
    AdditionalValueDays: "0",
    ServicesRenderedDate: null,
    Batch: "",
    ProductionPlant: "1710",
    StorageLocation: "",
    DeliveryGroup: "0",
    ShippingPoint: "1710",
    ShippingType: "",
    DeliveryPriority: "2",
    DeliveryDateTypeRule: "",
    IncotermsClassification: "EXW",
    IncotermsTransferLocation: "Palo Alto",
    IncotermsLocation1: "Palo Alto",
    IncotermsLocation2: "",
    TaxAmount: "0.00",
    ProductTaxClassification1: "0",
    ProductTaxClassification2: "",
    ProductTaxClassification3: "",
    ProductTaxClassification4: "",
    ProductTaxClassification5: "",
    ProductTaxClassification6: "",
    ProductTaxClassification7: "",
    ProductTaxClassification8: "",
    ProductTaxClassification9: "",
    MatlAccountAssignmentGroup: "03",
    CostAmount: "37.30",
    CustomerPaymentTerms: "0004",
    FixedValueDate: null,
    CustomerGroup: "",
    SalesDocumentRjcnReason: "",
    ItemBillingBlockReason: "",
    SlsDocIsRlvtForProofOfDeliv: false,
    WBSElement: "",
    ProfitCenter: "Z_LOG_PC7",
    AccountingExchangeRate: "0.00000",
    ReferenceSDDocument: "20000001",
    ReferenceSDDocumentItem: "10",
    SDProcessStatus: "C",
    DeliveryStatus: "C",
    OrderRelatedBillingStatus: "",
    YY1_Style_ID_SDI: "0",
    YY1_Engraving_SDI: "",
  },

  {
    SalesOrder: 5,
    SalesOrderItem: "10",
    HigherLevelItem: "0",
    SalesOrderItemCategory: "CB2",
    SalesOrderItemText: "Trunk MTX EX Bag",
    PurchaseOrderByCustomer: "MKC99",
    PurchaseOrderByShipToParty: "",
    UnderlyingPurchaseOrderItem: "10",
    ExternalItemID: "",
    Material: "MZ-FG-E11",
    MaterialByCustomer: "",
    PricingDate: "/Date(1473120000000)/",
    PricingReferenceMaterial: "",
    BillingPlan: "",
    RequestedQuantity: "2",
    RequestedQuantityUnit: "PC",
    RequestedQuantitySAPUnit: "ST",
    RequestedQuantityISOUnit: "PCE",
    OrderQuantityUnit: "PC",
    OrderQuantitySAPUnit: "ST",
    OrderQuantityISOUnit: "PCE",
    ConfdDelivQtyInOrderQtyUnit: "2",
    ItemGrossWeight: "13.700",
    ItemNetWeight: "10.000",
    ItemWeightUnit: "KG",
    ItemWeightSAPUnit: "KG",
    ItemWeightISOUnit: "KGM",
    ItemVolume: "0.000",
    ItemVolumeUnit: "",
    ItemVolumeSAPUnit: "",
    ItemVolumeISOUnit: "",
    TransactionCurrency: "USD",
    NetAmount: "48.50",
    TotalSDDocReferenceStatus: "",
    SDDocReferenceStatus: "",
    MaterialSubstitutionReason: "",
    MaterialGroup: "L004",
    MaterialPricingGroup: "",
    AdditionalMaterialGroup1: "",
    AdditionalMaterialGroup2: "",
    AdditionalMaterialGroup3: "",
    AdditionalMaterialGroup4: "",
    AdditionalMaterialGroup5: "",
    BillingDocumentDate: "/Date(1473120000000)/",
    ContractAccount: "",
    AdditionalValueDays: "0",
    ServicesRenderedDate: null,
    Batch: "",
    ProductionPlant: "1710",
    StorageLocation: "",
    DeliveryGroup: "0",
    ShippingPoint: "1710",
    ShippingType: "",
    DeliveryPriority: "2",
    DeliveryDateTypeRule: "",
    IncotermsClassification: "EXW",
    IncotermsTransferLocation: "Palo Alto",
    IncotermsLocation1: "Palo Alto",
    IncotermsLocation2: "",
    TaxAmount: "0.00",
    ProductTaxClassification1: "0",
    ProductTaxClassification2: "",
    ProductTaxClassification3: "",
    ProductTaxClassification4: "",
    ProductTaxClassification5: "",
    ProductTaxClassification6: "",
    ProductTaxClassification7: "",
    ProductTaxClassification8: "",
    ProductTaxClassification9: "",
    MatlAccountAssignmentGroup: "03",
    CostAmount: "37.30",
    CustomerPaymentTerms: "0004",
    FixedValueDate: null,
    CustomerGroup: "",
    SalesDocumentRjcnReason: "",
    ItemBillingBlockReason: "",
    SlsDocIsRlvtForProofOfDeliv: false,
    WBSElement: "",
    ProfitCenter: "Z_LOG_PC7",
    AccountingExchangeRate: "0.00000",
    ReferenceSDDocument: "20000001",
    ReferenceSDDocumentItem: "10",
    SDProcessStatus: "C",
    DeliveryStatus: "C",
    OrderRelatedBillingStatus: "",
    YY1_Style_ID_SDI: "0",
    YY1_Engraving_SDI: "",
  },
];

// Landing Page
app.get("/", (req, res) => {
  res.send("Sales Order Iteam SCC test Server");
});

//Get A_SalesOrderItem
//http://localhost:4000/A_SalesOrderItems/
/* 
- authorization
	username : myuser
	password : mypassword
*/
app.get("/A_SalesOrderItems", (req, res) => {
  const auth = req.headers.authorization || ""; // if(!auth) { auth = '' } else { auth = req.headers.authorization }
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8"); //auth가 "Basic am9objpzZWNyZXQ=" 처럼 리턴되는데 "Basic "을 제거하기위해 6번째 문자 이후부터 가져온다.
  console.log("User: " + user + " Auth: " + auth);

  if (user === "myuser:mypassword") {
    //res.json({"status": 200, "salesorderitems": salesorderitems});
    //res.json(salesorderitems);
    res.json({ d: { results: salesorderitems } }); // Odata V2의 구조가 "d":{"results":[{}, {}, {}]} 형식으로 되어있다.
    console.log(salesorderitems);
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Get A_SalesOrderItem with query
//http://localhost:4000/A_SalesOrderItems/query?salesorder_id=2
/* 
- authorization
	username : myuser
	password : mypassword
*/
app.get("/A_SalesOrderItems/query", (req, res) => {
  const auth = req.headers.authorization || ""; // if(!auth) { auth = '' } else { auth = req.headers.authorization }
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8"); //auth가 "Basic am9objpzZWNyZXQ=" 처럼 리턴되는데 "Basic "을 제거하기위해 6번째 문자 이후부터 가져온다.
  console.log("User: " + user + " Auth: " + auth);

  if (user === "myuser:mypassword") {
    const salesorder_id = req.query.salesorder_id;
    const salesorderitemSelected = salesorderitems.filter(
      (salesorderitemsData) => salesorderitemsData.SalesOrder == salesorder_id
    );
    //res.json({"status": 200, "salesorderitems": salesorderitemSelected});
    res.json({ d: { results: salesorderitemSelected } }); // Odata V2의 구조가 "d":{"results":[{}, {}, {}]} 형식으로 되어있다.
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Get A_SalesOrderItem with parameter
//http://localhost:4000/A_SalesOrderItems/query/2
/* 
- authorization
	username : myuser
	password : mypassword
*/
app.get("/A_SalesOrderItems/query/:salesorder_id", (req, res) => {
  const auth = req.headers.authorization || ""; // if(!auth) { auth = '' } else { auth = req.headers.authorization }
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8"); //auth가 "Basic am9objpzZWNyZXQ=" 처럼 리턴되는데 "Basic "을 제거하기위해 6번째 문자 이후부터 가져온다.
  console.log("User: " + user + " Auth: " + auth);

  if (user === "myuser:mypassword") {
    const salesorder_id = req.params.salesorder_id; //const {salesorder_id} = req.params 와 같다.
    console.log("AAAAAAAAA : " + salesorder_id);
    const salesorderitemSelected = salesorderitems.filter(
      (salesorderitemsData) => salesorderitemsData.SalesOrder == salesorder_id
    );
    //res.json({"status": 200, "salesorderitems": salesorderitemSelected});
    res.json({ d: { results: salesorderitemSelected } }); // Odata V2의 구조가 "d":{"results":[{}, {}, {}]} 형식으로 되어있다.
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Post A_SalesOrderItem (Insert)
//http://localhost:4000/A_SalesOrderItems
/* 
- authorization
	username : myuser
	password : mypassword

- body 
{
    "SalesOrder": 6,
	"SalesOrderItem": "10",
	"HigherLevelItem": "0",
	"SalesOrderItemCategory": "CB2",
	"SalesOrderItemText": "Trunk MTX EX Bag",
	"PurchaseOrderByCustomer": "MKC99"
	...
}
*/
app.post("/A_SalesOrderItems", (req, res) => {
  const auth = req.headers.authorization || "";
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8");
  console.log("User: " + user);
  if (user === "myuser:mypassword") {
    const {
      SalesOrder,
      SalesOrderItem,
      HigherLevelItem,
      SalesOrderItemCategory,
      SalesOrderItemText,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      UnderlyingPurchaseOrderItem,
      ExternalItemID,
      Material,
      MaterialByCustomer,
      PricingDate,
      PricingReferenceMaterial,
      BillingPlan,
      RequestedQuantity,
      RequestedQuantityUnit,
      RequestedQuantitySAPUnit,
      RequestedQuantityISOUnit,
    } = req.body; 

    console.log("SalesOrder: " + SalesOrder);
    
    salesorderitems = salesorderitems.concat({
      SalesOrder,
      SalesOrderItem,
      HigherLevelItem,
      SalesOrderItemCategory,
      SalesOrderItemText,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      UnderlyingPurchaseOrderItem,
      ExternalItemID,
      Material,
      MaterialByCustomer,
      PricingDate,
      PricingReferenceMaterial,
      BillingPlan,
      RequestedQuantity,
      RequestedQuantityUnit,
      RequestedQuantitySAPUnit,
      RequestedQuantityISOUnit,
    });

    console.log("salesorderitemTemp: " + salesorderitems[0].SalesOrder);

    res.json({ status: 200, salesorderitems: salesorderitems });
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Put A_SalesOrderItem (모든요소 업데이트, 만약 업데이트 요소가 없으면 해당 요소는 null)
//http://localhost:4000/A_SalesOrderItems
/* 
- authorization
	username : myuser
	password : mypassword

- body
{
    "SalesOrder": 5,
	"SalesOrderItem": "999",
	"HigherLevelItem": "888"
}
*/
app.put("/A_SalesOrderItems", (req, res) => {
  const auth = req.headers.authorization || "";
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8");
  console.log("User: " + user);
  if (user === "myuser:mypassword") {
    const {
      SalesOrder,
      SalesOrderItem,
      HigherLevelItem,
      SalesOrderItemCategory,
      SalesOrderItemText,
      PurchaseOrderByCustomer,
    } = req.body; 

    salesorderitems = salesorderitems.map((salesorderitemsData) => {
      console.log(salesorderitemsData);

      if (salesorderitemsData.SalesOrder == SalesOrder) {
        salesorderitemsData.SalesOrderItem = SalesOrderItem;
        salesorderitemsData.HigherLevelItem = HigherLevelItem;
        salesorderitemsData.SalesOrderItemCategory = SalesOrderItemCategory;
        salesorderitemsData.SalesOrderItemText = SalesOrderItemText;
        salesorderitemsData.PurchaseOrderByCustomer = PurchaseOrderByCustomer;
      }

      return {
        SalesOrder: salesorderitemsData.SalesOrder,
        SalesOrderItem: salesorderitemsData.SalesOrderItem,
        HigherLevelItem: salesorderitemsData.HigherLevelItem,
        SalesOrderItemCategory: salesorderitemsData.SalesOrderItemCategory,
        SalesOrderItemText: salesorderitemsData.SalesOrderItemText,
        PurchaseOrderByCustomer: salesorderitemsData.PurchaseOrderByCustomer,
      };
    });

    res.json({ ok: true, salesorderitems: salesorderitems });
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Patch A_SalesOrderItem (일부요소 업데이트, 만약 업데이트 요소가 없으면 해당 요소는 이전값 그대로)
/* 
- authorization
	username : myuser
	password : mypassword

- body
{
    "SalesOrder": 5,
	"SalesOrderItem": "999",
	"HigherLevelItem": "888"
}
*/
app.patch("/A_SalesOrderItems", (req, res) => {
  const auth = req.headers.authorization || "";
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8");
  console.log("User: " + user);
  if (user === "myuser:mypassword") {
    const {
      SalesOrder,
      SalesOrderItem,
      HigherLevelItem,
      SalesOrderItemCategory,
      SalesOrderItemText,
      PurchaseOrderByCustomer,
      PurchaseOrderByShipToParty,
      UnderlyingPurchaseOrderItem,
      ExternalItemID,
      Material,
      MaterialByCustomer,
      PricingDate,
      PricingReferenceMaterial,
      BillingPlan,
      RequestedQuantity,
      RequestedQuantityUnit,
      RequestedQuantitySAPUnit,
      RequestedQuantityISOUnit,
    } = req.body; //body를 분해하여 변수에 저장

    salesorderitemUpdated = salesorderitems.map((salesorderitemsData) => {
      console.log(salesorderitemsData);

      if (salesorderitemsData.SalesOrder == SalesOrder) {
        salesorderitemsData.SalesOrderItem =
          SalesOrderItem || salesorderitemsData.SalesOrderItem;
        salesorderitemsData.HigherLevelItem =
          HigherLevelItem || salesorderitemsData.HigherLevelItem;
        salesorderitemsData.SalesOrderItemCategory =
          SalesOrderItemCategory || salesorderitemsData.SalesOrderItemCategory;
        salesorderitemsData.SalesOrderItemText =
          SalesOrderItemText || salesorderitemsData.SalesOrderItemText;
        salesorderitemsData.PurchaseOrderByCustomer =
          PurchaseOrderByCustomer ||
          salesorderitemsData.PurchaseOrderByCustomer;
        salesorderitemsData.PurchaseOrderByShipToParty =
          PurchaseOrderByShipToParty ||
          salesorderitemsData.PurchaseOrderByShipToParty;
        salesorderitemsData.UnderlyingPurchaseOrderItem =
          UnderlyingPurchaseOrderItem ||
          salesorderitemsData.UnderlyingPurchaseOrderItem;
        salesorderitemsData.ExternalItemID =
          ExternalItemID || salesorderitemsData.ExternalItemID;
        salesorderitemsData.Material = Material || salesorderitemsData.Material;
        salesorderitemsData.MaterialByCustomer =
          MaterialByCustomer || salesorderitemsData.MaterialByCustomer;
        salesorderitemsData.PricingDate =
          PricingDate || salesorderitemsData.PricingDate;
        salesorderitemsData.PricingReferenceMaterial =
          PricingReferenceMaterial ||
          salesorderitemsData.PricingReferenceMaterial;
        salesorderitemsData.BillingPlan =
          BillingPlan || salesorderitemsData.BillingPlan;
        salesorderitemsData.RequestedQuantity =
          RequestedQuantity || salesorderitemsData.RequestedQuantity;
        salesorderitemsData.RequestedQuantityUnit =
          RequestedQuantityUnit || salesorderitemsData.RequestedQuantityUnit;
        salesorderitemsData.RequestedQuantitySAPUnit =
          RequestedQuantitySAPUnit ||
          salesorderitemsData.RequestedQuantitySAPUnit;
        salesorderitemsData.RequestedQuantityISOUnit =
          RequestedQuantityISOUnit ||
          salesorderitemsData.RequestedQuantityISOUnit;
      }

      return {
        SalesOrder: salesorderitemsData.SalesOrder,
        SalesOrderItem: salesorderitemsData.SalesOrderItem,
        HigherLevelItem: salesorderitemsData.HigherLevelItem,
        SalesOrderItemCategory: salesorderitemsData.SalesOrderItemCategory,
        SalesOrderItemText: salesorderitemsData.SalesOrderItemText,
        PurchaseOrderByCustomer: salesorderitemsData.PurchaseOrderByCustomer,
        PurchaseOrderByShipToParty:
          salesorderitemsData.PurchaseOrderByShipToParty,
        UnderlyingPurchaseOrderItem:
          salesorderitemsData.UnderlyingPurchaseOrderItem,
        ExternalItemID: salesorderitemsData.ExternalItemID,
        Material: salesorderitemsData.Material,
        MaterialByCustomer: salesorderitemsData.MaterialByCustomer,
        PricingDate: salesorderitemsData.PricingDate,
        PricingReferenceMaterial: salesorderitemsData.PricingReferenceMaterial,
        BillingPlan: salesorderitemsData.BillingPlan,
        RequestedQuantity: salesorderitemsData.RequestedQuantity,
        RequestedQuantityUnit: salesorderitemsData.RequestedQuantityUnit,
        RequestedQuantitySAPUnit: salesorderitemsData.RequestedQuantitySAPUnit,
        RequestedQuantityISOUnit: salesorderitemsData.RequestedQuantityISOUnit,
      };
    });

    res.json({ ok: true, salesorderitems: salesorderitemUpdated });
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

//Delete A_SalesOrderItem (일부항목 삭제)
//http://localhost:4000/A_SalesOrderItems
/* 
- authorization
	username : myuser
	password : mypassword

- body
{
    "SalesOrder": 5
}
*/
app.delete("/A_SalesOrderItems", (req, res) => {
  const auth = req.headers.authorization || "";
  const user = Buffer.from(auth.substring(6), "base64").toString("utf8");
  console.log("User: " + user);
  if (user === "myuser:mypassword") {
    const SalesOrder = req.body.SalesOrder; 
    
    salesorderitems = salesorderitems.filter(
      (salesorderitemsData) => salesorderitemsData.SalesOrder != SalesOrder
    );

    res.json({ ok: true, salesorderitems: salesorderitems });
  } else {
    res.status(401).send("Authorization Error : invalid username or password");
  }
});

// Express Server Start
app.listen(4000, () => console.log("Rest API Mockup Server"));
