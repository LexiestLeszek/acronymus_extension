
/////////////////////  MAIN script: replacing abbreviations  //////////////////////////////

// object (dictionary) with abbreviation-value pairs
var abbreviations = {
    "CCCN":"Customs Cooperation Council Nomenclature",
    "CPI":"Consumer price index",
    "EC":"European Communities",
    "ECU":"European Currency Unit",
    "EEC":"European Economic Community",
    "EU":"European Union",
    "LDC":"Least Developed Country",
    "FDI":"Foreign Direct Investment",
    "FIR":"Factor intensity reversal",
    "FTA":"Free trade area",
    "RRR":"Required Rate of Return",
    "GATT":"General Agreement on Tariffs and Trade",
    "GDP":"Gross domestic product",
    "GMO":"Genetically modified organism",
    "ICA":"International commodity agreement",
    "ITA":"International Trade Administration",
    "ITC":"International Trade Commission",
    "NAFTA":"North American Free Trade Agreement",
    "NGO":"Non-governmental organization",
    "NIC":"Newly Industrializing Country",
    "NTB":"Nontariff barrier",
    "MNC":"Multinational Corporation",
    "MNE":"Multinational Enterprise",
    "OECD":"Organization for Economic Co-operation and Development",
    "SDR":"Special Drawing Right",
    "TRIP":"Trade-Related Intellectual Property Rights",
    "UNCTAD":"United Nations Conference on Trade and Development",
    "VER":"Voluntary export restraint",
    "WTO":"World Trade Organization",
    "Q1":"Quarter One",
    "Q2":"Quarter Two",
    "Q3":"Quarter Three",
    "Q4":"Quarter Four",
    "1H":"First half of the year",
    "24/7":"24 hours a day",
    "ADR":"Alternative dispute resolution",
    "AI":"Artificial Intelligence",
    "AOP":"Adjusted Operating Profit",
    "AOP":"Annual Operating Plan",
    "AP":"Accounts payable",
    "AR":"Accounts receivable",
    "ARPU":"Average revenue per user",
    "ASP":"Average selling price",
    "agcy":"Agency",
    "agt":"Agent",
    "asst":"Assistant",
    "a/c":"Account",
    "AE":"Account Executive",
    "BAU":"Business As Usual",
    "BEP":"Break Even Point",
    "BIC":"Bank Identifier Code",
    "bldg":"Building",
    "BLS":"Balance sheet",
    "BMC":"Business Model Canvas",
    "BOM":"Bill of materials",
    "BPO":"Business Process Outsourcing",
    "BPR":"Brief Project Report",
    "BPV":"Bank Payment Voucher",
    "BRD":"Business Requirements Document",
    "BRU":"Business Recovery Unit",
    "BRV":"Bank Receipt Voucher",
    "B2B":"Business-to-business",
    "B2C":"Business-to-consumer",
    "B2G":"Business-to-government",
    "BU":"Business Unit",
    "BUSI":"Business",
    "bus":"Business",
    "BFRS":"Bangladesh Financial Reporting Standards",
    "CAGR":"Compound annual growth rate",
    "CAO":"Chief Accounting Officer",
    "CAPEX":"Capital Expenditure",
    "CAPM":"Capital asset pricing model",
    "CBOE":"Chicago Board Options Exchange",
    "CBOT":"Chicago Board of Trade",
    "CDO":"Collateralized Debt Obligation",
    "CDM":"Change and Data Management",
    "CDS":"Credit default swap",
    "CEO":"Chief executive officer",
    "COA":"Chart of Account",
    "CFA":"Chartered Financial Analyst",
    "CFD":"Contract for difference",
    "CFC":"Consumption of fixed capital",
    "CFCT":"Cash Flow Cycle Time",
    "CFM":"Certified Financial Manager",
    "CFO":"Chief Financial Officer",
    "CFS":"Consolidated Financial Statement",
    "CIA":"Certified Internal Auditor",
    "CIF":"Cost Insurance With Freight",
    "CIMA":"Chartered Institute of Management Accountants",
    "CIO":"Chief Information Officer",
    "CIP":"Carriage and Insurance Paid",
    "CISA":"Certified Information Systems Auditor",
    "CISO":"Chief Information Security Officer",
    "CLO":"Chief Legal Officer",
    "CMA":"Certified Management Accountant",
    "CMFB":"Committee on monetary",
    "CMO":"Chief Marketing Officer",
    "COB":"Close of Business",
    "COGS":"Cost of Goods Sold",
    "Corp":"Corporation",
    "COO":"Chief Operating Officer",
    "CPA":"Certified Public Accountant",
    "CPI":"Consumer Price Index",
    "CPO":"Chief Product Officer",
    "CPQ":"Configure",
    "CPU":"Central Processing Unit",
    "CSI":"Corporate Social Investment",
    "CSO":"Chief Security Officer",
    "CSR":"Corporate social responsibility",
    "CRM":"Customer Relationship Management",
    "CVP":"Cost Volume Profit",
    "CTA":"Call to action",
    "CTO":"Chief Technology Officer",
    "CX":"Customer Experience",
    "CXO":"Any chief officer(s)",
    "C2B":"Consumer-to-business",
    "C&F":"Cost With Freight",
    "CKM":"Customer Knowledge Management",
    "CTC":"Cost to company",
    "CUSIP":"Committee on Uniform Security Identification",
    "Cr":"Credit",
    "CA":"Current account",
    "CPA":"Cost Per Action",
    "CPL":"Cost Per Lead",
    "CR":"Conversion Rate",
    "CTA":"Call to Action",
    "CAC":"Customer Acquisition Cost",
    "API":"Application Programming Interface",
    "ARR":"Annual Recurring Revenue",
    "MRR":"Monthly Recurring Revenue",
    "GTM":"Go-To-Market",
    "LTV":"Customer Lifetime Value",
    "KPI":"Key Performance Indicators",
    "JTBD":"Jobs To Be Done",
    "MVP":"Minimum Viable Product",
    "TAM":"Total Addressable Market",
    "UI":"User Interface",
    "UX":"User Experience",
    "POC":"Proof Of Concept",
    "USP":"Unique Selling Proposition",
    "DAU":"Daily Active Users",
    "MAU":"Monthly Active Users",
    "DDA":"Depletion Depreciation Amortization",
    "Dept":"Department",
    "DCF":"Discounted Cash Flow",
    "DI":"Dispatch information",
    "DIFOT":"Delivery in full on time",
    "Dir":"Director",
    "disc":"Discount",
    "DMA":"Direct market access",
    "DOE":"Depending on Experience",
    "DPO":"Days Payable Outstanding",
    "DR":"Depositary receipt",
    "DSO":"Days Sales Outstanding",
    "DSP":"Delivery service provider",
    "DTP":"Desktop Publishing",
    "DVP":"Delivery versus payment",
    "D2C":"Direct-To-Consumer",
    "EAR":"Effective annual rate",
    "EAY":"Effective Annual Yield",
    "EBITA":"Earnings before interest and taxes",
    "EBITDA":"Earnings before Interest",
    "ECB":"European Central Bank",
    "ECS":"Electronic Clearing Service",
    "EDI":"Electronic Data Interchange",
    "EFSM":"European Financial Stabilisation Mechanism",
    "EFTPOS":"Electronic Funds Transfer at Point",
    "EIDL":"Economic Injury Disaster Loan",
    "EPS":"Earnings per share",
    "EXP":"Export",
    "EOB":"End of business",
    "EOD":"End of day",
    "EOM":"End of Message",
    "ERP":"Enterprise Resource Planning",
    "ETA":"Estimated Time of Arrival",
    "ETD":"Estimated Time of Departure",
    "EMI":"Equated Monthly Installment",
    "EPC":"Export Promotion Council",
    "ECGC":"Export Credit Guarantee Corporation of",
    "EXW":"Ex Works",
    "FAB":"Feature Advantage Benefits",
    "FDP":"Finance Department",
    "FOB":"Freight On Board",
    "FIFO":"First In",
    "FinMin":"Finance Minister",
    "FL":"Financial leverage",
    "FOMC":"Federal Open Market Committee",
    "FP&A":"Financial Planning & Analysis",
    "FPO":"Follow-on Public Offer",
    "FIX":"Financial Information Exchange",
    "FSA":"Financial Services Authority",
    "FTE":"Full-Time Equivalent",
    "FV":"Future Value",
    "FX":"Foreign exchange market",
    "FY":"Fiscal year or Financial year",
    "FYA":"For Your Action",
    "FYI":"For Your Information",
    "FOC":"Free Of Cost",
    "F/U":"Follow-Up",
    "FYF":"Full Year Forecast",
    "GAAP":"Generally Accepted Accounting Principles",
    "GAAS":"Generally Accepted Audit Standards",
    "GDP":"Gross Domestic Product",
    "GDPR":"General Data Protection Regulation",
    "GDR":"Global depository receipt",
    "GFCF":"Gross fixed capital formation",
    "GL":"General Ledger",
    "GMV":"Gross Merchandise Volume",
    "GP":"Gross Profit",
    "GPO":"Group purchasing organization",
    "GRN":"Goods Receipt Note",
    "GRNI":"Goods Receipt Not Invoiced",
    "GSV":"Gross Sales Value",
    "GVC":"Global value chain",
    "GMROII":"Gross Margin Return on Inventory Investment",
    "G&A":"General and Administration expense",
    "HMRC":"Her Majesty's Revenue and Customs",
    "HP":"Hire purchase",
    "HQ":"Headquarters",
    "HR":"Human Resources",
    "HRD":"Human Resource Development",
    "HS Code":"Harmonized Commodity Description and Coding System",
    "IAS":"International Accounting Standards",
    "IBAN":"International Bank Account Number",
    "ICB":"Industry Classification Benchmark",
    "ICRM":"Innovative Customer Relationship Management",
    "IE":"Interest expense",
    "IFRS":"International Financial Reporting Standard",
    "ILCLP":"IdentLogic Systems Customer Loyalty Program",
    "IMF":"International Monetary Fund",
    "IMP":"Import",
    "Inc":"Incorporated",
    "IoT":"Internet of Things",
    "IPO":"Initial public offering",
    "IPT":"Item Per Transaction",
    "IR":"Interest rate",
    "IRS":"Internal Revenue Service",
    "IRR":"Internal Rate of Return",
    "ISIN":"International Securities Identification Number",
    "ISM":"Institute of Supply Management",
    "ITT":"Invitation to tender",
    "IYR":"In Year Revenue",
    "JIT":"Just in time",
    "JIS":"Just in sequence",
    "JST":"Joint Supervisory Team",
    "JV":"Joint Venture",
    "KIBOR":"Karachi Interbank Offered Rate",
    "KPI":"Key Performance Indicator",
    "KYC":"Know Your Customer",
    "LBO":"Leveraged Buyout",
    "LC":"Letter of credit",
    "LIBOR":"London Interbank Offered Rate",
    "LE":"Latest Estimate",
    "LIFFE":"London International Financial Futures and and Options Exchange",
    "LIFO":"Last In",
    "LLC":"Limited Liability Company",
    "LME":"London Metal Exchange",
    "LMS":"Learning Management System",
    "Ltd":"Limited Company",
    "LTV":"Loan to Value",
    "LOC":"Lines of Credit",
    "LOI":"Letter of intent",
    "LoU":"Letters of Undertaking",
    "LY":"Last Year",
    "MBS":"Mortgage-backed security",
    "mfg":"Manufacturing",
    "MGMT":"Management",
    "MIC":"Market Identifier Code",
    "MiFID":"Markets in Financial Instruments Directive",
    "MILE":"Maximum impact",
    "MoM":"Month on Month",
    "MOQ":"Minimum Order Quantity",
    "MOU":"Memorandum of understanding",
    "MPC":"marginal propensity to consume",
    "MRO":"Maintenance",
    "MRP":"Maximum Retail Price",
    "MSOD":"Monthly Statement of Select Operational",
    "MSRP":"Manufacturer's Suggested Retail Price",
    "MTD":"Month-to-date",
    "MWC":"Managerial Working Capital",
    "MPR":"Monthly Progress Report",
    "MTM":"Mark To Market",
    "NAV":"Net asset value",
    "NCBO":"No Change of Beneficial Ownership",
    "NCND":"Non-Circumvent and Non-Disclosure",
    "NDA":"Non-Disclosure Agreement",
    "NII":"Net Interest Income",
    "NIM":"Net Interest Margin",
    "NNTO":"No Need To Open",
    "NOA":"Net Operating Assets",
    "NOI":"Net Operating Income",
    "NOPAT":"Net Operating Profit After Tax",
    "NPA":"Non Performing Asset",
    "NPL":"Non-performing loan",
    "NPV":"Net Present Value",
    "NTE":"Not To Exceed",
    "NYMEX":"New York Mercantile Exchange",
    "NYSE":"New York Stock Exchange",
    "NFO":"New Fund Offer",
    "OC":"Opportunity Cost",
    "OCF":"Operating cash flow",
    "OECD":"Organisation for Economic Co-operation and Development",
    "OEM":"Original Equipment Manufacturer",
    "OIBDA":"Operating Income Before Depreciation And Amortization",
    "OKR":"Objectives and key results",
    "OOF":"Out of Facility",
    "OOO":"Out of Office",
    "OPEX":"Operational Expenditure",
    "OTIF":"On Time In Full",
    "OTC":"Over-the-counter (finance)",
    "P&L":"Profit and Loss",
    "P2B":"Platform to Business",
    "PA":"Purchasing agent or Personal Assistant",
    "PA":"Promotional Activity[citation needed]",
    "PAT":"Profit After Tax",
    "PBT":"Profit Before Tax",
    "P/E":"Price-to-earnings ratio",
    "PE":"Private Equity",
    "PEG":"Price-to-earnings growth ratio",
    "PHEK":"Planherstellungskosten (Product Planning cost)",
    "PFI":"Private Finance Initiative",
    "PII":"Personally identifiable information",
    "pip":"Percentage in point or Periodic Investment Plan",
    "PMAC":"Period Moving Average Cost",
    "PO":"Profit Objective or Purchase Order",
    "POA":"Plan Of Action",
    "POS":"Point of sale",
    "PP&E":"Property, Plant, and Equipment",
    "PPP":"Public-private partnership",
    "PPP":"Purchasing power parity",
    "PPT":"Powerpoint presentation",
    "PR":"Purchase Requisition",
    "PSP":"Profit Sharing Plan",
    "PTC":"Private Trust Company",
    "PTD":"Project to Date",
    "PLR":"Prime Lending Rate",
    "PWIN":"Percent win",
    "PWP":"Personal Wealth Portfolio",
    "QC":"Quality control or Quality costs",
    "QoQ":"Quarter on quarter",
    "QPR":"Quarterly Performance Report",
    "QRP":"Qualified Retirement Plan",
    "q/q":"Quarter on quarter",
    "QTD":"Quarter-to-date",
    "RAQSCI":"Regulatory",
    "RBI":"Reserve Bank of India",
    "RBA":"Reserve Bank of Australia",
    " RE":"Retained Earnings",
    "REIT":"Real Estate Investment Trust",
    "RFI":"Request for information",
    "RFP":"Request for Proposal",
    "RFQ":"Request for Quotation",
    "RFX":"Generic name for a Request for Information",
    "RMD":"Required Minimum Distribution",
    "R/O":"Rollover",
    "ROA":"Return on assets",
    "ROB":"Return on brand",
    "ROC":"Registration Of Company",
    "ROCE":"Return on Capital Employed",
    "ROE":"Return on Equity",
    "ROI":"Return on Investment",
    "ROIC":"Return on Invested Capital",
    "RONA":"Return on net assets",
    "ROS":"Return on Sales",
    "RR":"Resource rent",
    "RSP":"Retail selling price",
    "RWA":"Risk-weighted asset",
    "R&D":"Research and Development",
    "RC":"Retail Company",
    "S&M":"Sales & Marketing",
    "SLR":"Statutory Liquidity Ratio",
    "S&OP":"Sales and operations planning",
    "SAAS":"Software-as-a-Service",
    "SAM":"Strategic Asset Management",
    "SBU":"Strategic Business Unit",
    "SBLC":"Stand By Letter of Credit",
    "SCM":"Supply Chain Management",
    "SCBA":"Social Cost Benefit Analysis",
    "SEBI":"Securities and Exchange Board of",
    "SEC":"Securities and Exchange Commission",
    "SEDOL":"Stock Exchange Daily Official List",
    "SF":"Structured Finance",
    "SG&A":"sales, general and administrative expenses",
    "SIMPLE":"Savings Incentive Match Plan for",
    "SIOP":"Sales Inventory and Operations Plan",
    "SIR":"Stores Issuance Requisition",
    "SIV":"Structured investment vehicle",
    "SKU":"Stock keeping unit",
    "SLA":"Service Level Agreement",
    "SMA":"Separately Managed Account",
    "SME":"Small and Medium Enterprises",
    "SOHO":"Small Office/Home Office",
    "SOP":"Standard Operating Procedure",
    "SOW":"Statement of Work",
    "SOX":"Sarbanes-Oxley",
    "SPP":"Systematic Payment Plan",
    "SROI":"Social return on investment",
    "SSN":"Social Security Number",
    "Stg":"Sterling",
    "STP":"Situation Target Proposal",
    "SUA":"Start Up Agreement",
    "SWM":"Strategic Wealth Management",
    "SWIP":"Systematic Withdrawal from Investment Plan",
    "SWOT":"Strengths, Weaknesses, Opportunities, Threats",
    "TB":"Transaction Banking",
    "TBC":"To Be Completed",
    "TBD":"To Be Defined",
    "TCO":"Total Cost of Ownership",
    "TCV":"Total Contract Value",
    "TOTW":"Time Off for Time Worked",
    "TQM":"Total Quality Management",
    "TSR":"Total shareholder return",
    "TTM":"Trailing Twelve Months",
    "TVM":"Time Value of Money",
    "Ts&Cs":"Terms and Conditions",
    "USP":"Unique Selling Proposition",
    "UPI":"Unified Payment Interface",
    "VAD":"Value-Added Distributor",
    "VaR":"Value at Risk",
    "VAT":"Value-Added Tax",
    "VC":"Venture Capital",
    "VP":"Vice President",
    "WACC":"Weighted average cost of capital",
    "WC":"Working capital",
    "WFH":"Work From Home",
    "wk":"week",
    "wrk":"work",
    "wo":"work order",
    "WOGs":"With other Goods",
    "WIGs":"Wildly Important Goals",
    "wasp":"weighted average selling price",
    "WLL":"With Limited Liability",
    "wrt":"With Respect To",
    "WTI":"West Texas Intermediate",
    "WVN":"Withdraw Voucher Note",
    "WHT":"Withholding Tax",
    "WTO":"World Trade Organization",
    "WTD":"Week-To-Date",
    "WW":"World Wide",
    "YTD":"Year-to-date",
    "YTG":"Year-to-go",
    "YOY":"Year-over-year",
    "YTC":"Yet-To-Confirm",
    "ZBB":"Zero Based Budgeting",
    "ZCYC":"Zero Coupon Yield Curve",
    "ZOPA":"Zone of Possible Agreement",
    "AUD":"Australia Dollar",
    "GBP":"Great Britain Pound",
    "EUR":"Euro",
    "JPY":"Japan Yen",
    "CHF":"Switzerland Franc",
    "USD":"USA Dollar",
    "AFN":"Afghanistan Afghani",
    "DZD":"Algeria Dinar",
    "AOA":"Angola Kwanza",
    "ARS":"Argentina Peso",
    "AMD":"Armenia Dram",
    "AWG":"Aruba Florin",
    "AUD":"Australia Dollar",
    "ATS (EURO)":"Austria Schilling",
    "BEF (EURO)":"Belgium Franc",
    "AZN":"Azerbaijan New Manat",
    "BSD":"Bahamas Dollar",
    "BHD":"Bahrain Dinar",
    "BDT":"Bangladesh Taka",
    "BBD":"Barbados Dollar",
    "BYR":"Belarus Ruble",
    "BZD":"Belize Dollar",
    "BMD":"Bermuda Dollar",
    "BTN":"Bhutan Ngultrum",
    "BOB":"Bolivia Boliviano",
    "BAM":"Bosnia Mark",
    "BWP":"Botswana Pula",
    "BRL":"Brazil Real",
    "GBP":"Great Britain Pound",
    "BND":"Brunei Dollar",
    "BGN":"Bulgaria Lev",
    "BIF":"Burundi Franc",
    "XOF":"CFA Franc BCEAO",
    "XAF":"CFA Franc BEAC",
    "XPF":"CFP Franc",
    "KHR":"Cambodia Riel",
    "CAD":"Canada Dollar",
    "CVE":"Cape Verde Escudo",
    "KYD":"Cayman Islands Dollar",
    "CLP":"Chili Peso",
    "CNY":"China Yuan/Renminbi",
    "COP":"Colombia Peso",
    "KMF":"Comoros Franc",
    "CDF":"Congo Franc",
    "CRC":"Costa Rica Colon",
    "HRK":"Croatia Kuna",
    "CUC":"Cuba Convertible Peso",
    "CUP":"Cuba Peso",
    "CYP (EURO)":"Cyprus Pound",
    "CZK":"Czech Koruna",
    "DKK":"Denmark Krone",
    "DJF":"Djibouti Franc",
    "DOP":"Dominican Republich Peso",
    "XCD":"East Caribbean Dollar",
    "EGP":"Egypt Pound",
    "SVC":"El Salvador Colon",
    "EEK (EURO)":"Estonia Kroon",
    "ETB":"Ethiopia Birr",
    "EUR":"Euro",
    "FKP":"Falkland Islands Pound",
    "FIM (EURO)":"Finland Markka",
    "FJD":"Fiji Dollar",
    "GMD":"Gambia Dalasi",
    "GEL":"Georgia Lari",
    "DMK (EURO)":"Germany Mark",
    "GHS":"Ghana New Cedi",
    "GIP":"Gibraltar Pound",
    "GRD (EURO)":"Greece Drachma",
    "GTQ":"Guatemala Quetzal",
    "GNF":"Guinea Franc",
    "GYD":"Guyana Dollar",
    "HTG":"Haiti Gourde",
    "HNL":"Honduras Lempira",
    "HKD":"Hong Kong Dollar",
    "HUF":"Hungary Forint",
    "ISK":"Iceland Krona",
    "INR":"India Rupee",
    "IDR":"Indonesia Rupiah",
    "IRR":"Iran Rial",
    "IQD":"Iraq Dinar",
    "IED (EURO)":"Ireland Pound",
    "ILS":"Israel New Shekel",
    "ITL (EURO)":"Italy Lira",
    "JMD":"Jamaica Dollar",
    "JPY":"Japan Yen",
    "JOD":"Jordan Dinar",
    "KZT":"Kazakhstan Tenge",
    "KES":"Kenya Shilling",
    "KWD":"Kuwait Dinar",
    "KGS":"Kyrgyzstan Som",
    "LAK":"Laos Kip",
    "LVL (EURO)":"Latvia Lats",
    "LBP":"Lebanon Pound",
    "LSL":"Lesotho Loti",
    "LRD":"Liberia Dollar",
    "LYD":"Libya Dinar",
    "LTL (EURO)":"Lithuania Litas",
    "LUF (EURO)":"Luxembourg Franc",
    "MOP":"Macau Pataca",
    "MKD":"Macedonia Denar",
    "MGA":"Malagasy Ariary",
    "MWK":"Malawi Kwacha",
    "MYR":"Malaysia Ringgit",
    "MVR":"Maldives Rufiyaa",
    "MTL (EURO)":"Malta Lira",
    "MRO":"Mauritania Ouguiya",
    "MUR":"Mauritius Rupee",
    "MXN":"Mexico Peso",
    "MDL":"Moldova Leu",
    "MNT":"Mongolia Tugrik",
    "MAD":"Morocco Dirham",
    "MZN":"Mozambique New Metical",
    "MMK":"Myanmar Kyat",
    "ANG":"NL Antilles Guilder",
    "NAD":"Namibia Dollar",
    "NPR":"Nepal Rupee",
    "NLG (EURO)":"Netherlands Guilder",
    "NZD":"New Zealand Dollar",
    "NIO":"Nicaragua Cordoba Oro",
    "NGN":"Nigeria Naira",
    "KPW":"North Korea Won",
    "NOK":"Norway Kroner",
    "OMR":"Oman Rial",
    "PKR":"Pakistan Rupee",
    "PAB":"Panama Balboa",
    "PGK":"Papua New Guinea Kina",
    "PYG":"Paraguay Guarani",
    "PEN":"Peru Nuevo Sol",
    "PHP":"Philippines Peso",
    "PLN":"Poland Zloty",
    "PTE (EURO)":"Portugal Escudo",
    "QAR":"Qatar Rial",
    "RON":"Romania New Lei",
    "RUB":"Russia Rouble",
    "RWF":"Rwanda Franc",
    "WST":"Samoa Tala",
    "STD":"Sao Tome/Principe Dobra",
    "SAR":"Saudi Arabia Riyal",
    "RSD":"Serbia Dinar",
    "SCR":"Seychelles Rupee",
    "SLL":"Sierra Leone Leone",
    "SGD":"Singapore Dollar",
    "SKK (EURO)":"Slovakia Koruna",
    "SIT (EURO)":"Slovenia Tolar",
    "SBD":"Solomon Islands Dollar",
    "SOS":"Somali Shilling",
    "ZAR":"South Africa Rand",
    "KRW":"South Korea Won",
    "ESP (EURO)":"Spain Peseta",
    "LKR":"Sri Lanka Rupee",
    "SHP":"St Helena Pound",
    "SDG":"Sudan Pound",
    "SRD":"Suriname Dollar",
    "SZL":"Swaziland Lilangeni",
    "SEK":"Sweden Krona",
    "CHF":"Switzerland Franc",
    "SYP":"Syria Pound",
    "TWD":"Taiwan Dollar",
    "TZS":"Tanzania Shilling",
    "THB":"Thailand Baht",
    "TOP":"Tonga Pa'anga",
    "TTD":"Trinidad/Tobago Dollar",
    "TND":"Tunisia Dinar",
    "TRY":"Turkish New Lira",
    "TMM":"Turkmenistan Manat",
    "USD":"USA Dollar",
    "UGX":"Uganda Shilling",
    "UAH":"Ukraine Hryvnia",
    "UYU":"Uruguay Peso",
    "AED":"United Arab Emirates Dirham",
    "VUV":"Vanuatu Vatu",
    "VEB":"Venezuela Bolivar",
    "VND":"Vietnam Dong",
    "YER":"Yemen Rial",
    "ZMK":"Zambia Kwacha",
    "ZWD":"Zimbabwe Dollar"
}

// func to get all the text nodes under a particular node
function textNodesUnder(el) {
  var n, a=[], walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT,null,false);
  while(n=walk.nextNode()) a.push(n);
  return a;
}

// getting textnodes from the body of the document
var pageText = textNodesUnder(document.body);

// walking through each of the node in the page text
// if word in the node (in the page text) matches dictionary key, 
// then replace the word for dictionary value
for (node of pageText) {
    var origText = node.nodeValue;
    var text = origText;
    for (const key of Object.keys(abbreviations)) {
        var pattern = new RegExp(`\\b${key}\\b`, 'ig');
        var replacement = `[${abbreviations[key]}]`
        var newText = text.replace(pattern, replacement);
        if ((newText !== text) && 
          (node.parentNode !== null) && 
            !(origText.includes(`${abbreviations[key]}`))) {
                text = newText;
        }
    }
    if ((text != origText) && (node.parentNode !== null)) {
       var elementText = document.createElement("span");
       elementText.innerHTML = text;
       node.parentNode.replaceChild(elementText, node);
    }
}
