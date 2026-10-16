/**
 * SOUL Radiology — Synthetic Benchmark Sample Reports
 * 
 * Conforms strictly to Section 7 & 10 of SOUL_Radiology_Platform_Documentation_SFIC_2026.
 * All clinical data in this file are completely fictional and authored for software demonstration.
 * No real patient health information (PHI) or identifiable records are used.
 */

export const SAMPLE_REPORTS = [
  {
    sample_id: 'SAMPLE_001',
    scenario_code: 'A',
    scenario_title: 'No Significant Finding Stated',
    title: 'Routine Chest Radiograph (PA View)',
    modality: 'Chest X-Ray (PA View)',
    body_region: 'Thorax / Chest',
    sample_date: '14 Oct 2026',
    patient_id: 'SYN-THX-101 (Synthetic)',
    patient_demographics: '34 Y / Male / Pre-employment checkup',
    clinical_indication: 'Pre-employment routine screening. Asymptomatic, no acute complaints.',
    
    // Original report verbatim
    source_report_text: `CLINICAL INDICATION: Pre-employment screening. No acute complaints.

FINDINGS:
Lungs are clear bilaterally with no focal consolidation, pleural effusion, or pneumothorax identified.
Cardiothoracic ratio is within normal physiological limits (< 0.50).
Mediastinal and hilar contours are unremarkable and centrally aligned.
Osseous structures of the thoracic cage and surrounding soft tissues are intact and normal for age.
Costophrenic angles are acute and well visualized.

IMPRESSION:
Normal chest radiograph. No acute cardiopulmonary abnormality detected.

RECOMMENDATIONS:
Routine follow-up as clinically indicated.`,

    // Sentence-level traceability mapping
    source_sentences: [
      { id: 's1', text: 'Lungs are clear bilaterally with no focal consolidation, pleural effusion, or pneumothorax identified.' },
      { id: 's2', text: 'Cardiothoracic ratio is within normal physiological limits (< 0.50).' },
      { id: 's3', text: 'Mediastinal and hilar contours are unremarkable and centrally aligned.' },
      { id: 's4', text: 'Osseous structures of the thoracic cage and surrounding soft tissues are intact and normal for age.' },
      { id: 's5', text: 'Costophrenic angles are acute and well visualized.' },
      { id: 's6', text: 'Normal chest radiograph. No acute cardiopulmonary abnormality detected.' }
    ],

    // Predefined findings tied to source sentences
    findings: [
      {
        id: 'f1',
        title: 'Clear Lung Fields',
        finding: 'Lungs are clear bilaterally without consolidation, fluid buildup (effusion), or air leakage (pneumothorax).',
        source_sentence_id: 's1',
        source_quote: 'Lungs are clear bilaterally with no focal consolidation, pleural effusion, or pneumothorax identified.',
        plain_term: 'Both lungs look clear and healthy without infection pockets or fluid.'
      },
      {
        id: 'f2',
        title: 'Normal Heart Size',
        finding: 'Cardiothoracic ratio is normal (< 0.50); cardiac silhouette is within expected bounds.',
        source_sentence_id: 's2',
        source_quote: 'Cardiothoracic ratio is within normal physiological limits (< 0.50).',
        plain_term: 'The heart size is completely normal relative to the chest width.'
      },
      {
        id: 'f3',
        title: 'Normal Mediastinum & Ribs',
        finding: 'Mediastinal contours are unremarkable; thoracic bony structures and soft tissues are intact.',
        source_sentence_id: 's4',
        source_quote: 'Osseous structures of the thoracic cage and surrounding soft tissues are intact and normal for age.',
        plain_term: 'The chest bones, ribs, and central blood vessels show normal anatomy.'
      }
    ],

    impression: 'Normal chest radiograph. No acute cardiopulmonary abnormality detected.',

    plain_language_summary: 'This chest X-ray shows normal, clear lungs and a healthy-sized heart. There are no signs of pneumonia, fluid around the lungs, or broken ribs. It is a completely reassuring routine report.',

    plain_language_breakdown: [
      { term: 'Consolidation', plain: 'An area where lung tissue has filled with fluid or mucus during an infection (none was found).' },
      { term: 'Pleural effusion', plain: 'Water or liquid pooling between the lung and chest wall (none was found).' },
      { term: 'Cardiothoracic ratio', plain: 'Comparison of the heart width to chest width. Less than 0.50 means the heart is not enlarged.' }
    ],

    measurements: [
      { parameter: 'Cardiothoracic Ratio (CTR)', value: '< 0.50', unit: 'ratio', status: 'Normal' }
    ],

    concern_flag: 'none',
    concern_reason: 'No abnormal or suspicious findings documented in source report. Strictly non-alarmist output.',

    recommendations: 'Routine follow-up as clinically indicated.',

    limitations_note: 'Standard SFIC demonstration output. Based on predefined synthetic text; not a clinical diagnosis.',
    
    // For visual display reference only
    scan_display: {
      type: 'Chest X-Ray (CXR)',
      view: 'Posteroanterior (PA)',
      resolution: 'Digital Radiography (DR)',
      aspectRatio: '1:1',
      description: 'Synthetic baseline digital chest radiograph demonstrating clear lung parenchymal zones.',
      scanUrl: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80'
    }
  },

  {
    sample_id: 'SAMPLE_002',
    scenario_code: 'B',
    scenario_title: 'Non-Urgent Documented Finding',
    title: 'Right Knee Magnetic Resonance Imaging (MRI)',
    modality: 'MRI (1.5 Tesla)',
    body_region: 'Right Knee',
    sample_date: '18 Sep 2026',
    patient_id: 'SYN-MSK-202 (Synthetic)',
    patient_demographics: '52 Y / Female / Outpatient Orthopedic',
    clinical_indication: 'Chronic right knee aching after prolonged walking or standing. No acute trauma.',
    
    source_report_text: `CLINICAL INDICATION: 52-year-old female presenting with chronic right knee aching after physical exertion.

FINDINGS:
Mild degenerative thinning of articular cartilage over the weight-bearing surface of the medial femoral condyle.
Small marginal osteophytes noted along the medial joint line.
Grade 1-2 intrasubstance signal change seen in the posterior horn of the medial meniscus, without definitive articular surface extension or displaced tear.
Anterior cruciate ligament (ACL), posterior cruciate ligament (PCL), and collateral ligaments are intact with normal continuous fibers.
Extensor mechanism is intact. No significant joint effusion or popliteal (Baker) cyst identified.

IMPRESSION:
1. Mild medial compartment knee osteoarthritis with marginal osteophytosis.
2. Mild degenerative intrasubstance fraying of the medial meniscus posterior horn without acute displaced tear.

RECOMMENDATIONS:
Conservative management with quadriceps strengthening physiotherapy and orthopedic outpatient review.`,

    source_sentences: [
      { id: 's1', text: 'Mild degenerative thinning of articular cartilage over the weight-bearing surface of the medial femoral condyle.' },
      { id: 's2', text: 'Small marginal osteophytes noted along the medial joint line.' },
      { id: 's3', text: 'Grade 1-2 intrasubstance signal change seen in the posterior horn of the medial meniscus, without definitive articular surface extension or displaced tear.' },
      { id: 's4', text: 'Anterior cruciate ligament (ACL), posterior cruciate ligament (PCL), and collateral ligaments are intact with normal continuous fibers.' },
      { id: 's5', text: 'No significant joint effusion or popliteal (Baker) cyst identified.' },
      { id: 's6', text: 'Mild medial compartment knee osteoarthritis with marginal osteophytosis.' }
    ],

    findings: [
      {
        id: 'f1',
        title: 'Mild Cartilage Wear',
        finding: 'Mild thinning of articular cartilage over the inner (medial) side of the knee joint.',
        source_sentence_id: 's1',
        source_quote: 'Mild degenerative thinning of articular cartilage over the weight-bearing surface of the medial femoral condyle.',
        plain_term: 'Slight wear-and-tear of the protective joint cushion on the inside of the right knee.'
      },
      {
        id: 'f2',
        title: 'Meniscus Intrasubstance Signal',
        finding: 'Grade 1-2 signal change in the medial meniscus posterior horn without through-and-through tear.',
        source_sentence_id: 's3',
        source_quote: 'Grade 1-2 intrasubstance signal change seen in the posterior horn of the medial meniscus, without definitive articular surface extension or displaced tear.',
        plain_term: 'Age-related wear inside the shock-absorbing knee pad, but no sudden complete rip or tear.'
      },
      {
        id: 'f3',
        title: 'Intact Knee Ligaments',
        finding: 'Cruciate (ACL/PCL) and collateral ligaments are intact; no fluid effusion.',
        source_sentence_id: 's4',
        source_quote: 'Anterior cruciate ligament (ACL), posterior cruciate ligament (PCL), and collateral ligaments are intact with normal continuous fibers.',
        plain_term: 'The major supporting knee ropes (ligaments) are strong and unbroken.'
      }
    ],

    impression: '1. Mild medial compartment knee osteoarthritis with marginal osteophytosis.\n2. Mild degenerative intrasubstance fraying of the medial meniscus posterior horn without acute displaced tear.',

    plain_language_summary: 'The scan shows mild wear-and-tear in the cartilage and shock absorber on the inside of the right knee, consistent with early joint aging (osteoarthritis). The main knee ligaments are healthy, and there is no sudden tear or heavy swelling.',

    plain_language_breakdown: [
      { term: 'Osteoarthritis', plain: 'Gradual wear and tear of the smooth protective cartilage lining inside a joint.' },
      { term: 'Osteophytes', plain: 'Small smooth bone spurs that develop naturally around worn joints.' },
      { term: 'Medial meniscus', plain: 'A C-shaped rubbery cushion between your thigh bone and shin bone on the inside of the knee.' }
    ],

    measurements: [
      { parameter: 'Meniscal Signal Grading', value: 'Grade 1-2 (Intrasubstance)', unit: 'grade', status: 'Non-surgical / Degenerative' }
    ],

    concern_flag: 'informational',
    concern_reason: 'Documented mild degenerative joint changes. Suitable for routine outpatient conservative management.',

    recommendations: 'Conservative management with quadriceps strengthening physiotherapy and orthopedic outpatient review.',

    limitations_note: 'Standard SFIC demonstration output. Based on predefined synthetic text; not a clinical diagnosis.',

    scan_display: {
      type: 'Knee MRI (T2 Coronal / Sagittal)',
      view: 'Sagittal Proton Density',
      resolution: 'High Resolution Knee Coil',
      aspectRatio: '1:1',
      description: 'Synthetic knee MR slice demonstrating intact cruciate ligaments and medial articular cartilage.',
      scanUrl: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80'
    }
  },

  {
    sample_id: 'SAMPLE_003',
    scenario_code: 'C',
    scenario_title: 'Finding Needing Professional Review',
    title: 'Non-Contrast Computed Tomography (Head CT)',
    modality: 'Non-Contrast Head CT',
    body_region: 'Brain / Neurocranium',
    sample_date: '02 Oct 2026',
    patient_id: 'SYN-NEU-303 (Synthetic)',
    patient_demographics: '64 Y / Male / Emergency Department',
    clinical_indication: 'Acute onset right-sided motor weakness and speech hesitation (dysphasia) 3 hours prior.',
    
    source_report_text: `CLINICAL INDICATION: 64-year-old male with acute onset right-sided weakness and mild expressive dysphasia noted 3 hours prior.

FINDINGS:
Non-contrast axial CT images of the head demonstrate a focal hyperdensity within the left basal ganglia measuring approximately 12 mm x 8 mm.
There is minimal surrounding parenchymal hypoattenuation consistent with early peri-focal edema.
No significant midline shift is observed (midline structures are centered).
Ventricular system is symmetric without hydrocephalus.
No evidence of calvarial fracture or extra-axial hematoma. Skull base is intact.

IMPRESSION:
Acute focal hyperdensity in the left basal ganglia measuring 12 x 8 mm, concerning for acute intraparenchymal hemorrhage or hyperdense thromboembolic vessel sign.

RECOMMENDATIONS:
Immediate clinical and neurological review; urgent consideration of neurovascular imaging (CT angiography) per institutional stroke protocol.`,

    source_sentences: [
      { id: 's1', text: 'Non-contrast axial CT images of the head demonstrate a focal hyperdensity within the left basal ganglia measuring approximately 12 mm x 8 mm.' },
      { id: 's2', text: 'There is minimal surrounding parenchymal hypoattenuation consistent with early peri-focal edema.' },
      { id: 's3', text: 'No significant midline shift is observed (midline structures are centered).' },
      { id: 's4', text: 'Ventricular system is symmetric without hydrocephalus.' },
      { id: 's5', text: 'Acute focal hyperdensity in the left basal ganglia measuring 12 x 8 mm, concerning for acute intraparenchymal hemorrhage or hyperdense thromboembolic vessel sign.' }
    ],

    findings: [
      {
        id: 'f1',
        title: 'Focal Brain Hyperdensity',
        finding: 'A 12 mm x 8 mm bright spot (hyperdensity) is observed in the left basal ganglia region of the brain.',
        source_sentence_id: 's1',
        source_quote: 'Non-contrast axial CT images of the head demonstrate a focal hyperdensity within the left basal ganglia measuring approximately 12 mm x 8 mm.',
        plain_term: 'A localized bright patch in the deep movement-control center of the brain.'
      },
      {
        id: 'f2',
        title: 'Mild Surrounding Tissue Swelling',
        finding: 'Early peri-focal hypoattenuation representing mild swelling around the hyperdense focus.',
        source_sentence_id: 's2',
        source_quote: 'There is minimal surrounding parenchymal hypoattenuation consistent with early peri-focal edema.',
        plain_term: 'Slight tissue swelling immediately surrounding the identified spot.'
      },
      {
        id: 'f3',
        title: 'Preserved Brain Symmetry',
        finding: 'No midline shift or ventricular distortion; skull bones are intact.',
        source_sentence_id: 's3',
        source_quote: 'No significant midline shift is observed (midline structures are centered).',
        plain_term: 'The brain halves remain evenly centered without pushing across to the other side.'
      }
    ],

    impression: 'Acute focal hyperdensity in the left basal ganglia measuring 12 x 8 mm, concerning for acute intraparenchymal hemorrhage or hyperdense thromboembolic vessel sign.',

    plain_language_summary: 'The head CT scan shows a bright spot measuring about 1.2 cm in the deep left portion of the brain that coordinates movement. The report indicates this could represent a fresh bleed or a clotted vessel. It requires prompt, direct evaluation by a doctor or neurologist.',

    plain_language_breakdown: [
      { term: 'Hyperdensity', plain: 'An area that shows up white/bright on a CT scan, typically fresh blood or calcium.' },
      { term: 'Basal ganglia', plain: 'Deep brain nerve clusters that control voluntary body movements and balance.' },
      { term: 'Midline shift', plain: 'When swelling pushes the brain sideways across its center line (none was seen here, which is favorable).' }
    ],

    measurements: [
      { parameter: 'Focal Hyperdense Lesion', value: '12 x 8', unit: 'mm', status: 'Requires Verification' },
      { parameter: 'Brain Midline Shift', value: '0', unit: 'mm', status: 'Normal / Centered' }
    ],

    concern_flag: 'review_required',
    concern_reason: 'Source text states: "Acute focal hyperdensity in the left basal ganglia... concerning for acute intraparenchymal hemorrhage or hyperdense thromboembolic vessel sign."',
    
    // Explicit Demonstration Warning as per Section 6.4
    review_notice: {
      heading: 'For Clinician Review',
      subheading: 'Demonstration Review Alert linked to documented source finding',
      excerpt: 'Acute focal hyperdensity in the left basal ganglia measuring 12 x 8 mm, concerning for acute intraparenchymal hemorrhage or hyperdense thromboembolic vessel sign.',
      guidance: 'This finding was highlighted because the radiologist noted potential acute bleeding or vascular thrombosis. Immediate in-person review by an attending medical officer or neurologist is advised per institutional acute stroke pathways.',
      disclaimer: 'This alert is a demonstration feature based on predefined sample text. It is not an automated clinical diagnosis, probability score, or emergency triage directive.'
    },

    recommendations: 'Immediate clinical and neurological review; urgent consideration of neurovascular imaging (CT angiography) per institutional stroke protocol.',

    limitations_note: 'Standard SFIC demonstration output. Based on predefined synthetic text; not a clinical diagnosis.',

    scan_display: {
      type: 'Head CT (Axial non-contrast)',
      view: 'Axial Plane at Basal Ganglia Level',
      resolution: '5mm slice thickness',
      aspectRatio: '1:1',
      description: 'Synthetic axial cranial CT slice at ventricular level for visual display reference.',
      scanUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=800&q=80'
    }
  },

  {
    sample_id: 'SAMPLE_004',
    scenario_code: 'D',
    scenario_title: 'Incomplete or Ambiguous Wording',
    title: 'Transabdominal Ultrasound Examination',
    modality: 'Ultrasound (Transabdominal)',
    body_region: 'Upper Abdomen',
    sample_date: '28 Aug 2026',
    patient_id: 'SYN-ABD-404 (Synthetic)',
    patient_demographics: '45 Y / Female / Primary Health Centre',
    clinical_indication: 'Upper abdominal fullness and post-prandial bloating for 3 weeks.',
    
    source_report_text: `CLINICAL INDICATION: Epigastric discomfort and bloating.

FINDINGS:
Liver demonstrates normal anatomical dimensions and homogeneous parenchymal echotexture. No focal hepatic mass.
Gallbladder is partially distended with acoustic shadowing from luminal debris, but wall thickness is difficult to evaluate due to overlying bowel gas.
Pancreas is completely obscured by prominent overlying gastrointestinal gas.
Spleen and both kidneys are visualized and appear within normal limits for age.
No demonstrable free intraperitoneal fluid or ascites.

IMPRESSION:
Incomplete abdominal sonographic evaluation. Suboptimal visualization of gallbladder wall and non-visualization of the pancreas secondary to excessive bowel gas artifact.

RECOMMENDATIONS:
Consider repeat examination following 6-8 hours fasting, or cross-sectional imaging (contrast-enhanced CT abdomen) if symptoms persist.`,

    source_sentences: [
      { id: 's1', text: 'Liver demonstrates normal anatomical dimensions and homogeneous parenchymal echotexture.' },
      { id: 's2', text: 'Gallbladder is partially distended with acoustic shadowing from luminal debris, but wall thickness is difficult to evaluate due to overlying bowel gas.' },
      { id: 's3', text: 'Pancreas is completely obscured by prominent overlying gastrointestinal gas.' },
      { id: 's4', text: 'Spleen and both kidneys are visualized and appear within normal limits for age.' },
      { id: 's5', text: 'Incomplete abdominal sonographic evaluation. Suboptimal visualization of gallbladder wall and non-visualization of the pancreas secondary to excessive bowel gas artifact.' }
    ],

    findings: [
      {
        id: 'f1',
        title: 'Healthy Liver & Kidneys',
        finding: 'The liver, spleen, and kidneys are seen clearly and appear normal.',
        source_sentence_id: 's1',
        source_quote: 'Liver demonstrates normal anatomical dimensions and homogeneous parenchymal echotexture. Spleen and both kidneys are visualized and appear within normal limits for age.',
        plain_term: 'The liver, kidneys, and spleen looked healthy in the areas the ultrasound sound waves could reach.'
      },
      {
        id: 'f2',
        title: 'Obscured Pancreas & Gallbladder Wall',
        finding: 'Pancreas could not be visualized and gallbladder wall was only partly seen due to intestinal gas bubbles.',
        source_sentence_id: 's3',
        source_quote: 'Pancreas is completely obscured by prominent overlying gastrointestinal gas.',
        plain_term: 'Bowel gas acted like a shadow, blocking the camera from seeing the pancreas and part of the gallbladder.'
      }
    ],

    impression: 'Incomplete abdominal sonographic evaluation. Suboptimal visualization of gallbladder wall and non-visualization of the pancreas secondary to excessive bowel gas artifact.',

    plain_language_summary: 'Because of natural gas in the digestive tract, the ultrasound machine could not get a clear picture of the pancreas and parts of the gallbladder. The platform recognizes that this examination is incomplete and does not make guesses about unvisualized organs.',

    plain_language_breakdown: [
      { term: 'Acoustic shadowing', plain: 'Dark shadows created on ultrasound when sound waves hit air or gas.' },
      { term: 'Bowel gas artifact', plain: 'Normal gas bubbles in the intestine blocking sound waves from reaching deeper organs.' },
      { term: 'Suboptimal visualization', plain: 'The doctor could not see the organ clearly enough to make a complete assessment.' }
    ],

    measurements: [],

    concern_flag: 'informational',
    concern_reason: 'Uncertainty handling demonstration: Incomplete visualization. The platform communicates gaps honestly without inventing unobserved findings.',

    recommendations: 'Consider repeat examination following 6-8 hours fasting, or cross-sectional imaging (contrast-enhanced CT abdomen) if symptoms persist.',

    limitations_note: 'Standard SFIC demonstration output. Based on predefined synthetic text; not a clinical diagnosis.',

    scan_display: {
      type: 'Abdominal Ultrasound (B-Mode)',
      view: 'Transverse Epigastric Acoustic Window',
      resolution: 'Curvilinear 3.5 MHz Probe',
      aspectRatio: '4:3',
      description: 'Synthetic sonographic image demonstrating acoustic shadow artifacts over deeper abdominal planes.',
      scanUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80'
    }
  },

  {
    sample_id: 'SAMPLE_005',
    scenario_code: 'E',
    scenario_title: 'Prior Report Comparison (Longitudinal)',
    title: 'Follow-Up High-Resolution Chest CT',
    modality: 'HRCT Thorax',
    body_region: 'Chest / Lungs',
    sample_date: '10 Oct 2026',
    prior_comparison_date: '10 Apr 2026',
    patient_id: 'SYN-LON-505 (Synthetic)',
    patient_demographics: '58 Y / Male / Respiratory Clinic',
    clinical_indication: '6-month surveillance of previously identified right upper lobe solitary pulmonary nodule.',
    
    source_report_text: `CLINICAL INDICATION: Surveillance of previously noted right upper lobe subpleural solitary pulmonary nodule.
COMPARISON: Prior CT chest dated 10 April 2026.

FINDINGS:
Previously identified 4.2 mm solid, well-circumscribed subpleural nodule in the apical segment of the right upper lobe is re-demonstrated.
It measures 4.3 mm on current series, demonstrating no significant volumetric growth over the 6-month interval.
No new pulmonary nodules, consolidations, or ground-glass opacities identified.
Pleural spaces remain clear without effusion or thickening.
Mediastinal and hilar lymph nodes remain within normal size limits.

IMPRESSION:
Stable 4.3 mm right upper lobe solitary pulmonary nodule with no interval growth compared to prior scan of 10 April 2026.

RECOMMENDATIONS:
Routine follow-up per Fleischner Society guidelines for low-risk solid nodules < 6 mm (no further routine imaging required unless new clinical symptoms develop).`,

    source_sentences: [
      { id: 's1', text: 'Previously identified 4.2 mm solid, well-circumscribed subpleural nodule in the apical segment of the right upper lobe is re-demonstrated.' },
      { id: 's2', text: 'It measures 4.3 mm on current series, demonstrating no significant volumetric growth over the 6-month interval.' },
      { id: 's3', text: 'No new pulmonary nodules, consolidations, or ground-glass opacities identified.' },
      { id: 's4', text: 'Stable 4.3 mm right upper lobe solitary pulmonary nodule with no interval growth compared to prior scan of 10 April 2026.' }
    ],

    findings: [
      {
        id: 'f1',
        title: 'Stable Lung Nodule',
        finding: 'The 4.2 mm right upper lung nodule noted 6 months ago now measures 4.3 mm, showing no significant growth.',
        source_sentence_id: 's2',
        source_quote: 'It measures 4.3 mm on current series, demonstrating no significant volumetric growth over the 6-month interval.',
        plain_term: 'A small dot in the top right lung was checked against the previous scan from 6 months ago and hasn\'t changed size.'
      },
      {
        id: 'f2',
        title: 'No New Lung Abnormalities',
        finding: 'No new spots, infection patches, or enlarged lymph nodes have appeared.',
        source_sentence_id: 's3',
        source_quote: 'No new pulmonary nodules, consolidations, or ground-glass opacities identified.',
        plain_term: 'No new lung spots or gland swellings were seen anywhere else in the chest.'
      }
    ],

    impression: 'Stable 4.3 mm right upper lobe solitary pulmonary nodule with no interval growth compared to prior scan of 10 April 2026.',

    plain_language_summary: 'This scan compared today\'s picture with one taken 6 months ago. A tiny 4 mm spot in the right upper lung has remained the exact same size. In radiology, stability over time is a very reassuring sign.',

    plain_language_breakdown: [
      { term: 'Solitary pulmonary nodule', plain: 'A small, single round spot on the lung tissue measuring under 3 centimeters.' },
      { term: 'Interval stability', plain: 'A finding that has not grown or changed compared to a previous examination.' },
      { term: 'Fleischner guidelines', plain: 'Internationally accepted medical standards that guide how often small lung spots should be checked.' }
    ],

    measurements: [
      { parameter: 'Nodule Diameter (Prior: 10 Apr 2026)', value: '4.2', unit: 'mm', status: 'Baseline' },
      { parameter: 'Nodule Diameter (Current: 10 Oct 2026)', value: '4.3', unit: 'mm', status: 'Stable (+0.1 mm within variance)' }
    ],

    concern_flag: 'none',
    concern_reason: 'Longitudinal comparison confirms interval stability. No alert triggered.',

    recommendations: 'Routine follow-up per Fleischner Society guidelines for low-risk solid nodules < 6 mm (no further routine imaging required unless new clinical symptoms develop).',

    limitations_note: 'Standard SFIC demonstration output. Based on predefined synthetic text; not a clinical diagnosis.',

    scan_display: {
      type: 'Chest HRCT (Lung Window)',
      view: 'Axial High-Resolution Slice',
      resolution: '1mm slice thickness',
      aspectRatio: '1:1',
      description: 'Synthetic high-resolution CT lung window showing apical pulmonary parenchymal detail.',
      scanUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?auto=format&fit=crop&w=800&q=80'
    }
  }
];
