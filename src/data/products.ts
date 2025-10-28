import priceProtect from '../assets/images/priceProtect.jpg'
import regularPay from '../assets/images/RegularPay.jpg'
import financeAgainstStorage from '../assets/images/financeAgainstStorage.jpg'
import inputOnCredit from '../assets/images/inputOnCredit.jpg'
import receivableFinance from '../assets/images/receivableFinance.png'
import smallVendor from '../assets/images/smallVendor.png'
import vendorBg from '../../src/assets/images/smallVenderBG.jpg'
import receivableBG from '../../src/assets/images/receivableFinanceBG.jpg'
import financeBG from '../../src/assets/images/FinanceAgainstBG.jpg'
import inputBG from '../../src/assets/images/InputOnCreditBG.jpg'
import priceProtectBG from '../../src/assets/images/priceProtectBG.jpg'
import regularBG from '../../src/assets/images/receivableFinanceBG.jpg'

export interface product {
    id:string,
    image:string,
    bgImg:string,
    title:string,
    desc:string,
    para:string,
}

export const productData : product[]=[
    {
        id:"service_1",
        image:smallVendor,
        title:"Small vendor finance",
        bgImg:vendorBg,
        desc : "Get upfront payment against valid MSP receipt",
        para: "Small vendors can get easy access to working capital finance for their daily requirements at flexible terms",
    },
    {
        id:"service_2",
        image:receivableFinance,
        title:"Receivable Finance",
        bgImg:receivableBG,
        desc : "Get upfront payment against valid MSP receipt or invoice ",
        para:"Farmers can sell their produce via government MSP channel or to an institutional buyer (against open market which usually pays lower) with peace of mind without worrying for payment delays since this product will provide advance against these receivables"
    },
    {
        id:"service_3",
        image:financeAgainstStorage,
        title:"Finance Against Storage",
        bgImg:financeBG,
        desc : "Get upfront payment against valid MSP receipt",
        para:"Farmers do not need to sell their produce immediately post harvest, its better to sell off season to get higher payment for produce. This product allows them to store their produce at decentralised designated storage points and get advance against value produce."
    },
    {
        id:"service_4",
        image:inputOnCredit,
        title:"Input on Credit Finance",
        bgImg:inputBG,
        desc : "Buy now later payment",
        para:'Farmers can sell their produce after harvest to their channel of choice for higher income only if they have not taken money from local money lenders, else their produce would have to be routed through default APMC channel only via the money lender. This product allows them to opt for professional finance and shun this obligation.'
    },
    {
        id:"service_5",
        image:priceProtect,
        title:"Price Protect",
        bgImg:priceProtectBG,
        desc : "Get a minimum guaranteed price for your produce",
        para:"This product helps farmers get minimum price guarantee for their produce post harvest for pre-approved forward transactions during cultivation phase"
    },
     {
        id:"service_6",
        image:regularPay,
        title:"Regular Pay",
        bgImg:regularBG,
        desc : "Convert your erratic receivables into regular cash flows",
        para:"This product helps convert erratic and uncertain cashflows that farmers receive post harvests during the year into fixed smooth monthly cashflows"
    },
]