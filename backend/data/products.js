const products = [
 
  {
    imageUrl: "https://tiimg.tistatic.com/fp/1/006/419/tazarotene-cream-0-1--641.jpg",
    name: "Tazarotene",
    description: "This medication is a retinoid, prescribed for psoriasis and acne. It may decrease skin inflammation and skin changes associated with psoriasis.",
    
     price: 420.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/D0VJ7Lr1/iso.jpg",
    name: "Isotretinoin ",
    description: "This medication is a retinoid, prescribed for acne and other skin disorders. It reduces skin oil production, changing the characteristics of the skin oil, and preventing abnormal hardening of the skin.",
    
     price: 299.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/JhvtQZdS/mino.png",
    name: "Minocycline",
    description: "Minocycline is a broad spectrum tetracycline antibiotic. It acts by inhibiting the growth of bacteria in the body, It may be effective in other infections as well, however several bacteria have developed resistance to the drug, It may be used in patients who are allergic to the penicillin group of drugs as an alternative.",
     
     price: 300.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/L6x9TjJv/calamine.jpg",
    name: "Calamine Lotion",
    description: "This medication is an anti-itch medication that contains mixture of zinc oxide (ZnO) with about 0.5% iron (III) oxide, prescribed for itching skin conditions. This medication in some cases is used as a mild antiseptic to arrest infections caused by scratching the affected area. Calamine is proved to be an effective medication in acne treatment.",
    
     price: 240.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/K8K2DwSv/dim.jpg",
    name: "Dimethicone",
    description: "This medication is an emollient, prescribed for pediculosis, and other skin conditions.",
     
     price: 220.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/90x6GtL7/ss.jpg",
    name: "Sucralfate",
    description: "This medication is a gastric protective agent, prescribed for intestinal ulcers.",
    
     price: 190.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/WbgzwdMH/adap.jpg",
    name: "Adapalene",
    description: "Adapalene is a topical retinoid-like compound used to treat mild to moderate acne by preventing the formation of pimples acting deeply in the source.It also prevents the formation of new acne by restoring skin texture and tone.",
     
     price: 320.00,
     countInStock : 500,
     
   },
   
   {
    imageUrl: "https://i.postimg.cc/NjNxBC5T/nad.png",
    name: "Nadifloxacin",
    description: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
     
     price: 285.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/cJgfZxqy/ery.jpg",
    name: "Erythromycin",
    description: "This medication is an antibiotic, prescribed for certain types of bacterial infections such as bronchitis, diphtheria, legionnaires' disease, pertussis etc.It slows or stops bacterial cell growth.",
     
     price: 325.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/nhMDYFhj/oxy.jpg",
    name: "Oxytetracycline",
    description: "This medication is an antibiotic, prescribed for various infections such as acne, dermatitis, gonorrhea, etc.",
     
     price: 225.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://5.imimg.com/data5/FY/GY/MY-39084219/nadifloxacin-cream-500x500.jpg",
    name: "Nadifloxacin",
    description: "This medication is a topical antibiotic, prescribed for acne vulgaris. It inhibits the enzyme DNA gyrase that is involved in bacterial replication.",
    
     price: 200.00,
     countInStock : 500,
     
   },
   {
    imageUrl: "https://i.postimg.cc/NfRg3ZCJ/tre.jpg",
    name: "Tretinoin",
    description: "This medication is a retinoid, prescribed for acne vulgaris and acute promyelocytic leukemia.  It slows or stops the growth of cancer cells in the body.",
     
     price: 295.00,
     countInStock : 500,
     
   },
   
   
   
   {
    imageUrl:
         "https://www.empr.com/wp-content/uploads/sites/7/2018/12/ac752944889a4c6494dae4f478ea8237-nesina_405478.jpg",
    name: "Alogliptin",
    description:
         "Alogliptin is prescribed to reduce high blood sugar level in patients with type 2 diabetes along with diet control and exercise.It should not be used in treating diabetic ketoacidosis or type 1 diabetes.  ",
    
     price: 405,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://5.imimg.com/data5/ZJ/FV/VB/SELLER-104814248/alogliptin-500x500.jpg",
    name: "Alogliptin and Metformin",
    description:
         "Alogliptin and Metformin combination is used along with diet and exercise to improve blood sugar control or to treat hyperglycemia in patients with type 2 diabetes.High blood sugar level can cause damage to the eyes, kidney, and nerves.This combination medication contains alogliptin, a dipeptidyl-peptidase-4 (DPP-4) inhibitor and metformin, a biguanide.",
     
     price: 500,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://www.empr.com/wp-content/uploads/sites/7/2018/12/5a26069609d944038725ae95e761a5f1-oseni_405485.jpg",
    name: "Alogliptin and Pioglitazone",
    description:
         "Alogliptin and Pioglitazone combination is used to treat high blood sugar level in patients with type 2 diabetes along with diet control and exercise. This combination should not be used to treat type 1 diabetes.This combination medication contains pioglitazone, a thiazolidinedione agent and alogliptin, a DPP-4 inhibitor.",
     
     price: 450,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://5.imimg.com/data5/MR/OX/MY-18174683/sulisent-28canagliflozin-100mg-29-tablet-500x500.jpg",
    name: "Canagliflozin",
    description:
         "This medication is an antidiabetic (sodium glucose co-transporter 2 (SGLT2) inhibitor), prescribed for type 2 diabetes mellitus along with diet and exercise. For patients with type 2 diabetes along with diabetic kidney disease, physicians should consider using an SGLT2 inhibitor when the eGFR is at or above 30, especially with albuminuria above 300 mg/g, to lower renal and CV risk as per A.D.A recommendations.",
    
     price: 298,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKl6UBEBhkp0cUc7ciO3VVRoBjtAf7cA-QPOTggzDmit4AYegpA3mcl9haEtf6nfB5diw&usqp=CAU",
    name: "Diabinese",
    description:
         "This medication is a sulfonylurea antidiabetic drug, prescribed for type 2 diabetes. This medication helps to keep blood sugar levels under control.",
    
     price: 345,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://www.prestoimages.net/store30/rd14324/14324_pd3794145_1_.jpg",
    name: "Colesevelam HCL",
    description:
         "This medication is a bile acid sequestrant, prescribed for familial hypercholesterolemia and type 2 diabetes with other medications.",
     
     price: 400,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://emedz.net/blog/wp-content/uploads/2020/01/Steglatro-ertugliflozin-696x484.jpg",
    name: "Steglatro",
    description:
         "Ertugliflozin tablet is a sodium glucose co-transporter 2 (SGLT2) inhibitor which is prescribed for adult patients with type 2 diabetes as an adjunct therapy to diet control and exercise with a focus to improve glycemic control.It is prescribed either as a monotherapy or in combination with metformin or sitagliptin.  ",
    
     price: 500,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://5.imimg.com/data5/SELLER/Default/2021/2/KR/IZ/EH/123113767/byetta-10mcg-500x500.jpg",
    name: "Byetta",
    description:
         "This medication is a incretin mimetic, prescribed for type 2 diabetes with diet and exercise, either alone or with other medications. For patients with chronic kidney disease who are at elevated risk for CV events, a glucagon-like peptide 1 receptor agonist may lower risk for albuminuria progression and/or CV events, according to new (2019)recommendations of The American Diabetes Association It works by stimulating the pancreas to secrete insulin in hyperglycemic condition.  ",
    
     price: 395,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://5.imimg.com/data5/QY/WA/MY-29865653/glibenclamide-tablets-500x500.jpg",
    name: "Glibenclamide",
    description:
         "TGlibenclamide is an oral hypoglycemic (glucose lowering) drug used to control blood sugar levels in patients with type 2 diabetes in addition to diet and exercise.It belongs to the chemical group of sulfonylureas",
     
     price: 456,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://cpimg.tistatic.com/05683521/b/4/Glibenclamide-5-Mg-Metformin-500-Mg-Tablets.jpg",
    name: "Glibenclamide and Metformin",
    description:
         "This medication contains sulfonylurea and biguanide antidiabetic combination, prescribed for type 2 diabetes.",
    
     price: 355,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://tajpharma.in/wp-content/uploads/cache/images/remote/i0-wp-com/Gliclazide-BP-80mg-tablets_Taj_Pharma_antidiabetic-1099925899.jpg",
    name: "Gliclazide",
    description:
         "This medication is an oral hypoglycemic (anti-diabetic drug), prescribed for type 2 diabetes. It stimulates the pancreas, which helps in more insulin secretion.",
    
     price: 505,
   
   countInStock : 500,      
   },
   {
    imageUrl:
         "https://tajgenerics.com/wp-content/uploads/cache/images/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3/Glimepiride-Tablets-USP-4-mg-Taj-Pharma-3-3850713814.jpg",
    name: "Glimepiride",
    description:
         "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes. It works by causing the pancreas to produce insulin.",
    
     price: 500,
   
   countInStock : 500,      
   },
   {
    imageUrl: "https://5.imimg.com/data5/CK/TL/MY-5656419/1-500x500.jpg",
    name: "Glipizide",
    description:
         "This medication is a sulfonylurea antidiabetic agent, prescribed for type 2 diabetes (condition in which the body does not use insulin normally and therefore cannot control the amount of sugar in the blood), particularly in people whose diabetes cannot be controlled by diet alone. It increases the amount of insulin secretion and thus regulates the sugar level in the blood.",
    
     price: 600,
   
   countInStock : 500,      
   },
   
   // ------ Diabetes End------- \\
   // ------- Depression ------- \\
   
   {
    imageUrl: "https://i.postimg.cc/Z5Y1wQGy/Ademetionine.jpg",
    name: "Ademetionine",
    description: "Ademetionine is used for treating chronic liver disease such as intrahepatic cholestasis.",
     
     price: 345,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/KYkpVhJ4/Alprazolam.jpg",
    name: "Alprazolam",
    description: "This medication is a benzodiazepine, prescribed for anxiety and panic disorders.",
     
     price: 765,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/TYtk33sp/Amitriptyline.jpg",
    name: "Amitriptyline",
    description: "This medication is a tricyclic antidepressant, prescribed for depression.",
     
     price: 987,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/xdzg5y1z/Amoxapine.jpg",
    name: "Amoxapine",
    description: "This medication is a tricyclic antidepressant, prescribed for depression.",
    
     price: 243,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/wT4VdbtN/Aripiprazole.jpg",
    name: "Aripiprazole",
    description: "This medication is an atypical antipsychotic and antidepressant, prescribed for schizophrenia and depression.",
   
     price: 500,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/QM1k18fg/Armodafinil.jpg",
    name: "Armodafinil",
    description: "This medication is a stimulant, prescribed for excessive sleepiness caused by obstructive sleep apnea",
    
     price: 798,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/RVh7GQPZ/Atomoxetine.jpg",
    name: "Atomoxetine",
    description: "This medication is a selective norepinephrine reuptake inhibitor (SNRI), prescribed for Attention deficit hyperactivity disorder (ADHD).",
     
     price: 200,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/nrDHcWFL/Chlorhexidine.jpg",
    name: "Chlorhexidine",
    description: "This medication is a chemical antiseptic, prescribed for gingivitis, cleansing skin and wound areas.",
     
     price: 300,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/W4ztcXkd/Feracrylum.jpg",
    name: "Feracrylum",
    description: "Feracrylum is used as a hemostatic (to stop bleeding) and an anti-septic for the management of post-operative wounds, cuts.",
     
     price: 620,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/FH7Q9qTX/Gensparin.jpg",
    name: "Gensparin",
    description: "Gensparin prevents the formation of blood clots and is hence used for the treatment of thrombolytic disorders.",
    
     price: 854,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/3r1M276H/Multivitamin.jpg",
    name: "Multivitamin",
    description: "This medication is an essential nutrient, prescribed for patients with vitamin deficiency.  Normally provided in combination with dietary minerals.",
     
     price: 790,
   
   countInStock : 500,      
   },
   
   {
    imageUrl: "https://i.postimg.cc/MGStsfM3/Abaloparatide.jpg",
    name: "Abaloparatide",
    description: "Abaloparatide is prescribed to treat osteoporosis in postmenopausal women who are at a high risk for fracture.",
     
     price: 350,
   
   countInStock : 500,      category: "Fracture"
   },
   
   {
    imageUrl: "https://i.postimg.cc/C5XsbRpN/Aspirin-and-Oxycodone.jpg",
    name: "Aspirin and Oxycodone ",
    description: "This combination medication is used to relieve moderate to severe pain.",
     
     price: 705,
   
   countInStock : 500,      category: "Fracture"
   },
   
   
   {
    imageUrl: "https://i.postimg.cc/g0syNSPr/Metamizole.jpg",
    name: "Metamizole",
    description: "Metamizole is a painkiller used for the treatment of fever, headache, toothache, postoperative pain and other painful conditions.",
     
     price: 432,
   
   countInStock : 500,      category: "Fracture"
   },
   
   
   {
    imageUrl: "https://newassets.apollo247.com/pub/media/catalog/product/s/u/sus0048.jpg",
    name: "Progesterone",
    description: "This medication is a hormone, prescribed for replacement therapy in women who have passed menopause. It is also used to prevent uterine cancer.",
    
     price: 285,
   
   countInStock : 500,      category: "Women's Care"
   },
   
   {
    imageUrl: "https://i.postimg.cc/rpZgNVWK/de.jpg",
    name: "Dehydroepiandrosterone",
    description: "Adrenal insufficiency, where the adrenal gland does not produce enough hormones, To improve aging skin, Depression",
     
     price: 420,
   
   countInStock : 500,      category: "Women's Care"
   },
   {
    imageUrl: "https://i.postimg.cc/7h3gdwC1/fen.jpg",
    name: "Eicosapentaenoic acid",
    description: "Eicosapentaenoic acid (EPA) is an omega-3-fatty acid. It is used to reduce the levels of triglycerides and prevent and treat heart-related conditions like coronary heart disease.It is also used for the treatment of other conditions like schizophrenia, depression, menopausal or rheumatoid arthritis symptoms, cancers and borderline personality disorder.  ",
     
     price: 400,
   
   countInStock : 500,      category: "Women's Care"
   },
   {
    imageUrl: "https://i.postimg.cc/8zB0Mgt6/es.jpg",
    name: "Estrogen",
    description: "This medication is prescribed for severe vasomotor symptoms due to menopause, ovarian failure, osteoporosis, uterine bleeding, delayed puberty and prostate cancer.",
     
     price: 320,
   
   countInStock : 500,      category: "Women's Care"
   },
   {
    imageUrl: "https://i.postimg.cc/9QRGHdqF/est.jpg",
    name: "Estropipate",
    description: "This medication is a crystalline form of estrogen, prescribed for symptoms of menopause, osteoporosis.",
     
     price: 545,
   
   countInStock : 500,      category: "Women's Care"
   },
   {
    imageUrl: "https://i.postimg.cc/sDBBMVfT/fem.png",
    name: "Ethiny- Estradiol- Norethindrone",
    description: "This combination medication contains estrogen and progestin, prescribed for menopausal symptoms such as hot flashes, night sweats and others. It prevents egg release from ovaries.",
     
     price: 305,
   
   countInStock : 500,      category: "Women's Care"
   },
]
module.exports = products;

