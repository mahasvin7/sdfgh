/**
 * SOUL Radiology — Plain Language Medical Glossary
 * 
 * Provides simple, human-friendly definitions for complex radiology terms.
 * Designed to empower patients, students, and evaluators under SFIC Theme 03.
 */

export const MEDICAL_GLOSSARY = [
  {
    term: 'Consolidation',
    category: 'Chest / Lungs',
    simpleMeaning: 'An area in the lung that has filled with liquid or inflammatory cells instead of air, commonly seen during pneumonia or infection.',
    hindi: 'फेफड़ों में तरल या बलगम का जमाव (कंसोलिडेशन)',
    kannada: 'ಶ್ವಾಸಕೋಶದಲ್ಲಿ ದ್ರವ ಶೇಖರಣೆ',
    exampleUsage: '“No focal consolidation identified” means there are no signs of pneumonia or fluid pockets.'
  },
  {
    term: 'Pleural Effusion',
    category: 'Chest / Lungs',
    simpleMeaning: 'Unusual fluid collecting in the space between the lung and the inside of the chest wall.',
    hindi: 'फेफड़ों की झिल्ली के बीच पानी भरना (प्लूरल इफ्यूजन)',
    kannada: 'ಶ್ವಾಸಕೋಶದ ಪದರಗಳ ನಡುವೆ ನೀರು ತುಂಬುವುದು',
    exampleUsage: '“No pleural effusion” means no unwanted fluid buildup around the lungs.'
  },
  {
    term: 'Cardiothoracic Ratio (CTR)',
    category: 'Heart & Chest',
    simpleMeaning: 'The ratio of the heart’s width compared to the widest part of the inner chest cage. Normal is under 0.50 (50%).',
    hindi: 'हृदय और सीने की चौड़ाई का अनुपात (सीटीआर)',
    kannada: 'ಎದೆಯ ಅಗಲಕ್ಕೆ ಹೋಲಿಸಿದರೆ ಹೃದಯದ ಗಾತ್ರದ ಅನುಪಾತ',
    exampleUsage: '“CTR < 0.50” confirms the heart is normal sized and not enlarged.'
  },
  {
    term: 'Hyperdensity',
    category: 'Brain / Neuro',
    simpleMeaning: 'A bright area on a CT scan. Dense materials like fresh blood, metal, or bone stop more X-rays and show up bright white.',
    hindi: 'सीटी स्कैन पर अधिक सफेद/चमकीला दिखना (हाइपरडेंसिटी)',
    kannada: 'ಸಿಟಿ ಸ್ಕ್ಯಾನ್‌ನಲ್ಲಿ ಪ್ರಕಾಶಮಾನವಾಗಿ ಕಾಣುವ ಜಾಗ',
    exampleUsage: '“Hyperdensity in left basal ganglia” means an area of brightness requiring clinical check for bleeding or clot.'
  },
  {
    term: 'Midline Shift',
    category: 'Brain / Neuro',
    simpleMeaning: 'When pressure or swelling pushes the brain sideways across its normal central dividing line.',
    hindi: 'मस्तिष्क का केंद्र रेखा से खिसकना (मिडलाइन शिफ्ट)',
    kannada: 'ಮೆದುಳಿನ ಮಧ್ಯರೇಖೆಯ ಸ್ಥಾನಪಲ್ಲಟ',
    exampleUsage: '“No midline shift” is reassuring because it shows brain structures are centered without dangerous pressure.'
  },
  {
    term: 'Osteophytes',
    category: 'Joints & Bones',
    simpleMeaning: 'Smooth bone spurs that form over many years along worn joint edges as a natural protective response to wear-and-tear.',
    hindi: 'जोड़ों के किनारों पर हड्डियों का बढ़ना (ऑस्टियोफाइट्स)',
    kannada: 'ಕೀಲುಗಳ ಅಂಚಿನಲ್ಲಿ ಬೆಳೆಯುವ ಮೂಳೆ ಮುಳ್ಳುಗಳು',
    exampleUsage: 'Commonly noted in normal aging or mild knee osteoarthritis.'
  },
  {
    term: 'Medial Meniscus',
    category: 'Joints & Bones',
    simpleMeaning: 'A tough, C-shaped rubbery cushion on the inside half of your knee that absorbs shocks between the thigh and shin bones.',
    hindi: 'घुटने के अंदर का कुशन (मीडियल मेनिस्कस)',
    kannada: 'ಮೊಣಕಾಲಿನ ಒಳಗಿನ ರಬ್ಬರ್ ತರಹದ ಮೆತ್ತೆ',
    exampleUsage: '“Intrasubstance fraying” means natural internal wear inside the knee cushion.'
  },
  {
    term: 'Acoustic Shadowing',
    category: 'Ultrasound',
    simpleMeaning: 'A dark blind-spot band created on an ultrasound when sound waves cannot pass through dense gas or bone.',
    hindi: 'अल्ट्रासाउंड तरंगों का गैस या पत्थर से रुकना (ध्वनिक छाया)',
    kannada: 'ಅಲ್ಟ್ರಾಸೌಂಡ್ ಅಲೆಗಳು ಅನಿಲದಿಂದ ತಡೆಯಲ್ಪಡುವುದು',
    exampleUsage: 'Bowel gas produces acoustic shadows that prevent doctors from seeing deeper organs like the pancreas.'
  },
  {
    term: 'Solitary Pulmonary Nodule',
    category: 'Chest / Lungs',
    simpleMeaning: 'A single, round spot on the lung under 3 cm in size, often an old scar from a minor past infection.',
    hindi: 'फेफड़े पर एक छोटा गोल धब्बा (नोड्यूल)',
    kannada: 'ಶ್ವಾಸಕೋಶದ ಮೇಲಿನ ಸಣ್ಣ ಗಂಟು ಅಥವಾ ಕಲೆ',
    exampleUsage: '“Stable nodule” means the spot hasn’t grown since the previous scan, which is very reassuring.'
  },
  {
    term: 'Suboptimal Visualization',
    category: 'General Radiology',
    simpleMeaning: 'The imaging doctor could not see the body part clearly due to patient movement, gas bubbles, or technical limitations.',
    hindi: 'स्पष्ट रूप से दिखाई न देना (अपूर्ण दृश्यता)',
    kannada: 'ಅಂಗಾಂಗಗಳು ಸ್ಪಷ್ಟವಾಗಿ ಕಾಣಿಸದೇ ಇರುವುದು',
    exampleUsage: 'Prompts a recommendation for a repeat test under better conditions (like fasting).'
  }
];
