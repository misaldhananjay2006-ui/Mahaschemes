const SCHEMES = [

  // 1
  {
    name: "SC Post Matric Scholarship",
    categories: ["sc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "SC student with family income up to ₹2.5 lakh",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate","Aadhaar","Bank Passbook"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 2
  {
    name: "ST Post Matric Scholarship",
    categories: ["st"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "ST student with family income up to ₹2.5 lakh",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 3
  {
    name: "OBC Post Matric Scholarship",
    categories: ["obc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "OBC student with family income up to ₹2.5 lakh",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 4
  {
    name: "VJNT Post Matric Scholarship",
    categories: ["vjnt"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "VJNT student with family income up to ₹2.5 lakh",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 5
  {
    name: "SBC Post Matric Scholarship",
    categories: ["sbc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "SBC student with family income up to ₹2.5 lakh",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 6
  {
    name: "EBC Scholarship",
    categories: ["open"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "OPEN category student with income up to ₹8 lakh",
    documents: ["Income Certificate","Bonafide Certificate","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 7
  {
    name: "Minority Scholarship",
    categories: ["minority"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Minority community student with income up to ₹8 lakh",
    documents: ["Minority Declaration","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 8
  {
    name: "Rajarshi Shahu Maharaj Fee Reimbursement",
    categories: ["open","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["diploma","degree","pg"],
    reason: "Fee reimbursement for professional course students",
    documents: ["Income Certificate","Admission Receipt","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 9
  {
    name: "Dr Punjabrao Deshmukh Hostel Allowance",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Hostel maintenance allowance for eligible students",
    documents: ["Hostel Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 10
  {
    name: "Merit Scholarship for Class 11–12",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["12"],
    reason: "Merit-based scholarship for 11th–12th students",
    documents: ["Marksheet","Bonafide Certificate","Income Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 11
  {
    name: "Eklavya Scholarship",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["degree","pg"],
    reason: "Scholarship for higher education students",
    documents: ["Income Certificate","Bonafide Certificate","Aadhaar"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 12
  {
    name: "Scholarship for Persons with Disability",
    categories: ["open"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "Students with benchmark disability",
    documents: ["Disability Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 13
  {
    name: "Minority Merit-cum-Means Scholarship",
    categories: ["minority"],
    incomeMax: 800000,
    education: ["degree","pg"],
    reason: "Merit-cum-means scholarship for minority students",
    documents: ["Income Certificate","Marksheet","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 14
  {
    name: "Education Concession for Freedom Fighter Children",
    categories: ["open"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Children of freedom fighters",
    documents: ["Freedom Fighter Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 15
  {
    name: "State Minority DTE Scholarship",
    categories: ["minority"],
    incomeMax: 800000,
    education: ["diploma","degree"],
    reason: "Minority students in technical education",
    documents: ["Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 16
  {
    name: "Girls Hostel Allowance Scheme",
    categories: ["open","sc","st","obc","vjnt","sbc","minority"],
    incomeMax: 800000,
    education: ["12","diploma","degree","pg"],
    reason: "Hostel support for girl students",
    documents: ["Hostel Certificate","Income Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 17
  {
    name: "Post Matric Scholarship – SBC",
    categories: ["sbc"],
    incomeMax: 250000,
    education: ["12","diploma","degree","pg"],
    reason: "SBC student post-matric scholarship",
    documents: ["Caste Certificate","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 18
  {
    name: "Technical Education Scholarship",
    categories: ["open","sc","st","obc","vjnt","sbc"],
    incomeMax: 800000,
    education: ["diploma","degree"],
    reason: "Students in technical education courses",
    documents: ["Admission Receipt","Income Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 19
  {
    name: "PG Scholarship for Professional Courses",
    categories: ["open","sc","st","obc","vjnt","sbc","minority"],
    incomeMax: 800000,
    education: ["pg"],
    reason: "Postgraduate professional course students",
    documents: ["Marksheet","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  },

  // 20
  {
    name: "State Open Merit Scholarship",
    categories: ["open"],
    incomeMax: 800000,
    education: ["12","diploma","degree"],
    reason: "Merit-based scholarship for OPEN category students",
    documents: ["Marksheet","Income Certificate","Bonafide Certificate"],
    link: "https://mahadbt.maharashtra.gov.in"
  }

];
